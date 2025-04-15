import { TitleConfig } from './TitleConfig';
import { SizeConfig } from './SizeConfig';
import { FontConfig } from './FontConfig';
import { BackgroundConfig } from './BackgroundConfig';
import { IconConfig } from './IconConfig';

export function ConfigPanel() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <div className="flex-1 overflow-auto">
        <div className="space-y-6 p-4">
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
