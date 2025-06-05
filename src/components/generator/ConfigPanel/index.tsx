import { TitleConfig } from './TitleConfig';
import { SizeConfig } from './SizeConfig';
import { FontConfig } from './FontConfig';
import { BackgroundConfig } from './BackgroundConfig';
import { IconConfig } from './IconConfig';

export function ConfigPanel() {
  return (
    <div className="flex h-full flex-col bg-black">
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 scrollbar-thumb-rounded">
        <div className="space-y-4 lg:space-y-6 p-4 lg:p-6 pb-6 lg:pb-8 min-h-0">
          <TitleConfig />
          <SizeConfig />
          <FontConfig />
          <BackgroundConfig />
          <IconConfig />
        </div>
      </div>
    </div>
  );
}
