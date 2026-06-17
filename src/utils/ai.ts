import { useAIStore } from '@/store/ai';
import { FONT_FAMILIES, DEFAULT_SETTINGS } from '@/config/generator';
import type { TemplateConfig } from '@/store/generator';

export type AIErrorCode =
  | 'NOT_CONFIGURED'
  | 'HTTP_AUTH'
  | 'HTTP_OTHER'
  | 'NETWORK'
  | 'TIMEOUT'
  | 'ABORTED'
  | 'PARSE'
  | 'EMPTY';

export class AIError extends Error {
  code: AIErrorCode;
  constructor(code: AIErrorCode, message?: string) {
    super(message ?? code);
    this.name = 'AIError';
    this.code = code;
  }
}

/** 用户主动取消时抛出此错误，UI 应静默处理（不弹出错误提示） */
export function isAbortError(error: unknown): boolean {
  return error instanceof AIError && error.code === 'ABORTED';
}

const HEX_RE = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
const FONT_VALUES = FONT_FAMILIES.map((f) => f.value);
const REQUEST_TIMEOUT_MS = 60_000;

function clampNumber(value: unknown, min: number, max: number, fallback: number): number {
  const n = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

function asHex(value: unknown, fallback: string): string {
  return typeof value === 'string' && HEX_RE.test(value.trim()) ? value.trim() : fallback;
}

function asString(value: unknown, maxLen = 200): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, maxLen) : undefined;
}

/** 从可能包含 ``` 围栏或解释文字的字符串里提取 JSON 对象 */
function extractJSON(content: string): unknown {
  const cleaned = content
    .replace(/```json/gi, '')
    .replace(/```/g, '')
    .trim();
  try {
    return JSON.parse(cleaned);
  } catch {
    const start = cleaned.indexOf('{');
    const end = cleaned.lastIndexOf('}');
    if (start !== -1 && end !== -1 && end > start) {
      try {
        return JSON.parse(cleaned.slice(start, end + 1));
      } catch {
        throw new AIError('PARSE');
      }
    }
    throw new AIError('PARSE');
  }
}

interface ChatMessage {
  role: 'system' | 'user';
  content: string;
}

export interface AIRequestOptions {
  /** 外部取消信号；用户切换功能或重复触发时可中断进行中的请求 */
  signal?: AbortSignal;
}

/** 调用 OpenAI 兼容的 chat/completions 接口并返回解析后的 JSON 对象 */
async function chatJSON(messages: ChatMessage[], options: AIRequestOptions = {}): Promise<Record<string, unknown>> {
  const { baseUrl, apiKey, model } = useAIStore.getState();
  if (!apiKey.trim()) throw new AIError('NOT_CONFIGURED');

  const endpoint = `${baseUrl.trim().replace(/\/+$/, '')}/chat/completions`;

  const body: Record<string, unknown> = {
    model: model.trim() || 'gpt-4o-mini',
    messages,
    temperature: 0.8,
    response_format: { type: 'json_object' }
  };

  // 组合内部超时与外部取消信号
  const controller = new AbortController();
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, REQUEST_TIMEOUT_MS);
  const userSignal = options.signal;
  const onExternalAbort = () => controller.abort();
  if (userSignal) {
    if (userSignal.aborted) controller.abort();
    else userSignal.addEventListener('abort', onExternalAbort, { once: true });
  }

  const doFetch = () =>
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey.trim()}`
      },
      body: JSON.stringify(body),
      signal: controller.signal
    });

  let res: Response;
  try {
    res = await doFetch();

    // 部分兼容端点不支持 response_format，遇到 400 时去掉重试一次
    if (res.status === 400) {
      delete body.response_format;
      res = await doFetch();
    }
  } catch {
    if (userSignal?.aborted) throw new AIError('ABORTED');
    if (timedOut) throw new AIError('TIMEOUT');
    throw new AIError('NETWORK');
  } finally {
    clearTimeout(timer);
    if (userSignal) userSignal.removeEventListener('abort', onExternalAbort);
  }

  if (!res.ok) {
    if (res.status === 401 || res.status === 403) throw new AIError('HTTP_AUTH');
    throw new AIError('HTTP_OTHER', `HTTP ${res.status}`);
  }

  let data: { choices?: Array<{ message?: { content?: string } }> };
  try {
    data = await res.json();
  } catch {
    throw new AIError('PARSE');
  }

  const content = data.choices?.[0]?.message?.content;
  if (!content) throw new AIError('EMPTY');

  const parsed = extractJSON(content);
  if (!parsed || typeof parsed !== 'object') throw new AIError('PARSE');
  return parsed as Record<string, unknown>;
}

const FONT_HINT = FONT_FAMILIES.map((f) => `"${f.value}" (${f.label})`).join(', ');

const DESIGN_SCHEMA = [
  '{',
  '  "title": string,            // short, punchy headline',
  '  "subtitle": string,         // optional supporting line',
  `  "fontFamily": string,       // MUST be exactly one of these values: ${FONT_HINT}`,
  '  "fontSize": number,         // 20-200',
  '  "fontWeight": number,       // 100-900',
  '  "fontStyle": "normal" | "italic",',
  '  "letterSpacing": number,    // -5 to 30',
  '  "lineHeight": number,       // 1 to 2.5',
  '  "textColor": string,        // hex like #FFFFFF',
  '  "backgroundType": "solid" | "gradient",',
  '  "backgroundColor": string,  // hex, when backgroundType is solid',
  '  "gradientStart": string,    // hex, when gradient',
  '  "gradientEnd": string,      // hex, when gradient',
  '  "gradientAngle": number,    // 0-360',
  '  "backdropBlur": number,     // 0-20, optional frosted-glass strength',
  '  "borderRadius": number      // 0-100',
  '}'
].join('\n');

/** 把当前设计压缩成传给模型的上下文（只保留有意义的字段，控制 token） */
function buildDesignContext(config: Partial<TemplateConfig>): string {
  const ctx: Record<string, unknown> = {};
  const keys: (keyof TemplateConfig)[] = [
    'title',
    'subtitle',
    'fontFamily',
    'fontSize',
    'fontWeight',
    'fontStyle',
    'letterSpacing',
    'lineHeight',
    'textColor',
    'backgroundType',
    'backgroundColor',
    'gradientStart',
    'gradientEnd',
    'gradientAngle',
    'backdropBlur',
    'borderRadius'
  ];
  for (const key of keys) {
    const value = config[key];
    if (value !== undefined && value !== '') ctx[key] = value;
  }
  return JSON.stringify(ctx);
}

/** 把模型返回的原始 JSON 净化为可安全应用的设计配置 */
function sanitizeDesign(raw: Record<string, unknown>): Partial<TemplateConfig> {
  const out: Partial<TemplateConfig> = {};

  const title = asString(raw.title);
  if (title) out.title = title;
  const subtitle = asString(raw.subtitle);
  if (subtitle !== undefined) out.subtitle = subtitle;

  if (typeof raw.fontFamily === 'string' && FONT_VALUES.includes(raw.fontFamily)) {
    out.fontFamily = raw.fontFamily;
  }
  if (raw.fontStyle === 'italic' || raw.fontStyle === 'normal') out.fontStyle = raw.fontStyle;
  if (raw.fontSize !== undefined) out.fontSize = clampNumber(raw.fontSize, 20, 200, DEFAULT_SETTINGS.fontSize);
  if (raw.fontWeight !== undefined) out.fontWeight = clampNumber(raw.fontWeight, 100, 900, DEFAULT_SETTINGS.fontWeight);
  if (raw.letterSpacing !== undefined)
    out.letterSpacing = clampNumber(raw.letterSpacing, -5, 30, DEFAULT_SETTINGS.letterSpacing);
  if (raw.lineHeight !== undefined) out.lineHeight = clampNumber(raw.lineHeight, 1, 2.5, DEFAULT_SETTINGS.lineHeight);
  if (raw.textColor !== undefined) out.textColor = asHex(raw.textColor, DEFAULT_SETTINGS.textColor);

  const bgType = raw.backgroundType === 'gradient' ? 'gradient' : raw.backgroundType === 'solid' ? 'solid' : undefined;
  if (bgType) {
    out.backgroundType = bgType;
    if (bgType === 'solid') {
      out.backgroundColor = asHex(raw.backgroundColor, DEFAULT_SETTINGS.backgroundColor);
    } else {
      out.gradientStart = asHex(raw.gradientStart, DEFAULT_SETTINGS.gradientStart);
      out.gradientEnd = asHex(raw.gradientEnd, DEFAULT_SETTINGS.gradientEnd);
      out.gradientAngle = clampNumber(raw.gradientAngle, 0, 360, DEFAULT_SETTINGS.gradientAngle);
    }
  }
  if (raw.backdropBlur !== undefined)
    out.backdropBlur = clampNumber(raw.backdropBlur, 0, 20, DEFAULT_SETTINGS.backdropBlur);
  if (raw.borderRadius !== undefined)
    out.borderRadius = clampNumber(raw.borderRadius, 0, 100, DEFAULT_SETTINGS.borderRadius);

  return out;
}

export interface GenerateDesignOptions extends AIRequestOptions {
  /** 当前画布设计；提供后 AI 会在现有设计上做增量调整（设计副驾驶） */
  currentConfig?: Partial<TemplateConfig>;
}

/** 一句话描述 / 微调指令 → 完整或增量的封面设计配置（已校验净化，可安全应用） */
export async function generateDesign(
  prompt: string,
  locale: 'zh' | 'en',
  options: GenerateDesignOptions = {}
): Promise<Partial<TemplateConfig>> {
  const { currentConfig, signal } = options;

  const system = [
    'You are a professional cover/poster design copilot for a tool called Cova.',
    currentConfig
      ? 'You are ITERATING on an existing cover. The current design state is given as JSON. Treat the user input as an adjustment request and return the design AFTER applying it. Keep aspects the user did not mention close to the current values; only change what the request implies. If the user clearly asks for a brand-new design, you may change everything.'
      : 'Given a user description, design a brand-new cover from scratch.',
    'Output ONLY a single JSON object describing the cover design.',
    'Schema (all fields optional, omit what is not relevant):',
    DESIGN_SCHEMA,
    'Ensure strong contrast between textColor and the background so the title is readable.',
    `Write the title and subtitle in ${locale === 'zh' ? 'Chinese' : 'English'} unless the user clearly asks otherwise.`,
    'Do not include comments or any text outside the JSON object.'
  ].join('\n');

  const user = currentConfig
    ? `Current design (JSON):\n${buildDesignContext(currentConfig)}\n\nAdjustment request:\n${prompt}`
    : prompt;

  const raw = await chatJSON(
    [
      { role: 'system', content: system },
      { role: 'user', content: user }
    ],
    { signal }
  );

  const out = sanitizeDesign(raw);
  // 增量微调时模型可能只回少量字段，这是正常的；完全为空说明没有可应用的结果
  if (Object.keys(out).length === 0) throw new AIError('EMPTY');
  return out;
}

export interface TitleSuggestion {
  title: string;
  subtitle: string;
}

/** 主题 → 标题/副标题候选 */
export async function generateTitles(
  topic: string,
  locale: 'zh' | 'en',
  options: AIRequestOptions = {}
): Promise<TitleSuggestion[]> {
  const system = [
    'You are a copywriter creating cover headlines.',
    'Given a topic, return ONLY a JSON object: { "suggestions": [{ "title": string, "subtitle": string }] }.',
    'Provide 4 distinct, concise, compelling options. Titles should be short (max ~16 chars for Chinese, ~6 words for English).',
    `Write in ${locale === 'zh' ? 'Chinese' : 'English'}.`
  ].join('\n');

  const raw = await chatJSON(
    [
      { role: 'system', content: system },
      { role: 'user', content: topic }
    ],
    options
  );

  const list = Array.isArray(raw.suggestions) ? raw.suggestions : [];
  const suggestions = list
    .map((item): TitleSuggestion | null => {
      if (!item || typeof item !== 'object') return null;
      const record = item as Record<string, unknown>;
      const title = asString(record.title, 100);
      if (!title) return null;
      return { title, subtitle: asString(record.subtitle, 120) ?? '' };
    })
    .filter((x): x is TitleSuggestion => x !== null)
    .slice(0, 6);

  if (suggestions.length === 0) throw new AIError('EMPTY');
  return suggestions;
}

export interface PaletteSuggestion {
  gradientStart: string;
  gradientEnd: string;
  gradientAngle: number;
  textColor: string;
}

/** 心情/关键词 → 渐变配色方案 */
export async function generatePalette(mood: string, options: AIRequestOptions = {}): Promise<PaletteSuggestion> {
  const system = [
    'You are a color designer. Given a mood or keyword, return ONLY a JSON object:',
    '{ "gradientStart": hex, "gradientEnd": hex, "gradientAngle": number (0-360), "textColor": hex }.',
    'Pick a harmonious gradient and a textColor with strong contrast for readability.'
  ].join('\n');

  const raw = await chatJSON(
    [
      { role: 'system', content: system },
      { role: 'user', content: mood }
    ],
    options
  );

  return {
    gradientStart: asHex(raw.gradientStart, DEFAULT_SETTINGS.gradientStart),
    gradientEnd: asHex(raw.gradientEnd, DEFAULT_SETTINGS.gradientEnd),
    gradientAngle: clampNumber(raw.gradientAngle, 0, 360, DEFAULT_SETTINGS.gradientAngle),
    textColor: asHex(raw.textColor, DEFAULT_SETTINGS.textColor)
  };
}
