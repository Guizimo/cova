import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] py-12">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Cova Logo" className="h-6 w-6" />
              <span className="font-medium">Cova</span>
            </Link>
            <p className="text-sm text-white/40">
              为创作者打造的现代封面设计工具
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex flex-col gap-3">
              <span className="font-medium text-white/80">产品</span>
              <Link to="/features" className="text-white/40 hover:text-white/60">特性</Link>
              <Link to="/pricing" className="text-white/40 hover:text-white/60">定价</Link>
              <Link to="/changelog" className="text-white/40 hover:text-white/60">更新日志</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium text-white/80">资源</span>
              <Link to="/docs" className="text-white/40 hover:text-white/60">文档</Link>
              <Link to="/blog" className="text-white/40 hover:text-white/60">博客</Link>
              <a 
                href="https://github.com/guizimo/cova" 
                target="_blank" 
                rel="noreferrer"
                className="text-white/40 hover:text-white/60"
              >
                GitHub
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium text-white/80">公司</span>
              <Link to="/about" className="text-white/40 hover:text-white/60">关于</Link>
              <Link to="/contact" className="text-white/40 hover:text-white/60">联系我们</Link>
              <Link to="/privacy" className="text-white/40 hover:text-white/60">隐私政策</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-white/[0.08]">
          <p className="text-sm text-white/40">
            © 2024 Cova. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Built by{' '}
            <a
              href="https://github.com/guizimo"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white/80"
            >
              Guizimo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}