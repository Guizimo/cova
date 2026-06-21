import type { TemplateConfig } from '@/store/generator';

export type MarketplaceCategory = 'tech' | 'social' | 'minimal' | 'vibrant' | 'dark';
export type MarketplaceFilter = 'all' | MarketplaceCategory;

export interface MarketplaceTemplate {
  id: string;
  category: MarketplaceCategory;
  nameKey: string;
  descriptionKey: string;
  config: TemplateConfig;
}

export const MARKETPLACE_CATEGORIES: MarketplaceFilter[] = ['all', 'tech', 'social', 'minimal', 'vibrant', 'dark'];

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
  },
  {
    id: 'midnight-pro',
    category: 'dark',
    nameKey: 'generator.templates.marketplace.items.midnightPro.name',
    descriptionKey: 'generator.templates.marketplace.items.midnightPro.description',
    config: {
      title: 'Release v2.0',
      subtitle: "What's new this month",
      fontFamily: 'sans-serif',
      fontSize: 90,
      fontWeight: 800,
      letterSpacing: -2.5,
      lineHeight: 1.1,
      textColor: '#F8FAFC',
      backgroundType: 'gradient',
      gradientStart: '#020617',
      gradientEnd: '#1E293B',
      gradientAngle: 160,
      borderRadius: 18
    }
  },
  {
    id: 'sunset-pop',
    category: 'vibrant',
    nameKey: 'generator.templates.marketplace.items.sunsetPop.name',
    descriptionKey: 'generator.templates.marketplace.items.sunsetPop.description',
    config: {
      title: 'Big Launch Day',
      subtitle: 'Join the celebration',
      fontFamily: 'sans-serif',
      fontSize: 84,
      fontWeight: 800,
      letterSpacing: -1.5,
      lineHeight: 1.12,
      textColor: '#FFFFFF',
      backgroundType: 'gradient',
      gradientStart: '#F97316',
      gradientEnd: '#DB2777',
      gradientAngle: 45,
      borderRadius: 26
    }
  },
  {
    id: 'ocean-calm',
    category: 'tech',
    nameKey: 'generator.templates.marketplace.items.oceanCalm.name',
    descriptionKey: 'generator.templates.marketplace.items.oceanCalm.description',
    config: {
      title: 'Cloud Native',
      subtitle: 'Scale without limits',
      fontFamily: 'sans-serif',
      fontSize: 80,
      fontWeight: 700,
      letterSpacing: -1.5,
      lineHeight: 1.15,
      textColor: '#F0F9FF',
      backgroundType: 'gradient',
      gradientStart: '#0EA5E9',
      gradientEnd: '#0F766E',
      gradientAngle: 120,
      borderRadius: 20
    }
  },
  {
    id: 'mono-paper',
    category: 'minimal',
    nameKey: 'generator.templates.marketplace.items.monoPaper.name',
    descriptionKey: 'generator.templates.marketplace.items.monoPaper.description',
    config: {
      title: 'The Essay',
      subtitle: 'Thoughts on craft',
      fontFamily: 'serif',
      fontSize: 78,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.25,
      textColor: '#1C1917',
      backgroundType: 'solid',
      backgroundColor: '#FAFAF9',
      borderRadius: 12
    }
  },
  {
    id: 'neon-grid',
    category: 'vibrant',
    nameKey: 'generator.templates.marketplace.items.neonGrid.name',
    descriptionKey: 'generator.templates.marketplace.items.neonGrid.description',
    config: {
      title: 'Future Stack',
      subtitle: 'Built for tomorrow',
      fontFamily: 'sans-serif',
      fontSize: 86,
      fontWeight: 800,
      letterSpacing: -2,
      lineHeight: 1.1,
      textColor: '#FDF4FF',
      backgroundType: 'gradient',
      gradientStart: '#7C3AED',
      gradientEnd: '#DB2777',
      gradientAngle: 135,
      borderRadius: 22
    }
  },
  {
    id: 'forest-zen',
    category: 'social',
    nameKey: 'generator.templates.marketplace.items.forestZen.name',
    descriptionKey: 'generator.templates.marketplace.items.forestZen.description',
    config: {
      title: 'Mindful Notes',
      subtitle: 'Slow down and focus',
      fontFamily: 'sans-serif',
      fontSize: 74,
      fontWeight: 600,
      letterSpacing: -1,
      lineHeight: 1.2,
      textColor: '#ECFDF5',
      backgroundType: 'gradient',
      gradientStart: '#065F46',
      gradientEnd: '#0D9488',
      gradientAngle: 150,
      borderRadius: 24
    }
  }
];
