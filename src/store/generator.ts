import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DEFAULT_SETTINGS, CoverSize } from '@/config/generator';

/** 模板配置：与 partialize 缓存的字段一致，用于保存/应用模板 */
export interface TemplateConfig {
  title?: string;
  subtitle?: string;
  selectedSize?: CoverSize;
  customWidth?: number;
  customHeight?: number;
  isCustomSize?: boolean;
  fontSize?: number;
  fontFamily?: string;
  letterSpacing?: number;
  fontWeight?: number;
  textColor?: string;
  fontStyle?: string;
  backgroundColor?: string;
  gradientStart?: string;
  gradientEnd?: string;
  gradientAngle?: number;
  backgroundType?: string;
  borderRadius?: number;
  backgroundSize?: 'cover' | 'contain';
  backgroundPosition?: string;
  backdropBlur?: number;
  showIcon?: boolean;
  iconPosition?: string;
  iconSize?: number;
  iconBorderRadius?: number;
  iconShadow?: number;
  lineHeight?: number;
  iconImage?: string;
  iconBgColor?: string;
  iconPadding?: number;
}

interface GeneratorState {
  // 标题
  title: string;
  setTitle: (title: string) => void;
  subtitle: string;
  setSubtitle: (subtitle: string) => void;

  // 尺寸
  selectedSize: CoverSize;
  setSelectedSize: (size: CoverSize) => void;
  customWidth: number;
  setCustomWidth: (width: number) => void;
  customHeight: number;
  setCustomHeight: (height: number) => void;
  isCustomSize: boolean;
  setIsCustomSize: (isCustom: boolean) => void;

  // 字体
  fontSize: number;
  setFontSize: (size: number) => void;
  fontFamily: string;
  setFontFamily: (family: string) => void;
  letterSpacing: number;
  setLetterSpacing: (spacing: number) => void;
  fontWeight: number;
  setFontWeight: (weight: number) => void;
  textColor: string;
  setTextColor: (color: string) => void;
  fontStyle: string;
  setFontStyle: (style: string) => void;
  lineHeight: number;
  setLineHeight: (height: number) => void;

  // 背景
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  gradientStart: string;
  setGradientStart: (color: string) => void;
  gradientEnd: string;
  setGradientEnd: (color: string) => void;
  gradientAngle: number;
  setGradientAngle: (angle: number) => void;
  backgroundType: string;
  setBackgroundType: (type: string) => void;
  borderRadius: number;
  setBorderRadius: (radius: number) => void;
  backgroundImage: string;
  setBackgroundImage: (image: string) => void;
  backgroundSize: 'cover' | 'contain';
  setBackgroundSize: (size: 'cover' | 'contain') => void;
  backgroundPosition: string;
  setBackgroundPosition: (position: string) => void;
  backdropBlur: number;
  setBackdropBlur: (blur: number) => void;

  // 图标设置
  showIcon: boolean;
  setShowIcon: (show: boolean) => void;
  iconPosition: string;
  setIconPosition: (position: string) => void;
  iconSize: number;
  setIconSize: (size: number) => void;
  iconBorderRadius: number;
  setIconBorderRadius: (radius: number) => void;
  iconShadow: number;
  setIconShadow: (shadow: number) => void;
  iconImage: string;
  setIconImage: (image: string) => void;
  iconBgColor: string;
  setIconBgColor: (color: string) => void;
  iconPadding: number;
  setIconPadding: (padding: number) => void;

  isExporting: boolean;
  setIsExporting: (value: boolean) => void;

  // 重置
  resetSettings: () => void;

  // 从模板应用配置
  applyTemplateConfig: (config: TemplateConfig) => void;

  // 获取当前配置用于保存为模板
  getCurrentTemplateConfig: () => TemplateConfig;
}

export const useGeneratorStore = create<GeneratorState>()(
  persist(
    (set, get) => ({
      // 标题
      title: DEFAULT_SETTINGS.title,
      setTitle: (title) => set({ title }),
      subtitle: DEFAULT_SETTINGS.subtitle ?? '',
      setSubtitle: (subtitle) => set({ subtitle }),

      // 尺寸
      selectedSize: DEFAULT_SETTINGS.selectedSize,
      setSelectedSize: (size) => set({ selectedSize: size }),
      customWidth: DEFAULT_SETTINGS.customWidth,
      setCustomWidth: (width) => set({ customWidth: width }),
      customHeight: DEFAULT_SETTINGS.customHeight,
      setCustomHeight: (height) => set({ customHeight: height }),
      isCustomSize: false,
      setIsCustomSize: (isCustom) => set({ isCustomSize: isCustom }),

      // 字体
      fontSize: DEFAULT_SETTINGS.fontSize,
      setFontSize: (size) => set({ fontSize: size }),
      fontFamily: DEFAULT_SETTINGS.fontFamily,
      setFontFamily: (family) => set({ fontFamily: family }),
      letterSpacing: DEFAULT_SETTINGS.letterSpacing,
      setLetterSpacing: (spacing) => set({ letterSpacing: spacing }),
      fontWeight: DEFAULT_SETTINGS.fontWeight,
      setFontWeight: (weight) => set({ fontWeight: weight }),
      textColor: DEFAULT_SETTINGS.textColor,
      setTextColor: (color) => set({ textColor: color }),
      fontStyle: 'normal',
      setFontStyle: (style) => set({ fontStyle: style }),
      lineHeight: 1.5, // 默认行高
      setLineHeight: (height) => set({ lineHeight: height }),

      // 背景
      backgroundColor: DEFAULT_SETTINGS.backgroundColor,
      setBackgroundColor: (color) => set({ backgroundColor: color }),
      gradientStart: DEFAULT_SETTINGS.gradientStart,
      setGradientStart: (color) => set({ gradientStart: color }),
      gradientEnd: DEFAULT_SETTINGS.gradientEnd,
      setGradientEnd: (color) => set({ gradientEnd: color }),
      gradientAngle: DEFAULT_SETTINGS.gradientAngle,
      setGradientAngle: (angle) => set({ gradientAngle: angle }),
      backgroundType: DEFAULT_SETTINGS.backgroundType,
      setBackgroundType: (type) => set({ backgroundType: type }),
      borderRadius: DEFAULT_SETTINGS.borderRadius,
      setBorderRadius: (radius) => set({ borderRadius: radius }),
      backgroundImage: '',
      setBackgroundImage: (image) => set({ backgroundImage: image }),
      backgroundSize: DEFAULT_SETTINGS.backgroundSize,
      setBackgroundSize: (size) => set({ backgroundSize: size }),
      backgroundPosition: DEFAULT_SETTINGS.backgroundPosition,
      setBackgroundPosition: (position) => set({ backgroundPosition: position }),
      backdropBlur: 0,
      setBackdropBlur: (blur) => set({ backdropBlur: blur }),

      // 图标设置
      showIcon: false,
      setShowIcon: (show) => set({ showIcon: show }),
      iconPosition: 'top-left',
      setIconPosition: (position) => set({ iconPosition: position }),
      iconSize: 60,
      setIconSize: (size) => set({ iconSize: size }),
      iconBorderRadius: 8,
      setIconBorderRadius: (radius) => set({ iconBorderRadius: radius }),
      iconShadow: 0,
      setIconShadow: (shadow) => set({ iconShadow: shadow }),
      iconImage: '',
      setIconImage: (image) => set({ iconImage: image }),
      iconBgColor: 'transparent',
      setIconBgColor: (color) => set({ iconBgColor: color }),
      iconPadding: 0,
      setIconPadding: (padding) => set({ iconPadding: padding }),

      isExporting: false,
      setIsExporting: (value) => set({ isExporting: value }),

      // 重置
      resetSettings: () =>
        set({
          ...DEFAULT_SETTINGS,
          backgroundImage: ''
        }),

      // 从模板应用配置（仅更新模板包含的字段）
      applyTemplateConfig: (config) => set((state) => ({ ...state, ...config })),

      getCurrentTemplateConfig: () => {
        const s = get();
        return {
          title: s.title,
          subtitle: s.subtitle,
          selectedSize: s.selectedSize,
          customWidth: s.customWidth,
          customHeight: s.customHeight,
          isCustomSize: s.isCustomSize,
          fontSize: s.fontSize,
          fontFamily: s.fontFamily,
          letterSpacing: s.letterSpacing,
          fontWeight: s.fontWeight,
          textColor: s.textColor,
          fontStyle: s.fontStyle,
          backgroundColor: s.backgroundColor,
          gradientStart: s.gradientStart,
          gradientEnd: s.gradientEnd,
          gradientAngle: s.gradientAngle,
          backgroundType: s.backgroundType,
          borderRadius: s.borderRadius,
          backgroundSize: s.backgroundSize,
          backgroundPosition: s.backgroundPosition,
          backdropBlur: s.backdropBlur,
          showIcon: s.showIcon,
          iconPosition: s.iconPosition,
          iconSize: s.iconSize,
          iconBorderRadius: s.iconBorderRadius,
          iconShadow: s.iconShadow,
          lineHeight: s.lineHeight,
          iconImage: s.iconImage,
          iconBgColor: s.iconBgColor,
          iconPadding: s.iconPadding
        };
      }
    }),
    {
      name: 'cova-storage', // 存储的键名
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name);
          if (!str) return null;
          try {
            const state = JSON.parse(str);
            // 合并默认值，确保版本更新时新增的字段有默认值
            return {
              ...DEFAULT_SETTINGS,
              ...state
            };
          } catch {
            return null;
          }
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => localStorage.removeItem(name)
      },
      partialize: (state: GeneratorState): Partial<GeneratorState> => ({
        // 只缓存这些字段
        title: state.title,
        subtitle: state.subtitle,
        selectedSize: state.selectedSize,
        customWidth: state.customWidth,
        customHeight: state.customHeight,
        isCustomSize: state.isCustomSize,
        fontSize: state.fontSize,
        fontFamily: state.fontFamily,
        letterSpacing: state.letterSpacing,
        fontWeight: state.fontWeight,
        textColor: state.textColor,
        fontStyle: state.fontStyle,
        backgroundColor: state.backgroundColor,
        gradientStart: state.gradientStart,
        gradientEnd: state.gradientEnd,
        gradientAngle: state.gradientAngle,
        backgroundType: state.backgroundType,
        borderRadius: state.borderRadius,
        backgroundSize: state.backgroundSize,
        backgroundPosition: state.backgroundPosition,
        backdropBlur: state.backdropBlur,
        showIcon: state.showIcon,
        iconPosition: state.iconPosition,
        iconSize: state.iconSize,
        iconBorderRadius: state.iconBorderRadius,
        iconShadow: state.iconShadow,
        lineHeight: state.lineHeight,
        iconImage: state.iconImage,
        iconBgColor: state.iconBgColor,
        iconPadding: state.iconPadding
      })
    }
  )
);
