import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MARKETPLACE_CATEGORIES, MARKETPLACE_TEMPLATES, type MarketplaceFilter } from '@/config/template-marketplace';
import { useGeneratorStore } from '@/store/generator';
import { MAX_TEMPLATES, useTemplatesStore } from '@/store/templates';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { BookmarkPlus, Check, Download, Pencil, Store, Trash2, X } from 'lucide-react';
import { TemplateThumb } from './TemplateThumb';

export function TemplateConfig() {
  const { t } = useTranslation();
  const { templates, addTemplate, removeTemplate, renameTemplate, getTemplate } = useTemplatesStore();
  const { getCurrentTemplateConfig, applyTemplateConfig } = useGeneratorStore();

  const [keyword, setKeyword] = useState('');
  const [activeCategory, setActiveCategory] = useState<MarketplaceFilter>('all');

  // 内联“保存为模板”表单
  const [saving, setSaving] = useState(false);
  const [saveName, setSaveName] = useState('');
  const saveInputRef = useRef<HTMLInputElement>(null);

  // 内联重命名
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState('');

  useEffect(() => {
    if (saving) saveInputRef.current?.focus();
  }, [saving]);

  const atCapacity = templates.length >= MAX_TEMPLATES;

  const openSave = () => {
    setSaveName('');
    setSaving(true);
  };

  const confirmSave = () => {
    const config = getCurrentTemplateConfig();
    addTemplate(saveName.trim() || t('generator.templates.untitled'), config);
    setSaving(false);
    setSaveName('');
    toast.success(t('generator.templates.saved'));
  };

  const handleApply = (id: string) => {
    const template = getTemplate(id);
    if (!template) return;
    const previousConfig = getCurrentTemplateConfig();
    applyTemplateConfig(template.config);
    toast.success(t('generator.templates.applied'), {
      action: {
        label: t('generator.templates.undo'),
        onClick: () => {
          applyTemplateConfig(previousConfig);
          toast.success(t('generator.templates.previewReverted'));
        }
      }
    });
  };

  const handleDelete = (id: string) => {
    const template = getTemplate(id);
    if (!template) return;
    removeTemplate(id);
    toast.success(t('generator.templates.deleted'), {
      action: {
        label: t('generator.templates.undo'),
        onClick: () => addTemplate(template.name, template.config)
      }
    });
  };

  const startRename = (id: string, currentName: string) => {
    setRenamingId(id);
    setRenameValue(currentName);
  };

  const confirmRename = () => {
    if (renamingId) {
      renameTemplate(renamingId, renameValue);
      toast.success(t('generator.templates.renamed'));
    }
    setRenamingId(null);
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
    <div className="space-y-4">
      {/* 我的模板 */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 text-xs lg:text-sm font-medium text-white/90 uppercase tracking-wide">
            <BookmarkPlus className="h-3.5 w-3.5 text-white/70" />
            {t('generator.templates.title')}
            <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] font-normal text-white/50 tabular-nums">
              {templates.length}/{MAX_TEMPLATES}
            </span>
          </h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={openSave}
            disabled={saving}
            className="h-8 border-white/10 bg-white/5 text-white hover:bg-white/10 text-xs"
          >
            <BookmarkPlus className="mr-1.5 h-3.5 w-3.5" />
            {t('generator.templates.saveAs')}
          </Button>
        </div>

        {/* 内联保存表单 */}
        {saving && (
          <div className="space-y-2 rounded-lg border border-white/15 bg-white/[0.06] p-2.5">
            <p className="text-[11px] text-white/60">{t('generator.templates.saveTitle')}</p>
            <div className="flex items-center gap-1.5">
              <Input
                ref={saveInputRef}
                value={saveName}
                onChange={(e) => setSaveName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') confirmSave();
                  if (e.key === 'Escape') setSaving(false);
                }}
                placeholder={t('generator.templates.namePlaceholder')}
                className="h-8 flex-1 border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-white/20"
              />
              <Button
                type="button"
                size="sm"
                onClick={confirmSave}
                className="h-8 bg-white text-black hover:bg-white/90 text-xs"
              >
                <Check className="h-3.5 w-3.5" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setSaving(false)}
                className="h-8 w-8 p-0 text-white/50 hover:text-white hover:bg-white/10"
              >
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>
            {atCapacity && <p className="text-[11px] text-amber-300/80">{t('generator.templates.capacityHint')}</p>}
          </div>
        )}

        {templates.length === 0 ? (
          <div className="rounded-lg border border-dashed border-white/10 bg-white/[0.02] px-3 py-6 text-center">
            <p className="text-xs text-white/40">{t('generator.templates.noTemplates')}</p>
          </div>
        ) : (
          <ul className="space-y-2">
            {templates.map((template) => (
              <li
                key={template.id}
                className="rounded-lg border border-white/10 bg-white/5 p-2.5 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="flex gap-3">
                  <TemplateThumb
                    config={template.config}
                    fontSize={11}
                    className="h-14 w-24 flex-shrink-0 rounded-md border border-white/10"
                  />
                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-2">
                    {renamingId === template.id ? (
                      <div className="flex items-center gap-1">
                        <Input
                          autoFocus
                          value={renameValue}
                          onChange={(e) => setRenameValue(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') confirmRename();
                            if (e.key === 'Escape') setRenamingId(null);
                          }}
                          placeholder={t('generator.templates.namePlaceholder')}
                          className="h-7 flex-1 border-white/10 bg-white/5 text-white text-xs placeholder:text-white/30 focus-visible:ring-white/20"
                        />
                        <Button
                          type="button"
                          size="sm"
                          onClick={confirmRename}
                          className="h-7 w-7 p-0 bg-white text-black hover:bg-white/90"
                        >
                          <Check className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    ) : (
                      <p className="truncate text-sm font-medium text-white/90">{template.name}</p>
                    )}

                    {renamingId !== template.id && (
                      <div className="flex items-center gap-1">
                        <Button
                          type="button"
                          size="sm"
                          onClick={() => handleApply(template.id)}
                          className="h-7 flex-1 bg-white/10 text-white hover:bg-white/20 text-xs"
                        >
                          {t('generator.templates.apply')}
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-7 w-7 p-0 text-white/50 hover:text-white hover:bg-white/10"
                          onClick={() => startRename(template.id, template.name)}
                          aria-label={t('generator.templates.rename')}
                          title={t('generator.templates.rename')}
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-7 w-7 p-0 text-white/40 hover:text-red-400 hover:bg-white/10"
                          onClick={() => handleDelete(template.id)}
                          aria-label={t('generator.templates.remove')}
                          title={t('generator.templates.remove')}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 模板市场 */}
      <div className="space-y-2.5 border-t border-white/10 pt-3">
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
          {MARKETPLACE_CATEGORIES.map((category) => (
            <Button
              key={category}
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`h-7 px-2.5 text-xs ${
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
          <div className="rounded-lg border border-dashed border-white/10 bg-white/[0.02] px-3 py-6 text-center">
            <p className="text-xs text-white/40">{t('generator.templates.marketplace.empty')}</p>
          </div>
        ) : (
          <ul className="space-y-2">
            {filteredMarketplaceTemplates.map((item) => (
              <li
                key={item.id}
                className="rounded-lg border border-white/10 bg-white/5 p-2.5 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="flex gap-3">
                  <TemplateThumb
                    config={item.config}
                    fontSize={11}
                    className="h-14 w-24 flex-shrink-0 rounded-md border border-white/10"
                  />
                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-2">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-white/90">{t(item.nameKey)}</p>
                      <p className="line-clamp-2 text-xs text-white/50">{t(item.descriptionKey)}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-7 flex-1 text-white/70 hover:text-white hover:bg-white/10 text-xs"
                        onClick={() => handlePreviewMarketplace(item.id)}
                      >
                        {t('generator.templates.preview')}
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        className="h-7 bg-white/10 text-white hover:bg-white/20 text-xs"
                        onClick={() => handleImportFromMarketplace(item.id)}
                      >
                        <Download className="mr-1 h-3 w-3" />
                        {t('generator.templates.import')}
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
