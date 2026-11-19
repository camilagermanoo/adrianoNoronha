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

export type TourBadge = 'Mais vendido' | 'Novidade'

export interface Tour {
  id: string
  title: string
  tagline: string
  description: string
  duration: string
  difficulty: TourDifficulty
  price: number
  priceUnit: string
  gradient: [string, string]
  badge?: TourBadge
  image?: string
}

export interface Combo {
  id: string
  title: string
  tourIds: string[]
  cardPrice: number
  pixPrice: number
  originalPrice?: number
  gradient: [string, string]
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
