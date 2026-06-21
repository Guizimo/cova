import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { TemplateConfig } from '@/store/generator';

export const MAX_TEMPLATES = 10;
const STORAGE_KEY = 'cova-templates';

/** 配额安全的 localStorage：写入失败（多为图片导致超额）时静默降级，避免应用崩溃 */
const safeStorage = createJSONStorage(() => ({
  getItem: (name: string) => localStorage.getItem(name),
  setItem: (name: string, value: string) => {
    try {
      localStorage.setItem(name, value);
    } catch (error) {
      console.warn('Failed to persist templates (storage quota?):', error);
    }
  },
  removeItem: (name: string) => localStorage.removeItem(name)
}));

export interface SavedTemplate {
  id: string;
  name: string;
  config: TemplateConfig;
  createdAt: number;
}

interface TemplatesState {
  templates: SavedTemplate[];
  addTemplate: (name: string, config: TemplateConfig) => void;
  removeTemplate: (id: string) => void;
  renameTemplate: (id: string, name: string) => void;
  getTemplate: (id: string) => SavedTemplate | undefined;
}

function generateId(): string {
  return `tpl_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

export const useTemplatesStore = create<TemplatesState>()(
  persist(
    (set, get) => ({
      templates: [],

      addTemplate: (name, config) =>
        set((state) => {
          const list = [...state.templates];
          if (list.length >= MAX_TEMPLATES) list.pop();
          list.unshift({
            id: generateId(),
            name: name.trim() || 'Untitled',
            config,
            createdAt: Date.now()
          });
          return { templates: list };
        }),

      removeTemplate: (id) =>
        set((state) => ({
          templates: state.templates.filter((t) => t.id !== id)
        })),

      renameTemplate: (id, name) =>
        set((state) => ({
          templates: state.templates.map((t) => (t.id === id ? { ...t, name: name.trim() || t.name } : t))
        })),

      getTemplate: (id) => get().templates.find((t) => t.id === id)
    }),
    { name: STORAGE_KEY, storage: safeStorage }
  )
);
