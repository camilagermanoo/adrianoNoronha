import { createContext, useContext } from 'react'
import type { Locale, Localized } from './locales'
import type { UiStrings } from './ui'

export interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: UiStrings
  l: <T>(value: Localized<T>) => T
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
