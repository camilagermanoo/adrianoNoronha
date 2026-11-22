import piscinasCasal from '../../assets/tours/piscinas-naturais/casal-piscina.webp?responsive'
import piscinasCasalFenda from '../../assets/tours/piscinas-naturais/casal-fenda.webp?responsive'
import piscinasFenda from '../../assets/tours/piscinas-naturais/fenda-rochas.webp?responsive'
import piscinasMorroDoPico from '../../assets/tours/piscinas-naturais/piscina-morro-do-pico.webp?responsive'
import piscinasSorriso from '../../assets/tours/piscinas-naturais/piscina-sorriso.webp?responsive'
import saoJoseBoiando from '../../assets/tours/piscina-sao-jose/boiando-morro-do-pico.webp?responsive'
import saoJoseMapa from '../../assets/tours/piscina-sao-jose/mapa-trilha.webp?responsive'
import saoJosePiscina from '../../assets/tours/piscina-sao-jose/piscina-cristalina.webp?responsive'
import capimAcuCaminhada from '../../assets/tours/trilha-capim-acu/caminhada-costeira.webp?responsive'
import abreuBoiando from '../../assets/tours/trilha-abreu/boiando-piscina.webp?responsive'
import abreuCorda from '../../assets/tours/trilha-abreu/corda-paredao.webp?responsive'
import abreuDescida from '../../assets/tours/trilha-abreu/descida-corda.webp?responsive'
import atalaiaSnorkel from '../../assets/tours/trilha-atalaia/snorkel-piscina.webp?responsive'
import atalaiaMirante from '../../assets/tours/trilha-atalaia/mirante-costeira.webp?responsive'
import atalaiaCostao from '../../assets/tours/trilha-atalaia/costao-mar-de-fora.webp?responsive'
import caieirasPraia from '../../assets/tours/trilha-pontinha-caieiras/praia-caieiras.webp?responsive'
import caieirasCosteira from '../../assets/tours/trilha-pontinha-caieiras/costeira-caminhada.webp?responsive'
import caieirasVista from '../../assets/tours/trilha-pontinha-caieiras/vista-costa.webp?responsive'
import capimAcuMirante from '../../assets/tours/trilha-capim-acu/mirante-ilha.webp?responsive'
import foraBoiando from '../../assets/tours/piscina-morro-de-fora/casal-boiando.webp?responsive'
import foraBoiandoPerto from '../../assets/tours/piscina-morro-de-fora/boiando-de-perto.webp?responsive'
import foraParedao from '../../assets/tours/piscina-morro-de-fora/casal-paredao.webp?responsive'
import foraPedra from '../../assets/tours/piscina-morro-de-fora/casal-pedra.webp?responsive'
import foraVista from '../../assets/tours/piscina-morro-de-fora/vista-do-alto.webp?responsive'
import cavaloAbraco from '../../assets/tours/passeio-a-cavalo/abraco-cavalo.webp?responsive'
import cavaloCampo from '../../assets/tours/passeio-a-cavalo/cavalgada-campo.webp?responsive'
import cavaloCruzeiro from '../../assets/tours/passeio-a-cavalo/cruzeiro-morro-do-pico.webp?responsive'
import cavaloPorDoSol from '../../assets/tours/passeio-a-cavalo/por-do-sol-porto.webp?responsive'
import rapelDupla from '../../assets/tours/rapel/dupla-pendurada.webp?responsive'
import rapelParedao from '../../assets/tours/rapel/paredao-piquinho.webp?responsive'
import rapelVista from '../../assets/tours/rapel/capacete-vista-ilha.webp?responsive'
import rapelMoca from '../../assets/tours/rapel/moca-paredao.webp?responsive'
import rapelGrupo from '../../assets/tours/rapel/grupo-cume.webp?responsive'
import esmeraldaCaminhada from '../../assets/tours/trilha-costa-esmeralda/caminhada-costeira.webp?responsive'
import esmeraldaMirante from '../../assets/tours/trilha-costa-esmeralda/mirante-dois-irmaos.webp?responsive'
import esmeraldaCasal from '../../assets/tours/trilha-costa-esmeralda/casal-rochedo.webp?responsive'
import esmeraldaMapa from '../../assets/tours/trilha-costa-esmeralda/mapa-trilha.webp?responsive'
import esmeraldaBracos from '../../assets/tours/trilha-costa-esmeralda/bracos-abertos.webp?responsive'
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
    id: 'piscina-morro-de-fora',
    category: 'Terra',
    title: {
      pt: 'Piscina natural do Morro de Fora',
      en: 'Morro de Fora natural pool',
      es: 'Piscina natural del Morro de Fora',
    },
    summary: {
      pt: 'Passando por pedras e um paredão de rocha até uma piscina natural de águas cristalinas.',
      en: 'Over rocks and past a rock wall to a crystal-clear natural pool.',
      es: 'Pasando por piedras y una pared de roca hasta una piscina natural de aguas cristalinas.',
    },
    description: {
      pt: 'Para chegar até a piscina natural do Morro de Fora, passamos por pedras e por um paredão de rocha até uma piscina de águas cristalinas. A visitação é sempre na maré baixa, com nível de dificuldade médio e cerca de 1h30 de passeio, com transfer incluso.',
      en: 'To reach the Morro de Fora natural pool, we cross rocks and pass a rock wall to a crystal-clear pool. Visits are always at low tide, at a moderate level and about 1.5 hours long, with transfer included.',
      es: 'Para llegar a la piscina natural del Morro de Fora, pasamos por piedras y por una pared de roca hasta una piscina de aguas cristalinas. La visita es siempre con marea baja, con nivel de dificultad medio y unas 1 h 30 de paseo, con traslado incluido.',
    },
    details: {
      pt: ['Cerca de 1h30', 'R$ 200 por pessoa', 'Somente na maré baixa'],
      en: ['About 1.5 hours', 'R$ 200 per person', 'Low tide only'],
      es: ['Unas 1 h 30', 'R$ 200 por persona', 'Solo con marea baja'],
    },
    image: foraBoiando,
    heroImage: foraBoiando,
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
        pt: 'Para chegar até a piscina, passamos por pedras e por um paredão de rocha, em terreno irregular. É necessário ter habilidade e equilíbrio para caminhar nas pedras. Se você tem dificuldade de locomoção, fale com o Adriano antes de reservar.',
        en: 'To reach the pool we cross rocks and pass a rock wall, on uneven ground. You need skill and balance to walk on the rocks. If you have limited mobility, talk to Adriano before booking.',
        es: 'Para llegar a la piscina pasamos por piedras y por una pared de roca, en terreno irregular. Es necesario tener habilidad y equilibrio para caminar sobre las rocas. Si tienes dificultad de movilidad, habla con Adriano antes de reservar.',
      },
    },
    highlights: [
      {
        icon: 'wave',
        title: { pt: 'Piscina natural', en: 'Natural pool', es: 'Piscina natural' },
        text: {
          pt: 'Águas cristalinas entre as rochas do Morro de Fora.',
          en: 'Crystal-clear water among the rocks of Morro de Fora.',
          es: 'Aguas cristalinas entre las rocas del Morro de Fora.',
        },
      },
      {
        icon: 'compass',
        title: {
          pt: 'Pedras e paredão de rocha',
          en: 'Rocks and a rock wall',
          es: 'Piedras y pared de roca',
        },
        text: {
          pt: 'O caminho passa por pedras e por um paredão de rocha.',
          en: 'The way crosses rocks and passes a rock wall.',
          es: 'El camino pasa por piedras y por una pared de roca.',
        },
      },
      {
        icon: 'sun',
        title: { pt: 'Na maré baixa', en: 'At low tide', es: 'Con marea baja' },
        text: {
          pt: 'A visitação é sempre feita na maré baixa.',
          en: 'Visits are always at low tide.',
          es: 'La visita se hace siempre con marea baja.',
        },
      },
      {
        icon: 'mapPin',
        title: { pt: 'Transfer incluso', en: 'Transfer included', es: 'Traslado incluido' },
        text: {
          pt: 'Levamos você até o início do caminho.',
          en: 'We take you to the start of the route.',
          es: 'Te llevamos hasta el inicio del camino.',
        },
      },
    ],
    options: [
      {
        id: 'piscina',
        title: {
          pt: 'Piscina natural do Morro de Fora',
          en: 'Morro de Fora natural pool',
          es: 'Piscina natural del Morro de Fora',
        },
        summary: {
          pt: 'Caminhada guiada pelas pedras até a piscina natural, feita na maré baixa.',
          en: 'A guided walk over the rocks to the natural pool, done at low tide.',
          es: 'Caminata guiada por las piedras hasta la piscina natural, con marea baja.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.duration,
            value: { pt: 'Cerca de 1h30', en: 'About 1.5 hours', es: 'Unas 1 h 30' },
          },
          levelFact('medium'),
          {
            icon: 'mapPin',
            label: factLabels.transfer,
            value: { pt: 'Incluso', en: 'Included', es: 'Incluido' },
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
              pt: 'Contemplar a piscina e fazer fotos instagramáveis',
              en: 'Take in the pool and get Instagram-worthy photos',
              es: 'Contemplar la piscina y hacer fotos instagrameables',
            },
          },
        ],
        photos: [foraBoiando, foraVista, foraParedao, foraBoiandoPerto, foraPedra],
        priceUnit: 'perPerson',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 200 }],
      },
    ],
    gallery: [foraBoiando, foraPedra, foraVista, foraBoiandoPerto, foraParedao],
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
      pt: '5 trilhas do Parque Nacional, com agendamento no ICMBio e a partir de R$ 200.',
      en: '5 National Park trails, booked with ICMBio, from R$ 200.',
      es: '5 senderos del Parque Nacional, con reserva en el ICMBio y desde R$ 200.',
    },
    description: {
      pt: 'O Parque Nacional Marinho de Fernando de Noronha tem 5 trilhas que precisam ser agendadas: Atalaia, Pontinha - Caieiras, Morro São José, Capim-Açu e Abreu. Todas exigem agendamento antecipado pelo site do ICMBio ou presencialmente na ilha. Pontinha - Caieiras, Capim-Açu e a travessia a nado do Morro São José exigem guia credenciado pelo ICMBio; Atalaia e Abreu são autoguiadas, com guia opcional. O horário de cada trilha depende da tábua da maré, nenhuma tem transfer e o guia informa o ponto de encontro. Escolha a sua trilha abaixo e fale com o Adriano para reservar.',
      en: 'Fernando de Noronha Marine National Park has 5 trails that must be booked: Atalaia, Pontinha - Caieiras, Morro São José, Capim-Açu and Abreu. All of them require advance booking on the ICMBio website or in person on the island. Pontinha - Caieiras, Capim-Açu and the Morro São José swim require an ICMBio-accredited guide; Atalaia and Abreu are self-guided, with an optional guide. Each trail’s time depends on the tide table, none includes transfer and the guide tells you the meeting point. Choose your trail below and talk to Adriano to book.',
      es: 'El Parque Nacional Marino de Fernando de Noronha tiene 5 senderos que deben reservarse: Atalaia, Pontinha - Caieiras, Morro São José, Capim-Açu y Abreu. Todos exigen reserva anticipada en el sitio del ICMBio o en persona en la isla. Pontinha - Caieiras, Capim-Açu y la travesía a nado del Morro São José exigen guía acreditado por el ICMBio; Atalaia y Abreu son autoguiados, con guía opcional. El horario de cada sendero depende de la tabla de mareas, ninguno tiene traslado y el guía informa el punto de encuentro. Elige tu sendero abajo y habla con Adriano para reservar.',
    },
    details: {
      pt: ['5 trilhas', 'Agendamento no ICMBio', 'Horário conforme a maré', 'Sem transfer'],
      en: ['5 trails', 'ICMBio booking', 'Times follow the tide', 'No transfer'],
      es: ['5 senderos', 'Reserva en el ICMBio', 'Horario según la marea', 'Sin traslado'],
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
        pt: 'Todas as trilhas precisam ser agendadas com antecedência pelo site do ICMBio ou presencialmente na ilha. Pontinha - Caieiras, Capim-Açu e a travessia a nado do Morro São José só podem ser feitas com guia credenciado pelo ICMBio.',
        en: 'Every trail must be booked in advance on the ICMBio website or in person on the island. Pontinha - Caieiras, Capim-Açu and the Morro São José swim can only be done with an ICMBio-accredited guide.',
        es: 'Todos los senderos deben reservarse con anticipación en el sitio del ICMBio o en persona en la isla. Pontinha - Caieiras, Capim-Açu y la travesía a nado del Morro São José solo pueden hacerse con guía acreditado por el ICMBio.',
      },
    },
    bookingUrl: 'https://agendamento.parnanoronha.com.br/',
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
          pt: 'A trilha do Morro São José tem duas modalidades de travessia: a pé ou a nado. A pé, ela só é feita nos dias em que a maré alcança amplitude 0.3 ou abaixo, quando um caminho de pedras fica exposto: são cerca de 30 minutos para ir e 30 para voltar, sobre pedras que ficam submersas na maior parte do tempo, por isso é preciso cautela e calma. A nado, a travessia é feita com máscara, snorkel e nadadeiras até a piscina natural da Ilha São José, e é importante reconhecer seus limites na natação. Pelas regras do ICMBio, o percurso a pé, por uma trilha de rochas vulcânicas na maré baixa, não exige condutor; já a travessia a nado precisa obrigatoriamente do acompanhamento de um condutor credenciado. Na travessia a nado recomendamos também o colete flutuador, e como não há pontos de aluguel no local, alugue o equipamento com antecedência.',
          en: 'The Morro São José trail has two ways to cross: on foot or swimming. On foot, it only happens on days when the tide reaches an amplitude of 0.3 or lower, exposing a path of rocks: about 30 minutes there and 30 back, over rocks that are underwater most of the time, so it calls for care and calm. Swimming, the crossing is done with mask, snorkel and fins to the natural pool on Ilha São José, and it is important to know your limits as a swimmer. Under ICMBio rules, the walk, over a trail of volcanic rocks at low tide, does not require a guide, while the swim must be accompanied by an accredited guide. We also recommend a floating jacket for the swim, and since there are no rental spots on site, rent your gear in advance.',
          es: 'El sendero del Morro São José tiene dos modalidades de travesía: a pie o a nado. A pie, solo se hace los días en que la marea alcanza una amplitud de 0.3 o menos, cuando queda expuesto un camino de piedras: son unos 30 minutos de ida y 30 de vuelta, sobre piedras que pasan sumergidas la mayor parte del tiempo, por eso se necesita cautela y calma. A nado, la travesía se hace con máscara, snorkel y aletas hasta la piscina natural de la Ilha São José, y es importante reconocer tus límites en la natación. Según las reglas del ICMBio, el recorrido a pie, por un sendero de rocas volcánicas con marea baja, no exige guía; la travesía a nado, en cambio, debe hacerse obligatoriamente con un guía acreditado. Para la travesía a nado recomendamos también el chaleco flotador, y como no hay puntos de alquiler en el lugar, alquila el equipo con anticipación.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.duration,
            value: {
              pt: 'Cerca de 1h a pé e 1h a nado',
              en: 'About 1 hour walking and 1 hour swimming',
              es: 'Unas 1 h a pie y 1 h a nado',
            },
          },
          {
            icon: 'compass',
            label: { pt: 'Distância', en: 'Distance', es: 'Distancia' },
            value: {
              pt: '1 km ida e volta',
              en: '1 km round trip',
              es: '1 km ida y vuelta',
            },
          },
          levelFact('hard'),
          {
            icon: 'calendar',
            label: factLabels.schedule,
            value: {
              pt: 'Conforme a tábua da maré',
              en: 'Depends on the tide table',
              es: 'Según la tabla de mareas',
            },
          },
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
          pt: 'Descubra o lado selvagem e mais autêntico de Fernando de Noronha! A Trilha Capim-Açu passa pela parte mais preservada da ilha, com mirantes incríveis, cavernas e pedras e a companhia das aves nativas. É a maior trilha do Parque Nacional, em uma das áreas mais remotas da ilha, e exige alto esforço físico, com subidas e descidas íngremes e trechos de piso irregular sobre rochas vulcânicas. Para chegar ao início, passamos pela trilha do Farol. O acesso à caverna, à piscina natural e ao trecho de pedras para a Praia do Leão não é permitido depois das 16h.',
          en: 'Discover the wild and most authentic side of Fernando de Noronha! The Capim-Açu Trail crosses the most preserved part of the island, with amazing viewpoints, caves and rocks, and native birds along the way. It is the longest trail in the National Park, in one of the most remote areas of the island, and it takes high physical effort, with steep climbs and descents and uneven stretches over volcanic rock. To reach the start, we go through the Farol trail. Access to the cave, the natural pool and the rocky stretch to Praia do Leão is not allowed after 4 pm.',
          es: '¡Descubre el lado salvaje y más auténtico de Fernando de Noronha! El Sendero Capim-Açu pasa por la parte más preservada de la isla, con miradores increíbles, cuevas y piedras y la compañía de las aves nativas. Es el sendero más largo del Parque Nacional, en una de las áreas más remotas de la isla, y exige un alto esfuerzo físico, con subidas y bajadas empinadas y tramos irregulares sobre rocas volcánicas. Para llegar al inicio, pasamos por el sendero del Farol. El acceso a la cueva, a la piscina natural y al tramo de piedras hacia la Praia do Leão no está permitido después de las 16 h.',
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
          {
            icon: 'check',
            label: { pt: 'Recomendação', en: 'Recommendation', es: 'Recomendación' },
            value: {
              pt: 'Tênis e roupas com proteção UV',
              en: 'Sneakers and UV-protective clothing',
              es: 'Zapatillas y ropa con protección UV',
            },
          },
          {
            icon: 'calendar',
            label: factLabels.schedule,
            value: {
              pt: 'Conforme a tábua da maré',
              en: 'Depends on the tide table',
              es: 'Según la tabla de mareas',
            },
          },
          {
            icon: 'mapPin',
            label: factLabels.transfer,
            value: { pt: 'Não incluso', en: 'Not included', es: 'No incluido' },
          },
        ],
        photos: [capimAcuMirante, capimAcuCaminhada],
        priceUnit: 'perPerson',
        prices: [
          { label: { pt: '1 pessoa', en: '1 person', es: '1 persona' }, amount: 450 },
          {
            label: { pt: 'A partir de 2 pessoas', en: '2 or more people', es: 'Desde 2 personas' },
            amount: 350,
          },
        ],
      },
      {
        id: 'atalaia',
        title: { pt: 'Trilha do Atalaia', en: 'Atalaia Trail', es: 'Sendero del Atalaia' },
        summary: {
          pt: 'Uma trilha de nível médio até as piscinas naturais do Atalaia, com mirante, ambiente recifal, praia e muita vida marinha, em uma área protegida do parque. O percurso tem subidas e descidas e trechos de piso irregular, então avalie seus limites antes de agendar. É preciso se apresentar na entrada da trilha pelo menos 20 minutos antes do horário agendado. Há ainda duas outras opções de agendamento: Atalaia contemplação e limpeza, para os dias em que a piscina não está acessível por condições naturais, em que você contempla a paisagem e participa de um mutirão para recolher o lixo trazido pela maré; e Atalaia - Pontinha Caieiras, para fazer as duas trilhas juntas.',
          en: 'A moderate trail to the Atalaia natural pools, with a viewpoint, reef environment, beach and plenty of marine life, in a protected area of the park. The route has climbs, descents and uneven stretches, so consider your limits before booking. You must be at the trail entrance at least 20 minutes before the scheduled time. There are two other booking options: Atalaia contemplation and cleaning, for days when the pool is not accessible due to natural conditions, when you take in the scenery and join a clean-up of trash brought by the tide; and Atalaia - Pontinha Caieiras, to do both trails together.',
          es: 'Un sendero de nivel medio hasta las piscinas naturales del Atalaia, con mirador, ambiente arrecifal, playa y mucha vida marina, en un área protegida del parque. El recorrido tiene subidas, bajadas y tramos irregulares, así que evalúa tus límites antes de reservar. Hay que presentarse en la entrada del sendero al menos 20 minutos antes del horario reservado. Hay además otras dos opciones de reserva: Atalaia contemplación y limpieza, para los días en que la piscina no está accesible por condiciones naturales, en que contemplas el paisaje y participas en una limpieza de la basura traída por la marea; y Atalaia - Pontinha Caieiras, para hacer los dos senderos juntos.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.duration,
            value: { pt: 'Cerca de 1h30', en: 'About 1.5 hours', es: 'Unas 1 h 30' },
          },
          {
            icon: 'compass',
            label: { pt: 'Distância', en: 'Distance', es: 'Distancia' },
            value: { pt: '3 km ida e volta', en: '3 km round trip', es: '3 km ida y vuelta' },
          },
          levelFact('medium'),
          {
            icon: 'check',
            label: { pt: 'Recomendação', en: 'Recommendation', es: 'Recomendación' },
            value: {
              pt: 'Tênis e roupas com proteção UV',
              en: 'Sneakers and UV-protective clothing',
              es: 'Zapatillas y ropa con protección UV',
            },
          },
          {
            icon: 'alert',
            label: { pt: 'Chegada', en: 'Arrival', es: 'Llegada' },
            value: {
              pt: '20 min antes do horário agendado',
              en: '20 min before the scheduled time',
              es: '20 min antes del horario reservado',
            },
          },
          {
            icon: 'shield',
            label: { pt: 'Guia', en: 'Guide', es: 'Guía' },
            value: {
              pt: 'Autoguiada (guia opcional)',
              en: 'Self-guided (optional guide)',
              es: 'Autoguiado (guía opcional)',
            },
          },
          {
            icon: 'calendar',
            label: factLabels.schedule,
            value: {
              pt: 'Conforme a tábua da maré',
              en: 'Depends on the tide table',
              es: 'Según la tabla de mareas',
            },
          },
          {
            icon: 'mapPin',
            label: factLabels.transfer,
            value: { pt: 'Não incluso', en: 'Not included', es: 'No incluido' },
          },
        ],
        photos: [atalaiaMirante, atalaiaSnorkel, atalaiaCostao],
        priceUnit: 'perPerson',
        prices: [
          { label: { pt: 'Atalaia', en: 'Atalaia', es: 'Atalaia' }, amount: 200 },
          {
            label: {
              pt: 'Atalaia + Pontinha - Caieiras',
              en: 'Atalaia + Pontinha - Caieiras',
              es: 'Atalaia + Pontinha - Caieiras',
            },
            amount: 250,
          },
        ],
      },
      {
        id: 'pontinha-caieiras',
        title: {
          pt: 'Trilha Pontinha - Caieiras',
          en: 'Pontinha - Caieiras Trail',
          es: 'Sendero Pontinha - Caieiras',
        },
        summary: {
          pt: 'Uma travessia pela costa com mirantes, ambiente recifal, piscinas naturais e praias, em área protegida do parque. É uma trilha que exige alto esforço físico, com subidas e descidas íngremes e trechos de piso irregular sobre rochas vulcânicas, então avalie seus limites antes de agendar. O acesso só é permitido com condutor credenciado pelo ICMBio. Quem quiser fazer a trilha do Atalaia junto pode agendar a opção Atalaia - Pontinha Caieiras.',
          en: 'A coastal crossing with viewpoints, reef environment, natural pools and beaches, in a protected area of the park. It takes high physical effort, with steep climbs and descents and uneven stretches over volcanic rock, so consider your limits before booking. Access is only allowed with an ICMBio-accredited guide. If you want to do the Atalaia trail too, you can book the Atalaia - Pontinha Caieiras option.',
          es: 'Una travesía por la costa con miradores, ambiente arrecifal, piscinas naturales y playas, en un área protegida del parque. Exige un alto esfuerzo físico, con subidas y bajadas empinadas y tramos irregulares sobre rocas volcánicas, así que evalúa tus límites antes de reservar. El acceso solo está permitido con guía acreditado por el ICMBio. Quien quiera hacer también el sendero del Atalaia puede reservar la opción Atalaia - Pontinha Caieiras.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.duration,
            value: { pt: 'Cerca de 3h', en: 'About 3 hours', es: 'Unas 3 h' },
          },
          {
            icon: 'compass',
            label: { pt: 'Distância', en: 'Distance', es: 'Distancia' },
            value: { pt: '3,7 km', en: '3.7 km', es: '3,7 km' },
          },
          levelFact('hard'),
          {
            icon: 'check',
            label: { pt: 'Recomendação', en: 'Recommendation', es: 'Recomendación' },
            value: {
              pt: 'Tênis e roupas com proteção UV',
              en: 'Sneakers and UV-protective clothing',
              es: 'Zapatillas y ropa con protección UV',
            },
          },
          {
            icon: 'calendar',
            label: factLabels.schedule,
            value: {
              pt: 'Conforme a tábua da maré',
              en: 'Depends on the tide table',
              es: 'Según la tabla de mareas',
            },
          },
          {
            icon: 'mapPin',
            label: factLabels.transfer,
            value: { pt: 'Não incluso', en: 'Not included', es: 'No incluido' },
          },
        ],
        photos: [caieirasPraia, caieirasCosteira, caieirasVista],
        priceUnit: 'perPerson',
        prices: [
          {
            label: {
              pt: 'Pontinha - Caieiras',
              en: 'Pontinha - Caieiras',
              es: 'Pontinha - Caieiras',
            },
            amount: 220,
          },
          {
            label: {
              pt: 'Atalaia + Pontinha - Caieiras',
              en: 'Atalaia + Pontinha - Caieiras',
              es: 'Atalaia + Pontinha - Caieiras',
            },
            amount: 250,
          },
        ],
      },
      {
        id: 'abreu',
        title: { pt: 'Trilha do Abreu', en: 'Abreu Trail', es: 'Sendero del Abreu' },
        summary: {
          pt: 'Uma trilha curta e cheia de aventura até as piscinas naturais do Abreu, com mirante, formações geológicas e ambiente recifal. O acesso às piscinas apresenta alto grau de dificuldade e risco, porque o percurso é feito descendo e subindo por uma corda entre as rochas, sem apoio, o que exige atenção e preparo físico. Não costuma ser recomendada para crianças pequenas, idosos ou pessoas com mobilidade reduzida. Vá de tênis para caminhar nas pedras e prefira roupas com proteção UV, já que o protetor solar não é permitido antes do banho de piscina. Não há pontos de aluguel de equipamento no local, então alugue o colete, a máscara e o snorkel com antecedência.',
          en: 'A short, adventurous trail to the Abreu natural pools, with a viewpoint, geological formations and reef environment. Reaching the pools is highly difficult and risky, because you go down and up a rope between the rocks with no other support, which calls for attention and physical fitness. It is usually not recommended for young children, older people or people with reduced mobility. Wear sneakers to walk on the rocks and choose UV-protective clothing, since sunscreen is not allowed before swimming in the pool. There are no gear rental spots on site, so rent your floating jacket, mask and snorkel in advance.',
          es: 'Un sendero corto y lleno de aventura hasta las piscinas naturales del Abreu, con mirador, formaciones geológicas y ambiente arrecifal. El acceso a las piscinas tiene un alto grado de dificultad y riesgo, porque se baja y se sube por una cuerda entre las rocas, sin apoyo, lo que exige atención y preparación física. No suele recomendarse para niños pequeños, personas mayores o personas con movilidad reducida. Ve con zapatillas para caminar sobre las piedras y prefiere ropa con protección UV, ya que el protector solar no está permitido antes del baño en la piscina. No hay puntos de alquiler de equipo en el lugar, así que alquila el chaleco, la máscara y el snorkel con anticipación.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.duration,
            value: { pt: 'Cerca de 1h', en: 'About 1 hour', es: 'Unas 1 h' },
          },
          {
            icon: 'compass',
            label: { pt: 'Distância', en: 'Distance', es: 'Distancia' },
            value: { pt: '2,4 km ida e volta', en: '2.4 km round trip', es: '2,4 km ida y vuelta' },
          },
          levelFact('hard'),
          {
            icon: 'alert',
            label: { pt: 'Atenção', en: 'Note', es: 'Atención' },
            value: {
              pt: 'Descida e subida com corda entre as rochas',
              en: 'Rope descent and climb between the rocks',
              es: 'Bajada y subida con cuerda entre las rocas',
            },
          },
          {
            icon: 'users',
            label: {
              pt: 'Não recomendada para',
              en: 'Not recommended for',
              es: 'No recomendado para',
            },
            value: {
              pt: 'Crianças pequenas, idosos ou pessoas com mobilidade reduzida',
              en: 'Young children, older people or people with reduced mobility',
              es: 'Niños pequeños, personas mayores o personas con movilidad reducida',
            },
          },
          {
            icon: 'check',
            label: { pt: 'Recomendação', en: 'Recommendation', es: 'Recomendación' },
            value: {
              pt: 'Tênis e roupas com proteção UV',
              en: 'Sneakers and UV-protective clothing',
              es: 'Zapatillas y ropa con protección UV',
            },
          },
          {
            icon: 'shield',
            label: { pt: 'Guia', en: 'Guide', es: 'Guía' },
            value: {
              pt: 'Autoguiada (guia opcional)',
              en: 'Self-guided (optional guide)',
              es: 'Autoguiado (guía opcional)',
            },
          },
          {
            icon: 'calendar',
            label: factLabels.schedule,
            value: {
              pt: 'Conforme a tábua da maré',
              en: 'Depends on the tide table',
              es: 'Según la tabla de mareas',
            },
          },
          {
            icon: 'mapPin',
            label: factLabels.transfer,
            value: { pt: 'Não incluso', en: 'Not included', es: 'No incluido' },
          },
        ],
        photos: [abreuBoiando, abreuCorda, abreuDescida],
        priceUnit: 'perPerson',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 200 }],
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
            'Pontinha - Caieiras e Capim-Açu exigem condutor credenciado pelo ICMBio. No Morro São José, só na travessia a nado. Atalaia e Abreu são autoguiadas, com guia opcional.',
            'O horário depende da tábua da maré.',
            'Nenhuma trilha tem transfer: o guia informa o ponto de encontro.',
          ],
          en: [
            'Every trail requires advance booking on the ICMBio website or in person on the island.',
            'Pontinha - Caieiras and Capim-Açu require an ICMBio-accredited guide. At Morro São José, only for the swimming crossing. Atalaia and Abreu are self-guided, with an optional guide.',
            'The time depends on the tide table.',
            'No trail includes transfer: the guide tells you the meeting point.',
          ],
          es: [
            'Todos los senderos requieren reserva anticipada en el sitio del ICMBio o en persona en la isla.',
            'Pontinha - Caieiras y Capim-Açu exigen guía acreditado por el ICMBio. En el Morro São José, solo en la travesía a nado. Atalaia y Abreu son autoguiados, con guía opcional.',
            'El horario depende de la tabla de mareas.',
            'Ningún sendero tiene traslado: el guía informa el punto de encuentro.',
          ],
        },
      },
      {
        icon: 'mask',
        title: {
          pt: 'Nas piscinas naturais',
          en: 'At the natural pools',
          es: 'En las piscinas naturales',
        },
        items: {
          pt: [
            'Para proteger o meio ambiente, é obrigatório usar colete de flutuação, máscara e snorkel ao entrar nas piscinas naturais.',
            'Não é permitido usar protetor solar (e outros dermocosméticos), nadadeiras, sapatilhas, luvas e extensores para câmeras e celulares. Prefira roupas com proteção UV.',
          ],
          en: [
            'To protect the environment, a floating jacket, mask and snorkel are mandatory when entering the natural pools.',
            'Sunscreen (and other skin products), fins, water shoes, gloves and extension poles for cameras and phones are not allowed. Choose UV-protective clothing.',
          ],
          es: [
            'Para proteger el medio ambiente, es obligatorio usar chaleco flotador, máscara y snorkel al entrar en las piscinas naturales.',
            'No está permitido usar protector solar (y otros dermocosméticos), aletas, escarpines, guantes ni extensores para cámaras y celulares. Prefiere ropa con protección UV.',
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
    gallery: [
      capimAcuMirante,
      capimAcuCaminhada,
      saoJoseBoiando,
      saoJosePiscina,
      saoJoseMapa,
      abreuBoiando,
      abreuCorda,
      abreuDescida,
      atalaiaSnorkel,
      atalaiaMirante,
      atalaiaCostao,
      caieirasPraia,
      caieirasCosteira,
      caieirasVista,
    ],
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
      pt: 'Trilha de praia pelas costeiras de Noronha, com piscinas naturais e oito praias no caminho.',
      en: 'A beach trail along Noronha’s rocky shores, with natural pools and eight beaches along the way.',
      es: 'Sendero de playa por la costa de Noronha, con piscinas naturales y ocho playas en el camino.',
    },
    description: {
      pt: 'Descubra paraísos por trilhas em Fernando de Noronha! Uma trilha de praia passando pelas costeiras de Noronha, com paisagens deslumbrantes, piscinas naturais e muita natureza exuberante. O percurso passa pelas praias do Cachorro, do Meio, da Conceição, do Boldró, do Americano, da Quixaba, do Bode e da Cacimba do Padre, em cerca de 2h30. Não é necessário agendar no ICMBio.',
      en: 'Discover paradise on foot in Fernando de Noronha! A beach trail along Noronha’s rocky shores, with stunning landscapes, natural pools and lush nature. The route passes Cachorro, Meio, Conceição, Boldró, Americano, Quixaba, Bode and Cacimba do Padre beaches, in about 2.5 hours. No ICMBio booking is needed.',
      es: '¡Descubre paraísos por senderos en Fernando de Noronha! Un sendero de playa por la costa de Noronha, con paisajes deslumbrantes, piscinas naturales y mucha naturaleza exuberante. El recorrido pasa por las playas del Cachorro, del Meio, da Conceição, del Boldró, del Americano, da Quixaba, del Bode y da Cacimba do Padre, en unas 2 h 30. No es necesario reservar en el ICMBio.',
    },
    details: {
      pt: ['Cerca de 2h30', '8 praias no caminho', 'R$ 250 por pessoa'],
      en: ['About 2.5 hours', '8 beaches along the way', 'R$ 250 per person'],
      es: ['Unas 2 h 30', '8 playas en el camino', 'R$ 250 por persona'],
    },
    image: esmeraldaCaminhada,
    heroImage: esmeraldaCaminhada,
    highlights: [
      {
        icon: 'mapPin',
        title: { pt: '8 praias', en: '8 beaches', es: '8 playas' },
        text: {
          pt: 'Cachorro, Meio, Conceição, Boldró, Americano, Quixaba, Bode e Cacimba do Padre.',
          en: 'Cachorro, Meio, Conceição, Boldró, Americano, Quixaba, Bode and Cacimba do Padre.',
          es: 'Cachorro, Meio, Conceição, Boldró, Americano, Quixaba, Bode y Cacimba do Padre.',
        },
      },
      {
        icon: 'wave',
        title: {
          pt: 'Costeiras e piscinas naturais',
          en: 'Rocky shores and natural pools',
          es: 'Costas y piscinas naturales',
        },
        text: {
          pt: 'Paisagens deslumbrantes e muita natureza exuberante.',
          en: 'Stunning landscapes and lush nature.',
          es: 'Paisajes deslumbrantes y mucha naturaleza exuberante.',
        },
      },
      {
        icon: 'clock',
        title: { pt: 'Cerca de 2h30', en: 'About 2.5 hours', es: 'Unas 2 h 30' },
        text: {
          pt: 'Trilha de praia passando pelas costeiras.',
          en: 'A beach trail along the rocky shores.',
          es: 'Sendero de playa por la costa.',
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
          pt: 'Não é necessário agendar no site do ICMBio.',
          en: 'There is no need to book on the ICMBio website.',
          es: 'No es necesario reservar en el sitio del ICMBio.',
        },
      },
    ],
    options: [
      {
        id: 'costa-esmeralda',
        title: {
          pt: 'Trilha Costa Esmeralda',
          en: 'Emerald Coast Trail',
          es: 'Sendero Costa Esmeralda',
        },
        summary: {
          pt: 'Trilha de praia pelas costeiras, da Praia do Cachorro até a Cacimba do Padre.',
          en: 'A beach trail along the rocky shores, from Praia do Cachorro to Cacimba do Padre.',
          es: 'Sendero de playa por la costa, de la Praia do Cachorro hasta la Cacimba do Padre.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.duration,
            value: { pt: 'Cerca de 2h30', en: 'About 2.5 hours', es: 'Unas 2 h 30' },
          },
          {
            icon: 'compass',
            label: { pt: 'Percurso', en: 'Route', es: 'Recorrido' },
            value: {
              pt: 'Trilha de praia pelas costeiras',
              en: 'Beach trail along the rocky shores',
              es: 'Sendero de playa por la costa',
            },
          },
          {
            icon: 'mapPin',
            label: { pt: 'Praias', en: 'Beaches', es: 'Playas' },
            value: {
              pt: '8 praias no caminho',
              en: '8 beaches along the way',
              es: '8 playas en el camino',
            },
          },
          {
            icon: 'shield',
            label: { pt: 'ICMBio', en: 'ICMBio', es: 'ICMBio' },
            value: {
              pt: 'Não precisa agendar',
              en: 'No booking needed',
              es: 'No hace falta reservar',
            },
          },
        ],
        photos: [esmeraldaCaminhada, esmeraldaMirante, esmeraldaCasal, esmeraldaBracos],
        priceUnit: 'perPerson',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 250 }],
      },
    ],
    gallery: [esmeraldaCaminhada, esmeraldaMirante, esmeraldaCasal, esmeraldaBracos, esmeraldaMapa],
  },
  {
    id: 'passeio-a-cavalo',
    category: 'Terra',
    title: { pt: 'Passeio a cavalo', en: 'Horseback ride', es: 'Paseo a caballo' },
    summary: {
      pt: 'Viva Noronha de um jeito único: cavalgada do centro até a ponta do Air France, de manhã ou no pôr do sol.',
      en: 'Experience Noronha in a unique way: a ride from the village to the tip of Air France, in the morning or at sunset.',
      es: 'Vive Noronha de una forma única: cabalgata del centro hasta la punta de la Air France, por la mañana o al atardecer.',
    },
    description: {
      pt: 'Viva Noronha de um jeito único! Para os cowboys oceânicos, oferecemos um agradável passeio a cavalo. O trajeto vai do centro até a ponta do Air France, no Porto, e volta, passando pelas estradas velhas, mirantes e paisagens de tirar o fôlego. Pode ser feito de manhã, das 7h30 às 9h30, ou à tarde, das 16h30 às 18h30, pegando o pôr do sol. Por regra da ilha, é proibido cavalgar nas praias.',
      en: 'Experience Noronha in a unique way! For ocean cowboys, we offer a pleasant horseback ride. The route goes from the village to the tip of Air France, at the Port, and back, along old roads, viewpoints and breathtaking scenery. It can be done in the morning, from 7:30 to 9:30 am, or in the afternoon, from 4:30 to 6:30 pm, catching the sunset. Island rules do not allow riding on the beaches.',
      es: '¡Vive Noronha de una forma única! Para los cowboys oceánicos, ofrecemos un agradable paseo a caballo. El trayecto va del centro hasta la punta de la Air France, en el Puerto, y vuelve, pasando por caminos antiguos, miradores y paisajes impresionantes. Se puede hacer por la mañana, de 7:30 a 9:30 h, o por la tarde, de 16:30 a 18:30 h, con el atardecer. Por regla de la isla, está prohibido cabalgar en las playas.',
    },
    details: {
      pt: ['7h30 às 9h30 ou 16h30 às 18h30', 'Cerca de 2h', 'R$ 400 por pessoa'],
      en: ['7:30–9:30 am or 4:30–6:30 pm', 'About 2 hours', 'R$ 400 per person'],
      es: ['7:30–9:30 h o 16:30–18:30 h', 'Unas 2 h', 'R$ 400 por persona'],
    },
    image: cavaloAbraco,
    heroImage: cavaloAbraco,
    imagePosition: 'center 75%',
    heroImagePosition: 'center 75%',
    highlights: [
      {
        icon: 'sun',
        title: { pt: 'Manhã ou pôr do sol', en: 'Morning or sunset', es: 'Mañana o atardecer' },
        text: {
          pt: 'Das 7h30 às 9h30 ou das 16h30 às 18h30, pegando o pôr do sol.',
          en: 'From 7:30 to 9:30 am or from 4:30 to 6:30 pm, catching the sunset.',
          es: 'De 7:30 a 9:30 h o de 16:30 a 18:30 h, con el atardecer.',
        },
      },
      {
        icon: 'mapPin',
        title: {
          pt: 'Do centro ao Air France',
          en: 'From the village to Air France',
          es: 'Del centro a la Air France',
        },
        text: {
          pt: 'Trajeto do centro até a ponta do Air France, no Porto, e volta.',
          en: 'From the village to the tip of Air France, at the Port, and back.',
          es: 'Del centro hasta la punta de la Air France, en el Puerto, y vuelta.',
        },
      },
      {
        icon: 'camera',
        title: {
          pt: 'Mirantes e estradas velhas',
          en: 'Viewpoints and old roads',
          es: 'Miradores y caminos antiguos',
        },
        text: {
          pt: 'Paisagens de tirar o fôlego pelo caminho.',
          en: 'Breathtaking scenery along the way.',
          es: 'Paisajes impresionantes en el camino.',
        },
      },
      {
        icon: 'shield',
        title: {
          pt: 'Proibido cavalgar nas praias',
          en: 'No riding on the beaches',
          es: 'Prohibido cabalgar en las playas',
        },
        text: {
          pt: 'Regra da ilha para preservar as praias.',
          en: 'An island rule to protect the beaches.',
          es: 'Regla de la isla para preservar las playas.',
        },
      },
    ],
    options: [
      {
        id: 'cavalgada',
        title: { pt: 'Passeio a cavalo', en: 'Horseback ride', es: 'Paseo a caballo' },
        summary: {
          pt: 'Cavalgada do centro até a ponta do Air France, no Porto, passando por estradas velhas e mirantes.',
          en: 'A ride from the village to the tip of Air France, at the Port, along old roads and viewpoints.',
          es: 'Cabalgata del centro hasta la punta de la Air France, en el Puerto, por caminos antiguos y miradores.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.schedule,
            value: {
              pt: '7h30 às 9h30 ou 16h30 às 18h30',
              en: '7:30–9:30 am or 4:30–6:30 pm',
              es: '7:30–9:30 h o 16:30–18:30 h',
            },
          },
          {
            icon: 'compass',
            label: factLabels.duration,
            value: { pt: 'Cerca de 2h', en: 'About 2 hours', es: 'Unas 2 h' },
          },
        ],
        photos: [cavaloAbraco, cavaloPorDoSol, cavaloCruzeiro, cavaloCampo],
        priceUnit: 'perPerson',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 400 }],
      },
    ],
    gallery: [cavaloPorDoSol, cavaloCruzeiro, cavaloAbraco, cavaloCampo],
  },
  {
    id: 'rapel',
    category: 'Terra',
    title: {
      pt: 'Rapel no Morro do Piquinho',
      en: 'Rappelling on Morro do Piquinho',
      es: 'Rappel en el Morro do Piquinho',
    },
    summary: {
      pt: 'Aventura e vistas incríveis em um dos cartões-postais de Fernando de Noronha.',
      en: 'Adventure and amazing views on one of Fernando de Noronha’s postcard spots.',
      es: 'Aventura y vistas increíbles en una de las postales de Fernando de Noronha.',
    },
    description: {
      pt: 'Aventura e vistas incríveis em um dos cartões-postais de Fernando de Noronha! A atividade começa pela Trilha do Piquinho, feita com a máxima segurança, e culmina no Morro do Machado, com uma descida de 50 m e vista panorâmica do arquipélago. É apropriado para iniciantes e profissionais. Acontece das 14h às 17h30, com equipamentos e instrutor inclusos; o transfer não está incluso. É necessário usar roupa esportiva e sapato fechado.',
      en: 'Adventure and amazing views on one of Fernando de Noronha’s postcard spots! The activity starts on the Piquinho Trail, done with maximum safety, and ends at Morro do Machado, with a 50 m descent and a panoramic view of the archipelago. Suitable for beginners and experienced climbers. It runs from 2 to 5:30 pm, with gear and an instructor included; transfer is not included. Sportswear and closed shoes are required.',
      es: '¡Aventura y vistas increíbles en una de las postales de Fernando de Noronha! La actividad empieza por el Sendero del Piquinho, hecho con la máxima seguridad, y termina en el Morro do Machado, con un descenso de 50 m y vista panorámica del archipiélago. Apto para principiantes y profesionales. Se realiza de 14 a 17:30 h, con equipo e instructor incluidos; el traslado no está incluido. Es necesario usar ropa deportiva y calzado cerrado.',
    },
    details: {
      pt: ['14h às 17h30', 'Transfer não incluso', 'R$ 500 por pessoa'],
      en: ['2 to 5:30 pm', 'Transfer not included', 'R$ 500 per person'],
      es: ['14 a 17:30 h', 'Traslado no incluido', 'R$ 500 por persona'],
    },
    image: rapelVista,
    heroImage: rapelVista,
    highlights: [
      {
        icon: 'mapPin',
        title: { pt: 'Morro do Piquinho', en: 'Morro do Piquinho', es: 'Morro do Piquinho' },
        text: {
          pt: 'Trilha do Piquinho feita com a máxima segurança até o Morro do Machado.',
          en: 'The Piquinho Trail, done with maximum safety, up to Morro do Machado.',
          es: 'Sendero del Piquinho hecho con la máxima seguridad hasta el Morro do Machado.',
        },
      },
      {
        icon: 'shield',
        title: {
          pt: 'Equipamento e instrutor',
          en: 'Gear and instructor',
          es: 'Equipo e instructor',
        },
        text: {
          pt: 'Equipamentos e instrutor inclusos; venha de roupa esportiva e sapato fechado.',
          en: 'Gear and instructor included; wear sportswear and closed shoes.',
          es: 'Equipo e instructor incluidos; ven con ropa deportiva y calzado cerrado.',
        },
      },
      {
        icon: 'camera',
        title: { pt: 'Descida de 50 m', en: '50 m descent', es: 'Descenso de 50 m' },
        text: {
          pt: 'No Morro do Machado, com vista panorâmica do arquipélago.',
          en: 'At Morro do Machado, with a panoramic view of the archipelago.',
          es: 'En el Morro do Machado, con vista panorámica del archipiélago.',
        },
      },
      {
        icon: 'users',
        title: {
          pt: 'Iniciantes e profissionais',
          en: 'Beginners and pros',
          es: 'Principiantes y profesionales',
        },
        text: {
          pt: 'Apropriado para quem nunca fez e para quem já pratica.',
          en: 'Suitable for first-timers and experienced climbers alike.',
          es: 'Apto para quien nunca lo hizo y para quien ya lo practica.',
        },
      },
    ],
    options: [
      {
        id: 'rapel',
        title: {
          pt: 'Rapel no Morro do Piquinho',
          en: 'Rappelling on Morro do Piquinho',
          es: 'Rappel en el Morro do Piquinho',
        },
        summary: {
          pt: 'Trilha do Piquinho até o Morro do Machado e descida de 50 m com instrutor e equipamentos inclusos.',
          en: 'The Piquinho Trail up to Morro do Machado and a 50 m descent, with instructor and gear included.',
          es: 'Sendero del Piquinho hasta el Morro do Machado y descenso de 50 m, con instructor y equipo incluidos.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.schedule,
            value: { pt: '14h às 17h30', en: '2 to 5:30 pm', es: '14 a 17:30 h' },
          },
          {
            icon: 'mapPin',
            label: factLabels.transfer,
            value: { pt: 'Não incluso', en: 'Not included', es: 'No incluido' },
          },
          {
            icon: 'compass',
            label: { pt: 'Descida', en: 'Descent', es: 'Descenso' },
            value: { pt: '50 m', en: '50 m', es: '50 m' },
          },
          {
            icon: 'shield',
            label: { pt: 'O que vestir', en: 'What to wear', es: 'Qué usar' },
            value: {
              pt: 'Roupa esportiva e sapato fechado',
              en: 'Sportswear and closed shoes',
              es: 'Ropa deportiva y calzado cerrado',
            },
          },
        ],
        includes: {
          pt: ['Equipamentos', 'Instrutor', 'Apropriado para iniciantes e profissionais'],
          en: ['Gear', 'Instructor', 'Suitable for beginners and pros'],
          es: ['Equipo', 'Instructor', 'Apto para principiantes y profesionales'],
        },
        photos: [rapelVista, rapelDupla, rapelMoca, rapelGrupo, rapelParedao],
        priceUnit: 'perPerson',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 500 }],
      },
    ],
    gallery: [rapelVista, rapelDupla, rapelMoca, rapelGrupo, rapelParedao],
  },
]
