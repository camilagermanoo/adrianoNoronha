import piscinasCasal from '../../assets/tours/piscinas-naturais/casal-piscina.webp?responsive'
import piscinasCasalFenda from '../../assets/tours/piscinas-naturais/casal-fenda.webp?responsive'
import piscinasFenda from '../../assets/tours/piscinas-naturais/fenda-rochas.webp?responsive'
import piscinasMorroDoPico from '../../assets/tours/piscinas-naturais/piscina-morro-do-pico.webp?responsive'
import piscinasSorriso from '../../assets/tours/piscinas-naturais/piscina-sorriso.webp?responsive'
import cavaloAirFrance from '../../assets/tours/passeio-a-cavalo/air-france.webp?responsive'
import rapelPiquinho from '../../assets/tours/rapel/morro-do-piquinho.webp?responsive'
import costaEsmeralda from '../../assets/tours/trilha-costa-esmeralda/costeira.webp?responsive'
import trilhaPiquinho from '../../assets/tours/trilha-piquinho.webp?responsive'
import piquinhoMirante from '../../assets/tours/trilha-piquinho/mirante.webp?responsive'
import piquinhoTopo from '../../assets/tours/trilha-piquinho/topo.webp?responsive'
import trilhasParque from '../../assets/tours/trilhas-parque.webp?responsive'
import parqueCaminhada from '../../assets/tours/trilhas-parque/caminhada.webp?responsive'
import coletivoCaminhonete from '../../assets/tours/ilha-tour-coletivo/caminhonete-4x4.webp?responsive'
import coletivoPorDoSol from '../../assets/tours/ilha-tour-coletivo/grupo-caminhonete-por-do-sol.webp?responsive'
import coletivoGrupo from '../../assets/tours/ilha-tour-coletivo/grupo-mirante-dois-irmaos.webp?responsive'
import privativoDoisIrmaos from '../../assets/tours/ilha-tour-privativo/dois-irmaos-praia.webp?responsive'
import privativoGrupo from '../../assets/tours/ilha-tour-privativo/buggy-grupo.webp?responsive'
import privativoMorroDoPico from '../../assets/tours/ilha-tour-privativo/buggy-morro-do-pico.webp?responsive'
import baiaDosPorcos from '../../assets/places/baia-dos-porcos.webp?responsive'
import porDoSol from '../../assets/places/por-do-sol.webp?responsive'
import praias from '../../assets/places/praias.webp?responsive'
import sancho from '../../assets/places/sancho.webp?responsive'
import type { Tour } from '../../types'
import { factLabels } from './labels'

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
    gallery: [baiaDosPorcos, sancho, praias, porDoSol],
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
        photos: [privativoMorroDoPico, privativoGrupo, privativoDoisIrmaos],
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
          pt: 'Para mais pessoas, consulte o valor. FotoSub não incluso.',
          en: 'For larger groups, ask for a quote. Underwater photos not included.',
          es: 'Para más personas, consulta el precio. Fotos submarinas no incluidas.',
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
        priceNote: {
          pt: 'FotoSub não incluso.',
          en: 'Underwater photos not included.',
          es: 'Fotos submarinas no incluidas.',
        },
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
    payment: {
      pt: 'dinheiro, Pix ou cartão (com taxa)',
      en: 'cash, Pix or card (fee applies)',
      es: 'efectivo, Pix o tarjeta (con recargo)',
    },
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
      pt: 'Uma caminhada pelas costeiras para conhecer 3 piscinas naturais de águas cristalinas: a piscina do Morro de Fora, na Praia da Conceição, o Buraco do Galego, na Praia do Cachorro, e a Lasca da Velha. Vida marinha, cenários entre as rochas e paisagens de tirar o fôlego, em cerca de 2h30 de passeio na maré baixa. Não é necessário agendar no ICMBio.',
      en: 'A walk along the rocky shores to discover 3 crystal-clear natural pools: the Morro de Fora pool on Conceição Beach, Buraco do Galego on Cachorro Beach and Lasca da Velha. Marine life, settings between the rocks and breathtaking views, in a tour of about 2.5 hours at low tide. No ICMBio booking required.',
      es: 'Una caminata por la costa rocosa para conocer 3 piscinas naturales de aguas cristalinas: la piscina del Morro de Fora, en la Praia da Conceição, el Buraco do Galego, en la Praia do Cachorro, y la Lasca da Velha. Vida marina, escenarios entre las rocas y paisajes impresionantes, en unas 2 h 30 de paseo con marea baja. No es necesario reservar en el ICMBio.',
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
          pt: 'Morro de Fora, Buraco do Galego e Lasca da Velha.',
          en: 'Morro de Fora, Buraco do Galego and Lasca da Velha.',
          es: 'Morro de Fora, Buraco do Galego y Lasca da Velha.',
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
        ],
        includes: {
          pt: [
            '3 piscinas naturais',
            'Acompanhamento do guia',
            'Fotos durante o passeio',
            'Sem agendamento no ICMBio',
          ],
          en: [
            '3 natural pools',
            'Guided by Adriano',
            'Photos during the tour',
            'No ICMBio booking needed',
          ],
          es: [
            '3 piscinas naturales',
            'Acompañamiento del guía',
            'Fotos durante el paseo',
            'Sin reserva en el ICMBio',
          ],
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
    payment: {
      pt: 'dinheiro, Pix ou cartão (com taxa)',
      en: 'cash, Pix or card (fee applies)',
      es: 'efectivo, Pix o tarjeta (con recargo)',
    },
  },
  {
    id: 'trilha-piquinho',
    category: 'Terra',
    title: { pt: 'Trilha do Piquinho', en: 'Piquinho Trail', es: 'Sendero del Piquinho' },
    summary: {
      pt: 'Caminhada de cerca de 2 horas com vista panorâmica e pôr do sol lá do alto.',
      en: 'A walk of about 2 hours with panoramic views and the sunset from the top.',
      es: 'Caminata de unas 2 horas con vista panorámica y el atardecer desde lo alto.',
    },
    description: {
      pt: 'Uma caminhada cheia de emoção que começa na estrada da Conceição e sobe pelas pedras até o Piquinho, com visual panorâmico do Morro do Pico, da Praia do Cachorro e da Fortaleza dos Remédios. São 2,7 km em cerca de 2 horas, com guia e transfer de buggy, terminando com o pôr do sol.',
      en: 'An exciting walk that starts on Conceição road and climbs over the rocks to Piquinho, with panoramic views of Morro do Pico, Cachorro Beach and Remédios Fortress. It covers 2.7 km in about 2 hours, with a guide and buggy transfer, ending with the sunset.',
      es: 'Una caminata llena de emoción que empieza en el camino de la Conceição y sube por las rocas hasta el Piquinho, con vista panorámica del Morro do Pico, la Praia do Cachorro y la Fortaleza dos Remédios. Son 2,7 km en unas 2 horas, con guía y traslado en buggy, terminando con el atardecer.',
    },
    details: {
      pt: ['Início às 16h30', '2,7 km', 'Transfer de buggy incluso'],
      en: ['Starts at 4:30 pm', '2.7 km', 'Buggy transfer included'],
      es: ['Inicio a las 16:30 h', '2,7 km', 'Traslado en buggy incluido'],
    },
    image: piquinhoMirante,
    gallery: [trilhaPiquinho, piquinhoTopo],
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
      pt: 'Atalaia, Caieiras, Capim-Açu e outras trilhas do parque.',
      en: 'Atalaia, Caieiras, Capim-Açu and other park trails.',
      es: 'Atalaia, Caieiras, Capim-Açu y otros senderos del parque.',
    },
    description: {
      pt: 'Atalaia, Caieiras, Morro São José, Capim-Açu e Abreus: as trilhas do parque passam por natureza preservada, praias intocadas, falésias e piscinas naturais. A caminhada começa às 16h30, tem cerca de 3 km e é considerada de nível médio no trecho curto e difícil na travessia da Caieira. O acompanhamento de guia é obrigatório e o agendamento é feito pelo site ou na loja do ICMBio.',
      en: 'Atalaia, Caieiras, Morro São José, Capim-Açu and Abreus: the park trails cross preserved nature, untouched beaches, cliffs and natural pools. The walk starts at 4:30 pm, covers about 3 km and is considered moderate on the short route and difficult on the Caieira crossing. A guide is mandatory and booking is done on the ICMBio website or office.',
      es: 'Atalaia, Caieiras, Morro São José, Capim-Açu y Abreus: los senderos del parque pasan por naturaleza preservada, playas vírgenes, acantilados y piscinas naturales. La caminata empieza a las 16:30 h, tiene unos 3 km y se considera de nivel medio en el tramo corto y difícil en la travesía de la Caieira. El guía es obligatorio y la reserva se hace en el sitio o en la oficina del ICMBio.',
    },
    details: {
      pt: ['Início às 16h30', '3 km', 'Guia obrigatório'],
      en: ['Starts at 4:30 pm', '3 km', 'Guide required'],
      es: ['Inicio a las 16:30 h', '3 km', 'Guía obligatorio'],
    },
    image: parqueCaminhada,
    gallery: [trilhasParque],
    requiresParkCard: true,
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
