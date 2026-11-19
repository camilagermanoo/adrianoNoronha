import type { Tour } from '../types'

export const tours: Tour[] = [
  {
    id: 'ilha-tour',
    title: 'Ilha Tour',
    tagline: 'Cerca de 80% da ilha em um único dia.',
    description:
      'O passeio clássico para o primeiro dia: praias, mirantes e a história do arquipélago a bordo de um 4x4, com pôr do sol no Boldró.',
    duration: 'Dia inteiro',
    difficulty: 'Leve',
    price: 280,
    priceUnit: '/pessoa',
    gradient: ['#e8b25a', '#1f6b52'],
    badge: 'Mais vendido',
  },
  {
    id: 'barco-por-do-sol',
    title: 'Barco ao Pôr do Sol',
    tagline: 'Golfinhos e entardecer em alto-mar.',
    description:
      'Navegação pelo Mar de Dentro com avistamento de golfinhos-rotadores, parada para banho e o pôr do sol visto do mar.',
    duration: '3 horas',
    difficulty: 'Leve',
    price: 300,
    priceUnit: '/pessoa',
    gradient: ['#f0955a', '#3a2f5b'],
  },
  {
    id: 'canoa-havaiana',
    title: 'Canoa Havaiana',
    tagline: 'Remada contemplativa ao nascer do sol.',
    description:
      'Uma experiência em equipe pelo Mar de Dentro, com grandes chances de encontrar golfinhos e tartarugas pelo caminho.',
    duration: '2 horas',
    difficulty: 'Moderado',
    price: 220,
    priceUnit: '/pessoa',
    gradient: ['#f6c99a', '#1a9e95'],
  },
  {
    id: 'snorkel-sueste',
    title: 'Snorkel com Tartarugas',
    tagline: 'Flutuação na Baía do Sueste.',
    description:
      'Nade ao lado de tartarugas marinhas, raias e peixes coloridos, com briefing ambiental e equipamento incluso.',
    duration: '3 horas',
    difficulty: 'Leve',
    price: 190,
    priceUnit: '/pessoa',
    gradient: ['#1a9e95', '#0f3d4a'],
  },
  {
    id: 'trilha-atalaia',
    title: 'Trilha do Atalaia',
    tagline: 'A piscina natural mais protegida da ilha.',
    description:
      'Trilha guiada até a piscina natural do Atalaia, com agendamento no ICMBio e snorkel em águas cristalinas.',
    duration: '4 horas',
    difficulty: 'Moderado',
    price: 220,
    priceUnit: '/pessoa',
    gradient: ['#8fd9cf', '#17453a'],
  },
  {
    id: 'mergulho-batismo',
    title: 'Mergulho de Batismo',
    tagline: 'Sua primeira vez com cilindro.',
    description:
      'Mergulho acompanhado por instrutor em um dos pontos mais bonitos do Parque Nacional Marinho. Não é preciso experiência.',
    duration: '4 horas',
    difficulty: 'Leve',
    price: 650,
    priceUnit: '/pessoa',
    gradient: ['#2b7bb9', '#0b2340'],
    badge: 'Novidade',
  },
  {
    id: 'trilha-capim-acu',
    title: 'Trilha Capim-Açu',
    tagline: 'A trilha mais selvagem do arquipélago.',
    description:
      'Percurso desafiador por mata nativa e falésias até a Baía do Sancho, para quem busca aventura de verdade.',
    duration: '6 horas',
    difficulty: 'Intenso',
    price: 320,
    priceUnit: '/pessoa',
    gradient: ['#7fae6b', '#173d2e'],
  },
  {
    id: 'ilha-tour-privativo',
    title: 'Ilha Tour Privativo',
    tagline: 'O roteiro completo, no seu ritmo.',
    description:
      'Veículo e guia exclusivos para o seu grupo, com horários flexíveis e paradas escolhidas por você.',
    duration: 'Dia inteiro',
    difficulty: 'Leve',
    price: 1200,
    priceUnit: 'até 4 pessoas',
    gradient: ['#e8862a', '#0f2621'],
  },
]
