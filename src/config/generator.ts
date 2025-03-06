export interface CoverSize {
    width: number;
    height: number;
    label: string;
}

export const PRESET_SIZES: CoverSize[] = [
    { width: 730, height: 310, label: '个人博客 (730x310)' },
    { width: 1200, height: 630, label: '社交媒体 (1200x630)' },
    { width: 1920, height: 1080, label: '全高清 (1920x1080)' },
    { width: 800, height: 600, label: '文章封面 (800x600)' },
    { width: 1080, height: 1080, label: 'Instagram (1080x1080)' }
];

export const FONT_FAMILIES = [
    { value: 'sans-serif', label: 'Sans Serif' },
    { value: 'serif', label: 'Serif' },
    { value: 'monospace', label: 'Monospace' },
    { value: 'Pacifico, cursive', label: 'Pacifico' },
    { value: 'Dancing Script, cursive', label: 'Dancing Script' },
    { value: 'Great Vibes, cursive', label: 'Great Vibes' },
    { value: 'Satisfy, cursive', label: 'Satisfy' },
    // 中文字体
    { value: '"Noto Serif SC", serif', label: '思源宋体' },
    { value: '"ZCOOL XiaoWei", serif', label: '站酷小薇' },
    { value: '"ZCOOL KuHei", serif', label: '站酷酷黑体' },
    { value: '"ZCOOL QingKe HuangYou", cursive', label: '站酷庆科黄油体' },
    { value: '"SmileySans-Oblique"', label: '得意黑'},
    { value: '"Ma Shan Zheng", cursive', label: '马善政楷书' }
];

export const DEFAULT_SETTINGS = {
    selectedSize: PRESET_SIZES[0],
    title: '输入标题预览效果',
    fontSize: 90,
    fontFamily: '"ZCOOL QingKe HuangYou", cursive',
    letterSpacing: 10,
    backgroundColor: '#022D3D',
    textColor: '#ffffff',
    gradientStart: '#4f46e5',
    gradientEnd: '#818cf8',
    gradientAngle: 45,
    backgroundType: 'solid',
    borderRadius: 0,
    backgroundImage: '',
    backgroundSize: 'cover' as const,
    backgroundPosition: 'center',
    fontWeight: 500,
    customWidth: 1200,
    customHeight: 630
};

export const PRESET_COLORS = [
  { value: '#FF6B6B', label: '珊瑚红' },
  { value: '#4ECDC4', label: '薄荷绿' },
  { value: '#45B7D1', label: '天空蓝' },
  { value: '#96CEB4', label: '抹茶绿' },
  { value: '#D4A5A5', label: '暮光粉' },
  { value: '#9B6B6B', label: '红棕色' },
  { value: '#867AE9', label: '薰衣草' },
  { value: '#FFB174', label: '杏橙色' },
  { value: '#A8E6CF', label: '清新绿' },
  { value: '#FFD3B6', label: '蜜桃色' }
];

export const PRESET_GRADIENTS = [
  { start: '#FF6B6B', end: '#4ECDC4', label: '珊瑚蓝' },
  { start: '#A8E6CF', end: '#FFD3B6', label: '清新橙' },
  { start: '#867AE9', end: '#FFF3F3', label: '薰衣草白' },
  { start: '#FFB174', end: '#FF6B6B', label: '暖阳红' },
  { start: '#4ECDC4', end: '#556270', label: '海洋灰' },
  { start: '#96CEB4', end: '#FFEEAD', label: '抹茶米' },
  { start: '#D4A5A5', end: '#9B6B6B', label: '暮光棕' },
  { start: '#45B7D1', end: '#A8E6CF', label: '天空绿' },
  { start: '#FF9A9E', end: '#FAD0C4', label: '蜜桃粉' },
  { start: '#A1C4FD', end: '#C2E9FB', label: '天空蓝' }
];