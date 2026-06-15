import { Button } from '@/components/ui/button';
import { MARKETPLACE_TEMPLATES } from '@/config/template-marketplace';
import type { MarketplaceTemplate } from '@/config/template-marketplace';
import { Input } from '@/components/ui/input';
import { useGeneratorStore } from '@/store/generator';
import { useTemplatesStore } from '@/store/templates';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { BookmarkPlus, Download, Store, Trash2 } from 'lucide-react';

/** 根据模板配置生成用于缩略图预览的背景样式 */
function getThumbnailStyle(config: MarketplaceTemplate['config']): React.CSSProperties {
  if (config.backgroundType === 'gradient') {
    return {
      backgroundImage: `linear-gradient(${config.gradientAngle ?? 135}deg, ${config.gradientStart}, ${config.gradientEnd})`
    };
  }
  if (config.backgroundType === 'solid') {
    return { backgroundColor: config.backgroundColor };
  }
  return { backgroundColor: '#1f2937' };
}

export function TemplateConfig() {
  const { t } = useTranslation();
  const { templates, addTemplate, removeTemplate, getTemplate } = useTemplatesStore();
  const { getCurrentTemplateConfig, applyTemplateConfig } = useGeneratorStore();
  const [keyword, setKeyword] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'tech' | 'social' | 'minimal'>('all');

  const marketplaceCategories: Array<'all' | 'tech' | 'social' | 'minimal'> = ['all', 'tech', 'social', 'minimal'];

  const handleSaveAs = () => {
    const name = window.prompt(t('generator.templates.namePlaceholder'), '');
    if (name == null) return;
    const config = getCurrentTemplateConfig();
    addTemplate(name.trim() || t('generator.templates.untitled'), config);
    toast.success(t('generator.templates.saved'));
  };

  const handleApply = (id: string) => {
    const template = getTemplate(id);
    if (template) {
      applyTemplateConfig(template.config);
      toast.success(t('generator.templates.apply'));
    }
  };

  const handleImportFromMarketplace = (id: string) => {
    const marketplaceTemplate = MARKETPLACE_TEMPLATES.find((item) => item.id === id);
    if (!marketplaceTemplate) return;

    addTemplate(t(marketplaceTemplate.nameKey), marketplaceTemplate.config);
    toast.success(t('generator.templates.imported'));
  };

  const handlePreviewMarketplace = (id: string) => {
    const marketplaceTemplate = MARKETPLACE_TEMPLATES.find((item) => item.id === id);
    if (!marketplaceTemplate) return;

    // 预览前保存当前设计，提供「撤销」以避免破坏用户正在编辑的内容
    const previousConfig = getCurrentTemplateConfig();
    applyTemplateConfig(marketplaceTemplate.config);
    toast.success(t('generator.templates.previewed'), {
      action: {
        label: t('generator.templates.undo'),
        onClick: () => {
          applyTemplateConfig(previousConfig);
          toast.success(t('generator.templates.previewReverted'));
        }
      }
    });
  };

  const filteredMarketplaceTemplates = useMemo(() => {
    const search = keyword.trim().toLowerCase();
    return MARKETPLACE_TEMPLATES.filter((item) => {
      const inCategory = activeCategory === 'all' || item.category === activeCategory;
      if (!inCategory) return false;
      if (!search) return true;

      const name = t(item.nameKey).toLowerCase();
      const description = t(item.descriptionKey).toLowerCase();
      return name.includes(search) || description.includes(search);
    });
  }, [activeCategory, keyword, t]);

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
      <div className="space-y-2">
        <p className="text-[11px] text-white/50 uppercase tracking-wide">{t('generator.templates.myTemplates')}</p>
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

      <div className="space-y-2 pt-1">
        <p className="flex items-center gap-1.5 text-[11px] text-white/50 uppercase tracking-wide">
          <Store className="h-3 w-3" />
          {t('generator.templates.marketplace.title')}
        </p>
        <Input
          type="text"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder={t('generator.templates.marketplace.searchPlaceholder')}
          className="h-8 border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-white/20"
        />
        <div className="flex flex-wrap gap-1.5">
          {marketplaceCategories.map((category) => (
            <Button
              key={category}
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`h-7 px-2 text-xs ${
                activeCategory === category
                  ? 'bg-white/15 text-white hover:bg-white/20'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {t(`generator.templates.marketplace.categories.${category}`)}
            </Button>
          ))}
        </div>
        {filteredMarketplaceTemplates.length === 0 ? (
          <p className="text-xs text-white/40 py-2">{t('generator.templates.marketplace.empty')}</p>
        ) : (
          <ul className="space-y-2">
            {filteredMarketplaceTemplates.map((item) => (
              <li
                key={item.id}
                className="rounded-lg bg-white/5 border border-white/10 px-3 py-3 space-y-2 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-16 flex-shrink-0 rounded-md border border-white/10 flex items-center justify-center overflow-hidden"
                    style={getThumbnailStyle(item.config)}
                    aria-hidden
                  >
                    <span
                      className="text-[9px] font-semibold leading-none px-1 text-center truncate"
                      style={{ color: item.config.textColor }}
                    >
                      Aa
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-white/90 truncate">{t(item.nameKey)}</p>
                    <p className="text-xs text-white/50 line-clamp-2">{t(item.descriptionKey)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2 text-white/70 hover:text-white hover:bg-white/10 text-xs"
                    onClick={() => handlePreviewMarketplace(item.id)}
                  >
                    {t('generator.templates.preview')}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-7 px-2 border-white/15 bg-white/10 text-white hover:bg-white/15 text-xs"
                    onClick={() => handleImportFromMarketplace(item.id)}
                  >
                    <Download className="mr-1 h-3 w-3" />
                    {t('generator.templates.import')}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
