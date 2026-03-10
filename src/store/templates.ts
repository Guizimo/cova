import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TemplateConfig } from '@/store/generator';

const MAX_TEMPLATES = 10;
const STORAGE_KEY = 'cova-templates';

export interface SavedTemplate {
  id: string;
  name: string;
  config: TemplateConfig;
}

interface TemplatesState {
  templates: SavedTemplate[];
  addTemplate: (name: string, config: TemplateConfig) => void;
  removeTemplate: (id: string) => void;
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
            name: name.trim() || '未命名模板',
            config
          });
          return { templates: list };
        }),

      removeTemplate: (id) =>
        set((state) => ({
          templates: state.templates.filter((t) => t.id !== id)
        })),

      getTemplate: (id) => get().templates.find((t) => t.id === id)
    }),
    { name: STORAGE_KEY }
  )
);
