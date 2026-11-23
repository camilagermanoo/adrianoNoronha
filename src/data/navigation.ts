import { buildWhatsAppLink } from '../utils/format'

export const navItems = ['passeios', 'roteiros', 'destinos', 'sobre', 'dicas', 'duvidas'] as const

export type NavItemId = (typeof navItems)[number]

export const contactInfo = {
  whatsapp: '5581992254504',
  whatsappDisplay: '(81) 99225-4504',
  instagram: 'adriano.noronha.passeios',
  instagramUrl: 'https://www.instagram.com/adriano.noronha.passeios/',
  tiktok: 'adrianonoronhapasseios',
  tiktokUrl: 'https://www.tiktok.com/@adrianonoronhapasseios',
  email: 'adrianonoronhapasseios@gmail.com',
  location: 'Fernando de Noronha - PE',
}

export function whatsAppLink(message: string) {
  return buildWhatsAppLink(contactInfo.whatsapp, message)
}
