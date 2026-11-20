import { screen, within } from '@testing-library/react'
import { Route, Routes } from 'react-router'
import { describe, expect, it } from 'vitest'
import { tours } from '../data/tours'
import { renderWithLanguage } from '../test/render'
import { TourPage } from './TourPage'

function renderTourPage(tourId: string, locale: 'pt' | 'en' | 'es' = 'pt') {
  return renderWithLanguage(
    <Routes>
      <Route path="/" element={<p>home</p>} />
      <Route path="/passeios/:tourId" element={<TourPage />} />
    </Routes>,
    { route: `/passeios/${tourId}`, locale },
  )
}

describe('TourPage', () => {
  const tour = tours.find((item) => item.category === 'Mar')!

  it('shows the tour title, full description and details', () => {
    renderTourPage(tour.id)

    expect(screen.getByRole('heading', { level: 1, name: tour.title.pt })).toBeInTheDocument()
    expect(screen.getByText(tour.description.pt)).toBeInTheDocument()
    tour.details.pt.forEach((detail) =>
      expect(screen.getAllByText(detail).length).toBeGreaterThan(0),
    )
  })

  it('renders a breadcrumb back to the tours section', () => {
    renderTourPage(tour.id)

    const breadcrumb = screen.getByRole('navigation', { name: 'Você está em' })
    expect(within(breadcrumb).getByRole('link', { name: 'Passeios' })).toHaveAttribute(
      'href',
      '/#passeios',
    )
    expect(within(breadcrumb).getByText(tour.title.pt)).toHaveAttribute('aria-current', 'page')
  })

  it('updates the document title with the tour name', () => {
    renderTourPage(tour.id, 'en')

    expect(document.title).toBe(`${tour.title.en} | Adriano Noronha Tours`)
  })

  it('suggests three other tours, never the current one', () => {
    renderTourPage(tour.id)

    const related = screen.getByRole('heading', { name: 'Você também pode gostar' }).parentElement!
    const titles = within(related)
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent)

    expect(titles).toHaveLength(3)
    expect(titles).not.toContain(tour.title.pt)
  })

  it('redirects unknown tours back to the home page', () => {
    renderTourPage('passeio-inexistente')

    expect(screen.getByText('home')).toBeInTheDocument()
  })

  describe('Ilha Tour', () => {
    it('presents the shared and private options with their prices', () => {
      renderTourPage('ilha-tour')

      const shared = screen.getByRole('heading', { name: 'Ilha Tour Coletivo' }).closest('article')!
      const priv = screen.getByRole('heading', { name: 'Ilha Tour Privativo' }).closest('article')!

      expect(within(shared).getByText(/250/)).toHaveTextContent('R$ 250')
      expect(within(shared).getByText('Caminhonete 4x4')).toBeInTheDocument()
      expect(within(priv).getByRole('row', { name: /Até 2 pessoas/ })).toHaveTextContent('1.200')
      expect(within(priv).getByRole('row', { name: /Até 4 pessoas/ })).toHaveTextContent('1.500')
      expect(within(priv).getByText(/Para mais pessoas, consulte o valor/)).toBeInTheDocument()
      expect(within(priv).queryByText('FotoSub incluso')).not.toBeInTheDocument()
    })

    it('books each option with a specific WhatsApp message', () => {
      renderTourPage('ilha-tour')

      const link = screen.getByRole('link', { name: 'Reservar o privativo' })
      expect(new URL(link.getAttribute('href')!).searchParams.get('text')).toBe(
        'Olá, Adriano! Quero reservar o Ilha Tour na modalidade Privativo. Pode me passar as datas disponíveis?',
      )
    })

    it('lists the tour highlights and payment methods', () => {
      renderTourPage('ilha-tour')

      ;['Snorkeling', 'Guia especializado', '80% da ilha', 'Paradas para fotos'].forEach((title) =>
        expect(screen.getByRole('heading', { name: title })).toBeInTheDocument(),
      )
      expect(
        screen.getByText('dinheiro, Pix ou cartão mediante link (incluindo taxas)'),
      ).toBeInTheDocument()
    })

    it('shows the private option first, then the shared one', () => {
      renderTourPage('ilha-tour')

      const titles = screen
        .getAllByRole('heading', { level: 3 })
        .map((heading) => heading.textContent)
        .filter((title) => title?.startsWith('Ilha Tour '))

      expect(titles.slice(0, 2)).toEqual(['Ilha Tour Privativo', 'Ilha Tour Coletivo'])
    })

    it('formats prices for the visitor locale', () => {
      renderTourPage('ilha-tour', 'en')

      const priv = screen.getByRole('heading', { name: 'Island Tour Private' }).closest('article')!
      expect(within(priv).getByRole('row', { name: /Up to 2 people/ })).toHaveTextContent('R$1,200')
    })
  })

  describe('Circuito das piscinas naturais', () => {
    it('highlights the mobility requirement at the top of the page', () => {
      renderTourPage('piscinas-naturais')

      const warning = screen.getByRole('note')
      expect(warning).toHaveTextContent('Atenção: exige boa mobilidade')
      expect(warning).toHaveTextContent('habilidade e equilíbrio para caminhar nas pedras')
    })

    it('shows the price, duration and a single booking button', () => {
      renderTourPage('piscinas-naturais')

      const info = screen.getByRole('heading', { name: 'Informações e valores' }).parentElement!
      expect(within(info).getByRole('row', { name: /Valor/ })).toHaveTextContent('R$ 250')
      expect(within(info).getByText('2h30')).toBeInTheDocument()
      expect(
        within(info).getByText('Exige mobilidade para caminhar nas pedras'),
      ).toBeInTheDocument()

      const book = within(info).getByRole('link', { name: 'Reservar pelo WhatsApp' })
      expect(new URL(book.getAttribute('href')!).searchParams.get('text')).toBe(
        'Olá, Adriano! Quero saber valores e datas do passeio "Circuito das piscinas naturais".',
      )
    })
  })

  describe('Mergulho com cilindro', () => {
    it('shows the shipwreck and boat dives as two options with their own booking', () => {
      renderTourPage('mergulho-cilindro')

      const titles = screen
        .getAllByRole('heading', { level: 3 })
        .map((heading) => heading.textContent)
      expect(titles).toContain('Mergulho de cilindro no naufrágio')
      expect(titles).toContain('Mergulho de cilindro embarcado')

      const boat = screen.getByRole('heading', {
        name: 'Mergulho de cilindro embarcado',
      }).parentElement!
      const book = within(boat).getByRole('link', { name: 'Reservar pelo WhatsApp' })
      expect(new URL(book.getAttribute('href')!).searchParams.get('text')).toBe(
        'Olá, Adriano! Quero saber valores e datas do passeio "Mergulho de cilindro embarcado".',
      )
    })
  })

  describe('Canoa havaiana', () => {
    it('shows the dolphins tag next to the category', () => {
      renderTourPage('canoa-havaiana')

      const hero = screen.getByRole('heading', { level: 1, name: 'Canoa havaiana' }).parentElement!
      expect(within(hero).getByText('Chance de ver golfinhos')).toBeInTheDocument()
    })
  })

  describe('Catamarã Trovão dos Mares', () => {
    it('marks it as the only tour with lunch on board', () => {
      renderTourPage('catamara-trovao-dos-mares')

      const hero = screen.getByRole('heading', {
        level: 1,
        name: 'Catamarã Trovão dos Mares',
      }).parentElement!
      expect(within(hero).getByText('Único com almoço a bordo')).toBeInTheDocument()
    })
  })
})
