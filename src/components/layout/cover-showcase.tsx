import { useEffect, useState } from 'react';

interface CoverDesign {
  background: string;
  title: string;
  subtitle: string;
  badge: string;
  emoji: string;
  textColor: string;
  subColor: string;
  badgeBg: string;
  align: 'left' | 'center';
}

const DESIGNS: CoverDesign[] = [
  {
    background: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #0f172a 100%)',
    title: 'Building Scalable Systems',
    subtitle: 'A deep dive into distributed architecture',
    badge: 'ENGINEERING',
    emoji: '⚡️',
    textColor: '#ffffff',
    subColor: 'rgba(255,255,255,0.7)',
    badgeBg: 'rgba(255,255,255,0.14)',
    align: 'left'
  },
  {
    background: 'linear-gradient(135deg, #f97316 0%, #ec4899 55%, #8b5cf6 100%)',
    title: 'Weekly Roundup',
    subtitle: 'The best of design & code · Issue #42',
    badge: 'NEWSLETTER',
    emoji: '✨',
    textColor: '#ffffff',
    subColor: 'rgba(255,255,255,0.82)',
    badgeBg: 'rgba(255,255,255,0.2)',
    align: 'left'
  },
  {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    title: 'Design Principles',
    subtitle: 'Clarity, rhythm, and intentional space',
    badge: 'GUIDE',
    emoji: '◎',
    textColor: '#0f172a',
    subColor: 'rgba(15,23,42,0.6)',
    badgeBg: 'rgba(15,23,42,0.08)',
    align: 'center'
  },
  {
    background: 'linear-gradient(135deg, #042f2e 0%, #0d9488 50%, #14b8a6 100%)',
    title: 'Launch Day is Here',
    subtitle: 'Everything new in version 2.0',
    badge: 'PRODUCT',
    emoji: '🚀',
    textColor: '#ffffff',
    subColor: 'rgba(255,255,255,0.78)',
    badgeBg: 'rgba(255,255,255,0.16)',
    align: 'center'
  },
  {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #db2777 120%)',
    title: 'The Future of Covers',
    subtitle: 'Crafted in the browser, exported in seconds',
    badge: 'STORY',
    emoji: '🎨',
    textColor: '#ffffff',
    subColor: 'rgba(255,255,255,0.72)',
    badgeBg: 'rgba(255,255,255,0.14)',
    align: 'left'
  }
];

export function CoverShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % DESIGNS.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-[460px] mx-auto">
      {/* 浮动的封面卡片 */}
      <div className="float-soft relative">
        <div className="relative rounded-2xl p-[1px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
          <div className="conic-border rounded-2xl" aria-hidden />
          <div className="relative aspect-[1.6] w-full overflow-hidden rounded-2xl bg-black">
            {DESIGNS.map((design, index) => (
              <div
                key={index}
                className="absolute inset-0 flex flex-col p-7 transition-opacity duration-1000 ease-out"
                style={{
                  background: design.background,
                  opacity: index === active ? 1 : 0,
                  alignItems: design.align === 'center' ? 'center' : 'flex-start',
                  textAlign: design.align,
                  justifyContent: 'center'
                }}
                aria-hidden={index !== active}
              >
                <span
                  className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.18em]"
                  style={{ background: design.badgeBg, color: design.textColor }}
                >
                  <span className="text-sm leading-none">{design.emoji}</span>
                  {design.badge}
                </span>
                <h3
                  className="text-2xl font-semibold leading-tight tracking-tight md:text-[28px]"
                  style={{ color: design.textColor, maxWidth: '90%' }}
                >
                  {design.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: design.subColor, maxWidth: '85%' }}>
                  {design.subtitle}
                </p>
              </div>
            ))}

            {/* 顶部高光 */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent"
              aria-hidden
            />
          </div>
        </div>

        {/* 模拟导出工具条 */}
        <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex items-center gap-1.5">
            {DESIGNS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                aria-label={`Preview design ${index + 1}`}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: index === active ? 20 : 6,
                  background: index === active ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.25)'
                }}
              />
            ))}
          </div>
          <span className="text-[11px] font-medium text-white/45">1280 × 800 · PNG</span>
        </div>
      </div>
    </div>
  );
}
