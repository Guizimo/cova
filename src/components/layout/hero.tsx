import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative mx-auto max-w-[1000px] pt-32 px-6">
      <div className="flex flex-col w-full">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.1] mb-6 max-w-4xl">
          {t('hero.title')}
        </h1>
        
        <p className="text-lg text-white/60 max-w-xl mb-8">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button 
            size="lg" 
            className="h-12 px-6 bg-white text-black hover:bg-white/90 rounded-lg"
          >
            {t('hero.getStarted')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Link to="/docs">
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 px-6 border-white/10 bg-white/5 hover:bg-white/10 rounded-lg"
            >
              {t('hero.viewDocs')}
            </Button>
          </Link>
        </div>
      </div>

      {/* 背景装饰 */}
      <div className="absolute top-[-500px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-white/10 via-white/5 to-transparent opacity-20 blur-3xl" />
    </section>
  );
}