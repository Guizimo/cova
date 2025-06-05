import { Button } from '@/components/ui/button';
import { Download, ListRestart, Share2, Home, Globe, Check, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { useGeneratorStore } from '@/store/generator';
import { exportImage } from '@/utils/generator';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';
import pkg from '../../../package.json';

export function Header() {
  const [stars, setStars] = useState<number>(0);
  const { resetSettings, backgroundType, setIsExporting, backdropBlur } = useGeneratorStore();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch('https://api.github.com/repos/guizimo/cova')
      .then((res) => res.json())
      .then((data) => setStars(data.stargazers_count))
      .catch(() => setStars(0));
  }, []);

  return (
    <header className="h-16 border-b border-white/[0.08] bg-black">
      <div className="flex h-full items-center justify-between px-4 lg:px-6">
        {/* 左侧Logo和标题 */}
        <div className="flex items-center gap-2 lg:gap-4 min-w-0 flex-1">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
            <img src={logo} alt="Cova Logo" className="h-6 w-6" />
            <span className="text-lg font-medium hidden sm:inline">Cova</span>
          </Link>
          <div className="text-sm text-white/60 hidden md:block">
            {t('generator.title')} <span className="text-white/40">v{pkg.version}</span>
          </div>
        </div>

        {/* 右侧操作按钮 */}
        <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
          {/* 移动端：更多操作菜单 */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/50 hover:text-white hover:bg-white/[0.08] h-8 w-8 p-0"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-black border-white/[0.08] w-48">
                <DropdownMenuItem className="text-white hover:bg-white/[0.08]" asChild>
                  <Link to="/" className="flex items-center">
                    <Home className="mr-2 h-4 w-4" />
                    {t('generator.buttons.backToHome')}
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => window.open('https://github.com/guizimo/cova', '_blank')}
                  className="text-white hover:bg-white/[0.08]"
                >
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  GitHub {stars > 0 && <span className="ml-auto">{stars} ⭐</span>}
                </DropdownMenuItem>

                <DropdownMenuSeparator className="bg-white/[0.08]" />

                <DropdownMenuItem
                  onClick={() => i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh')}
                  className="text-white hover:bg-white/[0.08]"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  {i18n.language === 'zh' ? 'English' : '中文'}
                </DropdownMenuItem>

                <DropdownMenuItem onClick={resetSettings} className="text-white hover:bg-white/[0.08]">
                  <ListRestart className="mr-2 h-4 w-4" />
                  {t('generator.buttons.reset')}
                </DropdownMenuItem>

                <DropdownMenuItem className="text-white hover:bg-white/[0.08]">
                  <Share2 className="mr-2 h-4 w-4" />
                  {t('generator.buttons.share')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* 桌面端：返回首页按钮 */}
          <Link to="/" className="hidden lg:block">
            <Button variant="ghost" size="sm" className="text-white/50 hover:text-white hover:bg-white/[0.08] h-8">
              <Home className="mr-2 h-4 w-4" />
              {t('generator.buttons.backToHome')}
            </Button>
          </Link>

          {/* 桌面端：GitHub星标 */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open('https://github.com/guizimo/cova', '_blank')}
            className="hidden lg:flex text-white/50 hover:text-white hover:bg-white/[0.08] h-8"
          >
            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            {stars > 0 && <span className="text-sm">{stars} ⭐</span>}
          </Button>

          {/* 桌面端：语言切换 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="hidden lg:flex text-white/50 hover:text-white hover:bg-white/[0.08] h-8"
              >
                <Globe className="mr-2 h-4 w-4" />
                {i18n.language === 'zh' ? '中文' : 'English'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black border-white/[0.08]">
              <DropdownMenuItem
                onClick={() => i18n.changeLanguage('zh')}
                className="text-white hover:bg-white/[0.08] flex items-center justify-between"
              >
                中文
                {i18n.language === 'zh' && <Check className="h-4 w-4" />}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => i18n.changeLanguage('en')}
                className="text-white hover:bg-white/[0.08] flex items-center justify-between"
              >
                English
                {i18n.language === 'en' && <Check className="h-4 w-4" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 桌面端：重置按钮 */}
          <Button
            variant="outline"
            size="sm"
            onClick={resetSettings}
            className="hidden lg:flex border-white/[0.08] bg-white/[0.05] text-white hover:bg-white/[0.1] hover:text-white h-8"
          >
            <ListRestart className="mr-2 h-4 w-4" />
            {t('generator.buttons.reset')}
          </Button>

          {/* 桌面端：分享按钮 */}
          <Button
            variant="outline"
            size="sm"
            className="hidden lg:flex border-white/[0.08] bg-white/[0.05] text-white hover:bg-white/[0.1] hover:text-white h-8"
          >
            <Share2 className="mr-2 h-4 w-4" />
            {t('generator.buttons.share')}
          </Button>

          {/* 导出按钮 - 所有设备显示 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="bg-white text-black hover:bg-white/90 h-8">
                <Download className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">{t('generator.buttons.export')}</span>
                <span className="sm:hidden">导出</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black border-white/[0.08]">
              {/* 毛玻璃效果警告 */}
              {backdropBlur > 0 && (
                <>
                  <div className="px-3 py-2 text-xs text-orange-300 border-b border-white/[0.08]">
                    ⚠️ 毛玻璃效果不会在导出中显示
                    <br />
                    <span className="text-orange-200/70">建议使用浏览器截图功能</span>
                  </div>
                </>
              )}
              <DropdownMenuItem
                onClick={() => exportImage('png', backgroundType, setIsExporting)}
                className="text-white hover:bg-white/[0.08]"
              >
                {t('generator.export.png')}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => exportImage('jpeg', backgroundType, setIsExporting)}
                className="text-white hover:bg-white/[0.08]"
              >
                {t('generator.export.jpeg')}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => exportImage('webp', backgroundType, setIsExporting)}
                className="text-white hover:bg-white/[0.08]"
              >
                {t('generator.export.webp')}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => exportImage('avif', backgroundType, setIsExporting)}
                className="text-white hover:bg-white/[0.08]"
              >
                {t('generator.export.avif')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
