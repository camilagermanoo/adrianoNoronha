import type { Tour } from '../types'

export const tours: Tour[] = [
  {
    id: 'ilha-tour',
    title: 'Ilha Tour Completo',
    description:
      'O passeio clássico para o primeiro dia: um panorama das principais praias, mirantes e da história da ilha.',
    duration: 'Dia inteiro',
    difficulty: 'Leve',
    price: 280,
    includes: ['Transporte em buggy', 'Paradas para banho', 'Pôr do sol no Boldró'],
  },
  {
    id: 'trilha-atalaia',
    title: 'Trilha do Atalaia',
    description:
      'Trilha guiada até a piscina natural do Atalaia e a Enseada da Caieira, com snorkel em águas protegidas.',
    duration: '4 horas',
    difficulty: 'Moderado',
    price: 220,
    includes: ['Agendamento no ICMBio', 'Equipamento de snorkel', 'Seguro aventura'],
    featured: true,
  },
  {
    id: 'mergulho-sueste',
    title: 'Snorkel com Tartarugas',
    description:
      'Flutuação na Baía do Sueste ao lado de tartarugas marinhas, raias e peixes coloridos, com orientação de biólogo.',
    duration: '3 horas',
    difficulty: 'Leve',
    price: 190,
    includes: ['Colete e máscara', 'Fotos subaquáticas', 'Briefing ambiental'],
  },
  {
    id: 'trilha-capim-acu',
    title: 'Trilha Capim-Açu',
    description:
      'A trilha mais desafiadora do arquipélago, passando pelo Pico e pela Baía do Sancho por cenários selvagens.',
    duration: '6 horas',
    difficulty: 'Intenso',
    price: 320,
    includes: ['Guia credenciado', 'Lanche de trilha', 'Seguro aventura'],
  },
]
