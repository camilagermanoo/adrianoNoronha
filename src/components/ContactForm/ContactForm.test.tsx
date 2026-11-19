import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { renderWithLanguage } from '../../test/render'
import { ContactForm } from './ContactForm'

function sentMessage() {
  const [[url]] = vi.mocked(window.open).mock.calls
  return new URL(String(url)).searchParams.get('text')
}

describe('ContactForm', () => {
  it('sends the trip details and selected tours to WhatsApp', async () => {
    renderWithLanguage(<ContactForm />)

    await userEvent.type(screen.getByLabelText('Seu nome'), 'Camila')
    await userEvent.clear(screen.getByLabelText('Pessoas'))
    await userEvent.type(screen.getByLabelText('Pessoas'), '4')
    await userEvent.type(screen.getByLabelText(/Quando você vai estar/), '10 a 15 de março')
    await userEvent.click(screen.getByRole('button', { name: 'Canoa havaiana' }))
    await userEvent.click(screen.getByRole('button', { name: 'Ilha Tour coletivo' }))
    await userEvent.type(screen.getByLabelText(/Algo que o Adriano/), 'Voo às 15h')
    await userEvent.click(screen.getByRole('button', { name: 'Enviar pelo WhatsApp' }))

    expect(sentMessage()).toBe(
      [
        'Olá, Adriano! Meu nome é Camila.',
        '• Datas na ilha: 10 a 15 de março',
        '• Pessoas: 4',
        '• Passeios: Ilha Tour coletivo, Canoa havaiana',
        '• Observações: Voo às 15h',
      ].join('\n'),
    )
  })

  it('toggles tour chips on and off', async () => {
    renderWithLanguage(<ContactForm />)
    const chip = screen.getByRole('button', { name: 'Mergulho de snorkel' })

    await userEvent.click(chip)
    expect(chip).toHaveAttribute('aria-pressed', 'true')

    await userEvent.click(chip)
    expect(chip).toHaveAttribute('aria-pressed', 'false')
  })

  it('asks for suggestions when no tour is selected, in the visitor language', async () => {
    renderWithLanguage(<ContactForm />, { locale: 'es' })

    await userEvent.type(screen.getByLabelText('Tu nombre'), 'Lucía')
    await userEvent.click(screen.getByRole('button', { name: 'Enviar por WhatsApp' }))

    const message = sentMessage()
    expect(message).toContain('¡Hola, Adriano! Me llamo Lucía.')
    expect(message).toContain('• Fechas en la isla: por definir')
    expect(message).toContain('• Paseos: quiero sugerencias')
    expect(message).not.toContain('Observaciones')
  })

  it('requires the visitor name before sending', async () => {
    renderWithLanguage(<ContactForm />)

    await userEvent.click(screen.getByRole('button', { name: 'Enviar pelo WhatsApp' }))

    expect(window.open).not.toHaveBeenCalled()
  })
})
