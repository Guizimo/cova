import { Button } from '@/components/ui/button';
import { ArrowRight, Image, Wand2, Share2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* 导航栏 */}
      <header className="container py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Cova Logo" className="w-8 h-8" />
          <span className="font-bold text-xl">Cova</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">特性</a>
          <a href="#templates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">模板</a>
          <a href="https://github.com/guizimo/cova" target="_blank" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
        </nav>
        <Link to="/generator">
          <Button variant="outline" className="hidden md:flex">
            开始使用
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </header>

      {/* Hero 部分 */}
      <section className="container flex flex-col items-center justify-center py-20 md:py-32 text-center">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-6 bg-background/80 backdrop-blur-sm">
          <Sparkles className="mr-1 h-3 w-3" />
          <span>简单、强大的封面设计工具</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-3xl gradient-heading">
          为你的创作设计精美封面
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
          Cova 让封面设计变得简单。无需设计经验，几分钟内即可创建专业级别的封面图片。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/generator">
            <Button size="lg" className="w-full sm:w-auto">
              开始创作
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <a href="https://github.com/guizimo/cova" target="_blank">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              查看源码
            </Button>
          </a>
        </div>
      </section>

      {/* 预览图 */}
      <section className="container py-12">
        <div className="relative w-full overflow-hidden rounded-lg border bg-background shadow-elevated">
          <div className="aspect-video w-full bg-gradient-to-br from-primary/5 to-secondary/5">
            {/* 这里放置应用截图 */}
            <img 
              src="/preview-1.jpg" 
              alt="Cova 编辑器界面" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 特性部分 */}
      <section id="features" className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">强大的特性</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            专业的封面设计工具，让你的创作更出彩
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Image className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-2">多种尺寸</h3>
            <p className="text-muted-foreground">
              支持多种常用尺寸，适配各大平台，从社交媒体到博客文章封面，一应俱全。
            </p>
          </div>
          
          <div className="glass-panel p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Wand2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-2">一键美化</h3>
            <p className="text-muted-foreground">
              内置多种模板和样式，快速生成精美封面，无需专业设计技能。
            </p>
          </div>
          
          <div className="glass-panel p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Share2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-2">便捷分享</h3>
            <p className="text-muted-foreground">
              支持多种导出格式，随时分享你的作品，一键导出高质量图片。
            </p>
          </div>
        </div>
      </section>

      {/* CTA 部分 */}
      <section className="container py-20">
        <div className="glass-panel p-10 text-center gradient-border">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">准备好开始创作了吗？</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            立即开始使用 Cova，为你的内容创作精美的封面图片
          </p>
          <Link to="/generator">
            <Button size="lg">
              开始使用
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t py-10 mt-auto">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Cova Logo" className="w-6 h-6" />
            <span className="font-medium">Cova</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Built by{' '}
            <a
              href="https://github.com/guizimo"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Guizimo
            </a>
            . The source code is available on{' '}
            <a
              href="https://github.com/guizimo/cova"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
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
