import { buildWhatsAppLink } from '../utils/format'

export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Passeios', href: '#passeios' },
  { label: 'Combos', href: '#combos' },
  { label: 'Destinos', href: '#destinos' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Taxas', href: '#taxas' },
  { label: 'FAQ', href: '#faq' },
]

export const contactInfo = {
  whatsapp: '5581999999999',
  whatsappDisplay: '(81) 99999-9999',
  email: 'contato@ilhaviva.com.br',
  instagram: 'ilhaviva.noronha',
  address: 'Vila dos Remédios, Fernando de Noronha - PE',
}

export function whatsAppLink(
  message = 'Olá! Gostaria de ajuda para planejar meus passeios em Noronha.',
) {
  return buildWhatsAppLink(contactInfo.whatsapp, message)
}
