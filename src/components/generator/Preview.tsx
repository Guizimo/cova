import { useGeneratorStore } from '@/store/generator';
import { computeBackgroundStyle } from '@/utils/generator';
import { Loader2, ZoomIn, ZoomOut, Maximize2, Grid3x3 } from 'lucide-react';
import { useMemo, useEffect, useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const MIN_ZOOM = 0.1;
const MAX_ZOOM = 5;
const GRID_BASE = 24;

export function Preview() {
  const { t } = useTranslation();
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

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // 用 ResizeObserver 监听真实预览区域尺寸：拖动分栏、窗口缩放、移动端切换 Tab 都能自适应
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateSize = () => setContainerSize({ width: el.clientWidth, height: el.clientHeight });
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(el);
    return () => observer.disconnect();
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

  // 缩放/平移/网格状态
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [showGrid, setShowGrid] = useState(true);
  const [panning, setPanning] = useState(false);
  const panStart = useRef<{ px: number; py: number; ox: number; oy: number } | null>(null);

  // 自适应缩放比例：让封面恰好放入预览区域
  const fitZoom = useMemo(() => {
    const { width, height } = containerSize;
    if (!width || !height) return 1;
    const horizontalPadding = width < 768 ? 48 : 96;
    const verticalPadding = (width < 768 ? 48 : 96) + 28;
    const maxWidth = Math.max(0, width - horizontalPadding);
    const maxHeight = Math.max(0, height - verticalPadding);
    const next = Math.min(maxWidth / coverWidth, maxHeight / coverHeight, 1);
    return next > 0 ? next : 1;
  }, [containerSize, coverWidth, coverHeight]);

  // 适应屏幕：重置缩放与平移
  const fitToScreen = useCallback(() => {
    setZoom(fitZoom);
    setPan({ x: 0, y: 0 });
  }, [fitZoom]);

  // 首次测量到容器尺寸、或切换封面尺寸时，自动适应屏幕（拖动分栏等不会打断用户当前缩放）
  const sizeKey = `${coverWidth}x${coverHeight}`;
  const lastSizeKey = useRef('');
  useEffect(() => {
    if (!containerSize.width) return;
    if (lastSizeKey.current !== sizeKey) {
      lastSizeKey.current = sizeKey;
      setZoom(fitZoom);
      setPan({ x: 0, y: 0 });
    }
  }, [sizeKey, fitZoom, containerSize.width]);

  // 以某锚点为中心缩放（锚点为相对容器中心的偏移），保持锚点视觉位置不变
  const applyZoom = useCallback((nextZoom: number, anchorX = 0, anchorY = 0) => {
    setZoom((current) => {
      const clamped = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, nextZoom));
      const factor = clamped / current;
      setPan((p) => ({
        x: anchorX * (1 - factor) + p.x * factor,
        y: anchorY * (1 - factor) + p.y * factor
      }));
      return clamped;
    });
  }, []);

  const zoomBy = useCallback((ratio: number) => applyZoom(zoom * ratio), [applyZoom, zoom]);

  // 滚轮缩放（锚定光标位置）
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const anchorX = e.clientX - rect.left - rect.width / 2;
      const anchorY = e.clientY - rect.top - rect.height / 2;
      const ratio = e.deltaY < 0 ? 1.1 : 1 / 1.1;
      applyZoom(zoom * ratio, anchorX, anchorY);
    },
    [applyZoom, zoom]
  );

  // 拖动平移
  const startPan = useCallback(
    (e: React.PointerEvent) => {
      if (e.button !== 0) return;
      panStart.current = { px: e.clientX, py: e.clientY, ox: pan.x, oy: pan.y };
      setPanning(true);
    },
    [pan]
  );

  useEffect(() => {
    if (!panning) return;
    const onMove = (e: PointerEvent) => {
      const s = panStart.current;
      if (!s) return;
      setPan({ x: s.ox + (e.clientX - s.px), y: s.oy + (e.clientY - s.py) });
    };
    const onUp = () => setPanning(false);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [panning]);

  return (
    <div className="flex h-full flex-col bg-black">
      <div
        ref={containerRef}
        onWheel={handleWheel}
        onPointerDown={startPan}
        className={`relative flex-1 overflow-hidden bg-[#0a0a0a] ${panning ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{
          touchAction: 'none',
          backgroundImage: showGrid
            ? `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`
            : undefined,
          backgroundSize: showGrid ? `${GRID_BASE * zoom}px ${GRID_BASE * zoom}px` : undefined,
          backgroundPosition: showGrid ? `calc(50% + ${pan.x}px) calc(50% + ${pan.y}px)` : undefined
        }}
      >
        <div className="flex h-full min-h-full items-center justify-center p-4 lg:p-6">
          {/* 导出加载层 */}
          {isExporting && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
              <div className="flex flex-col items-center space-y-3">
                <Loader2 className="w-8 h-8 text-white animate-spin" />
                <span className="text-white text-sm">{t('generator.export.exporting')}</span>
              </div>
            </div>
          )}

          {/* 预览容器 */}
          <div
            className="relative flex flex-col items-center"
            style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }}
          >
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
          </div>
        </div>

        {/* 画布工具条：缩放 / 适应 / 网格 */}
        <div
          onPointerDown={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
          className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 rounded-xl border border-white/10 bg-black/65 px-1.5 py-1 shadow-2xl shadow-black/50 backdrop-blur-xl"
        >
          <button
            type="button"
            onClick={() => zoomBy(1 / 1.2)}
            aria-label={t('generator.canvas.zoomOut')}
            title={t('generator.canvas.zoomOut')}
            className="flex h-7 w-7 items-center justify-center rounded-md text-white/65 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={fitToScreen}
            title={t('generator.canvas.resetZoom')}
            className="min-w-[52px] rounded-md px-1.5 py-1 text-center text-xs font-medium tabular-nums text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            {Math.round(zoom * 100)}%
          </button>
          <button
            type="button"
            onClick={() => zoomBy(1.2)}
            aria-label={t('generator.canvas.zoomIn')}
            title={t('generator.canvas.zoomIn')}
            className="flex h-7 w-7 items-center justify-center rounded-md text-white/65 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <span className="mx-0.5 h-4 w-px bg-white/10" />
          <button
            type="button"
            onClick={fitToScreen}
            aria-label={t('generator.canvas.fit')}
            title={t('generator.canvas.fit')}
            className="flex h-7 w-7 items-center justify-center rounded-md text-white/65 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setShowGrid((v) => !v)}
            aria-label={t('generator.canvas.grid')}
            title={t('generator.canvas.grid')}
            aria-pressed={showGrid}
            className={`flex h-7 w-7 items-center justify-center rounded-md transition-colors hover:bg-white/10 ${
              showGrid ? 'bg-white/10 text-white' : 'text-white/65 hover:text-white'
            }`}
          >
            <Grid3x3 className="h-4 w-4" />
          </button>
          <span className="mx-0.5 h-4 w-px bg-white/10" />
          <span className="px-1.5 text-[11px] font-mono tabular-nums text-white/40">
            {coverWidth} × {coverHeight}
          </span>
        </div>
      </div>
    </div>
  );
}
