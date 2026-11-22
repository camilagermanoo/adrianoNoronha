import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithLanguage } from '../../test/render'
import { Tips } from './Tips'

describe('Tips', () => {
  it('warns about the island time zone and links the recommended places', () => {
    renderWithLanguage(<Tips />)
    expect(screen.getByText('Cuidado com o fuso horário da ilha')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Forte da Vila dos Remédios/ })).toHaveAttribute(
      'href',
      'https://www.instagram.com/fortenoronha',
    )
  })
})
