import barcoTradicional from '../../assets/tours/barco-tradicional.webp?responsive'
import bikeAquatica from '../../assets/tours/bike-aquatica.webp?responsive'
import bikePedalada from '../../assets/tours/bike-aquatica/pedalada.webp?responsive'
import canoaHavaiana from '../../assets/tours/canoa-havaiana.webp?responsive'
import canoaNascerDoSol from '../../assets/tours/canoa-havaiana/nascer-do-sol.webp?responsive'
import canoaRemada from '../../assets/tours/canoa-havaiana/remada.webp?responsive'
import happyDaysNavegacao from '../../assets/tours/catamara-happy-days/navegacao.webp?responsive'
import trovaoAltoMar from '../../assets/tours/catamara-trovao-dos-mares/alto-mar.webp?responsive'
import trovaoSancho from '../../assets/tours/catamara-trovao-dos-mares/sancho.webp?responsive'
import entardecerVip from '../../assets/tours/entardecer-vip.webp?responsive'
import entardecerCatamara from '../../assets/tours/entardecer-vip/catamara-entardecer.webp?responsive'
import entardecerPorDoSol from '../../assets/tours/entardecer-vip/catamara-por-do-sol.webp?responsive'
import type { Localized } from '../../i18n/locales'
import type { Tour } from '../../types'

const catamaranDescription: Localized = {
  pt: 'O passeio começa às 8h30 e termina às 14h, com 2 horas de parada na Praia do Sancho. Almoço, equipamento de snorkel e transfer estão inclusos, e o planasub é opcional.',
  en: 'The trip starts at 8:30 am and ends at 2 pm, with a 2-hour stop at Sancho Beach. Lunch, snorkeling gear and transfer are included, and planasub is optional.',
  es: 'El paseo empieza a las 8:30 h y termina a las 14 h, con 2 horas de parada en la Praia do Sancho. El almuerzo, el equipo de snorkel y el traslado están incluidos, y el planasub es opcional.',
}

const catamaranDetails: Localized<string[]> = {
  pt: ['8h30 às 14h', '2 h no Sancho', 'Almoço e transfer inclusos'],
  en: ['8:30 am to 2 pm', '2 h at Sancho', 'Lunch and transfer included'],
  es: ['8:30 a 14 h', '2 h en Sancho', 'Almuerzo y traslado incluidos'],
}

export const seaTours: Tour[] = [
  {
    id: 'canoa-havaiana',
    category: 'Mar',
    title: { pt: 'Canoa havaiana', en: 'Outrigger canoe', es: 'Canoa hawaiana' },
    summary: {
      pt: 'Remada coletiva com grandes chances de ver golfinhos, em três horários.',
      en: 'A group paddle with a great chance of seeing dolphins, at three times of day.',
      es: 'Remada en grupo con grandes chances de ver delfines, en tres horarios.',
    },
    description: {
      pt: 'Um passeio indispensável: remada coletiva para até 12 pessoas do Porto até a Praia da Conceição, sentindo a energia do mar e com grandes chances de ver golfinhos. Há três horários: 5h às 7h30, para ver o nascer do sol; 8h às 10h30; e 16h30 às 18h30, no pôr do sol. A saída do amanhecer pode ser feita no dia de ir embora, qualquer que seja o horário do voo.',
      en: 'A must-do: a group paddle for up to 12 people from the harbor to Conceição Beach, feeling the energy of the sea with a great chance of seeing dolphins. There are three times: 5 to 7:30 am, for the sunrise; 8 to 10:30 am; and 4:30 to 6:30 pm, at sunset. The sunrise departure can be done on your departure day, whatever your flight time.',
      es: 'Un paseo imperdible: remada en grupo para hasta 12 personas del Puerto hasta la Praia da Conceição, sintiendo la energía del mar y con grandes chances de ver delfines. Hay tres horarios: 5 a 7:30 h, para ver el amanecer; 8 a 10:30 h; y 16:30 a 18:30 h, al atardecer. La salida del amanecer se puede hacer el día de la partida, sea cual sea el horario del vuelo.',
    },
    details: {
      pt: ['3 horários por dia', 'Porto até a Conceição', 'Transfer incluso'],
      en: ['3 departures a day', 'Harbor to Conceição', 'Transfer included'],
      es: ['3 horarios al día', 'Puerto a Conceição', 'Traslado incluido'],
    },
    image: canoaRemada,
    gallery: [canoaHavaiana, canoaNascerDoSol],
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
      pt: 'Pedalada sobre o mar em bikes individuais ou duplas, sempre com guia e equipamento de proteção, em percursos de até 3,5 km. Grandes chances de ver golfinhos de um ângulo diferente.',
      en: 'Pedal over the sea on single or double bikes, always with a guide and safety gear, on routes of up to 3.5 km. A great chance to see dolphins from a different angle.',
      es: 'Pedaleo sobre el mar en bicis individuales o dobles, siempre con guía y equipo de protección, en recorridos de hasta 3,5 km. Grandes chances de ver delfines desde otro ángulo.',
    },
    details: {
      pt: ['50 a 60 minutos', '8h, 9h, 10h, 11h ou 17h', 'Sem transfer'],
      en: ['50 to 60 minutes', '8, 9, 10, 11 am or 5 pm', 'No transfer'],
      es: ['50 a 60 minutos', '8, 9, 10, 11 o 17 h', 'Sin traslado'],
    },
    image: bikePedalada,
    gallery: [bikeAquatica],
  },
  {
    id: 'barco-tradicional',
    category: 'Mar',
    title: { pt: 'Barco tradicional', en: 'Traditional boat trip', es: 'Barco tradicional' },
    summary: {
      pt: 'Escuna pelo Mar de Dentro com parada para banho no Sancho.',
      en: 'Schooner trip along the Mar de Dentro with a swim at Sancho.',
      es: 'Goleta por el Mar de Dentro con parada para nadar en Sancho.',
    },
    description: {
      pt: 'Navegue a bordo de uma charmosa escuna e descubra a ilha por um novo ângulo. O passeio percorre toda a extensão do Mar de Dentro, com parada de 40 minutos para banho na Praia do Sancho e chance de ver golfinhos. Uma experiência tranquila para toda a família.',
      en: 'Sail on a charming schooner and see the island from a new angle. The trip covers the whole Mar de Dentro, with a 40-minute swimming stop at Sancho Beach and a chance to see dolphins. A relaxed experience for the whole family.',
      es: 'Navega a bordo de una encantadora goleta y descubre la isla desde un nuevo ángulo. El paseo recorre todo el Mar de Dentro, con una parada de 40 minutos para nadar en la Praia do Sancho y chance de ver delfines. Una experiencia tranquila para toda la familia.',
    },
    details: {
      pt: ['7h30 às 12h30', '40 min no Sancho', 'Transfer incluso'],
      en: ['7:30 am to 12:30 pm', '40 min at Sancho', 'Transfer included'],
      es: ['7:30 a 12:30 h', '40 min en Sancho', 'Traslado incluido'],
    },
    image: barcoTradicional,
    requiresParkCard: true,
  },
  {
    id: 'catamara-trovao-dos-mares',
    category: 'Mar',
    title: {
      pt: 'Catamarã Trovão dos Mares',
      en: 'Trovão dos Mares Catamaran',
      es: 'Catamarán Trovão dos Mares',
    },
    summary: {
      pt: 'Manhã no mar com 2 horas no Sancho e almoço a bordo.',
      en: 'A morning at sea with 2 hours at Sancho and lunch on board.',
      es: 'Mañana en el mar con 2 horas en Sancho y almuerzo a bordo.',
    },
    description: {
      pt: `Navegue pelas águas cristalinas de Noronha e aproveite cada momento em alto-mar. ${catamaranDescription.pt} Planasub opcional por R$ 100.`,
      en: `Sail Noronha’s crystal-clear water and enjoy every moment at sea. ${catamaranDescription.en} Optional planasub for R$ 100.`,
      es: `Navega por las aguas cristalinas de Noronha y aprovecha cada momento en alta mar. ${catamaranDescription.es} Planasub opcional por R$ 100.`,
    },
    details: catamaranDetails,
    image: trovaoSancho,
    gallery: [trovaoAltoMar],
    requiresParkCard: true,
  },
  {
    id: 'catamara-happy-days',
    category: 'Mar',
    title: {
      pt: 'Catamarã Happy Days',
      en: 'Happy Days Catamaran',
      es: 'Catamarán Happy Days',
    },
    summary: {
      pt: 'Catamarã com parada no Sancho, almoço e snorkel.',
      en: 'Catamaran with a stop at Sancho, lunch and snorkeling.',
      es: 'Catamarán con parada en Sancho, almuerzo y snorkel.',
    },
    description: {
      pt: `Momentos inesquecíveis a bordo, contemplando paisagens paradisíacas em alto-mar. ${catamaranDescription.pt}`,
      en: `Unforgettable moments on board, enjoying paradise views at sea. ${catamaranDescription.en}`,
      es: `Momentos inolvidables a bordo, contemplando paisajes paradisíacos en alta mar. ${catamaranDescription.es}`,
    },
    details: catamaranDetails,
    image: happyDaysNavegacao,
    requiresParkCard: true,
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
      pt: 'Saída às 14h30 do Porto de Santo Antônio, com planasub na região portuária e na Praia da Biboca. Depois, o catamarã segue pelas praias do Cachorro, do Meio, da Conceição, do Boldró, do Americano, do Bode, da Quixabinha e da Cacimba do Padre, para na mais calma para o churrasco de peixe a bordo e termina depois do pôr do sol. Não é permitido levar bebidas; há venda a bordo.',
      en: 'Departure at 2:30 pm from Santo Antônio harbor, with planasub near the harbor and at Biboca Beach. Then the catamaran sails past Cachorro, Meio, Conceição, Boldró, Americano, Bode, Quixabinha and Cacimba do Padre beaches, stops at the calmest one for grilled fish on board and returns after sunset. Bringing drinks is not allowed; they are sold on board.',
      es: 'Salida a las 14:30 h del Puerto de Santo Antônio, con planasub en la zona del puerto y en la Praia da Biboca. Luego el catamarán recorre las playas del Cachorro, del Meio, da Conceição, del Boldró, del Americano, del Bode, da Quixabinha y da Cacimba do Padre, para en la más calma para la parrillada de pescado a bordo y termina después del atardecer. No se permite llevar bebidas; hay venta a bordo.',
    },
    details: {
      pt: ['14h30 até depois do pôr do sol', 'Churrasco de peixe', 'Planasub'],
      en: ['2:30 pm until after sunset', 'Grilled fish', 'Planasub'],
      es: ['14:30 h hasta después del atardecer', 'Parrillada de pescado', 'Planasub'],
    },
    image: entardecerPorDoSol,
    gallery: [entardecerVip, entardecerCatamara],
  },
]
