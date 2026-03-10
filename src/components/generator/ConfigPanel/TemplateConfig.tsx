import { Button } from '@/components/ui/button';
import { useGeneratorStore } from '@/store/generator';
import { useTemplatesStore } from '@/store/templates';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { BookmarkPlus, Trash2 } from 'lucide-react';

export function TemplateConfig() {
  const { t } = useTranslation();
  const { templates, addTemplate, removeTemplate, getTemplate } = useTemplatesStore();
  const { getCurrentTemplateConfig, applyTemplateConfig } = useGeneratorStore();

  const handleSaveAs = () => {
    const name = window.prompt(t('generator.templates.namePlaceholder'), '');
    if (name == null) return;
    const config = getCurrentTemplateConfig();
    addTemplate(name, config);
    toast.success(t('generator.templates.saved'));
  };

  const handleApply = (id: string) => {
    const template = getTemplate(id);
    if (template) {
      applyTemplateConfig(template.config);
      toast.success(t('generator.templates.apply'));
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-xs lg:text-sm font-medium text-white/90 uppercase tracking-wide">
          <BookmarkPlus className="h-3.5 w-3.5 text-white/70" />
          {t('generator.templates.title')}
        </h3>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleSaveAs}
          className="h-8 border-white/10 bg-white/5 text-white hover:bg-white/10 text-xs"
        >
          <BookmarkPlus className="mr-1.5 h-3.5 w-3.5" />
          {t('generator.templates.saveAs')}
        </Button>
      </div>
      {templates.length === 0 ? (
        <p className="text-xs text-white/40 py-2">{t('generator.templates.noTemplates')}</p>
      ) : (
        <ul className="space-y-2">
          {templates.map((template) => (
            <li
              key={template.id}
              className="flex items-center justify-between gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2"
            >
              <span className="text-sm text-white/90 truncate flex-1 min-w-0">{template.name}</span>
              <div className="flex items-center gap-1 flex-shrink-0">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-7 px-2 text-white/70 hover:text-white hover:bg-white/10 text-xs"
                  onClick={() => handleApply(template.id)}
                >
                  {t('generator.templates.apply')}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0 text-white/40 hover:text-red-400 hover:bg-white/10"
                  onClick={() => removeTemplate(template.id)}
                  aria-label={t('generator.templates.remove')}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
