import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload } from 'lucide-react';
import { useGeneratorStore } from '@/store/generator';
import { handleImageUpload } from '@/utils/generator';

export function IconConfig() {
  const {
    showIcon,
    setShowIcon,
    iconPosition,
    setIconPosition,
    iconSize,
    setIconSize,
    iconBorderRadius,
    setIconBorderRadius,
    iconShadow,
    setIconShadow,
    iconImage,
    setIconImage,
    iconBgColor,         
    setIconBgColor,     
    iconPadding,         
    setIconPadding     
  } = useGeneratorStore();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-medium">图标设置</h3>
        <Switch checked={showIcon} onCheckedChange={setShowIcon} />
      </div>
      {showIcon && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-muted-foreground">图标位置</Label>
            <Select value={iconPosition} onValueChange={setIconPosition}>
              <SelectTrigger>
                <SelectValue placeholder="选择位置" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="top-left">左上角</SelectItem>
                <SelectItem value="top-right">右上角</SelectItem>
                <SelectItem value="bottom-left">左下角</SelectItem>
                <SelectItem value="bottom-right">右下角</SelectItem>
                <SelectItem value="center">居中</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-muted-foreground">图标大小</Label>
            <div className="flex items-center space-x-2">
              <Slider
                value={[iconSize]}
                onValueChange={([value]) => setIconSize(value)}
                min={20}
                max={200}
                step={1}
                className="flex-1"
              />
              <span className="w-12 text-sm text-muted-foreground text-right">{iconSize}px</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-muted-foreground">圆角大小</Label>
            <div className="flex items-center space-x-2">
              <Slider
                value={[iconBorderRadius]}
                onValueChange={([value]) => setIconBorderRadius(value)}
                min={0}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="w-12 text-sm text-muted-foreground text-right">{iconBorderRadius}px</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-muted-foreground">内边距</Label>
            <div className="flex items-center space-x-2">
              <Slider
                value={[iconPadding]}
                onValueChange={([value]) => setIconPadding(value)}
                min={0}
                max={50}
                step={1}
                className="flex-1"
              />
              <span className="w-12 text-sm text-muted-foreground text-right">{iconPadding}px</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-muted-foreground">背景颜色</Label>
            <div className="flex space-x-2">
              <Input value={iconBgColor} onChange={(e) => setIconBgColor(e.target.value)} />
              <div className="relative w-10">
                <input
                  type="color"
                  value={iconBgColor}
                  onChange={(e) => setIconBgColor(e.target.value)}
                  className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                />
                <div className="w-full h-full rounded-md border" style={{ backgroundColor: iconBgColor }} />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-muted-foreground">阴影大小</Label>
            <div className="flex items-center space-x-2">
              <Slider
                value={[iconShadow]}
                onValueChange={([value]) => setIconShadow(value)}
                min={0}
                max={50}
                step={1}
                className="flex-1"
              />
              <span className="w-12 text-sm text-muted-foreground text-right">{iconShadow}px</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Label className="text-muted-foreground">本地上传</Label>
                <div className="mt-2">
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">点击上传图标</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, setIconImage)}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <Label className="text-muted-foreground">图标链接</Label>
                <div className="mt-2">
                  <Input
                    placeholder="输入图标链接"
                    value={iconImage}
                    onChange={(e) => setIconImage(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}