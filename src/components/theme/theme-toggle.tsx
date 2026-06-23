import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme/theme-provider';
import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const isLight = theme === 'light';

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      aria-label={t('theme.toggle')}
      title={isLight ? t('theme.switchToDark') : t('theme.switchToLight')}
      className={
        className ??
        'h-8 text-sm text-white/50 hover:text-white hover:bg-white/[0.08] light:text-slate-500 light:hover:text-slate-950 light:hover:bg-slate-950/[0.06]'
      }
    >
      {isLight ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {showLabel && <span>{isLight ? t('theme.light') : t('theme.dark')}</span>}
    </Button>
  );
}
