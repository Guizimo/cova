import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Palette, Zap, Sparkles, ArrowRight } from 'lucide-react';

const CARD_ICONS = [Palette, Zap, Sparkles];

const CARD_THEMES = [
  {
    glow: 'from-indigo-500/25',
    ring: 'group-hover:border-indigo-400/40',
    iconBg: 'from-indigo-500/30 to-indigo-500/5',
    iconColor: 'text-indigo-200',
    accent: 'bg-indigo-400'
  },
  {
    glow: 'from-fuchsia-500/25',
    ring: 'group-hover:border-fuchsia-400/40',
    iconBg: 'from-fuchsia-500/30 to-fuchsia-500/5',
    iconColor: 'text-fuchsia-200',
    accent: 'bg-fuchsia-400'
  },
  {
    glow: 'from-cyan-400/25',
    ring: 'group-hover:border-cyan-300/40',
    iconBg: 'from-cyan-400/30 to-cyan-400/5',
    iconColor: 'text-cyan-200',
    accent: 'bg-cyan-300'
  }
];

export function Features() {
  const { t } = useTranslation();

  return (
    <section className="w-full border-t border-white/[0.06] py-20 md:py-28">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="mb-14 flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <div className="section-underline" />
            <h2 className="text-3xl font-medium tracking-[-0.02em] text-white md:text-4xl">{t('features.title')}</h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-white/60">
            {t('features.description')}
            <Link
              to="/about"
              className="ml-1.5 inline-flex items-center border-b border-white/30 font-medium text-white/90 transition-colors hover:border-white/60 hover:text-white"
            >
              {t('features.learnMore')}
              <span className="ml-1">→</span>
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {(t('features.cards', { returnObjects: true }) as Array<{ title: string; description: string }>).map(
            (card, index) => {
              const Icon = CARD_ICONS[index] ?? Palette;
              const theme = CARD_THEMES[index] ?? CARD_THEMES[0];
              return (
                <Link
                  key={index}
                  to={index === 0 ? '/generator' : '/features'}
                  className={`group relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-[#161618] ${theme.ring}`}
                >
                  {/* 角落彩色光晕 */}
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${theme.glow} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                    aria-hidden
                  />
                  <div className="relative">
                    <div
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${theme.iconBg} transition-colors`}
                    >
                      <Icon className={`h-5 w-5 ${theme.iconColor}`} />
                    </div>
                    <h3 className="mb-2 text-xl font-medium text-white">{card.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-white/55">{card.description}</p>
                    <span className="inline-flex items-center text-xs text-white/50 transition-colors group-hover:text-white/85">
                      {t('features.learnMore')}
                      <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
