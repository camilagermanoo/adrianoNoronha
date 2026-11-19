import type { Picture } from 'vite-imagetools'
import type { Localized } from '../i18n/locales'

export interface Destination {
  id: string
  name: Localized
  description: Localized
  tip: Localized
  image: Picture
}

export type TourCategory = 'Terra' | 'Mar' | 'Mergulho' | 'Aluguel'

export interface Tour {
  id: string
  category: TourCategory
  title: Localized
  summary: Localized
  description: Localized
  details: Localized<string[]>
  image: Picture
  requiresParkCard?: boolean
  highlight?: boolean
}
