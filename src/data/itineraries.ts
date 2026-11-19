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
      {
        day: 'Dia 1',
        tourIds: ['ilha-tour-coletivo'],
        note: 'Panorama da ilha e pôr do sol no mirante.',
      },
      {
        day: 'Dia 2',
        tourIds: ['entardecer-vip'],
        note: 'Manhã livre na praia e catamarã à tarde.',
      },
      {
        day: 'Dia 3',
        tourIds: ['canoa-havaiana'],
        note: 'Nascer do sol no mar antes do voo.',
      },
    ],
  },
  {
    id: 'cinco-dias',
    days: 5,
    title: 'Mar e terra',
    summary: 'Equilíbrio entre trilhas, passeios de barco e tempo livre para descansar.',
    plan: [
      { day: 'Dia 1', tourIds: ['ilha-tour-coletivo'], note: 'Reconhecimento da ilha.' },
      { day: 'Dia 2', tourIds: ['piscinas-naturais'], note: 'Piscinas naturais na maré baixa.' },
      { day: 'Dia 3', tourIds: ['barco-tradicional', 'bike-aquatica'], note: 'Dia de mar.' },
      { day: 'Dia 4', tourIds: ['entardecer-vip'], note: 'Praia livre e catamarã no fim do dia.' },
      { day: 'Dia 5', tourIds: [], note: 'Manhã livre para as últimas fotos.' },
    ],
  },
  {
    id: 'sete-dias',
    days: 7,
    title: 'Noronha sem pressa',
    summary: 'Para viver a ilha por completo, com mergulho, trilha e muito mar.',
    plan: [
      { day: 'Dia 1', tourIds: ['ilha-tour-coletivo'], note: 'Primeiro contato com a ilha.' },
      {
        day: 'Dia 2',
        tourIds: ['piscinas-naturais'],
        note: 'Circuito das piscinas na maré baixa.',
      },
      { day: 'Dia 3', tourIds: ['batismo-naufragio'], note: 'Primeiro mergulho com cilindro.' },
      { day: 'Dia 4', tourIds: ['barco-tradicional'], note: 'Escuna até o Sancho e tarde livre.' },
      { day: 'Dia 5', tourIds: ['trilha-piquinho'], note: 'Trilha com pôr do sol lá do alto.' },
      {
        day: 'Dia 6',
        tourIds: ['snorkel', 'entardecer-vip'],
        note: 'Snorkel de manhã e catamarã à tarde.',
      },
      { day: 'Dia 7', tourIds: ['canoa-havaiana'], note: 'Despedida no nascer do sol.' },
    ],
  },
]
