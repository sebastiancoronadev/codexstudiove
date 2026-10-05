"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Language } from "./translations";

const LANG_KEY = "codex_lang";

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (path: string) => any;
  mounted: boolean;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LANG_KEY) as Language | null;
    if (stored && ["es", "en", "zh"].includes(stored)) {
      setLangState(stored);
      document.documentElement.lang = stored;
    } else {
      const detected = navigator.language.split("-")[0] as Language;
      if (["es", "en", "zh"].includes(detected)) {
        setLangState(detected);
        document.documentElement.lang = detected;
      }
    }
    setMounted(true);
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem(LANG_KEY, newLang);
    document.documentElement.lang = newLang;
  }, []);

  const t = useCallback(
    (path: string): any => {
      const keys = path.split(".");
      let value: any = translations[lang];
      for (const key of keys) {
        if (value === undefined || value === null) return path;
        const numericKey = Number(key);
        if (!isNaN(numericKey) && Array.isArray(value)) {
          value = value[numericKey];
        } else {
          value = value[key];
        }
      }
      return value !== undefined && value !== null ? value : path;
    },
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, t, mounted }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within I18nProvider");
  }
  return ctx;
}