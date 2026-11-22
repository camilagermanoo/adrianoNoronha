import piscinasCasal from '../../assets/tours/piscinas-naturais/casal-piscina.webp?responsive'
import piscinasCasalFenda from '../../assets/tours/piscinas-naturais/casal-fenda.webp?responsive'
import piscinasFenda from '../../assets/tours/piscinas-naturais/fenda-rochas.webp?responsive'
import piscinasMorroDoPico from '../../assets/tours/piscinas-naturais/piscina-morro-do-pico.webp?responsive'
import piscinasSorriso from '../../assets/tours/piscinas-naturais/piscina-sorriso.webp?responsive'
import saoJoseBoiando from '../../assets/tours/piscina-sao-jose/boiando-morro-do-pico.webp?responsive'
import saoJoseMapa from '../../assets/tours/piscina-sao-jose/mapa-trilha.webp?responsive'
import saoJosePiscina from '../../assets/tours/piscina-sao-jose/piscina-cristalina.webp?responsive'
import capimAcuCaminhada from '../../assets/tours/trilha-capim-acu/caminhada-costeira.webp?responsive'
import capimAcuMirante from '../../assets/tours/trilha-capim-acu/mirante-ilha.webp?responsive'
import cavaloAirFrance from '../../assets/tours/passeio-a-cavalo/air-france.webp?responsive'
import rapelPiquinho from '../../assets/tours/rapel/morro-do-piquinho.webp?responsive'
import costaEsmeralda from '../../assets/tours/trilha-costa-esmeralda/costeira.webp?responsive'
import trilhaPiquinho from '../../assets/tours/trilha-piquinho.webp?responsive'
import piquinhoMirante from '../../assets/tours/trilha-piquinho/mirante.webp?responsive'
import piquinhoAmigas from '../../assets/tours/trilha-piquinho/amigas-por-do-sol.webp?responsive'
import piquinhoGrupo from '../../assets/tours/trilha-piquinho/grupo-por-do-sol.webp?responsive'
import piquinhoPorDoSol from '../../assets/tours/trilha-piquinho/por-do-sol-dois-irmaos.webp?responsive'
import piquinhoSubida from '../../assets/tours/trilha-piquinho/subida-dois-irmaos.webp?responsive'
import coletivoCaminhonete from '../../assets/tours/ilha-tour-coletivo/caminhonete-4x4.webp?responsive'
import coletivoPorDoSol from '../../assets/tours/ilha-tour-coletivo/grupo-caminhonete-por-do-sol.webp?responsive'
import ilhaCasalMirante from '../../assets/tours/ilha-tour/casal-mirante.webp?responsive'
import ilhaMiranteDoisIrmaos from '../../assets/tours/ilha-tour/mirante-dois-irmaos.webp?responsive'
import coletivoMorro from '../../assets/tours/ilha-tour-coletivo/grupo-caminhonete-morro.webp?responsive'
import coletivoGrupo from '../../assets/tours/ilha-tour-coletivo/grupo-mirante-dois-irmaos.webp?responsive'
import privativoCasal from '../../assets/tours/ilha-tour-privativo/buggy-casal.webp?responsive'
import privativoDoisIrmaos from '../../assets/tours/ilha-tour-privativo/dois-irmaos-praia.webp?responsive'
import privativoGrupo from '../../assets/tours/ilha-tour-privativo/buggy-grupo.webp?responsive'
import privativoMorroDoPico from '../../assets/tours/ilha-tour-privativo/buggy-morro-do-pico.webp?responsive'
import porDoSol from '../../assets/places/por-do-sol.webp?responsive'
import type { Tour } from '../../types'
import { factLabels, levelFact } from './labels'

export const landTours: Tour[] = [
  {
    id: 'ilha-tour',
    category: 'Terra',
    title: { pt: 'Ilha Tour', en: 'Island Tour', es: 'Ilha Tour' },
    summary: {
      pt: 'Cerca de 80% da ilha em um único passeio, em grupo ou só para você.',
      en: 'About 80% of the island in a single tour, shared or just for you.',
      es: 'Cerca del 80% de la isla en un solo paseo, en grupo o solo para ti.',
    },
    description: {
      pt: 'A melhor maneira de conhecer o paraíso: um dia inteiro percorrendo cerca de 80% de Fernando de Noronha, com paradas para snorkel, fotos nos cenários mais bonitos e muitas histórias e curiosidades da ilha contadas pelo guia. Escolha entre a saída em grupo, de 4x4, ou um passeio exclusivo de buggy para você e sua família.',
      en: 'The best way to discover paradise: a full day covering about 80% of Fernando de Noronha, with snorkeling stops, photos at the most beautiful spots and plenty of stories and local trivia shared by the guide. Choose a shared 4x4 departure or a private buggy tour just for you and your family.',
      es: 'La mejor manera de conocer el paraíso: un día entero recorriendo cerca del 80% de Fernando de Noronha, con paradas para hacer snorkel, fotos en los escenarios más lindos y muchas historias y curiosidades de la isla contadas por el guía. Elige entre la salida en grupo, en 4x4, o un paseo exclusivo en buggy para ti y tu familia.',
    },
    details: {
      pt: ['8h30 às 17h', 'Coletivo ou privativo', 'A partir de R$ 250'],
      en: ['8:30 am to 5 pm', 'Shared or private', 'From R$ 250'],
      es: ['8:30 a 17 h', 'Compartido o privado', 'Desde R$ 250'],
    },
    image: coletivoPorDoSol,
    heroImage: coletivoGrupo,
    heroImagePosition: 'center 62%',
    gallery: [
      privativoCasal,
      ilhaMiranteDoisIrmaos,
      coletivoGrupo,
      privativoMorroDoPico,
      porDoSol,
      ilhaCasalMirante,
      coletivoPorDoSol,
      privativoDoisIrmaos,
      coletivoCaminhonete,
      coletivoMorro,
    ],
    highlights: [
      {
        icon: 'mask',
        title: { pt: 'Snorkeling', en: 'Snorkeling', es: 'Snorkel' },
        text: {
          pt: 'Paradas para mergulhar com máscara nas águas cristalinas.',
          en: 'Stops to snorkel in crystal-clear water.',
          es: 'Paradas para bucear con máscara en aguas cristalinas.',
        },
      },
      {
        icon: 'award',
        title: { pt: 'Guia especializado', en: 'Expert guide', es: 'Guía especializado' },
        text: {
          pt: 'Guia credenciado que conhece a ilha como a palma da mão.',
          en: 'A certified guide who knows the island inside out.',
          es: 'Guía acreditado que conoce la isla como la palma de su mano.',
        },
      },
      {
        icon: 'compass',
        title: { pt: '80% da ilha', en: '80% of the island', es: '80% de la isla' },
        text: {
          pt: 'Praias, mirantes e pontos históricos em um único passeio.',
          en: 'Beaches, viewpoints and historic sites in a single tour.',
          es: 'Playas, miradores y puntos históricos en un solo paseo.',
        },
      },
      {
        icon: 'camera',
        title: { pt: 'Paradas para fotos', en: 'Photo stops', es: 'Paradas para fotos' },
        text: {
          pt: 'Os cenários mais instagramáveis de Noronha.',
          en: 'The most Instagrammable spots in Noronha.',
          es: 'Los escenarios más instagrameables de Noronha.',
        },
      },
      {
        icon: 'message',
        title: {
          pt: 'Muitas histórias da ilha',
          en: 'Island stories',
          es: 'Muchas historias de la isla',
        },
        text: {
          pt: 'Curiosidades e história local contadas pelo guia.',
          en: 'Local history and trivia shared by the guide.',
          es: 'Curiosidades e historia local contadas por el guía.',
        },
      },
    ],
    options: [
      {
        id: 'privativo',
        title: { pt: 'Privativo', en: 'Private', es: 'Privado' },
        summary: {
          pt: 'Buggy e guia só para o seu grupo, passando por Sancho, Baía dos Porcos, Leão, Sueste e Mirante Dois Irmãos.',
          en: 'Buggy and guide just for your group, visiting Sancho, Baía dos Porcos, Leão, Sueste and the Dois Irmãos viewpoint.',
          es: 'Buggy y guía solo para tu grupo, pasando por Sancho, Baía dos Porcos, Leão, Sueste y el Mirador Dois Irmãos.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.schedule,
            value: { pt: '8h30 às 17h', en: '8:30 am to 5 pm', es: '8:30 a 17 h' },
          },
          {
            icon: 'mapPin',
            label: factLabels.vehicle,
            value: { pt: 'Buggy exclusivo', en: 'Private buggy', es: 'Buggy exclusivo' },
          },
        ],
        photos: [privativoMorroDoPico, privativoGrupo, privativoDoisIrmaos, privativoCasal],
        priceUnit: 'total',
        prices: [
          {
            label: { pt: 'Até 2 pessoas', en: 'Up to 2 people', es: 'Hasta 2 personas' },
            amount: 1200,
          },
          {
            label: { pt: 'Até 3 pessoas', en: 'Up to 3 people', es: 'Hasta 3 personas' },
            amount: 1400,
          },
          {
            label: { pt: 'Até 4 pessoas', en: 'Up to 4 people', es: 'Hasta 4 personas' },
            amount: 1500,
          },
        ],
        priceNote: {
          pt: 'Para mais pessoas, consulte o valor.',
          en: 'For larger groups, ask for a quote.',
          es: 'Para más personas, consulta el precio.',
        },
        includes: {
          pt: ['Roteiro no seu ritmo', 'Paradas para banho conforme o mar'],
          en: ['Itinerary at your pace', 'Swimming stops depending on sea conditions'],
          es: ['Itinerario a tu ritmo', 'Paradas para nadar según el mar'],
        },
      },
      {
        id: 'coletivo',
        title: { pt: 'Coletivo', en: 'Shared', es: 'Compartido' },
        summary: {
          pt: 'Saída em grupo de até 10 pessoas, ideal para quem chega à ilha pela primeira vez.',
          en: 'Group departure of up to 10 people, ideal for first-time visitors.',
          es: 'Salida en grupo de hasta 10 personas, ideal para quien llega a la isla por primera vez.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.schedule,
            value: { pt: '8h30 às 17h', en: '8:30 am to 5 pm', es: '8:30 a 17 h' },
          },
          {
            icon: 'mapPin',
            label: factLabels.vehicle,
            value: { pt: 'Caminhonete 4x4', en: '4x4 pickup', es: 'Camioneta 4x4' },
          },
        ],
        photos: [coletivoCaminhonete, coletivoGrupo, coletivoPorDoSol],
        priceUnit: 'perPerson',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 250 }],
        includes: {
          pt: [
            'Transfer de ida e volta',
            'Grupo de até 10 pessoas',
            'Paradas para mergulho com snorkel',
          ],
          en: ['Round-trip transfer', 'Groups of up to 10 people', 'Snorkeling stops'],
          es: [
            'Traslado de ida y vuelta',
            'Grupos de hasta 10 personas',
            'Paradas para bucear con snorkel',
          ],
        },
      },
    ],
    requiresParkCard: true,
    highlight: true,
  },
  {
    id: 'piscinas-naturais',
    category: 'Terra',
    title: {
      pt: 'Circuito das piscinas naturais',
      en: 'Natural pools circuit',
      es: 'Circuito de piscinas naturales',
    },
    summary: {
      pt: 'Caminhada pelas costeiras para visitar 3 piscinas naturais incríveis.',
      en: 'A walk along the rocky shores to visit 3 amazing natural pools.',
      es: 'Caminata por la costa rocosa para visitar 3 piscinas naturales increíbles.',
    },
    description: {
      pt: 'Uma caminhada pelas costeiras para conhecer 3 piscinas naturais de águas cristalinas: a Piscina do Buraco do Galego, Galeguinho e a Lasca da Velha. Vida marinha, cenários entre as rochas e paisagens de tirar o fôlego, em cerca de 2h30 de passeio na maré baixa. Não é necessário agendar no ICMBio.',
      en: 'A walk along the rocky shores to discover 3 crystal-clear natural pools: the Buraco do Galego pool, Galeguinho and Lasca da Velha. Marine life, settings between the rocks and breathtaking views, in a tour of about 2.5 hours at low tide. No ICMBio booking required.',
      es: 'Una caminata por la costa rocosa para conocer 3 piscinas naturales de aguas cristalinas: la piscina del Buraco do Galego, Galeguinho y la Lasca da Velha. Vida marina, escenarios entre las rocas y paisajes impresionantes, en unas 2 h 30 de paseo con marea baja. No es necesario reservar en el ICMBio.',
    },
    details: {
      pt: ['2h30 de duração', 'R$ 250 por pessoa', 'Somente na maré baixa'],
      en: ['2.5 hours', 'R$ 250 per person', 'Low tide only'],
      es: ['2 h 30 de duración', 'R$ 250 por persona', 'Solo con marea baja'],
    },
    image: piscinasMorroDoPico,
    heroImage: piscinasMorroDoPico,
    heroImagePosition: 'center 55%',
    warning: {
      title: {
        pt: 'Atenção: exige boa mobilidade',
        en: 'Please note: good mobility required',
        es: 'Atención: se requiere buena movilidad',
      },
      short: {
        pt: 'Exige mobilidade para caminhar nas pedras',
        en: 'Requires mobility to walk on rocks',
        es: 'Requiere movilidad para caminar sobre rocas',
      },
      text: {
        pt: 'O percurso é feito caminhando sobre pedras e rochas das costeiras, em terreno irregular. É necessário ter habilidade e equilíbrio para caminhar nas pedras. Se você tem dificuldade de locomoção, fale com o Adriano antes de reservar.',
        en: 'The route is done walking over the rocks along the shore, on uneven ground. You need skill and balance to walk on the rocks. If you have limited mobility, talk to Adriano before booking.',
        es: 'El recorrido se hace caminando sobre piedras y rocas de la costa, en terreno irregular. Es necesario tener habilidad y equilibrio para caminar sobre las rocas. Si tienes dificultad de movilidad, habla con Adriano antes de reservar.',
      },
    },
    highlights: [
      {
        icon: 'wave',
        title: { pt: '3 piscinas naturais', en: '3 natural pools', es: '3 piscinas naturales' },
        text: {
          pt: 'Buraco do Galego, Galeguinho e Lasca da Velha.',
          en: 'Buraco do Galego, Galeguinho and Lasca da Velha.',
          es: 'Buraco do Galego, Galeguinho y Lasca da Velha.',
        },
      },
      {
        icon: 'compass',
        title: {
          pt: 'Caminhada pelas costeiras',
          en: 'Coastal walk',
          es: 'Caminata por la costa',
        },
        text: {
          pt: 'Trajeto entre rochas com cenários únicos da ilha.',
          en: 'A route among the rocks with unique island scenery.',
          es: 'Trayecto entre rocas con escenarios únicos de la isla.',
        },
      },
      {
        icon: 'shield',
        title: {
          pt: 'Sem agendamento no ICMBio',
          en: 'No ICMBio booking',
          es: 'Sin reserva en el ICMBio',
        },
        text: {
          pt: 'Não é preciso reservar vaga no parque.',
          en: 'No park reservation needed.',
          es: 'No es necesario reservar cupo en el parque.',
        },
      },
      {
        icon: 'mapPin',
        title: {
          pt: 'Ponto de encontro fácil',
          en: 'Easy meeting point',
          es: 'Punto de encuentro fácil',
        },
        text: {
          pt: 'O transfer não está incluso, mas o encontro é fácil de chegar.',
          en: 'Transfer is not included, but the meeting point is easy to reach.',
          es: 'El traslado no está incluido, pero el encuentro es fácil de llegar.',
        },
      },
    ],
    options: [
      {
        id: 'circuito',
        title: {
          pt: 'Circuito das piscinas naturais',
          en: 'Natural pools circuit',
          es: 'Circuito de piscinas naturales',
        },
        summary: {
          pt: 'Caminhada guiada pelas costeiras até 3 piscinas naturais, feita na maré baixa.',
          en: 'A guided coastal walk to 3 natural pools, done at low tide.',
          es: 'Caminata guiada por la costa hasta 3 piscinas naturales, con marea baja.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.duration,
            value: { pt: '2h30', en: '2.5 hours', es: '2 h 30' },
          },
          {
            icon: 'mapPin',
            label: factLabels.transfer,
            value: {
              pt: 'Não incluso, ponto de encontro fácil',
              en: 'Not included, easy meeting point',
              es: 'No incluido, encuentro fácil',
            },
          },
          {
            icon: 'shield',
            label: { pt: 'Recomendação', en: 'Recommended', es: 'Recomendación' },
            value: {
              pt: 'Uso de sandálias, chinelos ou sapatilhas',
              en: 'Wear sandals, flip-flops or water shoes',
              es: 'Usar sandalias, chanclas o escarpines',
            },
          },
          {
            icon: 'camera',
            label: {
              pt: 'Principais objetivos',
              en: 'Main goals',
              es: 'Objetivos principales',
            },
            value: {
              pt: 'Contemplar as piscinas e fazer fotos instagramáveis',
              en: 'Take in the pools and get Instagram-worthy photos',
              es: 'Contemplar las piscinas y hacer fotos instagrameables',
            },
          },
        ],
        includes: {
          pt: ['3 piscinas naturais', 'Acompanhamento do guia', 'Sem agendamento no ICMBio'],
          en: ['3 natural pools', 'Guided by Adriano', 'No ICMBio booking needed'],
          es: ['3 piscinas naturales', 'Acompañamiento del guía', 'Sin reserva en el ICMBio'],
        },
        photos: [
          piscinasMorroDoPico,
          piscinasFenda,
          piscinasSorriso,
          piscinasCasal,
          piscinasCasalFenda,
        ],
        priceUnit: 'perPerson',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 250 }],
      },
    ],
  },
  {
    id: 'trilha-piquinho',
    category: 'Terra',
    title: { pt: 'Trilha do Piquinho', en: 'Piquinho Trail', es: 'Sendero del Piquinho' },
    summary: {
      pt: 'Caminhada de cerca de 2 horas com visão de 180 graus da ilha e o pôr do sol lá do alto.',
      en: 'A walk of about 2 hours with a 180-degree view of the island and the sunset from the top.',
      es: 'Caminata de unas 2 horas con vista de 180 grados de la isla y el atardecer desde lo alto.',
    },
    description: {
      pt: 'Trilha cercada pela vegetação até a base do Morro do Piquinho. O início é na estrada da Conceição: a caminhada começa na parte baixa do relevo e sobe pela trilha de terra e pedras até chegar ao Piquinho, onde se tem uma visão perfeita de 180 graus de Noronha e dos seus principais pontos turísticos, como o Morro Dois Irmãos e, logo ao lado, o gigantesco Morro do Pico, o ponto mais alto da ilha, com 321 m de altura.',
      en: 'A trail surrounded by vegetation up to the base of Morro do Piquinho. It starts on Conceição road: the walk begins at the lower part of the terrain and climbs a dirt and rock trail up to Piquinho, where you get a perfect 180-degree view of Noronha and its main landmarks, such as the Dois Irmãos hills and, right beside it, the giant Morro do Pico, the highest point of the island at 321 m.',
      es: 'Sendero rodeado de vegetación hasta la base del Morro do Piquinho. El inicio es en el camino de la Conceição: la caminata empieza en la parte baja del relieve y sube por el sendero de tierra y piedras hasta llegar al Piquinho, donde se tiene una vista perfecta de 180 grados de Noronha y de sus principales puntos turísticos, como el Morro Dois Irmãos y, justo al lado, el gigantesco Morro do Pico, el punto más alto de la isla, con 321 m de altura.',
    },
    details: {
      pt: ['Início às 16h30', 'Cerca de 2h', 'R$ 200 por pessoa'],
      en: ['Starts at 4:30 pm', 'About 2 hours', 'R$ 200 per person'],
      es: ['Inicio a las 16:30 h', 'Unas 2 h', 'R$ 200 por persona'],
    },
    image: piquinhoGrupo,
    heroImage: piquinhoGrupo,
    highlights: [
      {
        icon: 'sun',
        title: { pt: 'Pôr do sol', en: 'Sunset', es: 'Atardecer' },
        text: {
          pt: 'Saída às 16h30 para ver o sol se pôr lá do alto.',
          en: 'Departure at 4:30 pm to watch the sun set from the top.',
          es: 'Salida a las 16:30 h para ver el atardecer desde lo alto.',
        },
      },
      {
        icon: 'compass',
        title: { pt: 'Visão de 180 graus', en: '180-degree view', es: 'Vista de 180 grados' },
        text: {
          pt: 'Morro Dois Irmãos, Morro do Pico e os principais pontos da ilha.',
          en: 'Dois Irmãos, Morro do Pico and the island’s main landmarks.',
          es: 'Morro Dois Irmãos, Morro do Pico y los principales puntos de la isla.',
        },
      },
      {
        icon: 'clock',
        title: {
          pt: 'Cerca de 30 min de subida',
          en: 'About a 30-min climb',
          es: 'Unos 30 min de subida',
        },
        text: {
          pt: 'Nível médio: 1,6 km por terra e pedras, sendo 800 m de subida e 800 m de descida.',
          en: 'Moderate level: 1.6 km over dirt and rocks, 800 m up and 800 m down.',
          es: 'Nivel medio: 1,6 km por tierra y piedras, con 800 m de subida y 800 m de bajada.',
        },
      },
      {
        icon: 'shield',
        title: {
          pt: 'Sem agendamento no ICMBio',
          en: 'No ICMBio booking',
          es: 'Sin reserva en el ICMBio',
        },
        text: {
          pt: 'Não é preciso reservar vaga no parque.',
          en: 'No park reservation needed.',
          es: 'No es necesario reservar cupo en el parque.',
        },
      },
    ],
    options: [
      {
        id: 'trilha',
        title: { pt: 'Trilha do Piquinho', en: 'Piquinho Trail', es: 'Sendero del Piquinho' },
        summary: {
          pt: 'Caminhada guiada até o Piquinho para ver o pôr do sol com vista para o Morro Dois Irmãos.',
          en: 'A guided walk up to Piquinho to watch the sunset overlooking the Dois Irmãos hills.',
          es: 'Caminata guiada hasta el Piquinho para ver el atardecer con vista al Morro Dois Irmãos.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.schedule,
            value: { pt: '16h30 às 18h30', en: '4:30 to 6:30 pm', es: '16:30 a 18:30 h' },
          },
          {
            icon: 'compass',
            label: factLabels.duration,
            value: { pt: 'Cerca de 2h', en: 'About 2 hours', es: 'Unas 2 h' },
          },
          {
            icon: 'mapPin',
            label: factLabels.transfer,
            value: { pt: 'Não incluso', en: 'Not included', es: 'No incluido' },
          },
        ],
        includes: {
          pt: [
            '1,6 km: 800 m de subida e 800 m de descida',
            'Nível médio',
            'Acompanhamento do guia',
            'Sem agendamento no ICMBio',
          ],
          en: [
            '1.6 km: 800 m up and 800 m down',
            'Moderate level',
            'Guided by Adriano',
            'No ICMBio booking needed',
          ],
          es: [
            '1,6 km: 800 m de subida y 800 m de bajada',
            'Nivel medio',
            'Acompañamiento del guía',
            'Sin reserva en el ICMBio',
          ],
        },
        photos: [piquinhoGrupo, piquinhoAmigas, piquinhoPorDoSol, piquinhoSubida],
        priceUnit: 'perPerson',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 200 }],
      },
    ],
    gallery: [piquinhoSubida, piquinhoPorDoSol, piquinhoAmigas, piquinhoMirante, trilhaPiquinho],
  },
  {
    id: 'trilhas-parque',
    category: 'Terra',
    title: {
      pt: 'Trilhas do Parque Nacional',
      en: 'National Park trails',
      es: 'Senderos del Parque Nacional',
    },
    summary: {
      pt: '5 trilhas do Parque Nacional, com agendamento no ICMBio e guia credenciado.',
      en: '5 National Park trails, booked with ICMBio and led by an accredited guide.',
      es: '5 senderos del Parque Nacional, con reserva en el ICMBio y guía acreditado.',
    },
    description: {
      pt: 'O Parque Nacional Marinho de Fernando de Noronha tem 5 trilhas que precisam ser agendadas: Atalaia, Caieiras, Morro São José, Capim-Açu e Abreus. Todas exigem agendamento antecipado pelo site do ICMBio ou presencialmente na ilha, e é obrigatório o acompanhamento de um guia credenciado pelo ICMBio. Escolha a sua trilha abaixo e fale com o Adriano para reservar.',
      en: 'Fernando de Noronha Marine National Park has 5 trails that must be booked: Atalaia, Caieiras, Morro São José, Capim-Açu and Abreus. All of them require advance booking on the ICMBio website or in person on the island, and an ICMBio-accredited guide is mandatory. Choose your trail below and talk to Adriano to book.',
      es: 'El Parque Nacional Marino de Fernando de Noronha tiene 5 senderos que deben reservarse: Atalaia, Caieiras, Morro São José, Capim-Açu y Abreus. Todos exigen reserva anticipada en el sitio del ICMBio o en persona en la isla, y es obligatorio el acompañamiento de un guía acreditado por el ICMBio. Elige tu sendero abajo y habla con Adriano para reservar.',
    },
    details: {
      pt: ['5 trilhas', 'Agendamento no ICMBio', 'Guia credenciado obrigatório'],
      en: ['5 trails', 'ICMBio booking', 'Accredited guide required'],
      es: ['5 senderos', 'Reserva en el ICMBio', 'Guía acreditado obligatorio'],
    },
    image: capimAcuMirante,
    heroImage: capimAcuMirante,
    requiresParkCard: true,
    warning: {
      title: {
        pt: 'Agendamento antecipado obrigatório no ICMBio',
        en: 'Advance ICMBio booking required',
        es: 'Reserva anticipada obligatoria en el ICMBio',
      },
      short: {
        pt: 'Agendamento antecipado obrigatório no ICMBio',
        en: 'Advance ICMBio booking required',
        es: 'Reserva anticipada obligatoria en el ICMBio',
      },
      text: {
        pt: 'Todas as trilhas precisam ser agendadas com antecedência pelo site do ICMBio ou presencialmente na ilha, e o acompanhamento de um guia credenciado pelo ICMBio é obrigatório.',
        en: 'Every trail must be booked in advance on the ICMBio website or in person on the island, and an ICMBio-accredited guide is mandatory.',
        es: 'Todos los senderos deben reservarse con anticipación en el sitio del ICMBio o en persona en la isla, y es obligatorio el acompañamiento de un guía acreditado por el ICMBio.',
      },
    },
    optionStyle: 'named',
    options: [
      {
        id: 'morro-sao-jose',
        title: {
          pt: 'Trilha do Morro São José',
          en: 'Morro São José Trail',
          es: 'Sendero del Morro São José',
        },
        summary: {
          pt: 'A trilha do Morro São José tem duas modalidades de travessia: a pé ou a nado. A pé, ela só é feita nos dias em que a maré alcança amplitude 0.3 ou abaixo, quando um caminho de pedras fica exposto: são cerca de 30 minutos para ir e 30 para voltar, sobre pedras que ficam submersas na maior parte do tempo, por isso é preciso cautela e calma. A nado, a travessia é feita com máscara, snorkel e nadadeiras até a piscina natural da Ilha São José, e é importante reconhecer seus limites na natação.',
          en: 'The Morro São José trail has two ways to cross: on foot or swimming. On foot, it only happens on days when the tide reaches an amplitude of 0.3 or lower, exposing a path of rocks: about 30 minutes there and 30 back, over rocks that are underwater most of the time, so it calls for care and calm. Swimming, the crossing is done with mask, snorkel and fins to the natural pool on Ilha São José, and it is important to know your limits as a swimmer.',
          es: 'El sendero del Morro São José tiene dos modalidades de travesía: a pie o a nado. A pie, solo se hace los días en que la marea alcanza una amplitud de 0.3 o menos, cuando queda expuesto un camino de piedras: son unos 30 minutos de ida y 30 de vuelta, sobre piedras que pasan sumergidas la mayor parte del tiempo, por eso se necesita cautela y calma. A nado, la travesía se hace con máscara, snorkel y aletas hasta la piscina natural de la Ilha São José, y es importante reconocer tus límites en la natación.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.duration,
            value: { pt: '2h', en: '2 hours', es: '2 h' },
          },
          {
            icon: 'compass',
            label: { pt: 'Distância', en: 'Distance', es: 'Distancia' },
            value: {
              pt: '1,1 km ida e volta',
              en: '1.1 km round trip',
              es: '1,1 km ida y vuelta',
            },
          },
          levelFact('hard'),
          {
            icon: 'mapPin',
            label: factLabels.transfer,
            value: { pt: 'Não incluso', en: 'Not included', es: 'No incluido' },
          },
          {
            icon: 'mask',
            label: { pt: 'A nado', en: 'Swimming', es: 'A nado' },
            value: {
              pt: 'Snorkel (máscara e nadadeiras) não inclusos',
              en: 'Snorkel gear (mask and fins) not included',
              es: 'Snorkel (máscara y aletas) no incluido',
            },
          },
          {
            icon: 'shield',
            label: { pt: 'A pé', en: 'On foot', es: 'A pie' },
            value: {
              pt: 'Use tênis ou sapatilhas, evite chinelos ou sandálias soltas',
              en: 'Wear sneakers or water shoes, avoid flip-flops or loose sandals',
              es: 'Usa zapatillas o escarpines, evita chanclas o sandalias sueltas',
            },
          },
        ],
        photos: [saoJosePiscina, saoJoseBoiando],
        priceUnit: 'perPerson',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 250 }],
      },
      {
        id: 'capim-acu',
        title: { pt: 'Trilha Capim-Açu', en: 'Capim-Açu Trail', es: 'Sendero Capim-Açu' },
        summary: {
          pt: 'Descubra o lado selvagem e mais autêntico de Fernando de Noronha! A Trilha Capim-Açu passa pela parte mais preservada da ilha, com mirantes incríveis, cavernas e pedras e a companhia das aves nativas.',
          en: 'Discover the wild and most authentic side of Fernando de Noronha! The Capim-Açu Trail crosses the most preserved part of the island, with amazing viewpoints, caves and rocks, and native birds along the way.',
          es: '¡Descubre el lado salvaje y más auténtico de Fernando de Noronha! El Sendero Capim-Açu pasa por la parte más preservada de la isla, con miradores increíbles, cuevas y piedras y la compañía de las aves nativas.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.duration,
            value: { pt: 'Até 6 horas', en: 'Up to 6 hours', es: 'Hasta 6 horas' },
          },
          {
            icon: 'compass',
            label: { pt: 'Distância', en: 'Distance', es: 'Distancia' },
            value: { pt: '10 km', en: '10 km', es: '10 km' },
          },
          levelFact('hard'),
        ],
        photos: [capimAcuMirante, capimAcuCaminhada],
        priceUnit: 'perPerson',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 350 }],
      },
    ],
    policies: [
      {
        icon: 'calendar',
        title: {
          pt: 'Agendamento e guia',
          en: 'Booking and guide',
          es: 'Reserva y guía',
        },
        items: {
          pt: [
            'Todas as trilhas precisam de agendamento antecipado pelo site do ICMBio ou presencialmente na ilha.',
            'É obrigatória a contratação de um condutor credenciado pelo ICMBio.',
          ],
          en: [
            'Every trail requires advance booking on the ICMBio website or in person on the island.',
            'Hiring an ICMBio-accredited guide is mandatory.',
          ],
          es: [
            'Todos los senderos requieren reserva anticipada en el sitio del ICMBio o en persona en la isla.',
            'Es obligatorio contratar un guía acreditado por el ICMBio.',
          ],
        },
      },
      {
        icon: 'sun',
        title: {
          pt: 'Viagem de março a julho?',
          en: 'Traveling from March to July?',
          es: '¿Viajas de marzo a julio?',
        },
        items: {
          pt: [
            'É a temporada de chuvas na ilha: respeite os horários e chegue com pelo menos 30 minutos de antecedência.',
            'As trilhas ficam muito enlameadas e exigem cuidado redobrado e mais tempo para serem percorridas.',
          ],
          en: [
            'It is the rainy season on the island: stick to the schedule and arrive at least 30 minutes early.',
            'The trails get very muddy and need extra care and more time to complete.',
          ],
          es: [
            'Es la temporada de lluvias en la isla: respeta los horarios y llega con al menos 30 minutos de anticipación.',
            'Los senderos quedan muy embarrados y exigen el doble de cuidado y más tiempo para recorrerlos.',
          ],
        },
      },
    ],
    gallery: [capimAcuMirante, capimAcuCaminhada, saoJoseBoiando, saoJosePiscina, saoJoseMapa],
  },
  {
    id: 'trilha-costa-esmeralda',
    category: 'Terra',
    title: {
      pt: 'Trilha Costa Esmeralda',
      en: 'Emerald Coast Trail',
      es: 'Sendero Costa Esmeralda',
    },
    summary: {
      pt: 'Caminhada de 2h30 pelas costeiras de oito praias do Mar de Dentro.',
      en: 'A 2.5-hour walk along the rocky shores of eight Mar de Dentro beaches.',
      es: 'Caminata de 2 h 30 por la costa de ocho playas del Mar de Dentro.',
    },
    description: {
      pt: 'Um dos cenários mais encantadores de Fernando de Noronha, com paisagens deslumbrantes e vistas de tirar o fôlego. A trilha passa pelas costeiras das praias do Cachorro, do Meio, da Conceição, do Boldró, do Americano, da Quixaba, do Bode e da Cacimba do Padre.',
      en: 'One of the most charming settings in Fernando de Noronha, with stunning landscapes and breathtaking views. The trail runs along the rocky shores of Cachorro, Meio, Conceição, Boldró, Americano, Quixaba, Bode and Cacimba do Padre beaches.',
      es: 'Uno de los escenarios más encantadores de Fernando de Noronha, con paisajes deslumbrantes y vistas impresionantes. El sendero recorre la costa de las playas del Cachorro, del Meio, da Conceição, del Boldró, del Americano, da Quixaba, del Bode y da Cacimba do Padre.',
    },
    details: {
      pt: ['2h30 de caminhada', '8 praias no caminho'],
      en: ['2.5-hour walk', '8 beaches along the way'],
      es: ['2 h 30 de caminata', '8 playas en el camino'],
    },
    image: costaEsmeralda,
  },
  {
    id: 'passeio-a-cavalo',
    category: 'Terra',
    title: { pt: 'Passeio a cavalo', en: 'Horseback ride', es: 'Paseo a caballo' },
    summary: {
      pt: 'Cavalgada do centro até a Ponta do Air France, de manhã ou no pôr do sol.',
      en: 'A ride from the village to Ponta do Air France, in the morning or at sunset.',
      es: 'Cabalgata del centro hasta la Ponta do Air France, por la mañana o al atardecer.',
    },
    description: {
      pt: 'Viva Noronha de um jeito diferente, com momentos de pura conexão com a ilha. A cavalgada sai do centro e vai até a Ponta do Air France, no Porto, e volta. Por regra da ilha, é proibido cavalgar pelas praias.',
      en: 'Experience Noronha in a different way, with moments of pure connection with the island. The ride goes from the village to Ponta do Air France, at the harbor, and back. Island rules do not allow riding on the beaches.',
      es: 'Vive Noronha de una forma diferente, con momentos de pura conexión con la isla. La cabalgata sale del centro hasta la Ponta do Air France, en el Puerto, y vuelve. Por regla de la isla, está prohibido cabalgar por las playas.',
    },
    details: {
      pt: ['7h30 às 9h30', '16h30 às 18h30, no pôr do sol'],
      en: ['7:30 to 9:30 am', '4:30 to 6:30 pm, at sunset'],
      es: ['7:30 a 9:30 h', '16:30 a 18:30 h, al atardecer'],
    },
    image: cavaloAirFrance,
  },
  {
    id: 'rapel',
    category: 'Terra',
    title: { pt: 'Rapel', en: 'Rappelling', es: 'Rappel' },
    summary: {
      pt: 'Adrenalina e paisagens incríveis no Morro do Piquinho.',
      en: 'Adrenaline and amazing views on Morro do Piquinho.',
      es: 'Adrenalina y paisajes increíbles en el Morro do Piquinho.',
    },
    description: {
      pt: 'Para quem busca aventura: desafie seus limites enquanto contempla a natureza exuberante da ilha. A atividade acontece no Morro do Piquinho, com todo o equipamento e instrutor inclusos.',
      en: 'For adventure seekers: push your limits while enjoying the island’s lush nature. The activity takes place on Morro do Piquinho, with all equipment and an instructor included.',
      es: 'Para quien busca aventura: desafía tus límites mientras contemplas la naturaleza exuberante de la isla. La actividad es en el Morro do Piquinho, con todo el equipo e instructor incluidos.',
    },
    details: {
      pt: ['14h às 17h30', 'Equipamento incluso', 'Com instrutor'],
      en: ['2 to 5:30 pm', 'Equipment included', 'With instructor'],
      es: ['14 a 17:30 h', 'Equipo incluido', 'Con instructor'],
    },
    image: rapelPiquinho,
  },
]
