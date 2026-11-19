import batismoNaufragio from '../../assets/tours/batismo-naufragio.webp?responsive'
import cilindroEmbarcado from '../../assets/tours/cilindro-embarcado.webp?responsive'
import embarcadoCardume from '../../assets/tours/cilindro-embarcado/cardume.webp?responsive'
import naufragioCilindro from '../../assets/tours/cilindro-naufragio/naufragio.webp?responsive'
import snorkel from '../../assets/tours/snorkel.webp?responsive'
import snorkelMergulho from '../../assets/tours/snorkel-naufragio/mergulho.webp?responsive'
import snorkelPeixes from '../../assets/tours/snorkel-naufragio/peixes.webp?responsive'
import type { Tour } from '../../types'
import { factLabels } from './labels'

export const divingTours: Tour[] = [
  {
    id: 'snorkel-naufragio',
    category: 'Mar',
    title: {
      pt: 'Mergulho de snorkel no naufrágio',
      en: 'Snorkeling at the shipwreck',
      es: 'Snorkel en el naufragio',
    },
    summary: {
      pt: 'Snorkel guiado até o naufrágio, com vídeos inclusos.',
      en: 'Guided snorkeling to the shipwreck, videos included.',
      es: 'Snorkel guiado hasta el naufragio, con videos incluidos.',
    },
    description: {
      pt: 'Observe de perto a vida marinha em um cenário cheio de encanto e aventura. O percurso de 300 m até o naufrágio dura cerca de 40 minutos dentro d’água, em 1 hora de atividade com guia. Vídeos e transfer de buggy estão inclusos; os equipamentos de mergulho não.',
      en: 'See marine life up close in a charming, adventurous setting. The 300 m route to the shipwreck takes about 40 minutes in the water, within a 1-hour guided activity. Videos and buggy transfer are included; diving gear is not.',
      es: 'Observa de cerca la vida marina en un escenario lleno de encanto y aventura. El recorrido de 300 m hasta el naufragio dura unos 40 minutos en el agua, en 1 hora de actividad con guía. Los videos y el traslado en buggy están incluidos; el equipo de buceo no.',
    },
    details: {
      pt: ['300 m de percurso', 'Vídeos inclusos', 'Transfer de buggy'],
      en: ['300 m route', 'Videos included', 'Buggy transfer'],
      es: ['300 m de recorrido', 'Videos incluidos', 'Traslado en buggy'],
    },
    image: snorkelMergulho,
    gallery: [snorkelPeixes, snorkel],
  },
  {
    id: 'mergulho-cilindro',
    category: 'Mar',
    title: { pt: 'Mergulho com cilindro', en: 'Scuba diving', es: 'Buceo con tanque' },
    summary: {
      pt: 'Mergulho no naufrágio do Porto ou embarcado, sempre com instrutor.',
      en: 'Dive the harbor shipwreck or from a boat, always with an instructor.',
      es: 'Buceo en el naufragio del Puerto o desde barco, siempre con instructor.',
    },
    description: {
      pt: 'Conheça o fundo do mar de Noronha com cilindro, mesmo sem experiência. Escolha entre o mergulho no naufrágio do Porto, saindo da beira da praia, ou o mergulho embarcado, a partir do barco, entre corais e cardumes coloridos. As duas opções são acompanhadas por instrutor qualificado.',
      en: 'Discover Noronha’s underwater world with scuba gear, even with no experience. Choose the harbor shipwreck dive, starting from the beach, or the boat dive, among corals and colorful schools of fish. Both options are led by a qualified instructor.',
      es: 'Conoce el fondo del mar de Noronha con tanque, incluso sin experiencia. Elige entre el buceo en el naufragio del Puerto, saliendo desde la orilla, o el buceo desde barco, entre corales y cardúmenes de colores. Las dos opciones son acompañadas por instructor calificado.',
    },
    details: {
      pt: ['Naufrágio ou embarcado', 'Com instrutor', 'Não precisa de experiência'],
      en: ['Shipwreck or boat', 'With instructor', 'No experience needed'],
      es: ['Naufragio o desde barco', 'Con instructor', 'No se necesita experiencia'],
    },
    image: naufragioCilindro,
    optionStyle: 'named',
    options: [
      {
        id: 'naufragio',
        title: {
          pt: 'Mergulho de cilindro no naufrágio',
          en: 'Shipwreck scuba dive',
          es: 'Buceo con tanque en el naufragio',
        },
        summary: {
          pt: 'Saindo da beira da praia até o naufrágio do Porto, para explorar de perto um mundo subaquático repleto de vida marinha.',
          en: 'From the beach to the harbor shipwreck, to explore an underwater world full of marine life up close.',
          es: 'Saliendo desde la orilla hasta el naufragio del Puerto, para explorar de cerca un mundo submarino lleno de vida marina.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.duration,
            value: { pt: '2 h de atividade', en: '2-hour activity', es: '2 h de actividad' },
          },
          {
            icon: 'mapPin',
            label: factLabels.transfer,
            value: { pt: 'Não incluso', en: 'Not included', es: 'No incluido' },
          },
        ],
        includes: {
          pt: ['Cerca de 40 min embaixo d’água', '8 m de profundidade', 'Instrutor qualificado'],
          en: ['About 40 min underwater', '8 m deep', 'Qualified instructor'],
          es: ['Unos 40 min bajo el agua', '8 m de profundidad', 'Instructor calificado'],
        },
        photos: [naufragioCilindro, batismoNaufragio],
      },
      {
        id: 'embarcado',
        title: {
          pt: 'Mergulho de cilindro embarcado',
          en: 'Boat scuba dive',
          es: 'Buceo con tanque desde barco',
        },
        summary: {
          pt: 'Mergulho a partir do barco, cercado por corais, peixes coloridos e uma natureza marinha surpreendente.',
          en: 'A dive from the boat, surrounded by corals, colorful fish and amazing marine life.',
          es: 'Buceo desde el barco, rodeado de corales, peces de colores y una naturaleza marina sorprendente.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.schedule,
            value: {
              pt: '7h15 às 11h30 ou 13h30 às 17h',
              en: '7:15–11:30 am or 1:30–5 pm',
              es: '7:15 a 11:30 h o 13:30 a 17 h',
            },
          },
          {
            icon: 'mapPin',
            label: factLabels.transfer,
            value: { pt: 'Incluso', en: 'Included', es: 'Incluido' },
          },
        ],
        includes: {
          pt: ['Todo o equipamento', 'Instrutor durante o mergulho', 'Saídas diárias'],
          en: ['All equipment', 'Instructor during the dive', 'Daily departures'],
          es: ['Todo el equipo', 'Instructor durante el buceo', 'Salidas diarias'],
        },
        photos: [embarcadoCardume, cilindroEmbarcado],
      },
    ],
  },
]
