import type { Picture } from 'vite-imagetools'
import type { IconName } from '../components/Icon/Icon'
import type { Localized } from '../i18n/locales'

export interface Destination {
  id: string
  name: Localized
  description: Localized
  tip: Localized
  image: Picture
}

export type TourCategory = 'Terra' | 'Mar' | 'Mergulho' | 'Aluguel'

export interface TourHighlight {
  icon: IconName
  title: Localized
  text: Localized
}

export interface TourPrice {
  label: Localized
  amount: number
}

export interface TourOption {
  id: string
  title: Localized
  summary: Localized
  schedule: Localized
  vehicle: Localized
  photos: Picture[]
  priceUnit: 'perPerson' | 'total'
  prices: TourPrice[]
  priceNote?: Localized
  includes: Localized<string[]>
}

export interface Tour {
  id: string
  category: TourCategory
  title: Localized
  summary: Localized
  description: Localized
  details: Localized<string[]>
  image: Picture
  imagePosition?: string
  gallery?: Picture[]
  highlights?: TourHighlight[]
  options?: TourOption[]
  payment?: Localized
  requiresParkCard?: boolean
  highlight?: boolean
}
