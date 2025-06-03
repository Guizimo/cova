import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FONT_FAMILIES } from '@/config/generator';
import { useGeneratorStore } from '@/store/generator';
import { useTranslation } from 'react-i18next';

export function FontConfig() {
  const { t } = useTranslation();
  const {
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
    letterSpacing,
    setLetterSpacing,
    fontWeight,
    setFontWeight,
    textColor,
    setTextColor,
    fontStyle,
    setFontStyle,
    lineHeight,
    setLineHeight
  } = useGeneratorStore();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-white/90 uppercase tracking-wide">
          {t('generator.config.font.label')}
        </h3>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-white/60 text-xs uppercase tracking-wide">
            {t('generator.config.font.family')}
          </Label>
          <div className="mt-2">
          <Select value={fontFamily} onValueChange={setFontFamily}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white hover:bg-white/10 focus:border-white/20">
              <SelectValue placeholder={t('generator.config.font.family')} />
            </SelectTrigger>
            <SelectContent className="bg-black border-white/10">
              {FONT_FAMILIES.map(({ value, label }) => (
                <SelectItem 
                  key={value} 
                  value={value}
                  className="text-white hover:bg-white/10 focus:bg-white/10"
                >
                  <span style={{ fontFamily: value }}>{label}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          </div>
          
        </div>
        
        <div className="space-y-2">
          <Label className="text-white/60 text-xs uppercase tracking-wide">
            {t('generator.config.font.lineHeight')}
          </Label>
          <div className="flex items-center space-x-3 mt-2">
            <Slider
              value={[lineHeight]}
              onValueChange={([value]) => setLineHeight(value)}
              min={1}
              max={3}
              step={0.1}
              className="flex-1"
            />
            <span className="w-12 text-sm text-white/60 text-right">{lineHeight}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="text-white/60 text-xs uppercase tracking-wide">
            {t('generator.config.font.style')}
          </Label>
          <div className="mt-2">
          <Select value={fontStyle} onValueChange={setFontStyle}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white hover:bg-white/10 focus:border-white/20">
              <SelectValue placeholder={t('generator.config.font.style')} />
            </SelectTrigger>
            <SelectContent className="bg-black border-white/10">
              <SelectItem value="normal" className="text-white hover:bg-white/10 focus:bg-white/10">
                {t('generator.config.font.normal')}
              </SelectItem>
              <SelectItem value="italic" className="text-white hover:bg-white/10 focus:bg-white/10">
                {t('generator.config.font.italic')}
              </SelectItem>
            </SelectContent>
          </Select>
          </div>
          
        </div>
        
        <div className="space-y-2">
          <Label className="text-white/60 text-xs uppercase tracking-wide">
            {t('generator.config.font.size')}
          </Label>
          <div className="flex items-center space-x-3 mt-2">
            <Slider
              value={[fontSize]}
              onValueChange={([value]) => setFontSize(value)}
              min={20}
              max={200}
              step={1}
              className="flex-1"
            />
            <span className="w-12 text-sm text-white/60 text-right">{fontSize}px</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="text-white/60 text-xs uppercase tracking-wide">
            {t('generator.config.font.letterSpacing')}
          </Label>
          <div className="flex items-center space-x-3 mt-2">
            <Slider
              value={[letterSpacing]}
              onValueChange={([value]) => setLetterSpacing(value)}
              min={-10}
              max={30}
              step={0.5}
              className="flex-1"
            />
            <span className="w-12 text-sm text-white/60 text-right">{letterSpacing}px</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="text-white/60 text-xs uppercase tracking-wide">
            {t('generator.config.font.weight')}
          </Label>
          <div className="flex space-x-2 mt-2">
            <Input
              type="number"
              value={fontWeight}
              onChange={(e) => setFontWeight(Number(e.target.value))}
              min={100}
              max={900}
              step={100}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/20 focus:ring-white/20"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="text-white/60 text-xs uppercase tracking-wide">
            {t('generator.config.font.color')}
          </Label>
          <div className="flex space-x-2 mt-2">
            <Input 
              value={textColor} 
              onChange={(e) => setTextColor(e.target.value)}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/20 focus:ring-white/20"
            />
            <div className="relative w-10 h-9">
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
              />
              <div 
                className="w-full h-full rounded-md border border-white/20" 
                style={{ backgroundColor: textColor }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
