import type { Localized } from '../i18n/locales'

export interface ItineraryStep {
  tourIds: string[]
  note: Localized
}

export interface Itinerary {
  id: string
  days: number
  title: Localized
  summary: Localized
  plan: ItineraryStep[]
}

export const itineraries: Itinerary[] = [
  {
    id: 'tres-dias',
    days: 3,
    title: { pt: 'Fim de semana na ilha', en: 'Island weekend', es: 'Fin de semana en la isla' },
    summary: {
      pt: 'O essencial de Noronha para quem tem pouco tempo e quer aproveitar cada hora.',
      en: 'The Noronha essentials for those short on time who want to make every hour count.',
      es: 'Lo esencial de Noronha para quien tiene poco tiempo y quiere aprovechar cada hora.',
    },
    plan: [
      {
        tourIds: ['ilha-tour-coletivo'],
        note: {
          pt: 'Panorama da ilha e pôr do sol no mirante.',
          en: 'Island overview and sunset at the viewpoint.',
          es: 'Panorama de la isla y atardecer en el mirador.',
        },
      },
      {
        tourIds: ['entardecer-vip'],
        note: {
          pt: 'Manhã livre na praia e catamarã à tarde.',
          en: 'Free morning at the beach and catamaran in the afternoon.',
          es: 'Mañana libre en la playa y catamarán por la tarde.',
        },
      },
      {
        tourIds: ['canoa-havaiana'],
        note: {
          pt: 'Nascer do sol no mar antes do voo.',
          en: 'Sunrise at sea before your flight.',
          es: 'Amanecer en el mar antes del vuelo.',
        },
      },
    ],
  },
  {
    id: 'cinco-dias',
    days: 5,
    title: { pt: 'Mar e terra', en: 'Sea and land', es: 'Mar y tierra' },
    summary: {
      pt: 'Equilíbrio entre trilhas, passeios de barco e tempo livre para descansar.',
      en: 'A balance of trails, boat trips and free time to relax.',
      es: 'Equilibrio entre senderos, paseos en barco y tiempo libre para descansar.',
    },
    plan: [
      {
        tourIds: ['ilha-tour-coletivo'],
        note: {
          pt: 'Reconhecimento da ilha.',
          en: 'Getting to know the island.',
          es: 'Reconocimiento de la isla.',
        },
      },
      {
        tourIds: ['piscinas-naturais'],
        note: {
          pt: 'Piscinas naturais na maré baixa.',
          en: 'Natural pools at low tide.',
          es: 'Piscinas naturales con marea baja.',
        },
      },
      {
        tourIds: ['barco-tradicional', 'bike-aquatica'],
        note: { pt: 'Dia de mar.', en: 'A day at sea.', es: 'Día de mar.' },
      },
      {
        tourIds: ['entardecer-vip'],
        note: {
          pt: 'Praia livre e catamarã no fim do dia.',
          en: 'Free beach time and catamaran at the end of the day.',
          es: 'Playa libre y catamarán al final del día.',
        },
      },
      {
        tourIds: [],
        note: {
          pt: 'Manhã livre para as últimas fotos.',
          en: 'Free morning for the last photos.',
          es: 'Mañana libre para las últimas fotos.',
        },
      },
    ],
  },
  {
    id: 'sete-dias',
    days: 7,
    title: { pt: 'Noronha sem pressa', en: 'Noronha at a slow pace', es: 'Noronha sin prisa' },
    summary: {
      pt: 'Para viver a ilha por completo, com mergulho, trilha e muito mar.',
      en: 'To experience the whole island, with diving, trails and plenty of sea.',
      es: 'Para vivir la isla por completo, con buceo, senderos y mucho mar.',
    },
    plan: [
      {
        tourIds: ['ilha-tour-coletivo'],
        note: {
          pt: 'Primeiro contato com a ilha.',
          en: 'First contact with the island.',
          es: 'Primer contacto con la isla.',
        },
      },
      {
        tourIds: ['piscinas-naturais'],
        note: {
          pt: 'Circuito das piscinas na maré baixa.',
          en: 'Natural pools circuit at low tide.',
          es: 'Circuito de piscinas con marea baja.',
        },
      },
      {
        tourIds: ['batismo-naufragio'],
        note: {
          pt: 'Primeiro mergulho com cilindro.',
          en: 'First scuba dive.',
          es: 'Primer buceo con tanque.',
        },
      },
      {
        tourIds: ['barco-tradicional'],
        note: {
          pt: 'Escuna até o Sancho e tarde livre.',
          en: 'Schooner to Sancho and a free afternoon.',
          es: 'Goleta hasta Sancho y tarde libre.',
        },
      },
      {
        tourIds: ['trilha-piquinho'],
        note: {
          pt: 'Trilha com pôr do sol lá do alto.',
          en: 'Trail with the sunset from the top.',
          es: 'Sendero con atardecer desde lo alto.',
        },
      },
      {
        tourIds: ['snorkel', 'entardecer-vip'],
        note: {
          pt: 'Snorkel de manhã e catamarã à tarde.',
          en: 'Snorkeling in the morning and catamaran in the afternoon.',
          es: 'Snorkel por la mañana y catamarán por la tarde.',
        },
      },
      {
        tourIds: ['canoa-havaiana'],
        note: {
          pt: 'Despedida no nascer do sol.',
          en: 'Farewell at sunrise.',
          es: 'Despedida al amanecer.',
        },
      },
    ],
  },
]
