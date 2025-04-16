import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="w-full">
      <section className="relative mx-auto max-w-[1000px] pt-32 px-6">
        <div className="flex flex-col w-full">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.1] mb-6 max-w-4xl">
            Cova 是一个专为
            <br />
            封面设计打造的工具
          </h1>
          
          <p className="text-lg text-white/60 max-w-xl mb-8">
            遇见现代封面设计系统。简化设计流程，让创作更加流畅。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="h-12 px-6 bg-white text-black hover:bg-white/90 rounded-lg"
            >
              开始使用
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link to="/docs">
              <Button 
                variant="outline" 
                size="lg" 
                className="h-12 px-6 border-white/10 bg-white/5 hover:bg-white/10 rounded-lg"
              >
                查看文档
              </Button>
            </Link>
          </div>
        </div>

        {/* 背景装饰 */}
        <div className="absolute top-[-500px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-white/10 via-white/5 to-transparent opacity-20 blur-3xl" />
      </section>
    </div>
  );
}