export type BackgroundType = 'solid' | 'gradient' | 'image' | 'transparent';
export type BackgroundSize = 'cover' | 'contain';
export type ImageFormat = 'png' | 'jpeg' | 'webp' | 'avif';
export type IconPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
export type FontStyle = 'normal' | 'italic';

export interface GeneratorSettings {
  title: string;
  fontSize: number;
  fontFamily: string;
  letterSpacing: number;
  backgroundColor: string;
  textColor: string;
  gradientStart: string;
  gradientEnd: string;
  gradientAngle: number;
  backgroundType: BackgroundType;
  borderRadius: number;
  backgroundImage: string;
  backgroundSize: BackgroundSize;
  backgroundPosition: string;
  fontWeight: number;
  customWidth: number;
  customHeight: number;
}
