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
