import { Button } from '@/components/ui/button';
import { ArrowRight, Image, Wand2, Share2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { Navbar } from '@/components/layout/navbar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* 导航栏 */}
      <Navbar />

      {/* Hero 部分 */}
      <section className="container flex flex-col items-center justify-center py-20 md:py-32 text-center relative">
        {/* 红色光晕背景效果 */}
        <div className="absolute w-[600px] h-[600px] bg-red-600/30 rounded-full blur-[150px] opacity-50 -z-10"></div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-3xl">
          <span className="text-white">你的捷径，通往</span>
          <br />
          <span className="text-red-500">一切。</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
          强大生产力工具的集合，尽在一个可扩展的启动器中。快速、符合人体工程学且可靠。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-gray-200">
            下载 Mac 版
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto border-gray-700 hover:bg-gray-800 text-white">
            加入 Windows 候补名单
          </Button>
        </div>
        
        <div className="text-sm text-gray-500">
          v1.65.0 • 下载量 13万+ • 通过 Homebrew 安装
        </div>
        
        <div className="mt-8 inline-flex items-center rounded-full border border-gray-700 px-4 py-2 text-sm bg-gray-900/80 backdrop-blur-sm">
          <Sparkles className="mr-2 h-4 w-4 text-red-500" />
          <span>引入 AI 扩展</span>
          <span className="ml-2 text-gray-500">|</span>
          <a href="#learn-more" className="ml-2 text-red-500 hover:text-red-400">了解更多 →</a>
        </div>
      </section>

      {/* 特性部分 */}
      <section id="features" className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">强大的特性</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            专业的封面设计工具，让你的创作更出彩
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center hover:border-gray-700 transition-all">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <Image className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="font-bold text-xl mb-2">多种尺寸</h3>
            <p className="text-gray-400">
              支持多种常用尺寸，适配各大平台，从社交媒体到博客文章封面，一应俱全。
            </p>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center hover:border-gray-700 transition-all">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <Wand2 className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="font-bold text-xl mb-2">一键美化</h3>
            <p className="text-gray-400">
              内置多种模板和样式，快速生成精美封面，无需专业设计技能。
            </p>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center hover:border-gray-700 transition-all">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <Share2 className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="font-bold text-xl mb-2">便捷分享</h3>
            <p className="text-gray-400">
              支持多种导出格式，随时分享你的作品，一键导出高质量图片。
            </p>
          </div>
        </div>
      </section>

      {/* CTA 部分 */}
      <section className="container py-20">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 rounded-xl p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">准备好开始创作了吗？</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            立即开始使用 Cova，为你的内容创作精美的封面图片
          </p>
          <Link to="/generator">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
              开始使用
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t border-gray-800 py-10 mt-auto">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Cova Logo" className="w-6 h-6" />
            <span className="font-medium">Cova</span>
          </div>
          
          <p className="text-sm text-gray-500 text-center md:text-left">
            Built by{' '}
            <a
              href="https://github.com/guizimo"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-gray-400 hover:text-white transition-colors"
            >
              Guizimo
            </a>
            . The source code is available on{' '}
            <a
              href="https://github.com/guizimo/cova"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
