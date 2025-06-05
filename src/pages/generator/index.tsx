import { Header } from '@/components/generator/Header';
import { Preview } from '@/components/generator/Preview';
import { ConfigPanel } from '@/components/generator/ConfigPanel';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Generator() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('config');

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden generator-container">
      <Header />

      {/* 桌面端：分栏布局 */}
      <div className="hidden lg:flex flex-1 h-[calc(100vh-64px)]">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          <ResizablePanel defaultSize={30} minSize={25} maxSize={35} className="border-r border-white/[0.08]">
            <ConfigPanel />
          </ResizablePanel>
          <ResizableHandle className="w-px bg-white/[0.08] hover:bg-white/[0.15] transition-colors" />
          <ResizablePanel defaultSize={70}>
            <Preview />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      {/* 移动端：Tabs 布局 */}
      <div className="flex lg:hidden flex-1 flex-col h-[calc(100vh-64px)] overflow-hidden">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-1 flex-col h-full">
          <div className="flex-shrink-0 border-b border-white/[0.08] bg-black">
            <TabsList className="grid w-full grid-cols-2 bg-transparent p-1 h-12">
              <TabsTrigger
                value="config"
                className="flex items-center gap-2 text-white/60 data-[state=active]:text-white data-[state=active]:bg-white/[0.08] rounded-md h-10"
              >
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">{t('generator.tabs.config')}</span>
                <span className="sm:hidden">配置</span>
              </TabsTrigger>
              <TabsTrigger
                value="preview"
                className="flex items-center gap-2 text-white/60 data-[state=active]:text-white data-[state=active]:bg-white/[0.08] rounded-md h-10"
              >
                <Eye className="h-4 w-4" />
                <span className="hidden sm:inline">{t('generator.tabs.preview')}</span>
                <span className="sm:hidden">预览</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent
            value="config"
            className="flex-1 m-0 h-[calc(100%-49px)] overflow-hidden mobile-scroll-container"
          >
            <ConfigPanel />
          </TabsContent>

          <TabsContent
            value="preview"
            className="flex-1 m-0 h-[calc(100%-49px)] overflow-hidden mobile-scroll-container"
          >
            <Preview />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
