import { Plus } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

function FeatureCard({ title, description, image }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#1C1C1C] hover:bg-[#222222] transition-colors">
      <div className="relative aspect-[2/1] p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
          <p className="text-sm text-white/60 max-w-[280px]">{description}</p>
        </div>
        <div className="flex justify-between items-end">
          <img src={image} alt={title} className="w-24 h-24 object-cover" />
          <button className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Features() {
  const features = [
    {
      title: "专为封面设计打造",
      description: "从设计到导出，一站式解决封面设计需求，让创作更加专注。",
      image: "/features/design.png"
    },
    {
      title: "极致的设计体验",
      description: "优化的工作流程，50ms 的响应速度，让设计更加流畅自然。",
      image: "/features/speed.png"
    },
    {
      title: "精心打磨的细节",
      description: "每一个交互都经过精心设计，带来卓越的使用体验。",
      image: "/features/craft.png"
    }
  ];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
            为现代创作者打造
          </h2>
          <p className="text-lg text-white/60 max-w-xl">
            Cova 由创作者的实践和原则塑造，专注于提供极致的设计体验。
            <a href="/about" className="text-white hover:text-white/90 ml-1 inline-flex items-center">
              了解更多
              <span className="ml-1">→</span>
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}