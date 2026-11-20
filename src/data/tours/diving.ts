import batismoNaufragio from '../../assets/tours/batismo-naufragio.webp?responsive'
import cilindroEmbarcado from '../../assets/tours/cilindro-embarcado.webp?responsive'
import embarcadoCardume from '../../assets/tours/cilindro-embarcado/cardume.webp?responsive'
import naufragioCilindro from '../../assets/tours/cilindro-naufragio/naufragio.webp?responsive'
import snorkelGrupo from '../../assets/tours/snorkel-naufragio/grupo-adriano.webp?responsive'
import snorkelJoinha from '../../assets/tours/snorkel-naufragio/joinha-naufragio.webp?responsive'
import snorkelMascara from '../../assets/tours/snorkel-naufragio/mascara-amarela.webp?responsive'
import snorkelTartaruga from '../../assets/tours/snorkel-naufragio/tartaruga.webp?responsive'
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
      pt: 'Snorkel guiado até o naufrágio da Praia do Porto, com vídeos inclusos.',
      en: 'Guided snorkeling to the Porto Beach shipwreck, videos included.',
      es: 'Snorkel guiado hasta el naufragio de la Praia do Porto, con videos incluidos.',
    },
    description: {
      pt: 'O mergulho com snorkel é uma experiência imperdível, com águas cristalinas e rica vida marinha, incluindo peixes coloridos, tartarugas, arraias e até golfinhos. A Praia do Porto é um local muito procurado para o snorkel, com um naufrágio de 140 m de comprimento a até 9 m de profundidade, que atrai diversas espécies marinhas. O percurso tem 300 m e o passeio dura cerca de 1 hora, sempre com guia e com vídeos inclusos.',
      en: 'Snorkeling is a must-do experience, with crystal-clear water and rich marine life, including colorful fish, turtles, rays and even dolphins. Porto Beach is a popular snorkeling spot, with a 140 m long shipwreck lying up to 9 m deep that attracts many marine species. The route is 300 m long and the trip lasts about 1 hour, always with a guide and with videos included.',
      es: 'El snorkel es una experiencia imperdible, con aguas cristalinas y rica vida marina, incluidos peces de colores, tortugas, rayas y hasta delfines. La Praia do Porto es un lugar muy buscado para el snorkel, con un naufragio de 140 m de largo a hasta 9 m de profundidad que atrae a diversas especies marinas. El recorrido tiene 300 m y el paseo dura cerca de 1 hora, siempre con guía y con videos incluidos.',
    },
    details: {
      pt: ['8h, 10h ou 12h', 'Cerca de 1h', 'R$ 250 por pessoa'],
      en: ['8 am, 10 am or 12 pm', 'About 1 hour', 'R$ 250 per person'],
      es: ['8, 10 o 12 h', 'Cerca de 1 h', 'R$ 250 por persona'],
    },
    image: snorkelTartaruga,
    heroImage: snorkelTartaruga,
    badge: {
      pt: 'Chance de ver golfinhos',
      en: 'Chance to see dolphins',
      es: 'Chance de ver delfines',
    },
    highlights: [
      {
        icon: 'mask',
        title: { pt: 'Naufrágio de 140 m', en: '140 m shipwreck', es: 'Naufragio de 140 m' },
        text: {
          pt: 'A até 9 m de profundidade, cercado de vida marinha.',
          en: 'Lying up to 9 m deep, surrounded by marine life.',
          es: 'A hasta 9 m de profundidad, rodeado de vida marina.',
        },
      },
      {
        icon: 'wave',
        title: { pt: 'Vida marinha', en: 'Marine life', es: 'Vida marina' },
        text: {
          pt: 'Peixes coloridos, tartarugas, arraias e até golfinhos.',
          en: 'Colorful fish, turtles, rays and even dolphins.',
          es: 'Peces de colores, tortugas, rayas y hasta delfines.',
        },
      },
      {
        icon: 'camera',
        title: { pt: 'Vídeos inclusos', en: 'Videos included', es: 'Videos incluidos' },
        text: {
          pt: 'Você leva para casa os vídeos do seu mergulho.',
          en: 'Take home the videos of your dive.',
          es: 'Te llevas los videos de tu buceo.',
        },
      },
      {
        icon: 'shield',
        title: { pt: 'Com guia', en: 'With a guide', es: 'Con guía' },
        text: {
          pt: 'Percurso de 300 m acompanhado do começo ao fim.',
          en: 'A 300 m route guided from start to finish.',
          es: 'Recorrido de 300 m acompañado de principio a fin.',
        },
      },
    ],
    options: [
      {
        id: 'snorkel',
        title: {
          pt: 'Mergulho de snorkel no naufrágio',
          en: 'Snorkeling at the shipwreck',
          es: 'Snorkel en el naufragio',
        },
        summary: {
          pt: 'O uso de snorkel, colete e nadadeira é obrigatório. Se você não tiver, alugamos em uma loja credenciada, e o aluguel é pago por você.',
          en: 'Snorkel, life jacket and fins are mandatory. If you do not have them, we rent them at an accredited shop, and you pay for the rental.',
          es: 'El uso de snorkel, chaleco y aletas es obligatorio. Si no los tienes, los alquilamos en una tienda acreditada, y el alquiler lo pagas tú.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.schedule,
            value: {
              pt: '8h, 10h ou 12h, cerca de 1h',
              en: '8 am, 10 am or 12 pm, about 1 hour',
              es: '8, 10 o 12 h, cerca de 1 h',
            },
          },
          {
            icon: 'mapPin',
            label: factLabels.transfer,
            value: { pt: 'Incluso', en: 'Included', es: 'Incluido' },
          },
        ],
        includes: {
          pt: [
            'Guia e vídeos do mergulho',
            'Percurso de 300 m até o naufrágio',
            'Snorkel, colete e nadadeira obrigatórios (aluguel por sua conta)',
          ],
          en: [
            'Guide and videos of the dive',
            '300 m route to the shipwreck',
            'Snorkel, life jacket and fins required (rental paid by you)',
          ],
          es: [
            'Guía y videos del buceo',
            'Recorrido de 300 m hasta el naufragio',
            'Snorkel, chaleco y aletas obligatorios (alquiler a tu cargo)',
          ],
        },
        photos: [snorkelTartaruga, snorkelJoinha, snorkelMascara, snorkelGrupo],
        priceUnit: 'perPerson',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 250 }],
      },
    ],
    gallery: [snorkelGrupo, snorkelTartaruga, snorkelMascara, snorkelJoinha],
  },
  {
    id: 'mergulho-cilindro-naufragio',
    category: 'Mar',
    title: {
      pt: 'Mergulho de cilindro no naufrágio',
      en: 'Shipwreck scuba dive',
      es: 'Buceo con tanque en el naufragio',
    },
    summary: {
      pt: 'Mergulho com cilindro saindo da beira da Praia do Porto até o naufrágio, com instrutor.',
      en: 'A scuba dive from the shore of Porto Beach to the shipwreck, with an instructor.',
      es: 'Buceo con tanque saliendo desde la orilla de la Praia do Porto hasta el naufragio, con instructor.',
    },
    description: {
      pt: 'Conheça o fundo do mar de Noronha com cilindro, mesmo sem experiência. A saída é da beira da Praia do Porto até o naufrágio, para explorar de perto um mundo subaquático repleto de vida marinha. São cerca de 40 minutos embaixo d’água, a 8 m de profundidade, sempre com instrutor qualificado.',
      en: 'Discover Noronha’s underwater world with scuba gear, even with no experience. You start from the shore of Porto Beach and head to the shipwreck to explore an underwater world full of marine life up close. About 40 minutes underwater, 8 m deep, always with a qualified instructor.',
      es: 'Conoce el fondo del mar de Noronha con tanque, incluso sin experiencia. La salida es desde la orilla de la Praia do Porto hasta el naufragio, para explorar de cerca un mundo submarino lleno de vida marina. Son unos 40 minutos bajo el agua, a 8 m de profundidad, siempre con instructor calificado.',
    },
    details: {
      pt: ['Saída da praia', '8 m de profundidade', 'Com instrutor'],
      en: ['From the beach', '8 m deep', 'With instructor'],
      es: ['Salida desde la playa', '8 m de profundidad', 'Con instructor'],
    },
    image: naufragioCilindro,
    heroImage: naufragioCilindro,
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
    ],
    gallery: [batismoNaufragio],
  },
  {
    id: 'mergulho-cilindro-embarcado',
    category: 'Mar',
    title: {
      pt: 'Mergulho de cilindro embarcado',
      en: 'Boat scuba dive',
      es: 'Buceo con tanque desde barco',
    },
    summary: {
      pt: 'Mergulho com cilindro a partir da embarcação, entre corais e cardumes, com instrutor.',
      en: 'A scuba dive from the boat, among corals and schools of fish, with an instructor.',
      es: 'Buceo con tanque desde la embarcación, entre corales y cardúmenes, con instructor.',
    },
    description: {
      pt: 'Conheça o fundo do mar de Noronha com cilindro, mesmo sem experiência. Você entra na embarcação e o mergulho é feito a partir do barco, cercado por corais, peixes coloridos e uma natureza marinha surpreendente. Todo o equipamento está incluso e o instrutor acompanha o mergulho do começo ao fim.',
      en: 'Discover Noronha’s underwater world with scuba gear, even with no experience. You board the boat and dive from it, surrounded by corals, colorful fish and amazing marine life. All equipment is included and the instructor stays with you from start to finish.',
      es: 'Conoce el fondo del mar de Noronha con tanque, incluso sin experiencia. Subes a la embarcación y el buceo se hace desde el barco, rodeado de corales, peces de colores y una naturaleza marina sorprendente. Todo el equipo está incluido y el instructor te acompaña de principio a fin.',
    },
    details: {
      pt: ['Saída de barco', 'Equipamento incluso', 'Transfer incluso'],
      en: ['By boat', 'Gear included', 'Transfer included'],
      es: ['Salida en barco', 'Equipo incluido', 'Traslado incluido'],
    },
    image: embarcadoCardume,
    heroImage: embarcadoCardume,
    options: [
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
    gallery: [cilindroEmbarcado],
  },
]
