export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Destinos', href: '#destinos' },
  { label: 'Passeios', href: '#passeios' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export const contactInfo = {
  whatsapp: '5581999999999',
  whatsappDisplay: '(81) 99999-9999',
  email: 'contato@ilhaviva.com.br',
  instagram: 'ilhaviva.noronha',
  address: 'Vila dos Remédios, Fernando de Noronha - PE',
}
