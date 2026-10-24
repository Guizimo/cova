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
      className="relative flex aspect-[1.6] w-[220px] shrink-0 flex-col justify-end overflow-hidden rounded-2xl border border-white/15 p-4 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)]"
      style={{ background: thumb.background }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/25 to-transparent"
        aria-hidden
      />
      <span className="relative text-base font-semibold tracking-tight" style={{ color: thumb.textColor }}>
        {thumb.label}
      </span>
    </div>
  );
}

export function CoverMarquee() {
  return (
    <section className="relative w-full overflow-hidden py-14 md:py-16">
      <div className="hairline-aurora absolute inset-x-0 top-0" aria-hidden />
      <div className="relative">
        <div className="fade-edge-left pointer-events-none absolute inset-y-0 left-0 z-10 w-24 md:w-40" />
        <div className="fade-edge-right pointer-events-none absolute inset-y-0 right-0 z-10 w-24 md:w-40" />

        <div className="marquee-track gap-5">
          {[...THUMBS, ...THUMBS].map((thumb, index) => (
            <ThumbCard key={index} thumb={thumb} />
          ))}
        </div>
      </div>
    </section>
  );
}
