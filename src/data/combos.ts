import type { Combo } from '../types'

export const combos: Combo[] = [
  {
    id: 'essencial',
    title: 'Noronha Essencial',
    tourIds: ['ilha-tour', 'barco-por-do-sol', 'canoa-havaiana'],
    cardPrice: 740,
    pixPrice: 700,
    originalPrice: 800,
    gradient: ['#f0955a', '#2f2a3f'],
  },
  {
    id: 'mar-e-mergulho',
    title: 'Mar e Mergulho',
    tourIds: ['ilha-tour', 'snorkel-sueste', 'mergulho-batismo'],
    cardPrice: 1060,
    pixPrice: 1010,
    gradient: ['#2b7bb9', '#0b2340'],
  },
  {
    id: 'aventura',
    title: 'Aventura Terra e Mar',
    tourIds: ['ilha-tour', 'trilha-atalaia', 'trilha-capim-acu'],
    cardPrice: 760,
    pixPrice: 720,
    gradient: ['#7fae6b', '#173d2e'],
  },
]
