import type { Localized } from '../../i18n/locales'
import type { TourFact, TourLevel } from '../../types'

export const factLabels = {
  schedule: { pt: 'Horário', en: 'Schedule', es: 'Horario' },
  vehicle: { pt: 'Veículo', en: 'Vehicle', es: 'Vehículo' },
  capacity: { pt: 'Capacidade', en: 'Capacity', es: 'Capacidad' },
  duration: { pt: 'Duração', en: 'Duration', es: 'Duración' },
  period: { pt: 'Período', en: 'Rental period', es: 'Período' },
  transfer: { pt: 'Transfer', en: 'Transfer', es: 'Traslado' },
} satisfies Record<string, Localized>

export const dailyRate: Localized = {
  pt: 'Diária (24h)',
  en: 'Per day (24h)',
  es: 'Por día (24 h)',
}

const levelNames: Record<TourLevel, Localized> = {
  easy: { pt: 'Fácil', en: 'Easy', es: 'Fácil' },
  medium: { pt: 'Médio', en: 'Moderate', es: 'Medio' },
  hard: { pt: 'Difícil', en: 'Difficult', es: 'Difícil' },
}

export function levelFact(level: TourLevel): TourFact {
  return {
    icon: 'alert',
    label: { pt: 'Nível', en: 'Level', es: 'Nivel' },
    value: levelNames[level],
    level,
  }
}
