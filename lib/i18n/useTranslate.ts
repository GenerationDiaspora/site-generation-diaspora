"use client";

import { useLanguageContext } from "./LanguageContext";

function resolvePath(source: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, source);
}

function interpolate(template: string, params?: Record<string, string | number>): string {
  if (!params) return template;
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) =>
    key in params ? String(params[key]) : `{{${key}}}`
  );
}

export function useTranslate() {
  const { locale, setLocale, dict } = useLanguageContext();

  function t(key: string, params?: Record<string, string | number>): string {
    const value = resolvePath(dict, key);
    if (typeof value !== "string") {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[i18n] Missing translation for key "${key}" (locale: ${locale})`);
      }
      return key;
    }
    return interpolate(value, params);
  }

  function tList(key: string): string[] {
    const value = resolvePath(dict, key);
    if (Array.isArray(value)) return value as string[];
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[i18n] Missing translation list for key "${key}" (locale: ${locale})`);
    }
    return [];
  }

  return { t, tList, locale, setLocale };
}
