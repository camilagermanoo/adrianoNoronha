import { buildWhatsAppLink } from '../utils/format'

export const navItems = ['passeios', 'roteiros', 'destinos', 'sobre', 'duvidas'] as const

export type NavItemId = (typeof navItems)[number]

export const contactInfo = {
  whatsapp: '5581992254504',
  whatsappDisplay: '(81) 99225-4504',
  instagram: 'adrianonoronhapasseios',
  location: 'Fernando de Noronha - PE',
}

export function whatsAppLink(message: string) {
  return buildWhatsAppLink(contactInfo.whatsapp, message)
}
