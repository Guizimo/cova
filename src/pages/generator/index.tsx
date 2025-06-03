import { Header } from '@/components/generator/Header';
import { Preview } from '@/components/generator/Preview';
import { ConfigPanel } from '@/components/generator/ConfigPanel';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export default function Generator() {
  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      <Header />
      <div className="flex-1 h-[calc(100vh-64px)]">
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
    </div>
  );
}
