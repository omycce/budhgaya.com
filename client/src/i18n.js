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

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;