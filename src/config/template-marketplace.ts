import type { TemplateConfig } from '@/store/generator';

export interface MarketplaceTemplate {
  id: string;
  category: 'all' | 'tech' | 'social' | 'minimal';
  nameKey: string;
  descriptionKey: string;
  config: TemplateConfig;
}

export const MARKETPLACE_TEMPLATES: MarketplaceTemplate[] = [
  {
    id: 'tech-dark',
    category: 'tech',
    nameKey: 'generator.templates.marketplace.items.techDark.name',
    descriptionKey: 'generator.templates.marketplace.items.techDark.description',
    config: {
      title: 'Build in Public',
      subtitle: 'Ship fast, learn faster',
      fontFamily: 'sans-serif',
      fontSize: 88,
      fontWeight: 700,
      letterSpacing: -2,
      lineHeight: 1.15,
      textColor: '#FFFFFF',
      backgroundType: 'gradient',
      gradientStart: '#0F172A',
      gradientEnd: '#2563EB',
      gradientAngle: 130,
      borderRadius: 20
    }
  },
  {
    id: 'creator-warm',
    category: 'social',
    nameKey: 'generator.templates.marketplace.items.creatorWarm.name',
    descriptionKey: 'generator.templates.marketplace.items.creatorWarm.description',
    config: {
      title: 'Creator Weekly',
      subtitle: 'Design insights and growth',
      fontFamily: '"ZCOOL QingKe HuangYou", cursive',
      fontSize: 76,
      fontWeight: 600,
      lineHeight: 1.2,
      textColor: '#1F2937',
      backgroundType: 'gradient',
      gradientStart: '#FDE68A',
      gradientEnd: '#FCA5A5',
      gradientAngle: 24,
      borderRadius: 24
    }
  },
  {
    id: 'minimal-light',
    category: 'minimal',
    nameKey: 'generator.templates.marketplace.items.minimalLight.name',
    descriptionKey: 'generator.templates.marketplace.items.minimalLight.description',
    config: {
      title: 'Product Notes',
      subtitle: 'Simple. Useful. Shippable.',
      fontFamily: 'serif',
      fontSize: 72,
      fontWeight: 500,
      lineHeight: 1.3,
      textColor: '#111827',
      backgroundType: 'solid',
      backgroundColor: '#F9FAFB',
      borderRadius: 16
    }
  }
];
