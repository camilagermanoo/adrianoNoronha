import type { Tour } from '../types'

export const tours: Tour[] = [
  {
    id: 'ilha-tour',
    title: 'Ilha Tour',
    category: 'Terra',
    description:
      'Um dia inteiro rodando a ilha de 4x4: Vila dos Remédios, mirantes, praias do Mar de Dentro e de Fora e o pôr do sol para fechar.',
    duration: 'Dia inteiro',
    difficulty: 'Leve',
    price: 280,
    priceUnit: 'por pessoa',
    gradient: ['#ffc845', '#0f7c7a'],
    highlight: true,
  },
  {
    id: 'barco-por-do-sol',
    title: 'Barco no fim de tarde',
    category: 'Mar',
    description:
      'Navegação costeira até a Ponta da Sapata, com golfinhos-rotadores no caminho e o sol se pondo atrás do Morro Dois Irmãos.',
    duration: '3 horas',
    difficulty: 'Leve',
    price: 300,
    priceUnit: 'por pessoa',
    gradient: ['#ff9f6e', '#0a4d68'],
  },
  {
    id: 'canoa-havaiana',
    title: 'Canoa havaiana',
    category: 'Mar',
    description:
      'Remada em grupo logo cedo pelo Mar de Dentro, com pausa para contemplar a ilha de um ângulo que pouca gente vê.',
    duration: '2 horas',
    difficulty: 'Moderado',
    price: 220,
    priceUnit: 'por pessoa',
    gradient: ['#4ab4e6', '#0b6664'],
  },
  {
    id: 'flutuacao-sueste',
    title: 'Flutuação no Sueste',
    category: 'Mergulho',
    description:
      'Snorkel guiado em águas rasas e calmas, ideal para ver tartarugas de pertinho. Máscara, snorkel e colete inclusos.',
    duration: '3 horas',
    difficulty: 'Leve',
    price: 190,
    priceUnit: 'por pessoa',
    gradient: ['#13a39f', '#052f42'],
  },
  {
    id: 'trilha-atalaia',
    title: 'Trilha do Atalaia',
    category: 'Terra',
    description:
      'Caminhada até a piscina natural mais protegida do parque. Cuidamos do agendamento e das regras para você só aproveitar.',
    duration: '4 horas',
    difficulty: 'Moderado',
    price: 220,
    priceUnit: 'por pessoa',
    gradient: ['#7ccf9a', '#0b6664'],
  },
  {
    id: 'mergulho-batismo',
    title: 'Primeiro mergulho',
    category: 'Mergulho',
    description:
      'Batismo com cilindro acompanhado de instrutor, com aula rápida antes de entrar na água. Não precisa ter experiência.',
    duration: '4 horas',
    difficulty: 'Leve',
    price: 650,
    priceUnit: 'por pessoa',
    gradient: ['#2f7fc1', '#052f42'],
  },
  {
    id: 'trilha-capim-acu',
    title: 'Trilha Capim-Açu',
    category: 'Terra',
    description:
      'A caminhada mais longa e selvagem do arquipélago, por mata, falésias e mirantes até o lado de lá da ilha.',
    duration: '6 horas',
    difficulty: 'Intenso',
    price: 320,
    priceUnit: 'por pessoa',
    gradient: ['#9bbf6a', '#173d2e'],
  },
  {
    id: 'ilha-tour-privativo',
    title: 'Ilha Tour exclusivo',
    category: 'Terra',
    description:
      'O mesmo dia completo pela ilha, mas com carro e guia só para o seu grupo e horários montados do seu jeito.',
    duration: 'Dia inteiro',
    difficulty: 'Leve',
    price: 1200,
    priceUnit: 'até 4 pessoas',
    gradient: ['#ffc845', '#0a4d68'],
  },
]
