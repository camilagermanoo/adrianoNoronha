import type { Localized } from '../../i18n/locales'

export const factLabels = {
  schedule: { pt: 'Horário', en: 'Schedule', es: 'Horario' },
  vehicle: { pt: 'Veículo', en: 'Vehicle', es: 'Vehículo' },
  capacity: { pt: 'Capacidade', en: 'Capacity', es: 'Capacidad' },
  duration: { pt: 'Duração', en: 'Duration', es: 'Duración' },
  period: { pt: 'Período', en: 'Rental period', es: 'Período' },
  transfer: { pt: 'Transfer', en: 'Transfer', es: 'Traslado' },
} satisfies Record<string, Localized>

export const dailyRate: Localized = { pt: 'Diária', en: 'Per day', es: 'Por día' }
