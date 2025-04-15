import { Header } from '@/components/generator/Header';
import { Preview } from '@/components/generator/Preview';
import { ConfigPanel } from '@/components/generator/ConfigPanel';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export default function Generator() {
  return (
    <div className="h-screen min-w-[1000px] overflow-hidden">
      <Header />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={30} minSize={30} maxSize={30}>
          <ConfigPanel />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={70}>
          <Preview />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
