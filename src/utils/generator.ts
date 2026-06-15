import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';
import { toast } from 'sonner';
import i18n from '@/utils/i18n';
import type { BackgroundType, ImageFormat } from '@/types/generator';

export const computeBackgroundStyle = (
  backgroundType: BackgroundType,
  backgroundColor: string,
  gradientStart: string,
  gradientEnd: string,
  gradientAngle: number,
  backgroundImage: string,
  backgroundSize: 'cover' | 'contain',
  backgroundPosition: string
): React.CSSProperties => {
  switch (backgroundType) {
    case 'solid':
      return { backgroundColor };
    case 'gradient':
      return { backgroundImage: `linear-gradient(${gradientAngle}deg, ${gradientStart}, ${gradientEnd})` };
    case 'image':
      return {
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize,
        backgroundPosition,
        backgroundRepeat: 'no-repeat'
      };
    case 'transparent':
      return { backgroundColor: 'transparent' };
    default:
      return { backgroundColor };
  }
};

export const handleImageUpload = (
  e: React.ChangeEvent<HTMLInputElement>,
  setBackgroundImage: (image: string) => void
) => {
  const file = e.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      setBackgroundImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }
};

/** JPEG 导出质量，0–1，仅对 JPEG 生效 */
export type ExportQuality = number;

/** 默认导出像素倍率，保证在普通屏幕上也能输出高清图 */
const DEFAULT_PIXEL_RATIO = 2;

async function ensureBlob(value: Blob | string | null): Promise<Blob | null> {
  if (value == null) return null;
  if (value instanceof Blob) return value;
  const r = await fetch(value);
  return await r.blob();
}

/** 使用 canvas.toBlob 进行真实的 WebP 编码（浏览器原生支持） */
function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality: number): Promise<Blob | null> {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), type, quality);
  });
}

export const exportImage = async (
  format: ImageFormat,
  backgroundType: BackgroundType,
  setIsExporting: (value: boolean) => void,
  jpegQuality: number = 0.92,
  pixelRatio: number = DEFAULT_PIXEL_RATIO
) => {
  const t = i18n.t.bind(i18n);
  const element = document.getElementById('cover-preview');
  if (!element) {
    toast.error(t('generator.export.errors.notFound'));
    return;
  }

  try {
    setIsExporting(true);

    const baseOptions = {
      bgcolor: backgroundType === 'transparent' ? null : undefined,
      pixelRatio,
      quality: 1
    };

    let blob: Blob | null = null;
    let fileExt: string = format;
    switch (format) {
      case 'png': {
        blob = await ensureBlob(await htmlToImage.toBlob(element, baseOptions));
        break;
      }
      case 'jpeg': {
        const jpegResult = await htmlToImage.toJpeg(element, {
          ...baseOptions,
          quality: Math.max(0, Math.min(1, jpegQuality))
        });
        blob = await ensureBlob(jpegResult);
        break;
      }
      case 'webp': {
        // 通过 canvas 进行真实的 WebP 编码
        const canvas = await htmlToImage.toCanvas(element, baseOptions);
        blob = await canvasToBlob(canvas, 'image/webp', 0.92);
        // 某些浏览器不支持 WebP 编码时回退到 PNG
        if (!blob || blob.type !== 'image/webp') {
          blob = await ensureBlob(await htmlToImage.toBlob(element, baseOptions));
          fileExt = 'png';
        }
        break;
      }
      case 'avif': {
        // 浏览器 canvas 暂不支持 AVIF 编码，回退到 PNG
        blob = await ensureBlob(await htmlToImage.toBlob(element, baseOptions));
        fileExt = 'png';
        break;
      }
    }

    if (blob) {
      saveAs(blob, `cover.${fileExt}`);
      toast.success(t('generator.export.successTitle', { format: fileExt.toUpperCase() }), {
        description: t('generator.export.successDesc')
      });
    } else {
      throw new Error('Failed to generate image');
    }
  } catch (error) {
    console.error('Export failed:', error);

    const errorMessage = error instanceof Error ? error.message : String(error);

    if (errorMessage.includes('tainted') || errorMessage.includes('cross-origin') || errorMessage.includes('CORS')) {
      toast.error(t('generator.export.errors.cors'), {
        description: t('generator.export.errors.corsDesc')
      });
    } else if (errorMessage.includes('Failed to fetch') || errorMessage.includes('network')) {
      toast.error(t('generator.export.errors.network'), {
        description: t('generator.export.errors.networkDesc')
      });
    } else if (errorMessage.toLowerCase().includes('memory')) {
      toast.error(t('generator.export.errors.memory'), {
        description: t('generator.export.errors.memoryDesc')
      });
    } else {
      toast.error(t('generator.export.errors.generic'), {
        description: errorMessage || t('generator.export.errors.genericDesc')
      });
    }
  } finally {
    setIsExporting(false);
  }
};
