import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { renderWithLanguage } from '../../test/render'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('opens Adriano’s Instagram chat and copies the feedback message', async () => {
    const user = userEvent.setup()
    const writeText = vi.spyOn(navigator.clipboard, 'writeText')
    renderWithLanguage(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Deixe aqui seu feedback' }))

    expect(window.open).toHaveBeenCalledWith(
      'https://ig.me/m/adriano.noronha.passeios',
      '_blank',
      'noopener,noreferrer',
    )
    expect(writeText).toHaveBeenCalledWith('Olá Adriano, gostaria de deixar meu feedback')
    expect(await screen.findByRole('status')).toHaveTextContent(
      'Mensagem copiada! É só colar na conversa do Instagram.',
    )
  })

  it('shows the country and Instagram of a published feedback', () => {
    renderWithLanguage(<Testimonials />)

    const card = screen.getAllByText('Silvania Germano')[0].closest('figure')!
    expect(within(card).getByText(/Brasil · via WhatsApp/)).toBeInTheDocument()
    expect(within(card).getByRole('link', { name: '@silgermanoo' })).toHaveAttribute(
      'href',
      'https://www.instagram.com/silgermanoo/',
    )
  })

  it('shows every testimonial once to assistive tech while looping the carousel', () => {
    renderWithLanguage(<Testimonials />)

    expect(screen.getAllByRole('blockquote')).toHaveLength(7)
    expect(screen.getAllByRole('blockquote', { hidden: true })).toHaveLength(14)
    expect(screen.queryByRole('button', { name: /depoimento/ })).not.toBeInTheDocument()
  })
})
