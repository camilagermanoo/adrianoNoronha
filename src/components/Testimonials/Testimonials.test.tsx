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
    await userEvent.click(within(dialog).getByLabelText('País de origem'))
    await userEvent.type(within(dialog).getByRole('combobox', { name: 'Buscar país' }), 'bra')
    await userEvent.click(within(dialog).getByRole('option', { name: 'Brasil' }))
    await userEvent.type(within(dialog).getByLabelText(/Seu Instagram/), '@@camila.viaja')
    await userEvent.type(within(dialog).getByLabelText('Sua mensagem'), 'Passeio incrível!')
    await userEvent.click(within(dialog).getByRole('button', { name: 'Enviar pelo WhatsApp' }))

    expect(sentMessage()).toBe(
      [
        'Olá, Adriano! Quero deixar meu feedback para o site.',
        '• Nome: Camila',
        '• País: 🇧🇷 Brasil',
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
    await userEvent.click(within(dialog).getByLabelText('País de origem'))
    await userEvent.type(within(dialog).getByRole('combobox', { name: 'Buscar país' }), 'portu')
    await userEvent.keyboard('{Enter}')
    await userEvent.type(within(dialog).getByLabelText('Sua mensagem'), 'Amei')
    await userEvent.click(within(dialog).getByRole('button', { name: 'Enviar pelo WhatsApp' }))

    expect(sentMessage()).not.toContain('Instagram')
    expect(sentMessage()).toContain('• País: 🇵🇹 Portugal')
  })

  it('asks for the country before sending', async () => {
    renderWithLanguage(<Testimonials />)

    await userEvent.click(screen.getByRole('button', { name: 'Deixe aqui seu feedback' }))
    const dialog = screen.getByRole('dialog')
    await userEvent.type(within(dialog).getByLabelText('Seu nome'), 'Ana')
    await userEvent.type(within(dialog).getByLabelText('Sua mensagem'), 'Amei')
    await userEvent.click(within(dialog).getByRole('button', { name: 'Enviar pelo WhatsApp' }))

    expect(window.open).not.toHaveBeenCalled()
    expect(within(dialog).getByRole('alert')).toHaveTextContent('Selecione o seu país de origem.')
  })

  it('lists the countries with Brazil first and accent-insensitive search', async () => {
    renderWithLanguage(<Testimonials />)

    await userEvent.click(screen.getByRole('button', { name: 'Deixe aqui seu feedback' }))
    const dialog = screen.getByRole('dialog')
    await userEvent.click(within(dialog).getByLabelText('País de origem'))

    expect(within(dialog).getAllByRole('option')[0]).toHaveTextContent('Brasil')
    await userEvent.type(within(dialog).getByRole('combobox'), 'japao')
    expect(within(dialog).getAllByRole('option')).toHaveLength(1)
    expect(within(dialog).getByRole('option')).toHaveTextContent('Japão')
  })

  it('shows the country and Instagram of a published feedback', () => {
    renderWithLanguage(<Testimonials />)

    const card = screen.getByText('Silvania Germano').closest('figure')!
    expect(within(card).getByText(/Brasil · via WhatsApp/)).toBeInTheDocument()
    expect(within(card).getByRole('link', { name: '@silgermanoo' })).toHaveAttribute(
      'href',
      'https://www.instagram.com/silgermanoo/',
    )
  })

  it('shows every testimonial in the carousel', () => {
    renderWithLanguage(<Testimonials />)

    expect(screen.getAllByRole('blockquote')).toHaveLength(7)
  })
})
