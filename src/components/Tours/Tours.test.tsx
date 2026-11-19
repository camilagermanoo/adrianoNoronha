import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { tours } from '../../data/tours'
import { renderWithLanguage } from '../../test/render'
import { Tours } from './Tours'

function messageFrom(link: HTMLElement) {
  return new URL(link.getAttribute('href')!).searchParams.get('text')
}

describe('Tours', () => {
  it('lists every tour by default with category counters', () => {
    renderWithLanguage(<Tours />)

    expect(screen.getAllByRole('article')).toHaveLength(tours.length)
    expect(screen.getByRole('tab', { name: /Todos/ })).toHaveTextContent(String(tours.length))
  })

  it('filters tours by category', async () => {
    renderWithLanguage(<Tours />)
    const seaTours = tours.filter((tour) => tour.category === 'Mar')

    await userEvent.click(screen.getByRole('tab', { name: /^Mar/ }))

    expect(screen.getByRole('tab', { name: /^Mar/ })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getAllByRole('article')).toHaveLength(seaTours.length)
    seaTours.forEach((tour) =>
      expect(screen.getByRole('heading', { name: tour.title.pt })).toBeInTheDocument(),
    )
  })

  it('links each tour to its own details page', () => {
    renderWithLanguage(<Tours />)

    const detailLinks = screen.getAllByRole('link', { name: 'Ver detalhes' })
    expect(detailLinks).toHaveLength(tours.length)
    expect(detailLinks[0]).toHaveAttribute('href', `/passeios/${tours[0].id}`)
  })

  it('creates a WhatsApp booking message for each tour', () => {
    renderWithLanguage(<Tours />)
    const [firstLink] = screen.getAllByRole('link', { name: /Consultar/ })

    expect(messageFrom(firstLink)).toBe(
      `Olá, Adriano! Quero saber valores e datas do passeio "${tours[0].title.pt}".`,
    )
  })

  it('renders tour content and booking message in English', () => {
    renderWithLanguage(<Tours />, { locale: 'en' })

    expect(screen.getByRole('heading', { name: tours[0].title.en })).toBeInTheDocument()
    expect(messageFrom(screen.getAllByRole('link', { name: /Ask price/ })[0])).toContain(
      `"${tours[0].title.en}"`,
    )
  })

  it('warns about mobility on the natural pools card', () => {
    renderWithLanguage(<Tours />)

    const card = screen
      .getByRole('heading', { name: 'Circuito das piscinas naturais' })
      .closest('article')!
    expect(card).toHaveTextContent('Exige mobilidade para caminhar nas pedras')
  })
})
