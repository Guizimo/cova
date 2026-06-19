import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GripVertical, PanelLeftClose, SlidersHorizontal } from 'lucide-react';
import { ConfigPanel } from './ConfigPanel';

const PANEL_WIDTH = 360;
const MARGIN = 16;

export function FloatingConfigPanel() {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const [pos, setPos] = useState({ x: MARGIN, y: MARGIN });
  const [dragging, setDragging] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<{ px: number; py: number; ox: number; oy: number } | null>(null);

  useEffect(() => {
    if (!dragging) return;

    const onMove = (e: PointerEvent) => {
      const start = dragStart.current;
      const panel = panelRef.current;
      if (!start || !panel) return;
      const parent = panel.parentElement;
      let nx = start.ox + (e.clientX - start.px);
      let ny = start.oy + (e.clientY - start.py);
      if (parent) {
        const maxX = parent.clientWidth - panel.offsetWidth - MARGIN;
        const maxY = parent.clientHeight - 48 - MARGIN; // 始终保留标题栏在可视区
        nx = Math.max(MARGIN, Math.min(nx, Math.max(MARGIN, maxX)));
        ny = Math.max(MARGIN, Math.min(ny, Math.max(MARGIN, maxY)));
      }
      setPos({ x: nx, y: ny });
    };
    const onUp = () => setDragging(false);

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [dragging]);

  const startDrag = (e: React.PointerEvent) => {
    dragStart.current = { px: e.clientX, py: e.clientY, ox: pos.x, oy: pos.y };
    setDragging(true);
  };

  return (
    <div
      ref={panelRef}
      className="absolute z-30 flex flex-col overflow-hidden rounded-2xl border border-white/12 bg-black/65 shadow-2xl shadow-black/50 backdrop-blur-xl"
      style={{
        left: pos.x,
        top: pos.y,
        width: PANEL_WIDTH,
        maxHeight: `calc(100% - ${pos.y + MARGIN}px)`
      }}
    >
      {/* 标题栏 / 拖动手柄 */}
      <div
        onPointerDown={startDrag}
        className={`flex flex-shrink-0 items-center justify-between gap-2 border-b border-white/10 bg-white/[0.04] px-3 py-2 select-none ${
          dragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        title={t('generator.controls.dragHint')}
      >
        <div className="flex items-center gap-2 text-white/80">
          <GripVertical className="h-4 w-4 text-white/35" />
          <SlidersHorizontal className="h-3.5 w-3.5 text-indigo-300" />
          <span className="text-xs font-medium uppercase tracking-wide">{t('generator.controls.title')}</span>
        </div>
        <button
          type="button"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => setCollapsed((v) => !v)}
          aria-label={collapsed ? t('generator.controls.expand') : t('generator.controls.collapse')}
          title={collapsed ? t('generator.controls.expand') : t('generator.controls.collapse')}
          className="flex h-7 w-7 items-center justify-center rounded-md text-white/55 transition-colors hover:bg-white/10 hover:text-white"
        >
          <PanelLeftClose className={`h-4 w-4 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* 控制内容 */}
      {!collapsed && (
        <div className="min-h-0 flex-1 overflow-hidden">
          <ConfigPanel />
        </div>
      )}
    </div>
  );
}
