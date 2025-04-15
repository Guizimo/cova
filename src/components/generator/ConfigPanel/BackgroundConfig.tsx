import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload } from 'lucide-react';
import { useGeneratorStore } from '@/store/generator';
import { handleImageUpload } from '@/utils/generator';
import { PRESET_COLORS, PRESET_GRADIENTS } from '@/config/generator';
import { useState } from 'react';

export function BackgroundConfig() {
  const {
    backgroundType,
    setBackgroundType,
    backgroundColor,
    setBackgroundColor,
    gradientStart,
    setGradientStart,
    gradientEnd,
    setGradientEnd,
    gradientAngle,
    setGradientAngle,
    backgroundImage,
    setBackgroundImage,
    backgroundSize,
    setBackgroundSize,
    backdropBlur,
    setBackdropBlur,
    borderRadius,
    setBorderRadius
  } = useGeneratorStore();

  // 添加渐变历史记录状态
  const [gradientHistory, setGradientHistory] = useState<Array<{ start: string; end: string }>>(() => {
    const saved = localStorage.getItem('gradientHistory');
    return saved ? JSON.parse(saved) : [];
  });

  // 处理渐变颜色变化
  const handleGradientChange = (start: string, end: string) => {
    setGradientStart(start);
    setGradientEnd(end);
    // 更新历史记录
    const newHistory = [{ start, end }, ...gradientHistory.filter((g) => g.start !== start || g.end !== end)].slice(
      0,
      5
    );
    setGradientHistory(newHistory);
    localStorage.setItem('gradientHistory', JSON.stringify(newHistory));
  };

  // 添加颜色历史记录状态
  const [colorHistory, setColorHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem('colorHistory');
    return saved ? JSON.parse(saved) : [];
  });

  // 处理颜色变化
  const handleColorChange = (color: string) => {
    setBackgroundColor(color);
    // 更新历史记录
    const newHistory = [color, ...colorHistory.filter((c) => c !== color)].slice(0, 5);
    setColorHistory(newHistory);
    localStorage.setItem('colorHistory', JSON.stringify(newHistory));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-medium">背景设置</h3>
      </div>
      <div className="space-y-4">
        <Tabs value={backgroundType} onValueChange={setBackgroundType}>
          <div className="space-y-2">
            <Label className="text-muted-foreground">模式</Label>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="solid">纯色</TabsTrigger>
              <TabsTrigger value="gradient">渐变</TabsTrigger>
              <TabsTrigger value="image">图片</TabsTrigger>
              <TabsTrigger value="transparent">透明</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="solid" className="space-y-4">
            <div className="space-y-2">
              <Label className="text-muted-foreground">预设颜色</Label>
              <div className="grid grid-cols-10 gap-1.5">
                {PRESET_COLORS.map(({ value, label }) => (
                  <button
                    key={value}
                    className="w-6 h-6 rounded-md border relative group hover:scale-110 transition-transform"
                    style={{ backgroundColor: value }}
                    onClick={() => handleColorChange(value)}
                    title={label}
                  >
                    {backgroundColor === value && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white">
                        <span className="text-[10px]">✓</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {colorHistory.length > 0 && (
              <div className="space-y-2">
                <Label className="text-muted-foreground">最近使用</Label>
                <div className="grid grid-cols-10 gap-1.5">
                  {colorHistory.map((color) => (
                    <button
                      key={color}
                      className="w-6 h-6 rounded-md border relative group hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorChange(color)}
                    >
                      {backgroundColor === color && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white">
                          <span className="text-[10px]">✓</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label className="text-muted-foreground">自定义颜色</Label>
              <div className="flex space-x-2">
                <Input value={backgroundColor} onChange={(e) => handleColorChange(e.target.value)} />
                <div className="relative w-10">
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => handleColorChange(e.target.value)}
                    className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                  />
                  <div className="w-full h-full rounded-md border" style={{ backgroundColor }} />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="gradient" className="space-y-4">
            <div className="space-y-2">
              <Label className="text-muted-foreground">预设渐变</Label>
              <div className="grid grid-cols-5 gap-1.5">
                {PRESET_GRADIENTS.map(({ start, end, label }) => (
                  <button
                    key={`${start}-${end}`}
                    className="w-full h-6 rounded-md border relative group hover:scale-110 transition-transform"
                    style={{
                      background: `linear-gradient(${gradientAngle}deg, ${start}, ${end})`
                    }}
                    onClick={() => handleGradientChange(start, end)}
                    title={label}
                  >
                    {gradientStart === start && gradientEnd === end && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white">
                        <span className="text-[10px]">✓</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
            {gradientHistory.length > 0 && (
              <div className="space-y-2">
                <Label className="text-muted-foreground">最近使用</Label>
                <div className="grid grid-cols-5 gap-1.5">
                  {gradientHistory.map(({ start, end }) => (
                    <button
                      key={`${start}-${end}`}
                      className="w-full h-6 rounded-md border relative group hover:scale-110 transition-transform"
                      style={{
                        background: `linear-gradient(${gradientAngle}deg, ${start}, ${end})`
                      }}
                      onClick={() => handleGradientChange(start, end)}
                    >
                      {gradientStart === start && gradientEnd === end && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white">
                          <span className="text-[10px]">✓</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label className="text-muted-foreground">起始颜色</Label>
              <div className="flex space-x-2">
                <Input value={gradientStart} onChange={(e) => setGradientStart(e.target.value)} />
                <div className="relative w-10">
                  <input
                    type="color"
                    value={gradientStart}
                    onChange={(e) => setGradientStart(e.target.value)}
                    className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                  />
                  <div className="w-full h-full rounded-md border" style={{ backgroundColor: gradientStart }} />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-muted-foreground">结束颜色</Label>
              <div className="flex space-x-2">
                <Input value={gradientEnd} onChange={(e) => setGradientEnd(e.target.value)} />
                <div className="relative w-10">
                  <input
                    type="color"
                    value={gradientEnd}
                    onChange={(e) => setGradientEnd(e.target.value)}
                    className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                  />
                  <div className="w-full h-full rounded-md border" style={{ backgroundColor: gradientEnd }} />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-muted-foreground">渐变角度</Label>
              <div className="flex items-center space-x-2">
                <Slider
                  value={[gradientAngle]}
                  onValueChange={([value]) => setGradientAngle(value)}
                  min={0}
                  max={360}
                  step={1}
                  className="flex-1"
                />
                <span className="w-12 text-sm text-muted-foreground text-right">{gradientAngle}°</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="image" className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label className="text-muted-foreground">本地上传</Label>
                  <div className="mt-2">
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">点击上传图片</p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, setBackgroundImage)}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <Label className="text-muted-foreground">图片链接</Label>
                  <div className="mt-2">
                    <Input
                      placeholder="输入图片链接"
                      value={backgroundImage}
                      onChange={(e) => setBackgroundImage(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground">图片填充方式</Label>
                <Select value={backgroundSize} onValueChange={(value: 'cover' | 'contain') => setBackgroundSize(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择填充方式" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cover">填充</SelectItem>
                    <SelectItem value="contain">适应</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        {/* 添加毛玻璃效果设置 */}
        <div className="space-y-2">
          <Label className="text-muted-foreground">毛玻璃效果</Label>
          <div className="flex items-center space-x-2">
            <Slider
              value={[backdropBlur]}
              onValueChange={([value]) => setBackdropBlur(value)}
              min={0}
              max={20}
              step={0.5}
              className="flex-1"
            />
            <span className="w-12 text-sm text-muted-foreground text-right">{backdropBlur}px</span>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-muted-foreground">背景圆角大小</Label>
          <div className="flex items-center space-x-2">
            <Slider
              value={[borderRadius]}
              onValueChange={([value]) => setBorderRadius(value)}
              min={0}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="w-12 text-sm text-muted-foreground text-right">{borderRadius}px</span>
          </div>
        </div>
      </div>
    </div>
  );
}
