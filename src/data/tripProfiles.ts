import type { IconName } from '../components/Icon/Icon'

export interface TripProfile {
  id: string
  icon: IconName
  title: string
  description: string
  message: string
}

export const tripProfiles: TripProfile[] = [
  {
    id: 'primeira-vez',
    icon: 'sun',
    title: 'Primeira vez na ilha',
    description:
      'Indicamos o roteiro ideal para começar, sem você precisar pesquisar tudo sozinho.',
    message: 'Olá! É minha primeira vez em Noronha. Qual passeio vocês recomendam para começar?',
  },
  {
    id: 'familia',
    icon: 'family',
    title: 'Viajando em família',
    description: 'Sugestões pensadas para o ritmo de quem viaja com crianças ou com os avós.',
    message: 'Olá! Vou viajar em família para Noronha. Quais passeios são ideais para nós?',
  },
  {
    id: 'mergulho',
    icon: 'mask',
    title: 'Quero mergulhar',
    description: 'Do snorkel ao batismo com cilindro, indicamos a opção certa para o seu nível.',
    message: 'Olá! Quero mergulhar em Noronha. Qual a melhor opção para o meu nível?',
  },
]
