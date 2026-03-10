import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  const linkClass = 'text-white/45 hover:text-white/80 transition-colors duration-200';
  const groupClass = 'flex flex-col gap-3';

  return (
    <footer className="w-full border-t border-white/[0.08] py-14 md:py-16">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 w-fit text-white/90 hover:text-white transition-colors duration-200"
            >
              <img src={logo} alt="Cova Logo" className="h-6 w-6 opacity-95" />
              <span className="font-medium">Cova</span>
            </Link>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">{t('footer.builtBy')}</p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-8 text-sm">
            <div className={groupClass}>
              <span className="font-medium text-white/70">{t('footer.product')}</span>
              <Link to="/features" className={linkClass}>
                {t('footer.features')}
              </Link>
              <a href="https://github.com/guizimo/cova/releases" target="_blank" rel="noreferrer" className={linkClass}>
                {t('footer.changelog')}
              </a>
            </div>
            <div className={groupClass}>
              <span className="font-medium text-white/70">{t('footer.resources')}</span>
              <a href="https://blog.guizimo.com" target="_blank" rel="noreferrer" className={linkClass}>
                {t('footer.blog')}
              </a>
              <a href="https://github.com/guizimo/cova" target="_blank" rel="noreferrer" className={linkClass}>
                {t('footer.github')}
              </a>
            </div>
            <div className={groupClass}>
              <span className="font-medium text-white/70">{t('footer.company')}</span>
              <Link to="/about" className={linkClass}>
                {t('footer.about')}
              </Link>
              <Link to="/contact" className={linkClass}>
                {t('footer.contact')}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-white/[0.08]">
          <p className="text-sm text-white/35">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
