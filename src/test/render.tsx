import { render, type RenderOptions } from '@testing-library/react'
import type { ReactElement, ReactNode } from 'react'
import { MemoryRouter } from 'react-router'
import { LanguageProvider } from '../i18n/LanguageProvider'
import type { Locale } from '../i18n/locales'

interface Options extends RenderOptions {
  locale?: Locale
  route?: string
}

export function renderWithLanguage(
  ui: ReactElement,
  { locale = 'pt', route = '/', ...options }: Options = {},
) {
  localStorage.setItem('locale', locale)

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <MemoryRouter initialEntries={[route]}>
      <LanguageProvider>{children}</LanguageProvider>
    </MemoryRouter>
  )

  return render(ui, { wrapper: Wrapper, ...options })
}
