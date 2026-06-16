import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { Sparkles, Settings2, Loader2, Wand2, Type as TypeIcon, Palette, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGeneratorStore } from '@/store/generator';
import type { TemplateConfig } from '@/store/generator';
import { useAIStore, DEFAULT_AI_BASE_URL, DEFAULT_AI_MODEL } from '@/store/ai';
import { AIError, generateDesign, generateTitles, generatePalette, type TitleSuggestion } from '@/utils/ai';

function errorKey(error: unknown): string {
  if (error instanceof AIError) {
    const map: Record<string, string> = {
      NOT_CONFIGURED: 'notConfigured',
      HTTP_AUTH: 'auth',
      HTTP_OTHER: 'http',
      NETWORK: 'network',
      PARSE: 'parse',
      EMPTY: 'empty'
    };
    return `generator.ai.errors.${map[error.code] ?? 'unknown'}`;
  }
  return 'generator.ai.errors.unknown';
}

export function AIAssistant() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'zh' ? 'zh' : 'en';

  const { getCurrentTemplateConfig, applyTemplateConfig } = useGeneratorStore();
  const { baseUrl, apiKey, model, setBaseUrl, setApiKey, setModel, isConfigured } = useAIStore();
  const configured = isConfigured();

  const [showSettings, setShowSettings] = useState(false);
  const [mode, setMode] = useState('design');

  const [designPrompt, setDesignPrompt] = useState('');
  const [designLoading, setDesignLoading] = useState(false);

  const [topic, setTopic] = useState('');
  const [titlesLoading, setTitlesLoading] = useState(false);
  const [titleSuggestions, setTitleSuggestions] = useState<TitleSuggestion[]>([]);

  const [mood, setMood] = useState('');
  const [paletteLoading, setPaletteLoading] = useState(false);

  const applyWithUndo = (config: Partial<TemplateConfig>, successMsg: string) => {
    const previous = getCurrentTemplateConfig();
    applyTemplateConfig(config);
    toast.success(successMsg, {
      action: {
        label: t('generator.templates.undo'),
        onClick: () => {
          applyTemplateConfig(previous);
          toast.success(t('generator.templates.previewReverted'));
        }
      }
    });
  };

  const ensureReady = (): boolean => {
    if (!configured) {
      setShowSettings(true);
      toast.error(t('generator.ai.errors.notConfigured'));
      return false;
    }
    return true;
  };

  const handleGenerateDesign = async () => {
    if (!designPrompt.trim() || !ensureReady()) return;
    setDesignLoading(true);
    try {
      const config = await generateDesign(designPrompt.trim(), locale);
      applyWithUndo(config, t('generator.ai.design.applied'));
    } catch (error) {
      toast.error(t(errorKey(error)));
    } finally {
      setDesignLoading(false);
    }
  };

  const handleGenerateTitles = async () => {
    if (!topic.trim() || !ensureReady()) return;
    setTitlesLoading(true);
    try {
      const suggestions = await generateTitles(topic.trim(), locale);
      setTitleSuggestions(suggestions);
    } catch (error) {
      toast.error(t(errorKey(error)));
    } finally {
      setTitlesLoading(false);
    }
  };

  const handleGeneratePalette = async () => {
    if (!mood.trim() || !ensureReady()) return;
    setPaletteLoading(true);
    try {
      const palette = await generatePalette(mood.trim());
      applyWithUndo({ backgroundType: 'gradient', ...palette }, t('generator.ai.color.applied'));
    } catch (error) {
      toast.error(t(errorKey(error)));
    } finally {
      setPaletteLoading(false);
    }
  };

  return (
    <div className="space-y-3 rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-white/[0.03] to-fuchsia-500/10 p-3">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-xs lg:text-sm font-medium text-white/90 uppercase tracking-wide">
          <Sparkles className="h-3.5 w-3.5 text-indigo-300" />
          {t('generator.ai.title')}
        </h3>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          aria-label={t('generator.ai.settings.title')}
          onClick={() => setShowSettings((v) => !v)}
          className="h-7 w-7 p-0 text-white/60 hover:text-white hover:bg-white/10"
        >
          <Settings2 className="h-3.5 w-3.5" />
        </Button>
      </div>

      {!configured && !showSettings && (
        <button
          type="button"
          onClick={() => setShowSettings(true)}
          className="w-full rounded-lg border border-amber-400/20 bg-amber-400/10 px-3 py-2 text-left text-xs text-amber-200 hover:bg-amber-400/15 transition-colors"
        >
          {t('generator.ai.notConfiguredHint')}
        </button>
      )}

      {showSettings && (
        <div className="space-y-3 rounded-lg border border-white/10 bg-black/30 p-3">
          <p className="text-[11px] text-white/50">{t('generator.ai.settings.description')}</p>
          <div className="space-y-1.5">
            <Label className="text-white/60 text-[11px] uppercase tracking-wide">
              {t('generator.ai.settings.baseUrl')}
            </Label>
            <Input
              value={baseUrl}
              onChange={(e) => setBaseUrl(e.target.value)}
              placeholder={DEFAULT_AI_BASE_URL}
              className="h-8 border-white/10 bg-white/5 text-white placeholder:text-white/30 text-xs"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-white/60 text-[11px] uppercase tracking-wide">
              {t('generator.ai.settings.apiKey')}
            </Label>
            <Input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
              autoComplete="off"
              className="h-8 border-white/10 bg-white/5 text-white placeholder:text-white/30 text-xs"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-white/60 text-[11px] uppercase tracking-wide">
              {t('generator.ai.settings.model')}
            </Label>
            <Input
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder={DEFAULT_AI_MODEL}
              className="h-8 border-white/10 bg-white/5 text-white placeholder:text-white/30 text-xs"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className="text-[10px] text-white/40">{t('generator.ai.settings.privacy')}</p>
            {configured && (
              <span className="flex items-center gap-1 text-[10px] text-emerald-300">
                <Check className="h-3 w-3" />
                {t('generator.ai.settings.connected')}
              </span>
            )}
          </div>
        </div>
      )}

      <Tabs value={mode} onValueChange={setMode}>
        <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10 h-8">
          <TabsTrigger
            value="design"
            className="text-white/60 data-[state=active]:bg-white/10 data-[state=active]:text-white text-[11px] gap-1"
          >
            <Wand2 className="h-3 w-3" />
            {t('generator.ai.tabs.design')}
          </TabsTrigger>
          <TabsTrigger
            value="copy"
            className="text-white/60 data-[state=active]:bg-white/10 data-[state=active]:text-white text-[11px] gap-1"
          >
            <TypeIcon className="h-3 w-3" />
            {t('generator.ai.tabs.copy')}
          </TabsTrigger>
          <TabsTrigger
            value="color"
            className="text-white/60 data-[state=active]:bg-white/10 data-[state=active]:text-white text-[11px] gap-1"
          >
            <Palette className="h-3 w-3" />
            {t('generator.ai.tabs.color')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="design" className="space-y-2 pt-1">
          <Textarea
            value={designPrompt}
            onChange={(e) => setDesignPrompt(e.target.value)}
            placeholder={t('generator.ai.design.placeholder')}
            className="min-h-[64px] border-white/10 bg-white/5 text-white placeholder:text-white/30 text-xs resize-none"
          />
          <Button
            type="button"
            size="sm"
            disabled={designLoading || !designPrompt.trim()}
            onClick={handleGenerateDesign}
            className="w-full h-8 bg-white text-black hover:bg-white/90 text-xs disabled:opacity-50"
          >
            {designLoading ? (
              <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
            ) : (
              <Wand2 className="mr-1.5 h-3.5 w-3.5" />
            )}
            {t('generator.ai.design.action')}
          </Button>
        </TabsContent>

        <TabsContent value="copy" className="space-y-2 pt-1">
          <div className="flex gap-2">
            <Input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder={t('generator.ai.copy.placeholder')}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerateTitles()}
              className="h-8 border-white/10 bg-white/5 text-white placeholder:text-white/30 text-xs"
            />
            <Button
              type="button"
              size="sm"
              disabled={titlesLoading || !topic.trim()}
              onClick={handleGenerateTitles}
              className="h-8 flex-shrink-0 bg-white text-black hover:bg-white/90 text-xs disabled:opacity-50"
            >
              {titlesLoading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : t('generator.ai.copy.action')}
            </Button>
          </div>
          {titleSuggestions.length > 0 && (
            <ul className="space-y-1.5">
              {titleSuggestions.map((s, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() =>
                      applyWithUndo({ title: s.title, subtitle: s.subtitle }, t('generator.ai.copy.applied'))
                    }
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-left hover:border-white/20 hover:bg-white/[0.08] transition-colors"
                  >
                    <p className="text-xs text-white/90 truncate">{s.title}</p>
                    {s.subtitle && <p className="text-[11px] text-white/50 truncate">{s.subtitle}</p>}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </TabsContent>

        <TabsContent value="color" className="space-y-2 pt-1">
          <div className="flex gap-2">
            <Input
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder={t('generator.ai.color.placeholder')}
              onKeyDown={(e) => e.key === 'Enter' && handleGeneratePalette()}
              className="h-8 border-white/10 bg-white/5 text-white placeholder:text-white/30 text-xs"
            />
            <Button
              type="button"
              size="sm"
              disabled={paletteLoading || !mood.trim()}
              onClick={handleGeneratePalette}
              className="h-8 flex-shrink-0 bg-white text-black hover:bg-white/90 text-xs disabled:opacity-50"
            >
              {paletteLoading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : t('generator.ai.color.action')}
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
