import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();

  const titleParts = t('hero.title').split('\n');
  const hasTwoLines = titleParts.length >= 2;

  return (
    <section className="relative w-full pt-36 pb-24 md:pt-40 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-[1000px] px-6 relative">
        <div className="flex flex-col w-full relative z-10">
          {/* 角标 */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80 mb-8 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
            {t('hero.badge')}
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.08] mb-6 max-w-4xl">
            {hasTwoLines ? (
              <>
                <span className="text-white">{titleParts[0]}</span>
                <br />
                <span className="text-gradient-hero">{titleParts[1]}</span>
              </>
            ) : (
              <span className="text-white">{t('hero.title')}</span>
            )}
          </h1>

          <p className="text-lg md:text-xl text-white/65 max-w-xl mb-10 leading-relaxed">{t('hero.description')}</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 z-10">
            <Link to="/generator" className="inline-flex">
              <Button
                size="lg"
                className="h-12 px-7 bg-white text-black hover:bg-white/95 rounded-xl cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {t('hero.getStarted')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about" className="inline-flex">
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-7 border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 hover:text-white rounded-xl cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                {t('hero.viewAbout')}
              </Button>
            </Link>
          </div>
        </div>

        {/* 背景装饰 - 轻微动效 */}
        <div
          className="hero-glow-animate absolute top-[-500px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-white/10 via-white/5 to-transparent blur-3xl pointer-events-none"
          aria-hidden
        />
        {/* 辅助网格感 */}
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-40"
          aria-hidden
        />
      </div>
    </section>
  );
}
