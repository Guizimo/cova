import { useGeneratorStore } from '@/store/generator';
import { computeBackgroundStyle } from '@/utils/generator';
import { Loader2 } from 'lucide-react';

export function Preview() {
  const {
    title,
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

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <div className="flex-1 overflow-auto bg-muted/40">
        <div className="flex h-full items-center justify-center p-6">
          {/* 导出加载层 */}
          {isExporting && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="flex flex-col items-center space-y-2">
                <Loader2 className="w-8 h-8 text-white animate-spin" />
                <span className="text-white text-sm">正在导出...</span>
              </div>
            </div>
          )}
          <div
            id="cover-preview"
            className="border-0 relative overflow-hidden"
            style={{
              width: isCustomSize ? customWidth : selectedSize.width,
              height: isCustomSize ? customHeight : selectedSize.height,
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
                fontSize: `${fontSize}px`,
                fontFamily,
                fontWeight,
                fontStyle,
                color: textColor,
                letterSpacing: `${letterSpacing}px`,
                width: '100%',
                textAlign: 'center',
                whiteSpace: 'pre-wrap',
                lineHeight: lineHeight,
                zIndex: 1
              }}
            >
              {title}
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
                  ...getIconPosition(),
                }}
              >
                <img
                  src={iconImage}
                  alt="Icon"
                  className="w-full h-full object-contain"
                  style={{
                    borderRadius: `${iconBorderRadius}px`,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
