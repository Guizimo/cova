import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';
import { toast } from 'sonner';

export const computeBackgroundStyle = (
  backgroundType: string,
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

export const exportImage = async (
  format: 'png' | 'jpeg' | 'webp' | 'avif',
  backgroundType: string,
  setIsExporting: (value: boolean) => void
) => {
  const element = document.getElementById('cover-preview');
  if (!element) {
    toast.error('找不到预览元素，请刷新页面重试');
    return;
  }

  try {
    setIsExporting(true);

    const options = {
      quality: 1,
      bgcolor: backgroundType === 'transparent' ? null : undefined
    };

    let blob;
    switch (format) {
      case 'png':
        blob = await htmlToImage.toBlob(element, options);
        break;
      case 'jpeg':
        blob = await htmlToImage.toJpeg(element, options);
        break;
      case 'webp':
      case 'avif':
        blob = await htmlToImage.toPng(element, options);
        break;
    }

    if (blob) {
      saveAs(blob, `cover.${format}`);
      toast.success(`🎉 ${format.toUpperCase()} 导出成功！`, {
        description: '文件已开始下载'
      });
    } else {
      throw new Error('生成图片失败');
    }
  } catch (error) {
    console.error('导出失败:', error);

    const errorMessage = error instanceof Error ? error.message : String(error);

    // 根据错误类型显示不同的 toast
    if (errorMessage.includes('tainted') || errorMessage.includes('cross-origin') || errorMessage.includes('CORS')) {
      toast.error('导出失败：图片跨域限制', {
        description: '建议上传本地图片或使用支持CORS的图片服务'
      });
    } else if (errorMessage.includes('Failed to fetch') || errorMessage.includes('network')) {
      toast.error('导出失败：网络问题', {
        description: '请检查网络连接或使用本地图片'
      });
    } else if (errorMessage.includes('memory') || errorMessage.includes('Memory')) {
      toast.error('导出失败：内存不足', {
        description: '请尝试减小图片尺寸'
      });
    } else {
      toast.error('导出失败', {
        description: errorMessage || '请重试或使用本地图片'
      });
    }
  } finally {
    setIsExporting(false);
  }
};
