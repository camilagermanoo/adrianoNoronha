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
})
