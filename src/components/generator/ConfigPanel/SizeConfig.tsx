import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PRESET_SIZES } from '@/config/generator';
import { useGeneratorStore } from '@/store/generator';

export function SizeConfig() {
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
        <h3 className="text-base font-medium">封面尺寸</h3>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
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
              <SelectTrigger>
                <SelectValue placeholder="选择尺寸" />
              </SelectTrigger>
              <SelectContent>
                {PRESET_SIZES.map((size) => (
                  <SelectItem key={`${size.width}x${size.height}`} value={`${size.width}x${size.height}`}>
                    {size.label}
                  </SelectItem>
                ))}
                <SelectItem value="custom">自定义尺寸</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {isCustomSize && (
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label className="text-muted-foreground">宽度</Label>
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    value={customWidth}
                    onChange={(e) => setCustomWidth(Number(e.target.value))}
                    min={100}
                    max={3840}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground">高度</Label>
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    value={customHeight}
                    onChange={(e) => setCustomHeight(Number(e.target.value))}
                    min={100}
                    max={2160}
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
