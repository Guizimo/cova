import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ArrowRight, Home, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageAurora } from '@/components/layout/page-aurora';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6">
        <PageAurora fade />
        <div className="page-in relative z-10 w-full max-w-[600px] text-center">
          <div className="relative z-10">
            <div className="text-gradient-aurora mb-4 text-8xl font-semibold tracking-[-0.04em] md:text-9xl">
              {t('notFound.subtitle')}
            </div>

            {/* 标题 */}
            <h1 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-4">{t('notFound.title')}</h1>

            {/* 描述 */}
            <p className="text-lg text-white/60 max-w-md mx-auto mb-8 leading-relaxed">{t('notFound.description')}</p>

            {/* 操作按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/">
                <Button
                  size="lg"
                  className="h-12 px-6 bg-white text-black hover:bg-white/90 rounded-lg w-full sm:w-auto"
                >
                  <Home className="mr-2 h-4 w-4" />
                  {t('notFound.backHome')}
                </Button>
              </Link>

              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-6 border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white rounded-lg w-full sm:w-auto"
                >
                  <HelpCircle className="mr-2 h-4 w-4" />
                  {t('notFound.contactSupport')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="hairline-aurora absolute bottom-[-100px] left-1/2 w-40 -translate-x-1/2" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
