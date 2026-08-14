import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { dictionaries, Dictionary, Language } from './dict'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
  dict: Dictionary
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('es')
  const [dict, setDict] = useState<Dictionary>(dictionaries.es)

  useEffect(() => {
    const path = window.location.pathname
    if (path.startsWith('/en')) setLang('en')
    else if (path.startsWith('/zh')) setLang('zh')
    else if (path.startsWith('/ja')) setLang('ja')
    else setLang('es')
  }, [])

  useEffect(() => {
    setDict(dictionaries[lang] || dictionaries.es)
    document.documentElement.lang = lang
  }, [lang])

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = dict
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dict }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
