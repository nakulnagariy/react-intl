import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEn from "./locales/en/translation.json";
import translationHi from "./locales/hi/translation.json";
import translationCh from "./locales/ch/translation.json";

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: translationEn,
    },
    ch: {
      translations: translationCh,
    },
    hi: {
      translations: translationHi,
    },
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: ".", // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ",",
  },

  react: {
    wait: true,
  },
});

export default i18n;
