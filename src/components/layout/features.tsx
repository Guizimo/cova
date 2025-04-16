import { useTranslation } from 'react-i18next';

export function Features() {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
            {t('features.title')}
          </h2>
          <p className="text-lg text-white/60 max-w-xl">
            {t('features.description')}
            <a href="/about" className="text-white hover:text-white/90 ml-1 inline-flex items-center">
              {t('features.learnMore')}
              <span className="ml-1">→</span>
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(t('features.cards', { returnObjects: true }) as Array<{ title: string; description: string }>).map((card, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-[#1C1C1C] hover:bg-[#222222] transition-colors p-6">
              <h3 className="text-xl font-medium text-white mb-2">{card.title}</h3>
              <p className="text-sm text-white/60">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}