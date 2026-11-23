import type { Tour } from '../../types'
import { boatTours } from './boats'
import { divingTours } from './diving'
import { experienceTours } from './experiences'
import { landTours } from './land'
import { rentalTours } from './rentals'
import { seaTours } from './sea'

const tourOrder = [
  'ilha-tour',
  'entardecer-vip',
  'canoa-havaiana',
  'snorkel-naufragio',
  'bike-aquatica',
  'barco-tradicional',
  'lanchas-privativas',
  'piscinas-naturais',
  'piscina-morro-de-fora',
  'mergulho-cilindro-naufragio',
  'mergulho-cilindro-embarcado',
  'trilha-piquinho',
  'trilhas-parque',
  'trilha-costa-esmeralda',
  'ensaios-subaquaticos',
  'sessao-fotos-buggy',
  'lancha-transparente',
  'catamara-trovao-dos-mares',
  'catamara-happy-days',
  'travessia-snorkel',
  'passeio-a-cavalo',
  'rapel',
  'alugueis',
]

const orderIndex = (tour: Tour) => {
  const index = tourOrder.indexOf(tour.id)
  return index === -1 ? tourOrder.length : index
}

export const tours: Tour[] = [
  ...landTours,
  ...seaTours,
  ...divingTours,
  ...boatTours,
  ...experienceTours,
  ...rentalTours,
].sort((a, b) => orderIndex(a) - orderIndex(b))

export const tourRedirects: Record<string, string> = {
  'lancha-invictus-fly': 'lanchas-privativas',
  'lancha-victa-maris-50': 'lanchas-privativas',
  'lancha-descaradinha': 'lanchas-privativas',
  'lancha-italiana-ferretti': 'lanchas-privativas',
  'lancha-my-love': 'lanchas-privativas',
  'lancha-trovao-dos-mares': 'lanchas-privativas',
  'lancha-fish-hunter': 'lanchas-privativas',
}
