import ensaioTartaruga from '../../assets/tours/ensaios-subaquaticos/tartaruga.webp?responsive'
import privativoGrupo from '../../assets/tours/ilha-tour-privativo/buggy-grupo.webp?responsive'
import privativoMorroDoPico from '../../assets/tours/ilha-tour-privativo/buggy-morro-do-pico.webp?responsive'
import type { Tour } from '../../types'

export const experienceTours: Tour[] = [
  {
    id: 'ensaios-subaquaticos',
    category: 'Experiência',
    title: {
      pt: 'Ensaios subaquáticos',
      en: 'Underwater photo shoots',
      es: 'Sesiones de fotos submarinas',
    },
    summary: {
      pt: 'Sessão de 20 a 30 fotos criativas no mar cristalino.',
      en: 'A session of 20 to 30 creative photos in crystal-clear water.',
      es: 'Sesión de 20 a 30 fotos creativas en el mar cristalino.',
    },
    description: {
      pt: 'Transforme momentos especiais em registros únicos, com fotos criativas em um cenário paradisíaco. A sessão dura 1 hora e o local é combinado conforme as condições do mar, entre a Praia do Porto e a Praia da Conceição. O transfer de buggy está incluso; os equipamentos de mergulho não.',
      en: 'Turn special moments into unique memories with creative photos in a paradise setting. The session lasts 1 hour and the spot is chosen according to sea conditions, between Porto Beach and Conceição Beach. Buggy transfer is included; diving gear is not.',
      es: 'Transforma momentos especiales en registros únicos, con fotos creativas en un escenario paradisíaco. La sesión dura 1 hora y el lugar se elige según las condiciones del mar, entre la Praia do Porto y la Praia da Conceição. El traslado en buggy está incluido; el equipo de buceo no.',
    },
    details: {
      pt: ['20 a 30 fotos', '1 hora', 'Transfer de buggy'],
      en: ['20 to 30 photos', '1 hour', 'Buggy transfer'],
      es: ['20 a 30 fotos', '1 hora', 'Traslado en buggy'],
    },
    image: ensaioTartaruga,
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
