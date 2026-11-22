import ensaioAreia from '../../assets/tours/ensaios-subaquaticos/areia-maos.webp?responsive'
import ensaioCasal from '../../assets/tours/ensaios-subaquaticos/casal-tartaruga.webp?responsive'
import ensaioMeiaAgua from '../../assets/tours/ensaios-subaquaticos/meia-agua-morro-do-pico.webp?responsive'
import ensaioMergulho from '../../assets/tours/ensaios-subaquaticos/mergulho-areia.webp?responsive'
import ensaioSuperficie from '../../assets/tours/ensaios-subaquaticos/olhando-superficie.webp?responsive'
import ensaioFlutuando from '../../assets/tours/ensaios-subaquaticos/flutuando.webp?responsive'
import ensaioTartaruga from '../../assets/tours/ensaios-subaquaticos/tartaruga-snorkel.webp?responsive'
import buggyAmarelo from '../../assets/tours/sessao-fotos-buggy/buggy-amarelo.webp?responsive'
import buggyAmigas from '../../assets/tours/sessao-fotos-buggy/amigas-buggy.webp?responsive'
import buggyCasalEmPe from '../../assets/tours/sessao-fotos-buggy/casal-em-pe-buggy.webp?responsive'
import buggyMenina from '../../assets/tours/sessao-fotos-buggy/menina-pedra.webp?responsive'
import buggyPernas from '../../assets/tours/sessao-fotos-buggy/pernas-pro-alto.webp?responsive'
import buggyCasalIgrejinha from '../../assets/tours/sessao-fotos-buggy/casal-igrejinha.webp?responsive'
import buggyCasalPedra from '../../assets/tours/sessao-fotos-buggy/casal-pedra.webp?responsive'
import buggyCasalPorDoSol from '../../assets/tours/sessao-fotos-buggy/casal-por-do-sol.webp?responsive'
import buggyGrupo from '../../assets/tours/sessao-fotos-buggy/grupo-buggy.webp?responsive'
import buggyMaeFilha from '../../assets/tours/sessao-fotos-buggy/mae-filha-buggy.webp?responsive'
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
      pt: 'Registre momentos inesquecíveis em Fernando de Noronha! Escolhemos o melhor local do dia, com mais chances de ver a vida marinha e águas limpas, e fazemos uma expedição de snorkeling pela região para avistar incríveis cenários subaquáticos. Tiramos fotos sub e também com lente Dome, meia água, sem limite de fotos, em cerca de 1h30. É necessário ter pequena habilidade aquática, saber nadar e usar máscara e nadadeiras. O transfer está incluso; os equipamentos não, mas você pode alugar em uma loja.',
      en: 'Capture unforgettable moments in Fernando de Noronha! We choose the best spot of the day, with the best chances of seeing marine life and clear water, and go on a snorkeling trip around the area to see amazing underwater scenery. We take underwater photos and half-in, half-out shots with a dome lens, with no photo limit, in about 1.5 hours. You need basic water skills, to know how to swim and to use a mask and fins. Transfer is included; gear is not, but you can rent it at a shop.',
      es: '¡Registra momentos inolvidables en Fernando de Noronha! Elegimos el mejor lugar del día, con más chances de ver la vida marina y aguas limpias, y hacemos una expedición de snorkel por la región para ver increíbles escenarios submarinos. Tomamos fotos submarinas y también con lente Dome, a media agua, sin límite de fotos, en unas 1 h 30. Es necesario tener una pequeña habilidad acuática, saber nadar y usar máscara y aletas. El traslado está incluido; el equipo no, pero puedes alquilarlo en una tienda.',
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
            icon: 'mapPin',
            label: factLabels.transfer,
            value: { pt: 'Incluso', en: 'Included', es: 'Incluido' },
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
        photos: [ensaioTartaruga, ensaioMeiaAgua, ensaioCasal, ensaioAreia, ensaioFlutuando],
        priceUnit: 'total',
        prices: [
          { label: { pt: '1 pessoa', en: '1 person', es: '1 persona' }, amount: 400 },
          { label: { pt: '2 pessoas', en: '2 people', es: '2 personas' }, amount: 650 },
        ],
      },
    ],
    gallery: [
      ensaioTartaruga,
      ensaioMeiaAgua,
      ensaioCasal,
      ensaioSuperficie,
      ensaioAreia,
      ensaioMergulho,
      ensaioFlutuando,
    ],
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
      pt: 'Ensaio de cerca de 2 horas em pontos não convencionais da ilha, com fotos editadas na hora.',
      en: 'A shoot of about 2 hours at off-the-beaten-path spots on the island, with photos edited on the spot.',
      es: 'Sesión de unas 2 horas en lugares poco convencionales de la isla, con fotos editadas al momento.',
    },
    description: {
      pt: 'Capturamos momentos inesquecíveis! Com o celular na mão e paisagens deslumbrantes, oferecemos uma experiência fotográfica exclusiva em pontos não convencionais da ilha: Ponta do Air France, Igrejinha de São Pedro, Praia da Conceição, Mirante do Boldró e Praia do Bode. A sessão dura cerca de 2 horas, com saída às 8h ou às 16h, transfer de buggy e fotos editadas na hora.',
      en: 'We capture unforgettable moments! With a phone in hand and stunning scenery, we offer an exclusive photo experience at off-the-beaten-path spots on the island: Ponta do Air France, São Pedro Chapel, Conceição Beach, Boldró viewpoint and Bode Beach. The session lasts about 2 hours, starting at 8 am or 4 pm, with buggy transfer and photos edited on the spot.',
      es: '¡Capturamos momentos inolvidables! Con el celular en mano y paisajes deslumbrantes, ofrecemos una experiencia fotográfica exclusiva en lugares poco convencionales de la isla: Ponta do Air France, Capilla de São Pedro, Praia da Conceição, Mirador del Boldró y Praia do Bode. La sesión dura unas 2 horas, con salida a las 8 h o a las 16 h, traslado en buggy y fotos editadas al momento.',
    },
    details: {
      pt: ['Cerca de 2 horas', 'Às 8h ou às 16h', 'A partir de R$ 300'],
      en: ['About 2 hours', 'At 8 am or 4 pm', 'From R$ 300'],
      es: ['Unas 2 horas', 'A las 8 h o a las 16 h', 'Desde R$ 300'],
    },
    exclusive: {
      pt: 'Exclusivo com o Adriano',
      en: 'Exclusive with Adriano',
      es: 'Exclusivo con Adriano',
    },
    image: buggyPernas,
    heroImage: buggyPernas,
    imagePosition: 'center 40%',
    heroImagePosition: 'center 40%',
    highlights: [
      {
        icon: 'camera',
        title: {
          pt: 'Fotos editadas na hora',
          en: 'Photos edited on the spot',
          es: 'Fotos editadas al momento',
        },
        text: {
          pt: 'Com o celular na mão, você sai com as fotos prontas.',
          en: 'Shot on a phone, you leave with your photos ready.',
          es: 'Con el celular en mano, sales con las fotos listas.',
        },
      },
      {
        icon: 'mapPin',
        title: {
          pt: 'Pontos não convencionais',
          en: 'Off-the-beaten-path spots',
          es: 'Lugares poco convencionales',
        },
        text: {
          pt: 'Ponta do Air France, Igrejinha de São Pedro, Conceição, Mirante do Boldró e Praia do Bode.',
          en: 'Ponta do Air France, São Pedro Chapel, Conceição, Boldró viewpoint and Bode Beach.',
          es: 'Ponta do Air France, Capilla de São Pedro, Conceição, Mirador del Boldró y Praia do Bode.',
        },
      },
      {
        icon: 'compass',
        title: { pt: 'Transfer de buggy', en: 'Buggy transfer', es: 'Traslado en buggy' },
        text: {
          pt: 'O buggy leva você e ainda entra nas fotos.',
          en: 'The buggy takes you around and joins the photos.',
          es: 'El buggy te lleva y también aparece en las fotos.',
        },
      },
      {
        icon: 'clock',
        title: { pt: 'Cerca de 2 horas', en: 'About 2 hours', es: 'Unas 2 horas' },
        text: {
          pt: 'Saída às 8h ou às 16h.',
          en: 'Starting at 8 am or 4 pm.',
          es: 'Salida a las 8 h o a las 16 h.',
        },
      },
    ],
    options: [
      {
        id: 'sessao',
        title: {
          pt: 'Sessão de fotos com buggy',
          en: 'Buggy photo session',
          es: 'Sesión de fotos con buggy',
        },
        summary: {
          pt: 'Ensaio pelos pontos mais bonitos da ilha, com transfer de buggy e fotos editadas na hora.',
          en: 'A shoot at the island’s most beautiful spots, with buggy transfer and photos edited on the spot.',
          es: 'Sesión por los lugares más lindos de la isla, con traslado en buggy y fotos editadas al momento.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.schedule,
            value: { pt: 'Às 8h ou às 16h', en: 'At 8 am or 4 pm', es: 'A las 8 h o a las 16 h' },
          },
          {
            icon: 'compass',
            label: factLabels.duration,
            value: { pt: 'Cerca de 2h', en: 'About 2 hours', es: 'Unas 2 h' },
          },
        ],
        includes: {
          pt: ['Fotos editadas na hora', 'Transfer de buggy'],
          en: ['Photos edited on the spot', 'Buggy transfer'],
          es: ['Fotos editadas al momento', 'Traslado en buggy'],
        },
        photos: [
          buggyPernas,
          buggyGrupo,
          buggyAmigas,
          buggyMaeFilha,
          buggyCasalPorDoSol,
          buggyCasalIgrejinha,
          buggyCasalPedra,
        ],
        priceUnit: 'total',
        prices: [
          { label: { pt: '1 pessoa', en: '1 person', es: '1 persona' }, amount: 300 },
          { label: { pt: '2 pessoas', en: '2 people', es: '2 personas' }, amount: 500 },
        ],
      },
    ],
    gallery: [
      buggyPernas,
      buggyGrupo,
      buggyCasalPorDoSol,
      buggyAmigas,
      buggyMaeFilha,
      buggyCasalIgrejinha,
      buggyCasalEmPe,
      buggyCasalPedra,
      buggyMenina,
      buggyAmarelo,
    ],
  },
]
