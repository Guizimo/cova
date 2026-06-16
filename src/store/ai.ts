import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const STORAGE_KEY = 'cova-ai-config';

/** 默认连接 OpenAI 官方端点，可改为任意 OpenAI 兼容服务（OpenRouter / Azure / Ollama 等） */
export const DEFAULT_AI_BASE_URL = 'https://api.openai.com/v1';
export const DEFAULT_AI_MODEL = 'gpt-4o-mini';

export interface AIConfig {
  baseUrl: string;
  apiKey: string;
  model: string;
}

interface AIState extends AIConfig {
  setBaseUrl: (baseUrl: string) => void;
  setApiKey: (apiKey: string) => void;
  setModel: (model: string) => void;
  reset: () => void;
  /** 是否已完成最小配置（填入了 API Key） */
  isConfigured: () => boolean;
}

/** 配额安全的 localStorage：写入失败时静默降级，避免应用崩溃 */
const safeStorage = createJSONStorage(() => ({
  getItem: (name: string) => localStorage.getItem(name),
  setItem: (name: string, value: string) => {
    try {
      localStorage.setItem(name, value);
    } catch (error) {
      console.warn('Failed to persist AI config (storage quota?):', error);
    }
  },
  removeItem: (name: string) => localStorage.removeItem(name)
}));

export const useAIStore = create<AIState>()(
  persist(
    (set, get) => ({
      baseUrl: DEFAULT_AI_BASE_URL,
      apiKey: '',
      model: DEFAULT_AI_MODEL,
      setBaseUrl: (baseUrl) => set({ baseUrl }),
      setApiKey: (apiKey) => set({ apiKey }),
      setModel: (model) => set({ model }),
      reset: () => set({ baseUrl: DEFAULT_AI_BASE_URL, apiKey: '', model: DEFAULT_AI_MODEL }),
      isConfigured: () => get().apiKey.trim().length > 0
    }),
    { name: STORAGE_KEY, storage: safeStorage }
  )
);
