import { describe, expect, it } from 'vitest'
import { buildWhatsAppLink } from './format'

describe('buildWhatsAppLink', () => {
  it('builds a wa.me link with the phone number', () => {
    expect(buildWhatsAppLink('5581992254504', 'Oi')).toBe('https://wa.me/5581992254504?text=Oi')
  })

  it('encodes accents, spaces, quotes and line breaks in the message', () => {
    const link = buildWhatsAppLink('5581992254504', 'Olá, "Ilha Tour"\n• 2 pessoas')
    const message = new URL(link).searchParams.get('text')

    expect(link).not.toMatch(/\s/)
    expect(message).toBe('Olá, "Ilha Tour"\n• 2 pessoas')
  })
})
