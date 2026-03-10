const SHARE_TITLE = 'Cova - 封面设计工具';
const SHARE_TEXT = '用 Cova 快速制作博客与社交媒体封面图';
const SHARE_TITLE_EN = 'Cova - Cover Design Tool';
const SHARE_TEXT_EN = 'Create blog and social cover images with Cova';

export type ShareResult = 'shared' | 'copied' | false;

export async function shareGeneratorPage(lang: 'zh' | 'en'): Promise<ShareResult> {
  const url = window.location.href;
  const title = lang === 'zh' ? SHARE_TITLE : SHARE_TITLE_EN;
  const text = lang === 'zh' ? SHARE_TEXT : SHARE_TEXT_EN;

  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url
      });
      return 'shared';
    } catch (err) {
      if ((err as Error).name === 'AbortError') return false;
      // fallback to copy
    }
  }

  try {
    await navigator.clipboard.writeText(url);
    return 'copied';
  } catch {
    return false;
  }
}

export function copyGeneratorLink(): Promise<boolean> {
  const url = window.location.href;
  return navigator.clipboard
    .writeText(url)
    .then(() => true)
    .catch(() => false);
}
