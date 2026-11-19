import { render, type RenderOptions } from '@testing-library/react'
import type { ReactElement } from 'react'
import { LanguageProvider } from '../i18n/LanguageProvider'
import type { Locale } from '../i18n/locales'

interface Options extends RenderOptions {
  locale?: Locale
}

export function renderWithLanguage(ui: ReactElement, { locale = 'pt', ...options }: Options = {}) {
  localStorage.setItem('locale', locale)
  return render(ui, { wrapper: LanguageProvider, ...options })
}
