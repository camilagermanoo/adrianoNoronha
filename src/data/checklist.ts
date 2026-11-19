export interface ChecklistItem {
  title: string
  description: string
  link?: { label: string; href: string }
}

export const checklist: ChecklistItem[] = [
  {
    title: 'Pague a Taxa de Preservação Ambiental',
    description:
      'A TPA é obrigatória para todo visitante e cobrada por dia de permanência. Dá para pagar on-line antes de embarcar.',
    link: { label: 'Site oficial da TPA', href: 'https://www.noronha.pe.gov.br/' },
  },
  {
    title: 'Garanta o cartão do Parque Nacional',
    description:
      'É exigido em vários passeios, como o Ilha Tour e o barco até o Sancho, e dá acesso às praias dentro do parque.',
    link: { label: 'Comprar ingresso do parque', href: 'https://www.parnanoronha.com.br/' },
  },
  {
    title: 'Agende as trilhas controladas',
    description:
      'Trilhas como Atalaia e Capim-Açu têm vagas limitadas e são agendadas pelo site ou na loja do ICMBio.',
  },
  {
    title: 'Fique de olho na maré',
    description:
      'Piscinas naturais e alguns passeios só acontecem na maré baixa. Montamos o roteiro de acordo com a tábua de marés.',
  },
  {
    title: 'Reserve os passeios com antecedência',
    description:
      'Na alta temporada as vagas acabam rápido. Fale com o Adriano pelo WhatsApp e deixe tudo combinado antes de chegar.',
  },
]
