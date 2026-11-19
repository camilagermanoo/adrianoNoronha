export type DestinationCategory = 'Praia' | 'Piscina natural' | 'Mirante'

export interface Destination {
  id: string
  name: string
  category: DestinationCategory
  description: string
  bestFor: string
  gradient: [string, string]
  image?: string
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

export interface Testimonial {
  id: string
  name: string
  origin: string
  date: string
  rating: number
  message: string
}
