import barcoTradicional from '../../assets/tours/barco-tradicional.webp?responsive'
import bikeAquatica from '../../assets/tours/bike-aquatica.webp?responsive'
import bikePedalada from '../../assets/tours/bike-aquatica/pedalada.webp?responsive'
import bikeAmarela from '../../assets/tours/bike-aquatica/bike-amarela.webp?responsive'
import bikeBracosAbertos from '../../assets/tours/bike-aquatica/bracos-abertos.webp?responsive'
import canoaHavaiana from '../../assets/tours/canoa-havaiana.webp?responsive'
import canoaNascerDoSol from '../../assets/tours/canoa-havaiana/nascer-do-sol.webp?responsive'
import canoaRemada from '../../assets/tours/canoa-havaiana/remada.webp?responsive'
import canoaGolfinhos from '../../assets/tours/canoa-havaiana/golfinhos.webp?responsive'
import canoaGolfinhosCanoa from '../../assets/tours/canoa-havaiana/golfinhos-canoa.webp?responsive'
import canoaGrupo from '../../assets/tours/canoa-havaiana/grupo-morro-do-pico.webp?responsive'
import happyDaysNavegacao from '../../assets/tours/catamara-happy-days/navegacao.webp?responsive'
import trovaoAltoMar from '../../assets/tours/catamara-trovao-dos-mares/alto-mar.webp?responsive'
import trovaoSancho from '../../assets/tours/catamara-trovao-dos-mares/sancho.webp?responsive'
import entardecerVip from '../../assets/tours/entardecer-vip.webp?responsive'
import entardecerCatamara from '../../assets/tours/entardecer-vip/catamara-entardecer.webp?responsive'
import entardecerPorDoSol from '../../assets/tours/entardecer-vip/catamara-por-do-sol.webp?responsive'
import type { Localized } from '../../i18n/locales'
import type { Tour } from '../../types'
import { factLabels } from './labels'

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
      pt: 'Remada de cerca de 4 km saindo do Porto, com chance de ver golfinhos e parada para mergulho.',
      en: 'A paddle of about 4 km from the harbor, with a chance of seeing dolphins and a swim stop.',
      es: 'Remada de unos 4 km saliendo del Puerto, con chance de ver delfines y parada para bucear.',
    },
    description: {
      pt: 'A expedição sai da Praia do Porto e o roteiro tem aproximadamente 4 km, passando pela Ponta do Air France, Rugido do Leão, Praia da Biboca, Praia do Cachorro, Praia do Meio e Praia da Conceição. Existe a possibilidade de ver os golfinhos e fazemos uma parada para mergulho livre. Se você tiver equipamento de mergulho, pode levar. As saídas são às 5h, para ver o nascer do sol, e às 8h. O passeio no pôr do sol, às 16h30, é feito mediante agendamento prévio, para grupos acima de 4 pessoas.',
      en: 'The expedition leaves from Porto Beach and the route is about 4 km long, passing Ponta do Air France, Rugido do Leão, Biboca Beach, Cachorro Beach, Meio Beach and Conceição Beach. There is a chance of seeing dolphins and we make a stop for free diving. If you have your own snorkeling gear, feel free to bring it. Departures are at 5 am, to watch the sunrise, and at 8 am. The sunset trip, at 4:30 pm, is available on prior booking for groups of more than 4 people.',
      es: 'La expedición sale de la Praia do Porto y el recorrido tiene aproximadamente 4 km, pasando por la Ponta do Air France, el Rugido do Leão, la Praia da Biboca, la Praia do Cachorro, la Praia do Meio y la Praia da Conceição. Existe la posibilidad de ver delfines y hacemos una parada para buceo libre. Si tienes equipo de buceo, puedes llevarlo. Las salidas son a las 5 h, para ver el amanecer, y a las 8 h. El paseo al atardecer, a las 16:30 h, se hace con reserva previa, para grupos de más de 4 personas.',
    },
    details: {
      pt: ['Saídas às 5h e às 8h', 'Cerca de 4 km', 'R$ 220 por pessoa'],
      en: ['Departures at 5 and 8 am', 'About 4 km', 'R$ 220 per person'],
      es: ['Salidas a las 5 y a las 8 h', 'Unos 4 km', 'R$ 220 por persona'],
    },
    image: canoaRemada,
    heroImage: canoaRemada,
    badge: {
      pt: 'Chance de ver golfinhos',
      en: 'Chance to see dolphins',
      es: 'Chance de ver delfines',
    },
    highlights: [
      {
        icon: 'sun',
        title: { pt: 'Nascer do sol', en: 'Sunrise', es: 'Amanecer' },
        text: {
          pt: 'Saída às 5h para remar com o dia amanhecendo.',
          en: 'A 5 am departure to paddle as the day breaks.',
          es: 'Salida a las 5 h para remar con el amanecer.',
        },
      },
      {
        icon: 'wave',
        title: { pt: 'Golfinhos', en: 'Dolphins', es: 'Delfines' },
        text: {
          pt: 'Existe a possibilidade de ver os golfinhos de perto.',
          en: 'There is a chance of seeing dolphins up close.',
          es: 'Existe la posibilidad de ver delfines de cerca.',
        },
      },
      {
        icon: 'mask',
        title: { pt: 'Parada para mergulho', en: 'Swim stop', es: 'Parada para bucear' },
        text: {
          pt: 'Uma pausa para mergulho livre no meio do roteiro.',
          en: 'A free diving break along the route.',
          es: 'Una pausa para buceo libre en el recorrido.',
        },
      },
      {
        icon: 'compass',
        title: {
          pt: '6 pontos no caminho',
          en: '6 spots along the way',
          es: '6 puntos en el camino',
        },
        text: {
          pt: 'Do Porto até a Conceição, passando pela Ponta do Air France e pelo Rugido do Leão.',
          en: 'From the harbor to Conceição, passing Ponta do Air France and Rugido do Leão.',
          es: 'Del Puerto hasta la Conceição, pasando por la Ponta do Air France y el Rugido do Leão.',
        },
      },
    ],
    options: [
      {
        id: 'remada',
        title: { pt: 'Canoa havaiana', en: 'Outrigger canoe', es: 'Canoa hawaiana' },
        summary: {
          pt: 'Remada em grupo do Porto até a Praia da Conceição, acompanhada pelo marinheiro.',
          en: 'A group paddle from the harbor to Conceição Beach, led by a boatman.',
          es: 'Remada en grupo del Puerto hasta la Praia da Conceição, acompañada por el marinero.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.schedule,
            value: {
              pt: '5h (nascer do sol) ou 8h',
              en: '5 am (sunrise) or 8 am',
              es: '5 h (amanecer) u 8 h',
            },
          },
          {
            icon: 'sun',
            label: { pt: 'Pôr do sol', en: 'Sunset', es: 'Atardecer' },
            value: {
              pt: '16h30, com agendamento prévio para grupos acima de 4 pessoas',
              en: '4:30 pm, on prior booking for groups of more than 4',
              es: '16:30 h, con reserva previa para grupos de más de 4 personas',
            },
          },
          {
            icon: 'mapPin',
            label: factLabels.transfer,
            value: {
              pt: 'Ida e volta da pousada',
              en: 'Round trip from your inn',
              es: 'Ida y vuelta desde la posada',
            },
          },
        ],
        includes: {
          pt: ['Acompanhamento do marinheiro', 'Colete e remo', 'Parada para mergulho livre'],
          en: ['Led by a boatman', 'Life jacket and paddle', 'Free diving stop'],
          es: ['Acompañamiento del marinero', 'Chaleco y remo', 'Parada para buceo libre'],
        },
        photos: [canoaRemada, canoaGolfinhosCanoa, canoaGrupo, canoaGolfinhos, canoaHavaiana],
        priceUnit: 'perPerson',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 220 }],
      },
    ],
    gallery: [canoaGolfinhosCanoa, canoaGrupo, canoaNascerDoSol, canoaHavaiana, canoaGolfinhos],
  },
  {
    id: 'bike-aquatica',
    category: 'Mar',
    title: { pt: 'Bike aquática', en: 'Water bike', es: 'Bici acuática' },
    summary: {
      pt: 'Pedalada de cerca de 50 minutos saindo da Praia do Porto, com grande chance de ver golfinhos.',
      en: 'A pedal ride of about 50 minutes from Porto Beach, with a great chance of seeing dolphins.',
      es: 'Pedaleo de unos 50 minutos saliendo de la Praia do Porto, con grandes chances de ver delfines.',
    },
    description: {
      pt: 'Saímos pedalando da Praia do Porto, passando pela Praia da Biboca e pelo Rugido do Leão, em direção à Praia do Cachorro e à Praia do Meio. Paramos para tirar fotos e fazer vídeos, e existe a grande possibilidade de ver os golfinhos. A pedalada dura cerca de 50 minutos. No nascer do sol, o trajeto é diferente.',
      en: 'We pedal out from Porto Beach, passing Biboca Beach and Rugido do Leão, heading to Cachorro Beach and Meio Beach. We stop to take photos and videos, and there is a great chance of seeing dolphins. The ride takes about 50 minutes. At sunrise, the route is different.',
      es: 'Salimos pedaleando de la Praia do Porto, pasando por la Praia da Biboca y el Rugido do Leão, en dirección a la Praia do Cachorro y la Praia do Meio. Paramos para tomar fotos y hacer videos, y existe una gran posibilidad de ver delfines. El pedaleo dura unos 50 minutos. Al amanecer, el recorrido es diferente.',
    },
    details: {
      pt: ['Cerca de 50 minutos', 'Do nascer ao pôr do sol', 'R$ 180 por pessoa'],
      en: ['About 50 minutes', 'From sunrise to sunset', 'R$ 180 per person'],
      es: ['Unos 50 minutos', 'Del amanecer al atardecer', 'R$ 180 por persona'],
    },
    image: bikePedalada,
    imagePosition: 'center 72%',
    heroImage: bikePedalada,
    heroImagePosition: 'center 80%',
    badge: {
      pt: 'Chance de ver golfinhos',
      en: 'Chance to see dolphins',
      es: 'Chance de ver delfines',
    },
    highlights: [
      {
        icon: 'wave',
        title: { pt: 'Golfinhos', en: 'Dolphins', es: 'Delfines' },
        text: {
          pt: 'Grande possibilidade de pedalar perto dos golfinhos.',
          en: 'A great chance of pedaling close to the dolphins.',
          es: 'Gran posibilidad de pedalear cerca de los delfines.',
        },
      },
      {
        icon: 'camera',
        title: { pt: 'Fotos e vídeos', en: 'Photos and videos', es: 'Fotos y videos' },
        text: {
          pt: 'Paradas para registrar o passeio com o Morro do Pico ao fundo.',
          en: 'Stops to capture the ride with Morro do Pico in the background.',
          es: 'Paradas para registrar el paseo con el Morro do Pico de fondo.',
        },
      },
      {
        icon: 'sun',
        title: {
          pt: 'Nascer ou pôr do sol',
          en: 'Sunrise or sunset',
          es: 'Amanecer o atardecer',
        },
        text: {
          pt: 'Saídas também no nascer e no pôr do sol; no nascer, o trajeto é diferente.',
          en: 'Departures at sunrise and sunset too; the sunrise route is different.',
          es: 'También hay salidas al amanecer y al atardecer; al amanecer el recorrido es diferente.',
        },
      },
      {
        icon: 'compass',
        title: {
          pt: 'Roteiro pelo Mar de Dentro',
          en: 'Mar de Dentro route',
          es: 'Ruta por el Mar de Dentro',
        },
        text: {
          pt: 'Do Porto até a Praia do Meio, passando pela Biboca e pelo Rugido do Leão.',
          en: 'From the harbor to Meio Beach, passing Biboca and Rugido do Leão.',
          es: 'Del Puerto hasta la Praia do Meio, pasando por la Biboca y el Rugido do Leão.',
        },
      },
    ],
    options: [
      {
        id: 'pedalada',
        title: { pt: 'Bike aquática', en: 'Water bike', es: 'Bici acuática' },
        summary: {
          pt: 'Pedalada guiada sobre o mar, saindo e voltando para a Praia do Porto.',
          en: 'A guided pedal ride over the sea, starting and ending at Porto Beach.',
          es: 'Pedaleo guiado sobre el mar, saliendo y volviendo a la Praia do Porto.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.schedule,
            value: {
              pt: 'Nascer do sol, 7h, 8h, 9h, 10h, 11h ou pôr do sol',
              en: 'Sunrise, 7, 8, 9, 10, 11 am or sunset',
              es: 'Amanecer, 7, 8, 9, 10, 11 h o atardecer',
            },
          },
          {
            icon: 'compass',
            label: factLabels.duration,
            value: { pt: 'Cerca de 50 min', en: 'About 50 min', es: 'Unos 50 min' },
          },
          {
            icon: 'mapPin',
            label: factLabels.transfer,
            value: {
              pt: 'Não incluso, encontro na Praia do Porto',
              en: 'Not included, meeting at Porto Beach',
              es: 'No incluido, encuentro en la Praia do Porto',
            },
          },
        ],
        includes: {
          pt: ['Acompanhamento do guia', 'Colete', 'Paradas para fotos e vídeos'],
          en: ['Guided ride', 'Life jacket', 'Stops for photos and videos'],
          es: ['Acompañamiento del guía', 'Chaleco', 'Paradas para fotos y videos'],
        },
        photos: [bikePedalada, bikeBracosAbertos, bikeAmarela, canoaGolfinhos],
        priceUnit: 'perPerson',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 180 }],
      },
    ],
    gallery: [bikeBracosAbertos, bikeAmarela, bikeAquatica, canoaGolfinhos],
  },
  {
    id: 'barco-tradicional',
    category: 'Mar',
    title: { pt: 'Barco tradicional', en: 'Traditional boat trip', es: 'Barco tradicional' },
    summary: {
      pt: 'Escuna por todo o Mar de Dentro até a Ponta da Sapata, com parada para banho no Sancho.',
      en: 'A schooner trip along the whole Mar de Dentro to Ponta da Sapata, with a swim at Sancho.',
      es: 'Goleta por todo el Mar de Dentro hasta la Ponta da Sapata, con parada para nadar en Sancho.',
    },
    description: {
      pt: 'Com transfer de ida e volta, a saída da escuna é feita na Praia do Porto, no período da manhã, e segue em direção às ilhas secundárias que compõem o arquipélago. Depois, vai até a Ponta da Sapata passando por todas as praias do Mar de Dentro: Cachorro, Meio, Conceição, Boldró, Americano, Bode, Cacimba do Padre, Porcos, Sancho e Baía dos Golfinhos, além do famoso Rugido do Leão. A parada para banho, de 40 minutos, é na Praia do Sancho. O passeio dura cerca de 4 horas e no percurso existe grande possibilidade de ver os golfinhos. Não é permitido levar bebidas; há bebidas à venda na embarcação.',
      en: 'With round-trip transfer, the schooner leaves from Porto Beach in the morning and heads to the secondary islands of the archipelago. Then it goes to Ponta da Sapata, passing every Mar de Dentro beach: Cachorro, Meio, Conceição, Boldró, Americano, Bode, Cacimba do Padre, Porcos, Sancho and Baía dos Golfinhos, plus the famous Rugido do Leão. The 40-minute swimming stop is at Sancho Beach. The trip lasts about 4 hours and there is a great chance of seeing dolphins along the way. Bringing drinks is not allowed; drinks are sold on board.',
      es: 'Con traslado de ida y vuelta, la goleta sale de la Praia do Porto por la mañana y se dirige a las islas secundarias que forman el archipiélago. Después va hasta la Ponta da Sapata pasando por todas las playas del Mar de Dentro: Cachorro, Meio, Conceição, Boldró, Americano, Bode, Cacimba do Padre, Porcos, Sancho y Baía dos Golfinhos, además del famoso Rugido do Leão. La parada para nadar, de 40 minutos, es en la Praia do Sancho. El paseo dura unas 4 horas y en el recorrido hay grandes posibilidades de ver delfines. No está permitido llevar bebidas; hay bebidas a la venta en la embarcación.',
    },
    details: {
      pt: ['7h40 às 12h', '40 min no Sancho', 'R$ 250 por pessoa'],
      en: ['7:40 am to 12 pm', '40 min at Sancho', 'R$ 250 per person'],
      es: ['7:40 a 12 h', '40 min en Sancho', 'R$ 250 por persona'],
    },
    image: barcoTradicional,
    imagePosition: 'center 75%',
    heroImage: barcoTradicional,
    heroImagePosition: 'center 75%',
    badge: {
      pt: 'Chance de ver golfinhos',
      en: 'Chance to see dolphins',
      es: 'Chance de ver delfines',
    },
    highlights: [
      {
        icon: 'wave',
        title: { pt: 'Banho no Sancho', en: 'Swim at Sancho', es: 'Baño en Sancho' },
        text: {
          pt: '40 minutos de parada em uma das praias mais bonitas do mundo.',
          en: 'A 40-minute stop at one of the most beautiful beaches in the world.',
          es: '40 minutos de parada en una de las playas más lindas del mundo.',
        },
      },
      {
        icon: 'compass',
        title: {
          pt: 'Todo o Mar de Dentro',
          en: 'The whole Mar de Dentro',
          es: 'Todo el Mar de Dentro',
        },
        text: {
          pt: 'Das ilhas secundárias até a Ponta da Sapata, passando pelo Rugido do Leão.',
          en: 'From the secondary islands to Ponta da Sapata, passing Rugido do Leão.',
          es: 'De las islas secundarias hasta la Ponta da Sapata, pasando por el Rugido do Leão.',
        },
      },
      {
        icon: 'heart',
        title: { pt: 'Golfinhos', en: 'Dolphins', es: 'Delfines' },
        text: {
          pt: 'Grande possibilidade de ver os golfinhos no percurso.',
          en: 'A great chance of seeing dolphins along the way.',
          es: 'Gran posibilidad de ver delfines en el recorrido.',
        },
      },
      {
        icon: 'mapPin',
        title: { pt: 'Transfer incluso', en: 'Transfer included', es: 'Traslado incluido' },
        text: {
          pt: 'Ida e volta da pousada até a Praia do Porto.',
          en: 'Round trip between your inn and Porto Beach.',
          es: 'Ida y vuelta entre la posada y la Praia do Porto.',
        },
      },
    ],
    options: [
      {
        id: 'escuna',
        title: { pt: 'Passeio de escuna', en: 'Schooner trip', es: 'Paseo en goleta' },
        summary: {
          pt: 'Manhã a bordo da escuna, saindo da Praia do Porto, com cerca de 4 horas de passeio.',
          en: 'A morning on board the schooner from Porto Beach, about 4 hours long.',
          es: 'Una mañana a bordo de la goleta desde la Praia do Porto, de unas 4 horas.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.schedule,
            value: { pt: '7h40 às 12h', en: '7:40 am to 12 pm', es: '7:40 a 12 h' },
          },
          {
            icon: 'mapPin',
            label: factLabels.transfer,
            value: {
              pt: 'Ida e volta da pousada',
              en: 'Round trip from your inn',
              es: 'Ida y vuelta desde la posada',
            },
          },
        ],
        includes: {
          pt: [
            '40 min de banho no Sancho',
            'Bebidas à venda a bordo (não é permitido levar)',
            'Cartão do Parque Nacional obrigatório',
          ],
          en: [
            '40-min swim at Sancho',
            'Drinks sold on board (bringing your own is not allowed)',
            'National Park card required',
          ],
          es: [
            '40 min de baño en Sancho',
            'Bebidas a la venta a bordo (no se permite llevar)',
            'Tarjeta del Parque Nacional obligatoria',
          ],
        },
        photos: [barcoTradicional, canoaGolfinhos],
        priceUnit: 'perPerson',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 250 }],
      },
    ],
    gallery: [barcoTradicional, canoaGolfinhos],
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
