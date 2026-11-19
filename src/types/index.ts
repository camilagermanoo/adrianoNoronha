export interface Destination {
  id: string
  name: string
  description: string
  tip: string
  image: string
}

export type TourCategory = 'Terra' | 'Mar' | 'Mergulho' | 'Aluguel'

export interface Tour {
  id: string
  title: string
  category: TourCategory
  description: string
  details: string[]
  image: string
  requiresParkCard?: boolean
  highlight?: boolean
}
