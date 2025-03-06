import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FONT_FAMILIES } from '@/config/generator';
import { useGeneratorStore } from '@/store/generator';

export function FontConfig() {
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
        <h3 className="text-base font-medium">字体设置</h3>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-muted-foreground">字体</Label>
          <Select value={fontFamily} onValueChange={setFontFamily}>
            <SelectTrigger>
              <SelectValue placeholder="选择字体" />
            </SelectTrigger>
            <SelectContent>
              {FONT_FAMILIES.map(({ value, label }) => (
                <SelectItem key={value} value={value}>
                  <span style={{ fontFamily: value }}>{label}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
        <Label className="text-muted-foreground">行高</Label>
        <div className="flex items-center space-x-2">
          <Slider
            value={[lineHeight]}
            onValueChange={([value]) => setLineHeight(value)}
            min={1}
            max={3}
            step={0.1}
            className="flex-1"
          />
          <span className="w-12 text-sm text-muted-foreground text-right">{lineHeight}</span>
        </div>
      </div>
        <div className="space-y-2">
          <Label className="text-muted-foreground">字体倾斜</Label>
          <Select value={fontStyle} onValueChange={setFontStyle}>
            <SelectTrigger>
              <SelectValue placeholder="选择倾斜样式" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="normal">正常</SelectItem>
              <SelectItem value="italic">斜体</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-muted-foreground">字体大小</Label>
          <div className="flex items-center space-x-2">
            <Slider
              value={[fontSize]}
              onValueChange={([value]) => setFontSize(value)}
              min={20}
              max={200}
              step={1}
              className="flex-1"
            />
            <span className="w-12 text-sm text-muted-foreground text-right">{fontSize}px</span>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-muted-foreground">字间距</Label>
          <div className="flex items-center space-x-2">
            <Slider
              value={[letterSpacing]}
              onValueChange={([value]) => setLetterSpacing(value)}
              min={-10}
              max={30}
              step={0.5}
              className="flex-1"
            />
            <span className="w-12 text-sm text-muted-foreground text-right">{letterSpacing}px</span>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-muted-foreground">字重</Label>
          <div className="flex space-x-2">
            <Input
              type="number"
              value={fontWeight}
              onChange={(e) => setFontWeight(Number(e.target.value))}
              min={100}
              max={900}
              step={100}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-muted-foreground">文字颜色</Label>
          <div className="flex space-x-2">
            <Input value={textColor} onChange={(e) => setTextColor(e.target.value)} />
            <div className="relative w-10">
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
              />
              <div className="w-full h-full rounded-md border" style={{ backgroundColor: textColor }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
