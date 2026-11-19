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
  whatsapp: '5581999999999',
  whatsappDisplay: '(81) 99999-9999',
  email: 'contato@adrianonoronha.com.br',
  instagram: 'adrianonoronha',
  address: 'Vila dos Remédios, Fernando de Noronha - PE',
}

export function whatsAppLink(
  message = 'Olá, Adriano! Quero ajuda para planejar meus passeios em Noronha.',
) {
  return buildWhatsAppLink(contactInfo.whatsapp, message)
}
