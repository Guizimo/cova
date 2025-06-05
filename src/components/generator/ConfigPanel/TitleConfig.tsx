import { Textarea } from '@/components/ui/textarea';
import { useGeneratorStore } from '@/store/generator';
import { useTranslation } from 'react-i18next';

export function TitleConfig() {
  const { title, setTitle } = useGeneratorStore();
  const { t } = useTranslation();

  return (
    <div className="space-y-3 lg:space-y-4">
      <div className="space-y-2 lg:space-y-3">
        <h3 className="text-xs lg:text-sm font-medium text-white/90 uppercase tracking-wide">
          {t('generator.config.title.label')}
        </h3>
        <Textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={t('generator.config.title.placeholder')}
          className="min-h-[70px] lg:min-h-[80px] resize-y bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/20 focus:ring-white/20 text-sm lg:text-base"
        />
      </div>
    </div>
  );
}
