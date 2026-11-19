import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { combos } from '../../data/combos'
import { renderWithLanguage } from '../../test/render'
import { Combos } from './Combos'

describe('Combos', () => {
  it('lists every combo with links to its tours', () => {
    renderWithLanguage(<Combos />)

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(combos.length)

    const included = within(cards[0]).getByRole('list', { name: 'Passeios incluídos' })
    expect(within(included).getByRole('link', { name: 'Ilha Tour' })).toHaveAttribute(
      'href',
      '/passeios/ilha-tour',
    )
  })

  it('books a combo with a WhatsApp message naming its tours', () => {
    renderWithLanguage(<Combos />)

    const [firstCta] = screen.getAllByRole('link', { name: /Quero este combo/ })
    expect(new URL(firstCta.getAttribute('href')!).searchParams.get('text')).toBe(
      'Olá, Adriano! Quero detalhes do combo Ilha Tour + Entardecer VIP + Canoa havaiana.',
    )
  })
})
