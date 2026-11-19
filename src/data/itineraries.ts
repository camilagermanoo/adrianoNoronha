export interface Itinerary {
  id: string
  days: number
  title: string
  summary: string
  plan: { day: string; tourIds: string[]; note: string }[]
}

export const itineraries: Itinerary[] = [
  {
    id: 'tres-dias',
    days: 3,
    title: 'Fim de semana na ilha',
    summary: 'O essencial de Noronha para quem tem pouco tempo e quer aproveitar cada hora.',
    plan: [
      { day: 'Dia 1', tourIds: ['ilha-tour'], note: 'Panorama da ilha e pôr do sol no mirante.' },
      {
        day: 'Dia 2',
        tourIds: ['barco-por-do-sol'],
        note: 'Manhã livre na praia e barco à tarde.',
      },
      {
        day: 'Dia 3',
        tourIds: ['flutuacao-sueste'],
        note: 'Tartarugas antes de ir para o aeroporto.',
      },
    ],
  },
  {
    id: 'cinco-dias',
    days: 5,
    title: 'Mar e terra',
    summary: 'Equilíbrio entre trilhas, passeios de barco e tempo livre para descansar.',
    plan: [
      { day: 'Dia 1', tourIds: ['ilha-tour'], note: 'Reconhecimento da ilha.' },
      { day: 'Dia 2', tourIds: ['trilha-atalaia'], note: 'Piscina natural na maré baixa.' },
      { day: 'Dia 3', tourIds: ['canoa-havaiana', 'flutuacao-sueste'], note: 'Dia de mar.' },
      { day: 'Dia 4', tourIds: ['barco-por-do-sol'], note: 'Praia livre e barco no fim do dia.' },
      { day: 'Dia 5', tourIds: [], note: 'Manhã livre para as últimas fotos.' },
    ],
  },
  {
    id: 'sete-dias',
    days: 7,
    title: 'Noronha sem pressa',
    summary: 'Para viver a ilha por completo, incluindo mergulho e a trilha mais selvagem.',
    plan: [
      { day: 'Dia 1', tourIds: ['ilha-tour'], note: 'Primeiro contato com a ilha.' },
      { day: 'Dia 2', tourIds: ['trilha-atalaia'], note: 'Piscina natural do Atalaia.' },
      { day: 'Dia 3', tourIds: ['mergulho-batismo'], note: 'Primeiro mergulho com cilindro.' },
      { day: 'Dia 4', tourIds: ['canoa-havaiana'], note: 'Remada cedo e tarde livre.' },
      { day: 'Dia 5', tourIds: ['trilha-capim-acu'], note: 'Aventura do lado selvagem.' },
      { day: 'Dia 6', tourIds: ['flutuacao-sueste', 'barco-por-do-sol'], note: 'Dia de mar.' },
      { day: 'Dia 7', tourIds: [], note: 'Despedida sem pressa.' },
    ],
  },
]
