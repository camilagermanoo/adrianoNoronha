import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LanguageContext, type LanguageContextValue } from './context'
import { htmlLang, isLocale, type Locale, type Localized } from './locales'
import { ui } from './ui'

const STORAGE_KEY = 'locale'

function detectLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    return 'pt'
  }

  const browser = navigator.language.slice(0, 2)
  return isLocale(browser) ? browser : 'pt'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      return
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = htmlLang[locale]
    document.title = ui[locale].meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', ui[locale].meta.description)
  }, [locale])

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: ui[locale],
      l: <T,>(localized: Localized<T>) => localized[locale],
    }),
    [locale, setLocale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
