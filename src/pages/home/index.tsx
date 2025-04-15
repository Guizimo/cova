import { Button } from '@/components/ui/button';
import { ArrowRight, Image, Wand2, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.jpg';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex justify-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center gap-4 mb-32">
            <div className="w-64 h-64 mb-4">
              {/* 这里放置 Logo */}
              <img src={logo} alt="Cova Logo" className="w-full h-full" />
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary">
              Cova
            </h1>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            快速生成精美的
            <span className="text-primary">封面图片</span>
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            简单易用的封面图片生成工具，为你的文章、视频、社交媒体创作提供专业的封面设计。
          </p>
          <div className="space-x-4">
            <Link to="/generator">
              <Button size="lg">
                开始使用
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="https://github.com/guizimo/cova" target="_blank">
              <Button variant="outline" size="lg">
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">特性</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            专业的封面设计工具，让你的创作更出彩
          </p>
        </div>
        <div className="mx-auto px-10 grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between items-center rounded-md p-6">
              <Image className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">多种尺寸</h3>
                <p className="text-sm text-muted-foreground">支持多种常用尺寸，适配各大平台</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between items-center rounded-md p-6">
              <Wand2 className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">一键美化</h3>
                <p className="text-sm text-muted-foreground">内置多种模板和样式，快速生成精美封面</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between items-center rounded-md p-6">
              <Share2 className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">便捷分享</h3>
                <p className="text-sm text-muted-foreground">支持多种导出格式，随时分享你的作品</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Section */}
      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">准备好了吗？</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            立即开始创作你的专属封面
          </p>
          <Link to="/generator">
            <Button size="lg">
              开始使用
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
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
