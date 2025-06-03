import { TitleConfig } from './TitleConfig';
import { SizeConfig } from './SizeConfig';
import { FontConfig } from './FontConfig';
import { BackgroundConfig } from './BackgroundConfig';
import { IconConfig } from './IconConfig';

export function ConfigPanel() {
  return (
    <div className="flex h-full flex-col bg-black">
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        <div className="space-y-6 p-6 pb-8">
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
