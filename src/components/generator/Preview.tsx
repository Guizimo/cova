import { useGeneratorStore } from '@/store/generator';
import { computeBackgroundStyle } from '@/utils/generator';
import { Loader2 } from 'lucide-react';
import { useMemo, useEffect, useState } from 'react';

export function Preview() {
  const {
    title,
    subtitle,
    isCustomSize,
    customWidth,
    customHeight,
    selectedSize,
    borderRadius,
    backgroundType,
    backgroundColor,
    gradientStart,
    gradientEnd,
    gradientAngle,
    backgroundImage,
    backgroundSize,
    backgroundPosition,
    fontSize,
    fontFamily,
    fontWeight,
    fontStyle,
    textColor,
    lineHeight,
    letterSpacing,
    showIcon,
    iconPosition,
    iconSize,
    iconBorderRadius,
    iconShadow,
    backdropBlur,
    iconImage,
    iconBgColor,
    iconPadding,
    isExporting
  } = useGeneratorStore();

  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setContainerSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const backgroundStyle = computeBackgroundStyle(
    backgroundType,
    backgroundColor,
    gradientStart,
    gradientEnd,
    gradientAngle,
    backgroundImage,
    backgroundSize,
    backgroundPosition
  );

  const getIconPosition = () => {
    switch (iconPosition) {
      case 'top-left':
        return { top: '20px', left: '20px' };
      case 'top-right':
        return { top: '20px', right: '20px' };
      case 'bottom-left':
        return { bottom: '20px', left: '20px' };
      case 'bottom-right':
        return { bottom: '20px', right: '20px' };
      case 'center':
        return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
      default:
        return { top: '20px', left: '20px' };
    }
  };

  const coverWidth = isCustomSize ? customWidth : selectedSize.width;
  const coverHeight = isCustomSize ? customHeight : selectedSize.height;
  const showCheckerboard = backgroundType === 'transparent';

  // 计算预览缩放比例，确保在移动端也能完整显示
  const scale = useMemo(() => {
    const containerWidth = containerSize.width;
    const containerHeight = containerSize.height;

    // 移动端给更多边距
    const padding = containerWidth < 768 ? 40 : 80;
    const maxWidth = containerWidth - padding;
    // 为header、tabs和底部留空间
    const maxHeight = containerWidth < 1024 ? containerHeight - 220 : containerHeight - 200;

    const scaleX = maxWidth / coverWidth;
    const scaleY = maxHeight / coverHeight;

    return Math.min(scaleX, scaleY, 1); // 最大不超过原尺寸
  }, [containerSize, coverWidth, coverHeight]);

  return (
    <div className="flex h-full flex-col bg-black">
      <div className="flex-1 overflow-auto bg-[#0a0a0a] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
        <div className="flex h-full min-h-full items-center justify-center p-4 lg:p-6">
          {/* 导出加载层 */}
          {isExporting && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
              <div className="flex flex-col items-center space-y-3">
                <Loader2 className="w-8 h-8 text-white animate-spin" />
                <span className="text-white text-sm">正在导出...</span>
              </div>
            </div>
          )}

          {/* 预览容器 */}
          <div className="relative flex flex-col items-center" style={{ transform: `scale(${scale})` }}>
            {/* 背景装饰 */}
            <div className="absolute -inset-4 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-2xl blur-xl opacity-20" />

            {/* 透明背景时的棋盘格 */}
            {showCheckerboard && (
              <div
                className="absolute border border-white/10 rounded-lg overflow-hidden shadow-2xl"
                style={{
                  width: coverWidth,
                  height: coverHeight,
                  borderRadius: `${borderRadius}px`,
                  backgroundImage: `
                    linear-gradient(45deg, #3a3a3a 25%, transparent 25%),
                    linear-gradient(-45deg, #3a3a3a 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #3a3a3a 75%),
                    linear-gradient(-45deg, transparent 75%, #3a3a3a 75%)
                  `,
                  backgroundSize: '16px 16px',
                  backgroundPosition: '0 0, 8px 0, 8px -8px, 0 8px',
                  backgroundColor: '#2a2a2a'
                }}
                aria-hidden
              />
            )}

            <div
              id="cover-preview"
              className="border border-white/10 relative overflow-hidden shadow-2xl"
              style={{
                width: coverWidth,
                height: coverHeight,
                borderRadius: `${borderRadius}px`,
                position: 'relative'
              }}
            >
              {/* 背景层 */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  ...backgroundStyle
                }}
              />

              {/* 毛玻璃效果层 */}
              {backdropBlur > 0 && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backdropFilter: `blur(${backdropBlur}px)`,
                    WebkitBackdropFilter: `blur(${backdropBlur}px)`,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                />
              )}

              {/* 内容层 */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100%',
                  textAlign: 'center',
                  zIndex: 1,
                  padding: '0 20px'
                }}
              >
                <div
                  style={{
                    fontSize: `${fontSize}px`,
                    fontFamily,
                    fontWeight,
                    fontStyle,
                    color: textColor,
                    letterSpacing: `${letterSpacing}px`,
                    whiteSpace: 'pre-wrap',
                    lineHeight: lineHeight
                  }}
                >
                  {title}
                </div>
                {subtitle && (
                  <div
                    style={{
                      fontSize: `${Math.max(14, Math.round(fontSize * 0.45))}px`,
                      fontFamily,
                      fontWeight,
                      fontStyle,
                      color: textColor,
                      opacity: 0.9,
                      marginTop: `${Math.round(fontSize * 0.15)}px`,
                      whiteSpace: 'pre-wrap',
                      lineHeight: lineHeight
                    }}
                  >
                    {subtitle}
                  </div>
                )}
              </div>

              {/* 图标层 */}
              {showIcon && iconImage && (
                <div
                  style={{
                    position: 'absolute',
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                    borderRadius: `${iconBorderRadius}px`,
                    boxShadow: iconShadow ? `0 0 ${iconShadow}px rgba(0, 0, 0, 0.2)` : 'none',
                    padding: `${iconPadding}px`,
                    backgroundColor: iconBgColor,
                    ...getIconPosition()
                  }}
                >
                  <img
                    src={iconImage}
                    alt="Icon"
                    className="w-full h-full object-cover"
                    style={{
                      borderRadius: `${iconBorderRadius}px`
                    }}
                  />
                </div>
              )}
            </div>

            {/* 尺寸标签 */}
            <span className="mt-2 text-xs text-white/40 font-mono tabular-nums" style={{ position: 'relative' }}>
              {coverWidth} × {coverHeight}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
