import { buildWhatsAppLink } from '../utils/format'

export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Passeios', href: '#passeios' },
  { label: 'Roteiros', href: '#roteiros' },
  { label: 'Destinos', href: '#destinos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export const contactInfo = {
  whatsapp: '5581992254504',
  whatsappDisplay: '(81) 99225-4504',
  instagram: 'adrianonoronhapasseios',
  location: 'Fernando de Noronha - PE',
  payment: 'Dinheiro, Pix ou cartão (com taxa)',
}

export function whatsAppLink(
  message = 'Olá, Adriano! Quero ajuda para planejar meus passeios em Noronha.',
) {
  return buildWhatsAppLink(contactInfo.whatsapp, message)
}
