import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Palette, Download, Smartphone, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation();

  const coreFeatures = [
    {
      icon: Palette,
      title: t('featuresPage.coreFeatures.coverDesign.title'),
      subtitle: t('featuresPage.coreFeatures.coverDesign.subtitle'),
      description: t('featuresPage.coreFeatures.coverDesign.description'),
      metrics: t('featuresPage.coreFeatures.coverDesign.metrics')
    },
    {
      icon: Zap,
      title: t('featuresPage.coreFeatures.lightningFast.title'),
      subtitle: t('featuresPage.coreFeatures.lightningFast.subtitle'),
      description: t('featuresPage.coreFeatures.lightningFast.description'),
      metrics: t('featuresPage.coreFeatures.lightningFast.metrics')
    },
    {
      icon: Download,
      title: t('featuresPage.coreFeatures.exportReady.title'),
      subtitle: t('featuresPage.coreFeatures.exportReady.subtitle'),
      description: t('featuresPage.coreFeatures.exportReady.description'),
      metrics: t('featuresPage.coreFeatures.exportReady.metrics')
    }
  ];

  const additionalFeatures = [
    {
      icon: Smartphone,
      title: t('featuresPage.additionalFeatures.mobileOptimized.title'),
      description: t('featuresPage.additionalFeatures.mobileOptimized.description')
    },
    {
      icon: Globe,
      title: t('featuresPage.additionalFeatures.multiLanguage.title'),
      description: t('featuresPage.additionalFeatures.multiLanguage.description')
    },
    {
      icon: Shield,
      title: t('featuresPage.additionalFeatures.privacyFirst.title'),
      description: t('featuresPage.additionalFeatures.privacyFirst.description')
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.1] mb-6">
              {t('featuresPage.hero.title').split('\n')[0]}<br />
              <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                {t('featuresPage.hero.subtitle')}
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8 leading-relaxed">
              {t('featuresPage.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/generator">
                <Button size="lg" className="h-12 px-6 bg-white text-black hover:bg-white/90 rounded-lg">
                  {t('featuresPage.hero.getStarted')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/docs">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-6 border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white rounded-lg"
                >
                  {t('featuresPage.hero.viewDocs')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-white/10 via-white/5 to-transparent opacity-30 blur-3xl" />
      </section>

      {/* Core Features */}
      <section className="w-full py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04] transition-all duration-300 p-8 border border-white/[0.08]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-white/60">{feature.subtitle}</p>
                  </div>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">{feature.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white/90">{feature.metrics}</span>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="w-full py-24 border-y border-white/[0.08]">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-4">
              {t('featuresPage.performance.title')}
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              {t('featuresPage.performance.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-2">
                50ms
              </div>
              <p className="text-sm text-white/60">{t('featuresPage.performance.stats.responseTime')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-2">
                4
              </div>
              <p className="text-sm text-white/60">{t('featuresPage.performance.stats.exportFormats')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-sm text-white/60">{t('featuresPage.performance.stats.localProcessing')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-2">
                ∞
              </div>
              <p className="text-sm text-white/60">{t('featuresPage.performance.stats.customizations')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="w-full py-24">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-4">
              {t('featuresPage.additionalFeatures.title')}
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              {t('featuresPage.additionalFeatures.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.12] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/[0.08] group-hover:bg-white/[0.12] transition-colors">
                    <feature.icon className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] mb-6">
              {t('featuresPage.cta.title')}
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8">
              {t('featuresPage.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/generator">
                <Button size="lg" className="h-12 px-8 bg-white text-black hover:bg-white/90 rounded-lg">
                  {t('featuresPage.cta.startDesigning')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white rounded-lg"
                onClick={() => window.open('https://github.com/guizimo/cova', '_blank')}
              >
                {t('featuresPage.cta.viewGithub')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 