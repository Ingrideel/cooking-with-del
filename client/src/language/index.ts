import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import ro from "./ro.json";

export enum LANGUAGES {
  ENGLISH = "en-GB",
  ROMANIAN = "ro-RO",
}

const resources = {
  [LANGUAGES.ENGLISH]: {
    translation: en,
  },
  [LANGUAGES.ROMANIAN]: {
    translation: ro,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: LANGUAGES.ENGLISH,
    compatibilityJSON: "v3",
    interpolation: {
      escapeValue: false,
    },
  });
