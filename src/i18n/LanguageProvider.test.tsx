import { act, render, renderHook, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactNode } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { LanguageSwitcher } from '../components/LanguageSwitcher/LanguageSwitcher'
import { useLanguage } from './context'
import { LanguageProvider } from './LanguageProvider'

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
)

describe('LanguageProvider', () => {
  it('uses the stored locale when available', () => {
    localStorage.setItem('locale', 'es')
    const { result } = renderHook(() => useLanguage(), { wrapper })

    expect(result.current.locale).toBe('es')
  })

  it('falls back to the browser language when nothing is stored', () => {
    vi.spyOn(navigator, 'language', 'get').mockReturnValue('en-US')
    const { result } = renderHook(() => useLanguage(), { wrapper })

    expect(result.current.locale).toBe('en')
  })

  it('defaults to Portuguese for unsupported browser languages', () => {
    vi.spyOn(navigator, 'language', 'get').mockReturnValue('fr-FR')
    const { result } = renderHook(() => useLanguage(), { wrapper })

    expect(result.current.locale).toBe('pt')
  })

  it('persists the choice and updates the document language and title', () => {
    localStorage.setItem('locale', 'pt')
    const { result } = renderHook(() => useLanguage(), { wrapper })

    act(() => result.current.setLocale('en'))

    expect(localStorage.getItem('locale')).toBe('en')
    expect(document.documentElement.lang).toBe('en')
    expect(document.title).toBe('Adriano Noronha | Tours in Fernando de Noronha')
  })

  it('resolves localized values for the active locale', () => {
    localStorage.setItem('locale', 'es')
    const { result } = renderHook(() => useLanguage(), { wrapper })

    expect(result.current.l({ pt: 'Mar', en: 'Sea', es: 'Mar (es)' })).toBe('Mar (es)')
  })

  it('throws a clear error when used outside the provider', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(() => renderHook(() => useLanguage())).toThrow(/LanguageProvider/)
  })
})

describe('LanguageSwitcher', () => {
  it('marks the active language and switches on click', async () => {
    localStorage.setItem('locale', 'pt')
    render(<LanguageSwitcher />, { wrapper })

    const english = screen.getByRole('button', { name: 'English' })
    expect(screen.getByRole('button', { name: 'Português' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )

    await userEvent.click(english)

    expect(english).toHaveAttribute('aria-pressed', 'true')
    expect(document.documentElement.lang).toBe('en')
  })
})
