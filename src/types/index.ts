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

export interface Tour {
  id: string
  title: string
  description: string
  duration: string
  difficulty: TourDifficulty
  price: number
  includes: string[]
  featured?: boolean
}
