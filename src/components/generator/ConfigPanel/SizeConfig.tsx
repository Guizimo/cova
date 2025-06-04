import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PRESET_SIZES } from '@/config/generator';
import { useGeneratorStore } from '@/store/generator';
import { useTranslation } from 'react-i18next';

export function SizeConfig() {
  const { t } = useTranslation();
  const {
    isCustomSize,
    setIsCustomSize,
    customWidth,
    setCustomWidth,
    customHeight,
    setCustomHeight,
    selectedSize,
    setSelectedSize
  } = useGeneratorStore();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-white/90 uppercase tracking-wide">
          {t('generator.config.size.label')}
        </h3>
      </div>
      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Select
              value={isCustomSize ? 'custom' : `${selectedSize.width}x${selectedSize.height}`}
              onValueChange={(value) => {
                if (value === 'custom') {
                  setIsCustomSize(true);
                } else {
                  setIsCustomSize(false);
                  const size = PRESET_SIZES.find((s) => `${s.width}x${s.height}` === value);
                  if (size) setSelectedSize(size);
                }
              }}
            >
              <SelectTrigger className="bg-white/5 border-white/10 text-white hover:bg-white/10 focus:border-white/20">
                <SelectValue placeholder={t('generator.config.size.label')} />
              </SelectTrigger>
              <SelectContent className="bg-black border-white/10">
                {PRESET_SIZES.map((size) => (
                  <SelectItem 
                    key={`${size.width}x${size.height}`} 
                    value={`${size.width}x${size.height}`}
                    className="text-white hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white"
                  >
                    {size.label}
                  </SelectItem>
                ))}
                <SelectItem 
                  value="custom"
                  className="text-white hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white"
                >
                  {t('generator.config.size.custom')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          {isCustomSize && (
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label className="text-white/60 text-xs uppercase tracking-wide">
                  {t('generator.config.size.width')}
                </Label>
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    value={customWidth}
                    onChange={(e) => setCustomWidth(Number(e.target.value))}
                    min={100}
                    max={3840}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/20 focus:ring-white/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-white/60 text-xs uppercase tracking-wide">
                  {t('generator.config.size.height')}
                </Label>
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    value={customHeight}
                    onChange={(e) => setCustomHeight(Number(e.target.value))}
                    min={100}
                    max={2160}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/20 focus:ring-white/20"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
