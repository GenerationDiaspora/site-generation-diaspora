"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { fr, type Translations } from "./locales/fr";
import { en } from "./locales/en";
import { ar } from "./locales/ar";

export type Locale = "fr" | "en" | "ar";

export const LOCALES: Locale[] = ["fr", "en", "ar"];

export const dictionaries: Record<Locale, Translations> = { fr, en, ar };

const STORAGE_KEY = "gd-locale";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function applyDocumentDirection(locale: Locale) {
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && LOCALES.includes(stored)) {
      setLocaleState(stored);
      applyDocumentDirection(stored);
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    applyDocumentDirection(next);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, dict: dictionaries[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguageContext must be used within a LanguageProvider");
  }
  return ctx;
}
