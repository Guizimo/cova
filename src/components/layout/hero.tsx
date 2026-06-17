import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CoverShowcase } from '@/components/layout/cover-showcase';

export function Hero() {
  const { t } = useTranslation();

  const titleParts = t('hero.title').split('\n');
  const hasTwoLines = titleParts.length >= 2;

  return (
    <section className="relative w-full overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* 极光彩色背景 */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden" aria-hidden>
        <div className="aurora-blob aurora-1 left-[-10%] top-[-15%] h-[480px] w-[480px] bg-indigo-500/40" />
        <div className="aurora-blob aurora-2 right-[-8%] top-[-5%] h-[420px] w-[420px] bg-fuchsia-500/30" />
        <div className="aurora-blob aurora-3 left-[30%] top-[20%] h-[420px] w-[420px] bg-cyan-400/25" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1120px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* 左侧文案 */}
          <div className="flex flex-col">
            <span className="rise-in mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-fuchsia-300" />
              {t('hero.badge')}
            </span>

            <h1
              className="rise-in mb-6 max-w-2xl text-[2.6rem] font-medium leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-6xl"
              style={{ animationDelay: '0.06s' }}
            >
              {hasTwoLines ? (
                <>
                  <span className="text-white">{titleParts[0]}</span>
                  <br />
                  <span className="text-gradient-aurora">{titleParts[1]}</span>
                </>
              ) : (
                <span className="text-white">{t('hero.title')}</span>
              )}
            </h1>

            <p
              className="rise-in mb-9 max-w-lg text-lg leading-relaxed text-white/65 md:text-xl"
              style={{ animationDelay: '0.12s' }}
            >
              {t('hero.description')}
            </p>

            <div className="rise-in flex flex-col gap-4 sm:flex-row" style={{ animationDelay: '0.18s' }}>
              <Link to="/generator" className="inline-flex">
                <Button
                  size="lg"
                  className="h-12 cursor-pointer rounded-xl bg-white px-7 text-black transition-all duration-200 hover:scale-[1.02] hover:bg-white/95 hover:shadow-[0_0_36px_rgba(217,180,255,0.35)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-fuchsia-300/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {t('hero.getStarted')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about" className="inline-flex">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 cursor-pointer rounded-xl border-white/15 bg-white/5 px-7 text-white backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] hover:border-white/25 hover:bg-white/10 hover:text-white active:scale-[0.98]"
                >
                  {t('hero.viewAbout')}
                </Button>
              </Link>
            </div>
          </div>

          {/* 右侧实时封面展示件 */}
          <div className="rise-in relative" style={{ animationDelay: '0.24s' }}>
            <CoverShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
