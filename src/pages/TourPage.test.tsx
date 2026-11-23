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

  describe('Mergulho de cilindro', () => {
    it('has a separate page for the shipwreck dive and for the boat dive', () => {
      renderTourPage('mergulho-cilindro-naufragio')
      expect(
        screen.getByRole('heading', { level: 1, name: 'Mergulho de cilindro no naufrágio' }),
      ).toBeInTheDocument()
    })

    it('books the boat dive on its own page with its rules and cancellation policy', () => {
      renderTourPage('mergulho-cilindro-embarcado')
      expect(
        screen.getByRole('heading', { level: 1, name: 'Mergulho de cilindro embarcado' }),
      ).toBeInTheDocument()
      expect(
        screen.getByRole('heading', { name: 'Bom saber antes de reservar' }),
      ).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'Política de cancelamento' })).toBeInTheDocument()
    })
  })

  describe('Trilhas do Parque Nacional', () => {
    it('groups the park trails on one page with the ICMBio booking rules', () => {
      renderTourPage('trilhas-parque')
      expect(
        screen.getByRole('heading', { level: 1, name: 'Trilhas do Parque Nacional' }),
      ).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'Trilha do Morro São José' })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'Trilha Capim-Açu' })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'Trilha do Atalaia' })).toBeInTheDocument()
      expect(
        screen.getByRole('heading', { name: 'Trilha Pontinha - Caieiras' }),
      ).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'Trilha do Abreu' })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'Nas piscinas naturais' })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'Agendamento e guia' })).toBeInTheDocument()
    })

    it('links to the ICMBio booking website', () => {
      renderTourPage('trilhas-parque')
      expect(screen.getByRole('link', { name: 'Agendar no site do ICMBio' })).toHaveAttribute(
        'href',
        'https://agendamento.parnanoronha.com.br/',
      )
    })

    it('shows the price of every trail and that none includes transfer', () => {
      renderTourPage('trilhas-parque')
      expect(screen.getByRole('rowheader', { name: 'Pontinha - Caieiras' })).toBeInTheDocument()
      expect(
        screen.getAllByRole('rowheader', { name: 'Atalaia + Pontinha - Caieiras' }),
      ).toHaveLength(2)
      expect(screen.getByRole('rowheader', { name: 'A partir de 2 pessoas' })).toBeInTheDocument()
      expect(screen.getAllByText('Conforme a tábua da maré')).toHaveLength(5)
      expect(screen.getAllByText('Autoguiada (guia opcional)')).toHaveLength(2)
      expect(screen.getAllByText('Tênis e roupas com proteção UV')).toHaveLength(4)
    })
  })

  describe('Trilha Costa Esmeralda', () => {
    it('shows the beaches, the price and that no ICMBio booking is needed', () => {
      renderTourPage('trilha-costa-esmeralda')
      expect(
        screen.getByRole('heading', { level: 1, name: 'Trilha Costa Esmeralda' }),
      ).toBeInTheDocument()
      expect(screen.getByText('Não precisa agendar')).toBeInTheDocument()
      expect(screen.getByText('Conforme a tábua da maré')).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'O que levar' })).toBeInTheDocument()
      expect(screen.getAllByText('R$ 250 por pessoa').length).toBeGreaterThan(0)
    })
  })

  describe('Lanchas privativas', () => {
    it('groups every private boat on one page, except the clear-bottom boat', () => {
      const { container } = renderTourPage('lanchas-privativas')
      const options = within(container.querySelector('#modalidades') as HTMLElement)
      expect(
        screen.getByRole('heading', { level: 1, name: 'Lanchas privativas' }),
      ).toBeInTheDocument()
      for (const name of [
        'Lancha NX 50 Invictus Fly',
        'Lancha Victa Maris 50',
        'Lancha Descaradinha',
        'Lancha Italiana Ferretti 43',
        'Lancha Amostradinha 44',
        'Lancha Junco 38',
        'Lancha My Love 30',
        'Lancha Léo 23',
        'Lancha Trovão dos Mares 39',
        'Lancha Fish Hunter 44: pesca oceânica',
      ]) {
        expect(options.getByRole('heading', { level: 3, name })).toBeInTheDocument()
      }
      expect(
        options.queryByRole('heading', { level: 3, name: 'Lancha Transparente' }),
      ).not.toBeInTheDocument()
    })

    it('keeps each boat price, transfer rule and notes', () => {
      renderTourPage('lanchas-privativas')
      expect(screen.getByText('Mediante disponibilidade, até 5 pessoas')).toBeInTheDocument()
      expect(screen.getByRole('rowheader', { name: 'Casal (2 pessoas)' })).toBeInTheDocument()
      expect(screen.getAllByRole('rowheader', { name: '5 pessoas' })).toHaveLength(5)
      expect(screen.getAllByText('Leve colete e máscara')).toHaveLength(2)
      expect(screen.getAllByText('Manhã: 9h às 13h · Tarde: 14h30 ao pôr do sol')).toHaveLength(2)
      expect(
        screen.getByRole('rowheader', { name: 'Passeio sem refeição (até 4 pessoas)' }),
      ).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'Open bar a bordo' })).toBeInTheDocument()
      expect(screen.getAllByText('Leve a sua')).toHaveLength(3)
      expect(
        screen.getByRole('rowheader', { name: 'Banco do Sueste ou Leste: 20h, até 4 pescadores' }),
      ).toBeInTheDocument()
    })

    it('redirects the old boat pages to the private boats page', () => {
      renderTourPage('lancha-descaradinha')
      expect(
        screen.getByRole('heading', { level: 1, name: 'Lanchas privativas' }),
      ).toBeInTheDocument()
    })
  })

  describe('Lancha Transparente', () => {
    it('keeps its own page with departures and mixed prices', () => {
      renderTourPage('lancha-transparente')
      expect(
        screen.getByRole('heading', { level: 1, name: 'Lancha Transparente' }),
      ).toBeInTheDocument()
      expect(screen.getByText('8h, 9h30, 11h e 13h30')).toBeInTheDocument()
      expect(
        screen.getByRole('rowheader', { name: 'Privativo (até 6 pessoas)' }),
      ).toBeInTheDocument()
      expect(screen.getByRole('rowheader', { name: 'Coletivo' })).toBeInTheDocument()
    })
  })

  describe('Passeio a cavalo', () => {
    it('shows the morning and sunset schedules and the price', () => {
      renderTourPage('passeio-a-cavalo')
      expect(
        screen.getByRole('heading', { level: 1, name: 'Passeio a cavalo' }),
      ).toBeInTheDocument()
      expect(screen.getAllByText('7h30 às 9h30 ou 16h30 às 18h30').length).toBeGreaterThan(0)
    })
  })

  describe('Rapel', () => {
    it('shows the Morro do Piquinho rappel without transfer', () => {
      renderTourPage('rapel')
      expect(
        screen.getByRole('heading', { level: 1, name: 'Rapel no Morro do Piquinho' }),
      ).toBeInTheDocument()
      expect(screen.getByText('Não incluso')).toBeInTheDocument()
    })
  })

  describe('Ensaio subaquático', () => {
    it('shows the price for one and for two people', () => {
      renderTourPage('ensaios-subaquaticos')
      expect(
        screen.getByRole('heading', { level: 1, name: 'Ensaio subaquático' }),
      ).toBeInTheDocument()
      expect(screen.getByRole('rowheader', { name: '1 pessoa' })).toBeInTheDocument()
      expect(screen.getByRole('rowheader', { name: '2 pessoas' })).toBeInTheDocument()
    })
  })

  describe('Sessão de fotos com buggy', () => {
    it('shows the exclusive tag and the prices for one and two people', () => {
      renderTourPage('sessao-fotos-buggy')
      expect(screen.getByText('Exclusivo com o Adriano')).toBeInTheDocument()
      expect(screen.getByRole('rowheader', { name: '1 pessoa' })).toBeInTheDocument()
      expect(screen.getByRole('rowheader', { name: '2 pessoas' })).toBeInTheDocument()
    })
  })

  describe('Aluguéis', () => {
    it('shows the daily price of each rental', () => {
      renderTourPage('alugueis')
      expect(screen.getAllByText('por diária (24h)')).toHaveLength(4)
    })
  })

  describe('Travessia de snorkel', () => {
    it('shows the Porto to Cachorro crossing with its price', () => {
      renderTourPage('travessia-snorkel')
      expect(
        screen.getByRole('heading', { level: 1, name: 'Travessia de snorkel Porto / Cachorro' }),
      ).toBeInTheDocument()
      expect(screen.getByText('Não inclusos, aluguel no local')).toBeInTheDocument()
    })
  })

  describe('Piscina natural do Morro de Fora', () => {
    it('shows the moderate level and the footwear tip', () => {
      renderTourPage('piscina-morro-de-fora')
      expect(
        screen.getByRole('heading', { level: 1, name: 'Piscina natural do Morro de Fora' }),
      ).toBeInTheDocument()
      expect(screen.getByText('Médio')).toBeInTheDocument()
      expect(screen.getByText('Uso de sandálias, chinelos ou sapatilhas')).toBeInTheDocument()
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
