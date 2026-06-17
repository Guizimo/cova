import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function CTA() {
  const { t } = useTranslation();

  return (
    <section className="w-full border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="group/cta relative flex flex-col items-center overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-14 transition-all duration-300 hover:border-white/[0.16] md:p-16">
          {/* 极光彩色光晕 */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div className="aurora-blob aurora-1 left-[5%] top-[-40%] h-72 w-72 bg-indigo-500/30" />
            <div className="aurora-blob aurora-2 right-[8%] top-[-20%] h-72 w-72 bg-fuchsia-500/25" />
            <div className="aurora-blob aurora-3 left-1/2 bottom-[-50%] h-72 w-72 bg-cyan-400/20" />
          </div>

          <div className="relative flex flex-col items-center">
            <h2 className="mb-4 text-center text-3xl font-medium tracking-[-0.02em] text-white md:text-4xl lg:text-5xl">
              {t('cta.title')}
            </h2>
            <p className="relative mb-10 max-w-xl text-center text-lg leading-relaxed text-white/65 md:text-xl">
              {t('cta.description')}
            </p>
            <Link to="/generator" className="relative inline-flex">
              <Button
                size="lg"
                className="h-12 rounded-xl bg-white px-8 text-black transition-all duration-200 hover:scale-[1.02] hover:bg-white/95 hover:shadow-[0_0_40px_rgba(217,180,255,0.35)] active:scale-[0.98]"
              >
                {t('cta.getStarted')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
