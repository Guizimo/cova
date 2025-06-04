import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-white/[0.08] py-12">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Cova Logo" className="h-6 w-6" />
              <span className="font-medium">Cova</span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex flex-col gap-3">
              <span className="font-medium text-white/80">{t('footer.product')}</span>
              <Link to="/features" className="text-white/40 hover:text-white/60">
                {t('footer.features')}
              </Link>
              <Link to="/changelog" className="text-white/40 hover:text-white/60">
                {t('footer.changelog')}
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium text-white/80">{t('footer.resources')}</span>
              <a
                href="https://blog.guizimo.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/40 hover:text-white/60"
              >
                {t('footer.blog')}
              </a>
              <a
                href="https://github.com/guizimo/cova"
                target="_blank"
                rel="noreferrer"
                className="text-white/40 hover:text-white/60"
              >
                {t('footer.github')}
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium text-white/80">{t('footer.company')}</span>
              <Link to="/about" className="text-white/40 hover:text-white/60">
                {t('footer.about')}
              </Link>
              <Link to="/contact" className="text-white/40 hover:text-white/60">
                {t('footer.contact')}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-white/[0.08]">
          <p className="text-sm text-white/40">{t('footer.copyright')}</p>
          <p className="text-sm text-white/40">{t('footer.builtBy')}</p>
        </div>
      </div>
    </footer>
  );
}
