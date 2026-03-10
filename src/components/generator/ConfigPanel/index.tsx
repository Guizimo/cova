import { Separator } from '@/components/ui/separator';
import { TitleConfig } from './TitleConfig';
import { SizeConfig } from './SizeConfig';
import { FontConfig } from './FontConfig';
import { BackgroundConfig } from './BackgroundConfig';
import { IconConfig } from './IconConfig';
import { TemplateConfig } from './TemplateConfig';

export function ConfigPanel() {
  return (
    <div className="flex h-full flex-col bg-black">
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 scrollbar-thumb-rounded">
        <div className="space-y-4 lg:space-y-6 p-4 lg:p-6 pb-6 lg:pb-8 min-h-0">
          <TemplateConfig />
          <Separator className="bg-white/[0.08]" />
          <TitleConfig />
          <Separator className="bg-white/[0.08]" />
          <SizeConfig />
          <Separator className="bg-white/[0.08]" />
          <FontConfig />
          <Separator className="bg-white/[0.08]" />
          <BackgroundConfig />
          <Separator className="bg-white/[0.08]" />
          <IconConfig />
        </div>
      </div>
    </div>
  );
}
