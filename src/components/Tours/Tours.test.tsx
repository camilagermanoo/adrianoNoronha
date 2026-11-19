import { screen, within } from '@testing-library/react'
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

  it('opens the details dialog with the full description and closes it', async () => {
    renderWithLanguage(<Tours />)
    const [firstTour] = tours

    await userEvent.click(screen.getAllByRole('button', { name: 'Ver detalhes' })[0])

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('open')
    expect(within(dialog).getByText(firstTour.description.pt)).toBeInTheDocument()
    expect(within(dialog).getByText(/cartão do Parque Nacional/)).toBeInTheDocument()

    await userEvent.click(within(dialog).getByRole('button', { name: 'Fechar' }))

    expect(dialog).not.toHaveAttribute('open')
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
})
