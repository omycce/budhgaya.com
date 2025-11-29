/* eslint-disable unicode-bom */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: {
        title: "Bodh Gaya Tourism",
      },
      footer: {
        contactUs: "Contact Us",
        email: "Email",
        phone: "Phone",
        language: "Language",
      },
    },
  },
  fr: {
    translation: {
      header: {
        title: "Tourisme à Bodh Gaya",
      },
      footer: {
        contactUs: "Contactez-nous",
        email: "E-mail",
        phone: "Téléphone",
        language: "Langue",
      },
    },
  },
  hi: {
    translation: {
      header: {
        title: "बोधगया पर्यटन",
      },
      footer: {
        contactUs: "हमसे संपर्क करें",
        email: "ईमेल",
        phone: "फोन",
        language: "भाषा",
      },
    },
  },
};

// Determine initial language: URL ?lang=xx -> localStorage 'lang' -> browser default -> 'en'
function getInitialLanguage() {
  try {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('lang');
    if (fromUrl) return fromUrl;
    const stored = localStorage.getItem('lang') || localStorage.getItem('i18nextLng');
    if (stored) return stored;
  } catch (_) {}
  return 'en';
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

// Persist language changes and update <html lang>
i18n.on('languageChanged', (lng) => {
  try {
    localStorage.setItem('lang', lng);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', lng);
    }
  } catch (_) {}
});

export default i18n;