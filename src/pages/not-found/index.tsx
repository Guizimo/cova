import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ArrowRight, Home, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="relative w-full max-w-[600px] text-center">
          {/* 背景装饰 */}
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-white/10 via-white/5 to-transparent opacity-20 blur-3xl" />
          
          {/* 主要内容 */}
          <div className="relative z-10">
            {/* 404 大号数字 */}
            <div className="text-8xl md:text-9xl font-bold tracking-[-0.02em] mb-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              {t('notFound.subtitle')}
            </div>
            
            {/* 标题 */}
            <h1 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-4">
              {t('notFound.title')}
            </h1>
            
            {/* 描述 */}
            <p className="text-lg text-white/60 max-w-md mx-auto mb-8 leading-relaxed">
              {t('notFound.description')}
            </p>
            
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
          
          {/* 底部装饰线 */}
          <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 