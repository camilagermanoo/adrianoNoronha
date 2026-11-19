import type { Picture } from 'vite-imagetools'
import canoaNascerDoSol from '../assets/tours/canoa-havaiana/nascer-do-sol.webp?responsive'
import canoaGolfinhos from '../assets/tours/combos/canoa-golfinhos.webp?responsive'
import praiaDoisIrmaos from '../assets/tours/combos/praia-dois-irmaos.webp?responsive'
import entardecerCatamara from '../assets/tours/entardecer-vip/catamara-entardecer.webp?responsive'
import coletivoGrupo from '../assets/tours/ilha-tour-coletivo/grupo-mirante-dois-irmaos.webp?responsive'
import snorkelPeixes from '../assets/tours/snorkel-naufragio/peixes.webp?responsive'
import piquinhoTopo from '../assets/tours/trilha-piquinho/topo.webp?responsive'
import type { Localized } from '../i18n/locales'

export interface Combo {
  id: string
  tourIds: string[]
  description: Localized
  photos: Picture[]
}

export const combos: Combo[] = [
  {
    id: 'essencial',
    tourIds: ['ilha-tour', 'entardecer-vip', 'canoa-havaiana'],
    description: {
      pt: 'Explore as principais belezas da ilha no Ilha Tour, navegue pelas águas cristalinas na Canoa Havaiana e finalize o dia com um pôr do sol espetacular no Entardecer VIP.',
      en: 'Explore the island’s highlights on the Island Tour, paddle the crystal-clear water on the Outrigger Canoe and end the day with a spectacular sunset on the VIP Sunset.',
      es: 'Explora las principales bellezas de la isla en el Ilha Tour, navega por las aguas cristalinas en la Canoa Hawaiana y termina el día con un atardecer espectacular en el Atardecer VIP.',
    },
    photos: [coletivoGrupo, entardecerCatamara, canoaGolfinhos],
  },
  {
    id: 'completo',
    tourIds: [
      'ilha-tour',
      'snorkel-naufragio',
      'entardecer-vip',
      'trilha-piquinho',
      'canoa-havaiana',
    ],
    description: {
      pt: 'O combo mais completo: Ilha Tour, snorkel no naufrágio, Trilha do Piquinho, Canoa Havaiana e o pôr do sol no Entardecer VIP. Terra, mar e fundo do mar em uma só viagem.',
      en: 'The most complete combo: Island Tour, shipwreck snorkeling, Piquinho Trail, Outrigger Canoe and the VIP Sunset. Land, sea and underwater in a single trip.',
      es: 'El combo más completo: Ilha Tour, snorkel en el naufragio, Sendero del Piquinho, Canoa Hawaiana y el Atardecer VIP. Tierra, mar y fondo del mar en un solo viaje.',
    },
    photos: [praiaDoisIrmaos, snorkelPeixes, piquinhoTopo, canoaNascerDoSol],
  },
]
