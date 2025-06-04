import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload } from 'lucide-react';
import { useGeneratorStore } from '@/store/generator';
import { handleImageUpload } from '@/utils/generator';
import { useTranslation } from 'react-i18next';

export function IconConfig() {
  const { t } = useTranslation();
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
        <h3 className="text-sm font-medium text-white/90 uppercase tracking-wide">
          {t('generator.config.icon.label')}
        </h3>
        <Switch
          checked={showIcon}
          onCheckedChange={setShowIcon}
          className="data-[state=checked]:bg-white/20 data-[state=unchecked]:bg-white/10"
        />
      </div>
      {showIcon && (
        <div className="space-y-4">
          <div className="space-y-3">
            <Label className="text-white/60 text-xs uppercase tracking-wide">
              {t('generator.config.icon.position')}
            </Label>
            <div className="mt-2">
              <Select value={iconPosition} onValueChange={setIconPosition}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white hover:bg-white/10 focus:border-white/20">
                  <SelectValue placeholder={t('generator.config.icon.position')} />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/10">
                  <SelectItem
                    value="top-left"
                    className="text-white hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white"
                  >
                    {t('generator.config.icon.topLeft')}
                  </SelectItem>
                  <SelectItem
                    value="top-right"
                    className="text-white hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white"
                  >
                    {t('generator.config.icon.topRight')}
                  </SelectItem>
                  <SelectItem
                    value="bottom-left"
                    className="text-white hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white"
                  >
                    {t('generator.config.icon.bottomLeft')}
                  </SelectItem>
                  <SelectItem
                    value="bottom-right"
                    className="text-white hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white"
                  >
                    {t('generator.config.icon.bottomRight')}
                  </SelectItem>
                  <SelectItem
                    value="center"
                    className="text-white hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white"
                  >
                    {t('generator.config.icon.center')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-white/60 text-xs uppercase tracking-wide">{t('generator.config.icon.size')}</Label>
            <div className="flex items-center space-x-3 mt-2">
              <Slider
                value={[iconSize]}
                onValueChange={([value]) => setIconSize(value)}
                min={20}
                max={200}
                step={1}
                className="flex-1"
              />
              <span className="w-12 text-sm text-white/60 text-right">{iconSize}px</span>
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-white/60 text-xs uppercase tracking-wide">
              {t('generator.config.icon.borderRadius')}
            </Label>
            <div className="flex items-center space-x-3 mt-2">
              <Slider
                value={[iconBorderRadius]}
                onValueChange={([value]) => setIconBorderRadius(value)}
                min={0}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="w-12 text-sm text-white/60 text-right">{iconBorderRadius}px</span>
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-white/60 text-xs uppercase tracking-wide">
              {t('generator.config.icon.padding')}
            </Label>
            <div className="flex items-center space-x-3 mt-2">
              <Slider
                value={[iconPadding]}
                onValueChange={([value]) => setIconPadding(value)}
                min={0}
                max={50}
                step={1}
                className="flex-1"
              />
              <span className="w-12 text-sm text-white/60 text-right">{iconPadding}px</span>
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-white/60 text-xs uppercase tracking-wide">
              {t('generator.config.icon.backgroundColor')}
            </Label>
            <div className="flex space-x-2 mt-2">
              <Input
                value={iconBgColor}
                onChange={(e) => setIconBgColor(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/20 focus:ring-white/20"
              />
              <div className="relative w-10 h-9">
                <input
                  type="color"
                  value={iconBgColor}
                  onChange={(e) => setIconBgColor(e.target.value)}
                  className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                />
                <div
                  className="w-full h-full rounded-md border border-white/20"
                  style={{ backgroundColor: iconBgColor }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-white/60 text-xs uppercase tracking-wide">{t('generator.config.icon.shadow')}</Label>
            <div className="flex items-center space-x-3 mt-2">
              <Slider
                value={[iconShadow]}
                onValueChange={([value]) => setIconShadow(value)}
                min={0}
                max={50}
                step={1}
                className="flex-1"
              />
              <span className="w-12 text-sm text-white/60 text-right">{iconShadow}px</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Label className="text-white/60 text-xs uppercase tracking-wide">
                  {t('generator.config.icon.uploadIcon')}
                </Label>
                <div className="mt-2">
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:bg-white/5 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-white/40" />
                        <p className="text-sm text-white/60">点击上传图标</p>
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
                <Label className="text-white/60 text-xs uppercase tracking-wide">图标链接</Label>
                <div className="mt-2">
                  <Input
                    placeholder="输入图标链接"
                    value={iconImage}
                    onChange={(e) => setIconImage(e.target.value)}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/20 focus:ring-white/20"
                  />
                </div>

                {!iconImage && (
                  <div className="mt-2 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      </div>
                      <div className="text-xs text-blue-200">
                        <p className="font-medium">💡 使用建议</p>
                        <p className="text-blue-200/70 mt-1">推荐使用上方的上传功能添加本地图片</p>
                      </div>
                    </div>
                  </div>
                )}

                {iconImage && !iconImage.startsWith('data:') && (
                  <div className="mt-2 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-yellow-500/20 flex items-center justify-center mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      </div>
                      <div className="text-xs text-yellow-200">
                        <p className="font-medium">⚠️ 在线图片提示</p>
                        <p className="text-yellow-200/70 mt-1">如导出失败，建议保存图片到本地后重新上传</p>
                      </div>
                    </div>
                  </div>
                )}

                {iconImage && iconImage.startsWith('data:') && (
                  <div className="mt-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      </div>
                      <div className="text-xs text-green-200">
                        <p className="font-medium">✅ 本地图片</p>
                        <p className="text-green-200/70 mt-1">导出成功率100%，加载速度快</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
