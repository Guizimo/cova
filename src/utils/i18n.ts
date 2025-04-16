import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en';
import zh from '../locales/zh';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    zh: { translation: zh }
  },
  lng: 'zh',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false
  }
});

export default i18n;
