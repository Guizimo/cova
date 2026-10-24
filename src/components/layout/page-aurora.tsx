interface PageAuroraProps {
  /** 首页主视觉用更大的光斑 */
  intense?: boolean;
  /** 底部渐隐到页面底色 */
  fade?: boolean;
  /** 淡网格，只铺在首屏 */
  grid?: boolean;
}

export function PageAurora({ intense = false, fade = false, grid = false }: PageAuroraProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className={`aurora-blob aurora-1 left-[-12%] top-[-22%] bg-indigo-500/35 ${
          intense ? 'h-[520px] w-[520px]' : 'h-[380px] w-[380px]'
        }`}
      />
      <div
        className={`aurora-blob aurora-2 right-[-10%] top-[-14%] bg-fuchsia-500/28 ${
          intense ? 'h-[440px] w-[440px]' : 'h-[320px] w-[320px]'
        }`}
      />
      <div
        className={`aurora-blob aurora-3 left-[30%] top-[6%] bg-cyan-400/20 ${
          intense ? 'h-[420px] w-[420px]' : 'h-[280px] w-[280px]'
        }`}
      />
      {grid && <div className="aurora-grid absolute inset-0 opacity-80" />}
      {fade && <div className="fade-to-page absolute inset-x-0 bottom-0 h-36" />}
    </div>
  );
}
