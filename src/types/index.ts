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

export type TourCategory = 'Terra' | 'Mar' | 'Lancha' | 'Experiência' | 'Aluguel'

export interface TourHighlight {
  icon: IconName
  title: Localized
  text: Localized
}

export interface TourPrice {
  label: Localized
  amount: number
}

export interface TourFact {
  icon: IconName
  label: Localized
  value: Localized
}

export interface TourOption {
  id: string
  title: Localized
  summary: Localized
  facts: TourFact[]
  photos: Picture[]
  priceUnit?: 'perPerson' | 'total'
  prices?: TourPrice[]
  priceNote?: Localized
  includes?: Localized<string[]>
}

export type TourOptionStyle = 'variant' | 'named' | 'standalone'

export interface TourWarning {
  title: Localized
  short: Localized
  text: Localized
}

export interface Tour {
  id: string
  category: TourCategory
  title: Localized
  summary: Localized
  description: Localized
  details: Localized<string[]>
  image: Picture
  heroImage?: Picture
  heroImagePosition?: string
  imagePosition?: string
  gallery?: Picture[]
  highlights?: TourHighlight[]
  options?: TourOption[]
  optionStyle?: TourOptionStyle
  requiresParkCard?: boolean
  warning?: TourWarning
  highlight?: boolean
  badge?: Localized
  exclusive?: Localized
}
