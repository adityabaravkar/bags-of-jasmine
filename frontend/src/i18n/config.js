import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en_translations from "./locales/en/translations.json";
import ma_translations from "./locales/ma/translations.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "ma",
  resources: {
    en: {
      translations: en_translations,
    },
    ma: {
      translations: ma_translations,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "ma"];

export default i18n;
