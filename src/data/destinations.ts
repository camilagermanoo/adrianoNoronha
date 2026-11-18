import type { Destination } from '../types'

export const destinations: Destination[] = [
  {
    id: 'baia-do-sancho',
    name: 'Baía do Sancho',
    category: 'Praia',
    description:
      'Eleita diversas vezes a praia mais bonita do mundo. O acesso é feito por escadas entre as falésias até uma faixa de areia cercada de mar cristalino.',
    bestFor: 'Snorkel e fotografia',
    gradient: ['#1fb5a8', '#14608a'],
  },
  {
    id: 'baia-dos-porcos',
    name: 'Baía dos Porcos',
    category: 'Piscina natural',
    description:
      'Piscinas naturais entre rochas vulcânicas com a vista mais icônica do Morro Dois Irmãos. Ideal na maré baixa.',
    bestFor: 'Maré baixa',
    gradient: ['#7fdcd1', '#2f6b4f'],
  },
  {
    id: 'praia-do-sueste',
    name: 'Praia do Sueste',
    category: 'Praia',
    description:
      'Baía de águas calmas onde é possível nadar ao lado de tartarugas marinhas e tubarões-limão juvenis, com colete obrigatório.',
    bestFor: 'Vida marinha',
    gradient: ['#14608a', '#072a40'],
  },
  {
    id: 'praia-do-atalaia',
    name: 'Praia do Atalaia',
    category: 'Piscina natural',
    description:
      'Piscina natural com visitação controlada pelo ICMBio, repleta de peixes coloridos. Protetor solar e repelente não são permitidos.',
    bestFor: 'Experiência exclusiva',
    gradient: ['#1fb5a8', '#0b3d5c'],
  },
  {
    id: 'praia-do-leao',
    name: 'Praia do Leão',
    category: 'Praia',
    description:
      'Uma das principais áreas de desova de tartarugas do arquipélago, com areia extensa e mar aberto voltado para o Atlântico.',
    bestFor: 'Natureza preservada',
    gradient: ['#f6c99a', '#14608a'],
  },
  {
    id: 'mirante-do-boldro',
    name: 'Mirante do Boldró',
    category: 'Mirante',
    description:
      'O pôr do sol mais disputado da ilha, com o Morro Dois Irmãos e a Baía dos Porcos no horizonte. Programa obrigatório no fim da tarde.',
    bestFor: 'Pôr do sol',
    gradient: ['#f2795b', '#0b3d5c'],
  },
]
