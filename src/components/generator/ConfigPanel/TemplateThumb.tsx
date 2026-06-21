import type { CSSProperties } from 'react';
import type { TemplateConfig } from '@/store/generator';

/** 依据模板配置生成缩略图背景样式 */
function getBackgroundStyle(config: Partial<TemplateConfig>): CSSProperties {
  if (config.backgroundType === 'gradient') {
    return {
      backgroundImage: `linear-gradient(${config.gradientAngle ?? 135}deg, ${
        config.gradientStart ?? '#0F172A'
      }, ${config.gradientEnd ?? '#2563EB'})`
    };
  }
  if (config.backgroundType === 'solid') {
    return { backgroundColor: config.backgroundColor ?? '#1f2937' };
  }
  if (config.backgroundType === 'image') {
    return config.backgroundColor
      ? { backgroundColor: config.backgroundColor }
      : { backgroundImage: 'linear-gradient(135deg, #1f2937, #111827)' };
  }
  return { backgroundColor: '#1f2937' };
}

interface TemplateThumbProps {
  config: Partial<TemplateConfig>;
  className?: string;
  /** 缩略图中标题文字大小（px） */
  fontSize?: number;
}

/** 模板缩略图：渲染封面背景 + 真实字体/颜色的标题文字，所见即所得 */
export function TemplateThumb({ config, className, fontSize = 12 }: TemplateThumbProps) {
  const title = config.title?.trim() || 'Aa';

  return (
    <div className={`relative overflow-hidden ${className ?? ''}`} style={getBackgroundStyle(config)} aria-hidden>
      <div className="absolute inset-0 flex items-center justify-center px-1.5">
        <span
          className="line-clamp-2 text-center leading-tight"
          style={{
            color: config.textColor ?? '#FFFFFF',
            fontFamily: config.fontFamily,
            fontWeight: config.fontWeight ?? 600,
            fontStyle: config.fontStyle === 'italic' ? 'italic' : 'normal',
            fontSize: `${fontSize}px`,
            letterSpacing: '-0.01em'
          }}
        >
          {title}
        </span>
      </div>
    </div>
  );
}
