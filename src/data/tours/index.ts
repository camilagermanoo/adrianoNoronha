import type { Tour } from '../../types'
import { boatTours } from './boats'
import { divingTours } from './diving'
import { experienceTours } from './experiences'
import { landTours } from './land'
import { rentalTours } from './rentals'
import { seaTours } from './sea'

export const tours: Tour[] = [
  ...landTours,
  ...seaTours,
  ...divingTours,
  ...boatTours,
  ...experienceTours,
  ...rentalTours,
]

export const tourRedirects: Record<string, string> = {
  'lancha-invictus-fly': 'lanchas-privativas',
  'lancha-victa-maris-50': 'lanchas-privativas',
  'lancha-descaradinha': 'lanchas-privativas',
  'lancha-italiana-ferretti': 'lanchas-privativas',
  'lancha-my-love': 'lanchas-privativas',
  'lancha-trovao-dos-mares': 'lanchas-privativas',
  'lancha-fish-hunter': 'lanchas-privativas',
}
