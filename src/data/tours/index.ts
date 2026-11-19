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
