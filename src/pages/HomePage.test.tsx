import { describe, expect, it } from 'vitest'
import { renderWithLanguage } from '../test/render'
import { HomePage } from './HomePage'

describe('HomePage', () => {
  it('sets the localized site title', () => {
    renderWithLanguage(<HomePage />, { locale: 'es' })

    expect(document.title).toBe('Adriano Noronha | Paseos en Fernando de Noronha')
  })
})
