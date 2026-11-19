import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { renderWithLanguage } from '../../test/render'
import { TripPlanner } from './TripPlanner'

function sentMessage() {
  const [[url]] = vi.mocked(window.open).mock.calls
  return new URL(String(url)).searchParams.get('text')
}

describe('TripPlanner', () => {
  it('composes a WhatsApp message with interest, arrival date and group size', async () => {
    renderWithLanguage(<TripPlanner />)

    await userEvent.selectOptions(screen.getByLabelText('O que você quer viver?'), 'Mergulho')
    fireEvent.change(screen.getByLabelText('Chegada na ilha'), {
      target: { value: '2027-03-10' },
    })
    await userEvent.selectOptions(screen.getByLabelText('Quantas pessoas?'), '3 a 4 pessoas')
    await userEvent.click(screen.getByRole('button', { name: 'Receber sugestões' }))

    expect(sentMessage()).toBe(
      'Olá, Adriano! Quero planejar meus passeios em Noronha.\n• Interesse: Mergulho\n• Chegada: 10/03/2027\n• Grupo: 3 a 4 pessoas',
    )
    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining('https://wa.me/'),
      '_blank',
      'noopener,noreferrer',
    )
  })

  it('marks the date as undefined when no arrival is chosen', async () => {
    renderWithLanguage(<TripPlanner />, { locale: 'en' })

    await userEvent.click(screen.getByRole('button', { name: 'Get suggestions' }))

    expect(sentMessage()).toContain('• Arrival: date to be defined')
    expect(sentMessage()).toContain('• Group: 2 people')
  })
})
