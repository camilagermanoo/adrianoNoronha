import aluguel from '../assets/tours/aluguel.webp?responsive'
import barcoTradicional from '../assets/tours/barco-tradicional.webp?responsive'
import batismoNaufragio from '../assets/tours/batismo-naufragio.webp?responsive'
import bikeAquatica from '../assets/tours/bike-aquatica.webp?responsive'
import canoaHavaiana from '../assets/tours/canoa-havaiana.webp?responsive'
import cilindroEmbarcado from '../assets/tours/cilindro-embarcado.webp?responsive'
import entardecerVip from '../assets/tours/entardecer-vip.webp?responsive'
import privativoDoisIrmaos from '../assets/tours/ilha-tour-privativo/dois-irmaos-praia.webp?responsive'
import privativoGrupo from '../assets/tours/ilha-tour-privativo/buggy-grupo.webp?responsive'
import privativoMorroDoPico from '../assets/tours/ilha-tour-privativo/buggy-morro-do-pico.webp?responsive'
import ilhaTour from '../assets/tours/ilha-tour.webp?responsive'
import lanchaPrivativa from '../assets/tours/lancha-privativa.webp?responsive'
import piscinasNaturais from '../assets/tours/piscinas-naturais.webp?responsive'
import snorkel from '../assets/tours/snorkel.webp?responsive'
import trilhaPiquinho from '../assets/tours/trilha-piquinho.webp?responsive'
import trilhasParque from '../assets/tours/trilhas-parque.webp?responsive'
import baiaDosPorcos from '../assets/places/baia-dos-porcos.webp?responsive'
import porDoSol from '../assets/places/por-do-sol.webp?responsive'
import praias from '../assets/places/praias.webp?responsive'
import sancho from '../assets/places/sancho.webp?responsive'
import type { Tour } from '../types'

export const tours: Tour[] = [
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
    image: ilhaTour,
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
          pt: 'Buggy e guia só para o seu grupo, passando por Sancho, Baía dos Porcos, Leão, Sueste, Mirante Dois Irmãos e pôr do sol.',
          en: 'Buggy and guide just for your group, visiting Sancho, Baía dos Porcos, Leão, Sueste, Dois Irmãos viewpoint and the sunset.',
          es: 'Buggy y guía solo para tu grupo, pasando por Sancho, Baía dos Porcos, Leão, Sueste, Mirador Dois Irmãos y el atardecer.',
        },
        schedule: { pt: '8h30 às 17h', en: '8:30 am to 5 pm', es: '8:30 a 17 h' },
        vehicle: { pt: 'Buggy exclusivo', en: 'Private buggy', es: 'Buggy exclusivo' },
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
        schedule: { pt: '8h30 às 17h', en: '8:30 am to 5 pm', es: '8:30 a 17 h' },
        vehicle: { pt: 'Caminhonete 4x4', en: '4x4 pickup', es: 'Camioneta 4x4' },
        photos: [ilhaTour],
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
            'Paradas para snorkel e fotos',
          ],
          en: ['Round-trip transfer', 'Groups of up to 10 people', 'Snorkeling and photo stops'],
          es: [
            'Traslado de ida y vuelta',
            'Grupos de hasta 10 personas',
            'Paradas para snorkel y fotos',
          ],
        },
      },
    ],
    payment: { pt: 'dinheiro ou Pix', en: 'cash or Pix', es: 'efectivo o Pix' },
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
      pt: 'Três piscinas naturais em um circuito guiado na maré baixa.',
      en: 'Three natural pools on a guided circuit at low tide.',
      es: 'Tres piscinas naturales en un circuito guiado con marea baja.',
    },
    description: {
      pt: 'Feito na maré baixa, começa na piscina do Morro de Fora, na Praia da Conceição, segue para o Buraco do Galego, na Praia do Cachorro, e termina na Lasca da Velha.',
      en: 'Done at low tide, it starts at the Morro de Fora pool on Conceição Beach, continues to Buraco do Galego on Cachorro Beach and ends at Lasca da Velha.',
      es: 'Se hace con marea baja: empieza en la piscina del Morro de Fora, en la Praia da Conceição, sigue al Buraco do Galego, en la Praia do Cachorro, y termina en la Lasca da Velha.',
    },
    details: {
      pt: ['Somente na maré baixa', 'Com guia'],
      en: ['Low tide only', 'Guided'],
      es: ['Solo con marea baja', 'Con guía'],
    },
    image: piscinasNaturais,
  },
  {
    id: 'trilha-piquinho',
    category: 'Terra',
    title: { pt: 'Trilha do Piquinho', en: 'Piquinho Trail', es: 'Sendero del Piquinho' },
    summary: {
      pt: 'Subida curta até 217 m com pôr do sol lá do alto.',
      en: 'A short climb to 217 m with the sunset from the top.',
      es: 'Subida corta hasta 217 m con el atardecer desde lo alto.',
    },
    description: {
      pt: 'Subida pelas pedras a partir da estrada da Conceição até 217 m de altura, com vista para o Morro do Pico, Praia do Cachorro, Fortaleza dos Remédios e um pôr do sol inesquecível.',
      en: 'A climb over the rocks from Conceição road up to 217 m, overlooking Morro do Pico, Cachorro Beach, Remédios Fortress and an unforgettable sunset.',
      es: 'Subida por las rocas desde el camino de la Conceição hasta 217 m de altura, con vista al Morro do Pico, la Praia do Cachorro, la Fortaleza dos Remédios y un atardecer inolvidable.',
    },
    details: {
      pt: ['Início às 16h30', '2 km', 'Termina no pôr do sol'],
      en: ['Starts at 4:30 pm', '2 km', 'Ends at sunset'],
      es: ['Inicio a las 16:30 h', '2 km', 'Termina al atardecer'],
    },
    image: trilhaPiquinho,
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
      pt: 'Atalaia, Caieiras, Morro São José, Capim-Açu e Abreus: as trilhas do parque passam por praias intocadas, falésias e piscinas naturais, com chance de ver golfinhos.',
      en: 'Atalaia, Caieiras, Morro São José, Capim-Açu and Abreus: the park trails cross untouched beaches, cliffs and natural pools, with a chance to spot dolphins.',
      es: 'Atalaia, Caieiras, Morro São José, Capim-Açu y Abreus: los senderos del parque pasan por playas vírgenes, acantilados y piscinas naturales, con chance de ver delfines.',
    },
    details: {
      pt: ['Agendamento pelo ICMBio', '5 opções de trilha'],
      en: ['Booked through ICMBio', '5 trail options'],
      es: ['Reserva por ICMBio', '5 opciones de sendero'],
    },
    image: trilhasParque,
    requiresParkCard: true,
  },
  {
    id: 'canoa-havaiana',
    category: 'Mar',
    title: { pt: 'Canoa havaiana', en: 'Outrigger canoe', es: 'Canoa hawaiana' },
    summary: {
      pt: 'Remada coletiva para ver o nascer do sol com golfinhos.',
      en: 'A group paddle to watch the sunrise with dolphins.',
      es: 'Remada en grupo para ver el amanecer con delfines.',
    },
    description: {
      pt: 'Remada coletiva para até 12 pessoas para ver o nascer do sol na Ponta do Air France, com possível presença de golfinhos. Dá para fazer no dia de ir embora, qualquer que seja o horário do voo.',
      en: 'A group paddle for up to 12 people to watch the sunrise at Ponta do Air France, with dolphins often around. You can do it on your departure day, whatever your flight time.',
      es: 'Remada en grupo para hasta 12 personas para ver el amanecer en la Ponta do Air France, con posible presencia de delfines. Se puede hacer el día de la partida, sea cual sea el horario del vuelo.',
    },
    details: {
      pt: ['Nascer do sol', '4 km', 'Transfer incluso'],
      en: ['Sunrise', '4 km', 'Transfer included'],
      es: ['Amanecer', '4 km', 'Traslado incluido'],
    },
    image: canoaHavaiana,
  },
  {
    id: 'bike-aquatica',
    category: 'Mar',
    title: { pt: 'Bike aquática', en: 'Water bike', es: 'Bici acuática' },
    summary: {
      pt: 'Pedalada sobre o mar com chance de ver golfinhos.',
      en: 'Pedaling over the sea with a chance to see dolphins.',
      es: 'Pedaleo sobre el mar con chance de ver delfines.',
    },
    description: {
      pt: 'Pedalada sobre o mar em bikes individuais ou duplas, sempre com guia e equipamento de proteção. Grandes chances de ver golfinhos de um ângulo diferente.',
      en: 'Pedal over the sea on single or double bikes, always with a guide and safety gear. A great chance to see dolphins from a different angle.',
      es: 'Pedaleo sobre el mar en bicis individuales o dobles, siempre con guía y equipo de protección. Grandes chances de ver delfines desde otro ángulo.',
    },
    details: {
      pt: ['50 a 60 minutos', '8h, 9h, 10h, 11h ou 17h', 'Sem transfer'],
      en: ['50 to 60 minutes', '8, 9, 10, 11 am or 5 pm', 'No transfer'],
      es: ['50 a 60 minutos', '8, 9, 10, 11 o 17 h', 'Sin traslado'],
    },
    image: bikeAquatica,
  },
  {
    id: 'entardecer-vip',
    category: 'Mar',
    title: { pt: 'Entardecer VIP', en: 'VIP Sunset', es: 'Atardecer VIP' },
    summary: {
      pt: 'Catamarã com planasub, churrasco de peixe e pôr do sol.',
      en: 'Catamaran with sea towing, grilled fish and sunset.',
      es: 'Catamarán con planasub, parrillada de pescado y atardecer.',
    },
    description: {
      pt: 'Catamarã com planasub na região portuária, navegação pela costa até o Morro Dois Irmãos e churrasco de peixe a bordo enquanto o sol se põe em uma praia de mar calmo.',
      en: 'Catamaran with planasub (towed snorkeling) near the harbor, a cruise along the coast to Morro Dois Irmãos and grilled fish on board while the sun sets at a calm beach.',
      es: 'Catamarán con planasub en la zona del puerto, navegación por la costa hasta el Morro Dois Irmãos y parrillada de pescado a bordo mientras el sol se pone en una playa de mar calmo.',
    },
    details: {
      pt: ['14h30 até o pôr do sol', 'Churrasco de peixe', 'Planasub'],
      en: ['2:30 pm until sunset', 'Grilled fish', 'Planasub'],
      es: ['14:30 h hasta el atardecer', 'Parrillada de pescado', 'Planasub'],
    },
    image: entardecerVip,
  },
  {
    id: 'barco-tradicional',
    category: 'Mar',
    title: { pt: 'Barco tradicional', en: 'Traditional boat trip', es: 'Barco tradicional' },
    summary: {
      pt: 'Escuna ou catamarã até a Sapata com mergulho no Sancho.',
      en: 'Schooner or catamaran to Sapata with a swim at Sancho.',
      es: 'Goleta o catamarán hasta la Sapata con chapuzón en Sancho.',
    },
    description: {
      pt: 'Saída coletiva de escuna ou catamarã até a Ponta da Sapata, com parada de cerca de 50 minutos para mergulho na Baía do Sancho em barco credenciado.',
      en: 'A shared schooner or catamaran trip to Ponta da Sapata, with a stop of about 50 minutes for swimming at Baía do Sancho on a licensed boat.',
      es: 'Salida compartida en goleta o catamarán hasta la Ponta da Sapata, con una parada de unos 50 minutos para bucear en la Baía do Sancho en barco acreditado.',
    },
    details: {
      pt: ['8h30 às 12h', 'Transfer incluso', 'Parada no Sancho'],
      en: ['8:30 am to noon', 'Transfer included', 'Stop at Sancho'],
      es: ['8:30 a 12 h', 'Traslado incluido', 'Parada en Sancho'],
    },
    image: barcoTradicional,
    requiresParkCard: true,
  },
  {
    id: 'lancha-privativa',
    category: 'Mar',
    title: { pt: 'Lancha privativa', en: 'Private speedboat', es: 'Lancha privada' },
    summary: {
      pt: 'Quatro horas de lancha exclusiva com serviço de bordo.',
      en: 'Four hours on a private speedboat with onboard service.',
      es: 'Cuatro horas de lancha exclusiva con servicio a bordo.',
    },
    description: {
      pt: 'Quatro horas de lancha só para o seu grupo, do Porto até a Cacimba do Padre, com parada para banho, chance de golfinhos e pôr do sol no mar. Churrasco de peixe, salada, frutas e frios a bordo.',
      en: 'Four hours on a speedboat just for your group, from the harbor to Cacimba do Padre, with a swimming stop, a chance of dolphins and sunset at sea. Grilled fish, salad, fruit and cold cuts on board.',
      es: 'Cuatro horas de lancha solo para tu grupo, del Puerto hasta Cacimba do Padre, con parada para nadar, chance de delfines y atardecer en el mar. Parrillada de pescado, ensalada, frutas y fiambres a bordo.',
    },
    details: {
      pt: ['4 horas', 'Serviço de bordo', 'Planasub'],
      en: ['4 hours', 'Onboard service', 'Planasub'],
      es: ['4 horas', 'Servicio a bordo', 'Planasub'],
    },
    image: lanchaPrivativa,
  },
  {
    id: 'snorkel',
    category: 'Mergulho',
    title: { pt: 'Mergulho de snorkel', en: 'Snorkeling', es: 'Snorkel' },
    summary: {
      pt: 'Tartarugas, arraias e peixes coloridos em águas cristalinas.',
      en: 'Turtles, rays and colorful fish in crystal-clear water.',
      es: 'Tortugas, rayas y peces de colores en aguas cristalinas.',
    },
    description: {
      pt: 'Águas cristalinas com tartarugas, arraias, corais e cardumes coloridos. Qualquer pessoa pode fazer, mesmo sem experiência, em pontos como a Baía do Sancho e a Baía dos Porcos.',
      en: 'Crystal-clear water with turtles, rays, corals and colorful schools of fish. Anyone can do it, even without experience, at spots like Baía do Sancho and Baía dos Porcos.',
      es: 'Aguas cristalinas con tortugas, rayas, corales y cardúmenes de colores. Cualquier persona puede hacerlo, incluso sin experiencia, en lugares como la Baía do Sancho y la Baía dos Porcos.',
    },
    details: {
      pt: ['2 km', 'Para todas as idades'],
      en: ['2 km', 'All ages'],
      es: ['2 km', 'Para todas las edades'],
    },
    image: snorkel,
  },
  {
    id: 'batismo-naufragio',
    category: 'Mergulho',
    title: {
      pt: 'Batismo no naufrágio',
      en: 'Discovery dive at the wreck',
      es: 'Bautismo en el naufragio',
    },
    summary: {
      pt: 'Primeiro mergulho com cilindro até o naufrágio do Porto.',
      en: 'Your first scuba dive down to the harbor shipwreck.',
      es: 'Primer buceo con tanque hasta el naufragio del Puerto.',
    },
    description: {
      pt: 'Primeiro mergulho com cilindro saindo da beira da praia até o naufrágio do Porto, a 8 metros de profundidade, com instrutor qualificado durante toda a experiência.',
      en: 'A first scuba dive from the beach to the harbor shipwreck, 8 meters deep, with a qualified instructor throughout the whole experience.',
      es: 'Primer buceo con tanque saliendo desde la orilla hasta el naufragio del Puerto, a 8 metros de profundidad, con instructor calificado durante toda la experiencia.',
    },
    details: {
      pt: ['8 m de profundidade', '40 min submerso', 'Sem transfer'],
      en: ['8 m deep', '40 min underwater', 'No transfer'],
      es: ['8 m de profundidad', '40 min bajo el agua', 'Sin traslado'],
    },
    image: batismoNaufragio,
  },
  {
    id: 'cilindro-embarcado',
    category: 'Mergulho',
    title: {
      pt: 'Mergulho de cilindro embarcado',
      en: 'Boat scuba dive',
      es: 'Buceo con tanque desde barco',
    },
    summary: {
      pt: 'Mergulho de batismo a partir do barco, com instrutor.',
      en: 'A discovery dive from the boat, with an instructor.',
      es: 'Buceo de bautismo desde el barco, con instructor.',
    },
    description: {
      pt: 'Mergulho a partir do barco para quem nunca mergulhou e quer conhecer o fundo do mar do arquipélago, em operação segura e com instrutor experiente.',
      en: 'A dive from the boat for people who have never dived and want to see the seabed of the archipelago, in a safe operation with an experienced instructor.',
      es: 'Buceo desde el barco para quien nunca buceó y quiere conocer el fondo del mar del archipiélago, en una operación segura y con instructor experimentado.',
    },
    details: {
      pt: ['8 m de profundidade', '40 min submerso', 'Transfer incluso'],
      en: ['8 m deep', '40 min underwater', 'Transfer included'],
      es: ['8 m de profundidad', '40 min bajo el agua', 'Traslado incluido'],
    },
    image: cilindroEmbarcado,
  },
  {
    id: 'aluguel',
    category: 'Aluguel',
    title: {
      pt: 'Aluguel de buggy, moto e GoPro',
      en: 'Buggy, motorbike and GoPro rental',
      es: 'Alquiler de buggy, moto y GoPro',
    },
    summary: {
      pt: 'Diárias de buggy, moto e GoPro para explorar no seu ritmo.',
      en: 'Daily buggy, motorbike and GoPro rentals to explore at your pace.',
      es: 'Alquiler diario de buggy, moto y GoPro para explorar a tu ritmo.',
    },
    description: {
      pt: 'Explore a ilha no seu ritmo com veículos em ótimo estado e registre cada momento com uma GoPro. Diárias com preço acessível.',
      en: 'Explore the island at your own pace with well-kept vehicles and capture every moment with a GoPro. Affordable daily rates.',
      es: 'Explora la isla a tu ritmo con vehículos en excelente estado y registra cada momento con una GoPro. Tarifas diarias accesibles.',
    },
    details: {
      pt: ['Diária', 'Buggy, moto ou GoPro'],
      en: ['Daily rate', 'Buggy, motorbike or GoPro'],
      es: ['Por día', 'Buggy, moto o GoPro'],
    },
    image: aluguel,
  },
]
