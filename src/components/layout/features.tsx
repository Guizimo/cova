import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Palette, Zap, Sparkles, ArrowRight } from 'lucide-react';

const CARD_ICONS = [Palette, Zap, Sparkles];

export function Features() {
  const { t } = useTranslation();

  const CARD_ACCENTS = ['from-white/15 to-white/5', 'from-white/12 to-white/5', 'from-white/10 to-white/5'];

  return (
    <section className="w-full py-20 md:py-28 border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="flex flex-col gap-4 mb-14">
          <div className="flex flex-col gap-3">
            <div className="section-underline" />
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] text-white">{t('features.title')}</h2>
          </div>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            {t('features.description')}
            <Link
              to="/about"
              className="ml-1.5 inline-flex items-center text-white/90 hover:text-white font-medium transition-colors border-b border-white/30 hover:border-white/60"
            >
              {t('features.learnMore')}
              <span className="ml-1">→</span>
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {(t('features.cards', { returnObjects: true }) as Array<{ title: string; description: string }>).map(
            (card, index) => {
              const Icon = CARD_ICONS[index] ?? Palette;
              const accent = CARD_ACCENTS[index] ?? CARD_ACCENTS[0];
              return (
                <Link
                  key={index}
                  to={index === 0 ? '/generator' : '/features'}
                  className="group relative overflow-hidden rounded-2xl bg-[#18181b] hover:bg-[#222225] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 p-7 block border-l-4 border-l-transparent hover:border-l-white/30"
                >
                  <div
                    className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${accent} border border-white/10 group-hover:border-white/20 transition-colors mb-5`}
                  >
                    <Icon className="w-5 h-5 text-white/95" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/55 mb-4 leading-relaxed">{card.description}</p>
                  <span className="inline-flex items-center text-xs text-white/50 group-hover:text-white/80 transition-colors">
                    {t('features.learnMore')}
                    <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
