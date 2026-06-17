interface Thumb {
  background: string;
  label: string;
  textColor: string;
}

const THUMBS: Thumb[] = [
  { background: 'linear-gradient(135deg, #4338ca, #0f172a)', label: 'Tech', textColor: '#fff' },
  { background: 'linear-gradient(135deg, #f97316, #ec4899)', label: 'Roundup', textColor: '#fff' },
  { background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)', label: 'Guide', textColor: '#0f172a' },
  { background: 'linear-gradient(135deg, #0d9488, #14b8a6)', label: 'Product', textColor: '#fff' },
  { background: 'linear-gradient(135deg, #1e293b, #db2777)', label: 'Story', textColor: '#fff' },
  { background: 'linear-gradient(135deg, #7c3aed, #2563eb)', label: 'Release', textColor: '#fff' },
  { background: 'linear-gradient(135deg, #fbbf24, #f97316)', label: 'Weekly', textColor: '#1c1917' },
  { background: 'linear-gradient(135deg, #0ea5e9, #6366f1)', label: 'Deep Dive', textColor: '#fff' }
];

function ThumbCard({ thumb }: { thumb: Thumb }) {
  return (
    <div
      className="flex aspect-[1.6] w-[220px] shrink-0 flex-col justify-end overflow-hidden rounded-xl border border-white/10 p-4 shadow-lg"
      style={{ background: thumb.background }}
    >
      <span className="text-base font-semibold tracking-tight" style={{ color: thumb.textColor }}>
        {thumb.label}
      </span>
    </div>
  );
}

export function CoverMarquee() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/[0.06] py-14 md:py-16">
      <div className="relative">
        {/* 两侧渐隐遮罩 */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent md:w-40" />

        <div className="marquee-track gap-5">
          {[...THUMBS, ...THUMBS].map((thumb, index) => (
            <ThumbCard key={index} thumb={thumb} />
          ))}
        </div>
      </div>
    </section>
  );
}
