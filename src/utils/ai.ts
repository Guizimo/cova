import { useAIStore } from '@/store/ai';
import { FONT_FAMILIES, DEFAULT_SETTINGS } from '@/config/generator';
import type { TemplateConfig } from '@/store/generator';

export type AIErrorCode = 'NOT_CONFIGURED' | 'HTTP_AUTH' | 'HTTP_OTHER' | 'NETWORK' | 'PARSE' | 'EMPTY';

export class AIError extends Error {
  code: AIErrorCode;
  constructor(code: AIErrorCode, message?: string) {
    super(message ?? code);
    this.name = 'AIError';
    this.code = code;
  }
}

const HEX_RE = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
const FONT_VALUES = FONT_FAMILIES.map((f) => f.value);

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

/** 调用 OpenAI 兼容的 chat/completions 接口并返回解析后的 JSON 对象 */
async function chatJSON(messages: ChatMessage[]): Promise<Record<string, unknown>> {
  const { baseUrl, apiKey, model } = useAIStore.getState();
  if (!apiKey.trim()) throw new AIError('NOT_CONFIGURED');

  const endpoint = `${baseUrl.trim().replace(/\/+$/, '')}/chat/completions`;

  const body: Record<string, unknown> = {
    model: model.trim() || 'gpt-4o-mini',
    messages,
    temperature: 0.8,
    response_format: { type: 'json_object' }
  };

  let res: Response;
  try {
    res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey.trim()}`
      },
      body: JSON.stringify(body)
    });

    // 部分兼容端点不支持 response_format，遇到 400 时去掉重试一次
    if (res.status === 400) {
      delete body.response_format;
      res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey.trim()}`
        },
        body: JSON.stringify(body)
      });
    }
  } catch {
    throw new AIError('NETWORK');
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

/** 一句话描述 → 完整封面设计配置（已校验净化，可安全应用） */
export async function generateDesign(prompt: string, locale: 'zh' | 'en'): Promise<Partial<TemplateConfig>> {
  const system = [
    'You are a professional cover/poster design assistant for a tool called Cova.',
    'Given a user description, output ONLY a single JSON object describing the cover design.',
    'Schema (all fields optional, omit what is not relevant):',
    '{',
    '  "title": string,            // short, punchy headline',
    '  "subtitle": string,         // optional supporting line',
    `  "fontFamily": string,       // MUST be exactly one of these values: ${FONT_HINT}`,
    '  "fontSize": number,         // 20-200',
    '  "fontWeight": number,       // 100-900',
    '  "letterSpacing": number,    // -5 to 30',
    '  "lineHeight": number,       // 1 to 2.5',
    '  "textColor": string,        // hex like #FFFFFF',
    '  "backgroundType": "solid" | "gradient",',
    '  "backgroundColor": string,  // hex, when backgroundType is solid',
    '  "gradientStart": string,    // hex, when gradient',
    '  "gradientEnd": string,      // hex, when gradient',
    '  "gradientAngle": number,    // 0-360',
    '  "borderRadius": number      // 0-100',
    '}',
    'Ensure strong contrast between textColor and the background so the title is readable.',
    `Write the title and subtitle in ${locale === 'zh' ? 'Chinese' : 'English'} unless the user clearly asks otherwise.`,
    'Do not include comments or any text outside the JSON object.'
  ].join('\n');

  const raw = await chatJSON([
    { role: 'system', content: system },
    { role: 'user', content: prompt }
  ]);

  const out: Partial<TemplateConfig> = {};

  const title = asString(raw.title);
  if (title) out.title = title;
  const subtitle = asString(raw.subtitle);
  if (subtitle !== undefined) out.subtitle = subtitle;

  if (typeof raw.fontFamily === 'string' && FONT_VALUES.includes(raw.fontFamily)) {
    out.fontFamily = raw.fontFamily;
  }
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
  if (raw.borderRadius !== undefined)
    out.borderRadius = clampNumber(raw.borderRadius, 0, 100, DEFAULT_SETTINGS.borderRadius);

  if (Object.keys(out).length === 0) throw new AIError('EMPTY');
  return out;
}

export interface TitleSuggestion {
  title: string;
  subtitle: string;
}

/** 主题 → 标题/副标题候选 */
export async function generateTitles(topic: string, locale: 'zh' | 'en'): Promise<TitleSuggestion[]> {
  const system = [
    'You are a copywriter creating cover headlines.',
    'Given a topic, return ONLY a JSON object: { "suggestions": [{ "title": string, "subtitle": string }] }.',
    'Provide 4 distinct, concise, compelling options. Titles should be short (max ~16 chars for Chinese, ~6 words for English).',
    `Write in ${locale === 'zh' ? 'Chinese' : 'English'}.`
  ].join('\n');

  const raw = await chatJSON([
    { role: 'system', content: system },
    { role: 'user', content: topic }
  ]);

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
export async function generatePalette(mood: string): Promise<PaletteSuggestion> {
  const system = [
    'You are a color designer. Given a mood or keyword, return ONLY a JSON object:',
    '{ "gradientStart": hex, "gradientEnd": hex, "gradientAngle": number (0-360), "textColor": hex }.',
    'Pick a harmonious gradient and a textColor with strong contrast for readability.'
  ].join('\n');

  const raw = await chatJSON([
    { role: 'system', content: system },
    { role: 'user', content: mood }
  ]);

  return {
    gradientStart: asHex(raw.gradientStart, DEFAULT_SETTINGS.gradientStart),
    gradientEnd: asHex(raw.gradientEnd, DEFAULT_SETTINGS.gradientEnd),
    gradientAngle: clampNumber(raw.gradientAngle, 0, 360, DEFAULT_SETTINGS.gradientAngle),
    textColor: asHex(raw.textColor, DEFAULT_SETTINGS.textColor)
  };
}
