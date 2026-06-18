import { toast } from 'sonner';
import { useGeneratorStore } from '@/store/generator';

type Translate = (key: string) => string;

/**
 * 非破坏式重置：先快照当前完整设计（含背景图），重置后弹出可「撤销」的提示。
 * 供 Header 按钮与键盘快捷键复用，保证交互一致。
 */
export function resetWithUndo(t: Translate) {
  const state = useGeneratorStore.getState();
  const previousTemplate = state.getCurrentTemplateConfig();
  const previousBackgroundImage = state.backgroundImage;

  state.resetSettings();

  toast.success(t('generator.reset.done'), {
    action: {
      label: t('generator.templates.undo'),
      onClick: () => {
        const store = useGeneratorStore.getState();
        store.applyTemplateConfig(previousTemplate);
        store.setBackgroundImage(previousBackgroundImage);
        toast.success(t('generator.reset.reverted'));
      }
    }
  });
}
