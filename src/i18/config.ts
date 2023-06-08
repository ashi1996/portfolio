import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN from './locales/en/translations.json'
import HE from './locales/he/translations.json'

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: EN
    },
    he: {
      translations: HE
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'he'];

export default i18n;