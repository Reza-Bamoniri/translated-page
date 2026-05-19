import { createContext, useContext, useState, ReactNode } from "react";

import fa from "../locales/fa.json";
import en from "../locales/en.json";

type Language = "fa" | "en";

type TranslationType = typeof fa;

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: TranslationType;
};

const LanguageContext =
  createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [language, setLanguage] =
    useState<Language>("fa");

  const translations =
    language === "fa" ? fa : en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        translations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside provider"
    );
  }

  return context;
};
