import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TemplateThumb } from '@/components/generator/ConfigPanel/TemplateThumb';
import { MARKETPLACE_CATEGORIES, MARKETPLACE_TEMPLATES, type MarketplaceFilter } from '@/config/template-marketplace';
import { useGeneratorStore } from '@/store/generator';
import { useTemplatesStore } from '@/store/templates';
import { ArrowRight, BookmarkPlus, LayoutTemplate, Search, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function Templates() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const applyTemplateConfig = useGeneratorStore((s) => s.applyTemplateConfig);
  const addTemplate = useTemplatesStore((s) => s.addTemplate);

  const [keyword, setKeyword] = useState('');
  const [activeCategory, setActiveCategory] = useState<MarketplaceFilter>('all');

  const filtered = useMemo(() => {
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

  const handleUse = (id: string) => {
    const template = MARKETPLACE_TEMPLATES.find((item) => item.id === id);
    if (!template) return;
    applyTemplateConfig(template.config);
    toast.success(t('templatesPage.usedToast'));
    navigate('/generator');
  };

  const handleSave = (id: string) => {
    const template = MARKETPLACE_TEMPLATES.find((item) => item.id === id);
    if (!template) return;
    addTemplate(t(template.nameKey), template.config);
    toast.success(t('generator.templates.imported'));
  };

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full pt-32 pb-12">
        <div className="absolute top-[-280px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 bg-gradient-to-b from-indigo-500/15 via-fuchsia-500/10 to-transparent opacity-40 blur-3xl" />
        <div className="relative mx-auto max-w-[1200px] px-6 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/70">
            <Sparkles className="h-3.5 w-3.5" />
            {t('templatesPage.badge')}
          </span>
          <h1 className="mb-5 text-5xl font-medium leading-[1.1] tracking-[-0.02em] md:text-6xl">
            {t('templatesPage.title')}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/60">{t('templatesPage.subtitle')}</p>

          {/* Search */}
          <div className="mx-auto flex max-w-md items-center">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <Input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder={t('templatesPage.searchPlaceholder')}
                className="h-11 border-white/10 bg-white/5 pl-9 text-white placeholder:text-white/30 focus-visible:ring-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <div className="sticky top-16 z-30 w-full border-y border-white/[0.08] bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-2 px-6 py-4">
          {MARKETPLACE_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                activeCategory === category
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {t(`generator.templates.marketplace.categories.${category}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="w-full py-12">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="mb-6 text-sm text-white/40">{t('templatesPage.count', { count: filtered.length })}</p>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] py-20 text-center">
              <LayoutTemplate className="mb-3 h-8 w-8 text-white/30" />
              <p className="text-white/50">{t('generator.templates.marketplace.empty')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.04]"
                >
                  <div className="relative">
                    <TemplateThumb config={item.config} fontSize={30} className="aspect-[16/9] w-full" />
                    <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white/80 backdrop-blur-sm">
                      {t(`generator.templates.marketplace.categories.${item.category}`)}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-1.5 text-lg font-medium text-white">{t(item.nameKey)}</h3>
                    <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-white/55">{t(item.descriptionKey)}</p>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        onClick={() => handleUse(item.id)}
                        className="h-9 flex-1 bg-white text-black hover:bg-white/90"
                      >
                        {t('templatesPage.use')}
                        <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleSave(item.id)}
                        className="h-9 border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                        aria-label={t('templatesPage.save')}
                        title={t('templatesPage.save')}
                      >
                        <BookmarkPlus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full border-t border-white/[0.08] py-20">
        <div className="mx-auto max-w-[1000px] px-6 text-center">
          <h2 className="mb-4 text-3xl font-medium tracking-[-0.02em] md:text-4xl">{t('templatesPage.cta.title')}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/60">{t('templatesPage.cta.description')}</p>
          <Link to="/generator">
            <Button size="lg" className="h-12 rounded-lg bg-white px-8 text-black hover:bg-white/90">
              {t('templatesPage.cta.action')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
