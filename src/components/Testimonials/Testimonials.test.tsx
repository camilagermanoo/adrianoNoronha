import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { renderWithLanguage } from '../../test/render'
import { Testimonials } from './Testimonials'

function sentMessage() {
  const [[url]] = vi.mocked(window.open).mock.calls
  return new URL(String(url)).searchParams.get('text')
}

describe('Testimonials', () => {
  it('sends the visitor feedback to WhatsApp from the dialog', async () => {
    renderWithLanguage(<Testimonials />)

    await userEvent.click(screen.getByRole('button', { name: 'Deixe aqui seu feedback' }))
    const dialog = screen.getByRole('dialog', { name: 'Deixe seu feedback' })

    await userEvent.type(within(dialog).getByLabelText('Seu nome'), 'Camila')
    await userEvent.type(within(dialog).getByLabelText('País de origem'), 'Brasil')
    await userEvent.type(within(dialog).getByLabelText(/Seu Instagram/), '@@camila.viaja')
    await userEvent.type(within(dialog).getByLabelText('Sua mensagem'), 'Passeio incrível!')
    await userEvent.click(within(dialog).getByRole('button', { name: 'Enviar pelo WhatsApp' }))

    expect(sentMessage()).toBe(
      [
        'Olá, Adriano! Quero deixar meu feedback para o site.',
        '• Nome: Camila',
        '• País: Brasil',
        '• Instagram: @camila.viaja',
        '• Mensagem: Passeio incrível!',
      ].join('\n'),
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('leaves the Instagram line out when the visitor skips it', async () => {
    renderWithLanguage(<Testimonials />)

    await userEvent.click(screen.getByRole('button', { name: 'Deixe aqui seu feedback' }))
    const dialog = screen.getByRole('dialog')
    await userEvent.type(within(dialog).getByLabelText('Seu nome'), 'Ana')
    await userEvent.type(within(dialog).getByLabelText('País de origem'), 'Portugal')
    await userEvent.type(within(dialog).getByLabelText('Sua mensagem'), 'Amei')
    await userEvent.click(within(dialog).getByRole('button', { name: 'Enviar pelo WhatsApp' }))

    expect(sentMessage()).not.toContain('Instagram')
  })

  it('shows every testimonial in the carousel', () => {
    renderWithLanguage(<Testimonials />)

    expect(screen.getAllByRole('blockquote')).toHaveLength(6)
  })
})
