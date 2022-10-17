/* eslint-disable import/prefer-default-export */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { frTranslation } from "./fr";

i18n.use(initReactI18next).init({
  fallbackLng: "fr",

  resources: {
    fr: frTranslation,
  },

  lng: "fr",

  ns: ["global"],
  defaultNS: "global",
  debug: false,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
/* eslint-enable import/prefer-default-export */
