import { Button } from '@/components/ui/button';
import { ArrowRight, Image, Wand2, Share2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/layout/hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      
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
