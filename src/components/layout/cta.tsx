import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function CTA() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-24 md:py-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="group/cta relative rounded-3xl bg-gradient-to-b from-white/[0.09] to-white/[0.02] p-14 md:p-16 flex flex-col items-center border border-white/[0.1] overflow-hidden transition-all duration-300 hover:border-white/[0.14] hover:shadow-[0_0_60px_rgba(255,255,255,0.06)]">
          <div
            className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-white/[0.03] pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
            aria-hidden
          />
          <div className="relative flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.02em] mb-4 text-center text-white">
              {t('cta.title')}
            </h2>
            <p className="relative text-lg md:text-xl text-white/60 max-w-xl text-center mb-10 leading-relaxed">
              {t('cta.description')}
            </p>
            <Link to="/generator" className="relative inline-flex">
              <Button
                size="lg"
                className="h-12 px-8 bg-white text-black hover:bg-white/95 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(255,255,255,0.2)] active:scale-[0.98]"
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
