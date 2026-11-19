import aluguel from '../assets/tours/aluguel.webp'
import barcoTradicional from '../assets/tours/barco-tradicional.webp'
import batismoNaufragio from '../assets/tours/batismo-naufragio.webp'
import bikeAquatica from '../assets/tours/bike-aquatica.webp'
import canoaHavaiana from '../assets/tours/canoa-havaiana.webp'
import cilindroEmbarcado from '../assets/tours/cilindro-embarcado.webp'
import entardecerVip from '../assets/tours/entardecer-vip.webp'
import ilhaTourPrivativo from '../assets/tours/ilha-tour-privativo.webp'
import ilhaTour from '../assets/tours/ilha-tour.webp'
import lanchaPrivativa from '../assets/tours/lancha-privativa.webp'
import piscinasNaturais from '../assets/tours/piscinas-naturais.webp'
import snorkel from '../assets/tours/snorkel.webp'
import trilhaPiquinho from '../assets/tours/trilha-piquinho.webp'
import trilhasParque from '../assets/tours/trilhas-parque.webp'
import type { Tour } from '../types'

export const tours: Tour[] = [
  {
    id: 'ilha-tour-coletivo',
    category: 'Terra',
    title: { pt: 'Ilha Tour coletivo', en: 'Shared Island Tour', es: 'Ilha Tour compartido' },
    summary: {
      pt: 'Cerca de 80% da ilha em um dia, de 4x4 e com guia nativo.',
      en: 'About 80% of the island in one day, by 4x4 with a local guide.',
      es: 'Cerca del 80% de la isla en un día, en 4x4 y con guía nativo.',
    },
    description: {
      pt: 'Cerca de 80% da ilha em um único dia, em caminhonete 4x4 com grupo de até 10 pessoas. O guia nativo conta a história do arquipélago e ajuda nas fotos. Ideal para quem chega pela primeira vez.',
      en: 'About 80% of the island in a single day, in a 4x4 pickup with groups of up to 10 people. The local guide shares the history of the archipelago and helps with photos. Ideal for first-time visitors.',
      es: 'Cerca del 80% de la isla en un solo día, en camioneta 4x4 con grupos de hasta 10 personas. El guía nativo cuenta la historia del archipiélago y ayuda con las fotos. Ideal para quien llega por primera vez.',
    },
    details: {
      pt: ['8h30 até o pôr do sol', 'Transfer incluso', 'Parada para mergulho'],
      en: ['8:30 am until sunset', 'Transfer included', 'Swimming stop'],
      es: ['8:30 h hasta el atardecer', 'Traslado incluido', 'Parada para bucear'],
    },
    image: ilhaTour,
    requiresParkCard: true,
    highlight: true,
  },
  {
    id: 'ilha-tour-privativo',
    category: 'Terra',
    title: { pt: 'Ilha Tour privativo', en: 'Private Island Tour', es: 'Ilha Tour privado' },
    summary: {
      pt: 'O dia inteiro de buggy com guia só para o seu grupo.',
      en: 'A full day by buggy with a guide just for your group.',
      es: 'Todo el día en buggy con guía solo para tu grupo.',
    },
    description: {
      pt: 'O dia inteiro de buggy com guia exclusivo, passando por Capela São Pedro, Buraco da Raquel, Sueste, Leão, Sancho, Mirante Dois Irmãos, Cacimba do Padre, Baía dos Porcos e pôr do sol.',
      en: 'A full day by buggy with a private guide, visiting São Pedro Chapel, Buraco da Raquel, Sueste, Leão, Sancho, Dois Irmãos viewpoint, Cacimba do Padre, Baía dos Porcos and the sunset.',
      es: 'Todo el día en buggy con guía exclusivo, pasando por la Capilla São Pedro, Buraco da Raquel, Sueste, Leão, Sancho, Mirador Dois Irmãos, Cacimba do Padre, Baía dos Porcos y el atardecer.',
    },
    details: {
      pt: ['9h às 18h', 'Buggy exclusivo', 'FotoSub incluso'],
      en: ['9 am to 6 pm', 'Private buggy', 'Underwater photos included'],
      es: ['9 h a 18 h', 'Buggy exclusivo', 'Fotos submarinas incluidas'],
    },
    image: ilhaTourPrivativo,
    requiresParkCard: true,
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
