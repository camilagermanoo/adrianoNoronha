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

export type TourDifficulty = 'Leve' | 'Moderado' | 'Intenso'

export type TourCategory = 'Mar' | 'Terra' | 'Mergulho'

export interface Tour {
  id: string
  title: string
  category: TourCategory
  description: string
  duration: string
  difficulty: TourDifficulty
  price: number
  priceUnit: string
  gradient: [string, string]
  highlight?: boolean
  image?: string
}

export interface Testimonial {
  id: string
  name: string
  origin: string
  date: string
  rating: number
  message: string
}
