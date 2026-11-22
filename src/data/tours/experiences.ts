import ensaioAreia from '../../assets/tours/ensaios-subaquaticos/areia-maos.webp?responsive'
import ensaioCasal from '../../assets/tours/ensaios-subaquaticos/casal-tartaruga.webp?responsive'
import ensaioFlutuando from '../../assets/tours/ensaios-subaquaticos/flutuando.webp?responsive'
import ensaioTartaruga from '../../assets/tours/ensaios-subaquaticos/tartaruga-snorkel.webp?responsive'
import privativoGrupo from '../../assets/tours/ilha-tour-privativo/buggy-grupo.webp?responsive'
import privativoMorroDoPico from '../../assets/tours/ilha-tour-privativo/buggy-morro-do-pico.webp?responsive'
import type { Tour } from '../../types'
import { factLabels } from './labels'

export const experienceTours: Tour[] = [
  {
    id: 'ensaios-subaquaticos',
    category: 'Experiência',
    title: {
      pt: 'Ensaio subaquático',
      en: 'Underwater photo shoot',
      es: 'Sesión de fotos submarina',
    },
    summary: {
      pt: 'Fotos sub em uma expedição de snorkeling: registre momentos inesquecíveis em Fernando de Noronha.',
      en: 'Underwater photos on a snorkeling trip: capture unforgettable moments in Fernando de Noronha.',
      es: 'Fotos submarinas en una expedición de snorkel: registra momentos inolvidables en Fernando de Noronha.',
    },
    description: {
      pt: 'Registre momentos inesquecíveis em Fernando de Noronha! Escolhemos o melhor local do dia, com mais chances de ver a vida marinha e águas limpas, e fazemos uma expedição de snorkeling pela região para avistar incríveis cenários subaquáticos. Tiramos fotos sub e também com lente Dome, meia água, sem limite de fotos, em cerca de 1h30. É necessário ter pequena habilidade aquática, saber nadar e usar máscara e nadadeiras. Os equipamentos não estão inclusos, mas você pode alugar em uma loja.',
      en: 'Capture unforgettable moments in Fernando de Noronha! We choose the best spot of the day, with the best chances of seeing marine life and clear water, and go on a snorkeling trip around the area to see amazing underwater scenery. We take underwater photos and half-in, half-out shots with a dome lens, with no photo limit, in about 1.5 hours. You need basic water skills, to know how to swim and to use a mask and fins. Gear is not included, but you can rent it at a shop.',
      es: '¡Registra momentos inolvidables en Fernando de Noronha! Elegimos el mejor lugar del día, con más chances de ver la vida marina y aguas limpias, y hacemos una expedición de snorkel por la región para ver increíbles escenarios submarinos. Tomamos fotos submarinas y también con lente Dome, a media agua, sin límite de fotos, en unas 1 h 30. Es necesario tener una pequeña habilidad acuática, saber nadar y usar máscara y aletas. El equipo no está incluido, pero puedes alquilarlo en una tienda.',
    },
    details: {
      pt: ['1h30 de duração', 'Sem limite de fotos', 'A partir de R$ 400'],
      en: ['1.5 hours', 'No photo limit', 'From R$ 400'],
      es: ['1 h 30 de duración', 'Sin límite de fotos', 'Desde R$ 400'],
    },
    image: ensaioTartaruga,
    heroImage: ensaioTartaruga,
    heroImagePosition: 'center 55%',
    highlights: [
      {
        icon: 'clock',
        title: { pt: '1h30 de duração', en: '1.5 hours', es: '1 h 30 de duración' },
        text: {
          pt: 'Uma expedição de snorkeling com tempo para aproveitar.',
          en: 'A snorkeling trip with time to enjoy it.',
          es: 'Una expedición de snorkel con tiempo para disfrutar.',
        },
      },
      {
        icon: 'camera',
        title: { pt: 'Sem limite de fotos', en: 'No photo limit', es: 'Sin límite de fotos' },
        text: {
          pt: 'Fotos sub e também com lente Dome, meia água.',
          en: 'Underwater shots and half-in, half-out dome lens photos.',
          es: 'Fotos submarinas y también con lente Dome, a media agua.',
        },
      },
      {
        icon: 'mapPin',
        title: { pt: 'Melhor local do dia', en: 'Best spot of the day', es: 'Mejor lugar del día' },
        text: {
          pt: 'Mais chances de ver a vida marinha e águas limpas.',
          en: 'The best chances of marine life and clear water.',
          es: 'Más chances de ver vida marina y aguas limpias.',
        },
      },
      {
        icon: 'mask',
        title: {
          pt: 'Pequena habilidade aquática',
          en: 'Basic water skills',
          es: 'Pequeña habilidad acuática',
        },
        text: {
          pt: 'É preciso saber nadar e usar máscara e nadadeiras.',
          en: 'You need to swim and use a mask and fins.',
          es: 'Es necesario saber nadar y usar máscara y aletas.',
        },
      },
    ],
    options: [
      {
        id: 'ensaio',
        title: {
          pt: 'Ensaio subaquático',
          en: 'Underwater photo shoot',
          es: 'Sesión de fotos submarina',
        },
        summary: {
          pt: 'Expedição de snorkeling no melhor local do dia, com fotos sub e meia água sem limite.',
          en: 'A snorkeling trip to the best spot of the day, with unlimited underwater and half-in, half-out photos.',
          es: 'Expedición de snorkel en el mejor lugar del día, con fotos submarinas y a media agua sin límite.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.duration,
            value: { pt: '1h30', en: '1.5 hours', es: '1 h 30' },
          },
          {
            icon: 'camera',
            label: { pt: 'Fotos', en: 'Photos', es: 'Fotos' },
            value: { pt: 'Sem limite', en: 'No limit', es: 'Sin límite' },
          },
          {
            icon: 'mask',
            label: { pt: 'Equipamentos', en: 'Gear', es: 'Equipos' },
            value: {
              pt: 'Não inclusos, aluguel em loja',
              en: 'Not included, rent at a shop',
              es: 'No incluidos, alquiler en tienda',
            },
          },
          {
            icon: 'wave',
            label: { pt: 'Requisito', en: 'Requirement', es: 'Requisito' },
            value: {
              pt: 'Saber nadar e usar máscara e nadadeiras',
              en: 'Able to swim and use mask and fins',
              es: 'Saber nadar y usar máscara y aletas',
            },
          },
        ],
        photos: [ensaioTartaruga, ensaioCasal, ensaioAreia, ensaioFlutuando],
        priceUnit: 'total',
        prices: [
          { label: { pt: '1 pessoa', en: '1 person', es: '1 persona' }, amount: 400 },
          { label: { pt: '2 pessoas', en: '2 people', es: '2 personas' }, amount: 650 },
        ],
      },
    ],
    gallery: [ensaioTartaruga, ensaioCasal, ensaioAreia, ensaioFlutuando],
  },
  {
    id: 'sessao-fotos-buggy',
    category: 'Experiência',
    title: {
      pt: 'Sessão de fotos com buggy',
      en: 'Buggy photo session',
      es: 'Sesión de fotos con buggy',
    },
    summary: {
      pt: 'Ensaio de 2 horas pelos cenários mais bonitos, com fotos entregues na hora.',
      en: 'A 2-hour shoot at the most beautiful spots, with photos delivered on the spot.',
      es: 'Sesión de 2 horas por los escenarios más lindos, con fotos entregadas al momento.',
    },
    description: {
      pt: 'Eternize sua viagem com um ensaio cheio de estilo a bordo de um buggy. Os cenários são a Ponta do Air France, a Igrejinha de São Pedro, a Praia da Conceição, o Mirante do Boldró e a Praia do Bode. São 2 horas, de 8h às 10h ou de 16h às 18h, com transfer de buggy e fotos entregues na hora.',
      en: 'Capture your trip with a stylish shoot on board a buggy. The settings are Ponta do Air France, São Pedro Chapel, Conceição Beach, Boldró viewpoint and Bode Beach. It lasts 2 hours, from 8 to 10 am or 4 to 6 pm, with buggy transfer and photos delivered on the spot.',
      es: 'Eterniza tu viaje con una sesión llena de estilo a bordo de un buggy. Los escenarios son la Ponta do Air France, la Capilla de São Pedro, la Praia da Conceição, el Mirador del Boldró y la Praia do Bode. Son 2 horas, de 8 a 10 h o de 16 a 18 h, con traslado en buggy y fotos entregadas al momento.',
    },
    details: {
      pt: ['2 horas', '8h às 10h ou 16h às 18h', 'Fotos entregues na hora'],
      en: ['2 hours', '8–10 am or 4–6 pm', 'Photos delivered on the spot'],
      es: ['2 horas', '8–10 h o 16–18 h', 'Fotos entregadas al momento'],
    },
    image: privativoGrupo,
    gallery: [privativoMorroDoPico],
  },
]
