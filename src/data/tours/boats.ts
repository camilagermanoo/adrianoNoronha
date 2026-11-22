import descaradinha from '../../assets/tours/lanchas/descaradinha.webp?responsive'
import fishHunter from '../../assets/tours/lanchas/fish-hunter.webp?responsive'
import iateInvictusFly from '../../assets/tours/lanchas/iate-invictus-fly.webp?responsive'
import invictusFlybridge from '../../assets/tours/lanchas/invictus-flybridge.webp?responsive'
import invictusMesa from '../../assets/tours/lanchas/invictus-mesa-morro-do-pico.webp?responsive'
import italianaFerretti from '../../assets/tours/lanchas/italiana-ferretti.webp?responsive'
import myLove from '../../assets/tours/lanchas/my-love.webp?responsive'
import trovaoDosMares from '../../assets/tours/lanchas/trovao-dos-mares.webp?responsive'
import vision from '../../assets/tours/lanchas/vision.webp?responsive'
import vmMorroDoPico from '../../assets/tours/lanchas/victa-maris/morro-do-pico.webp?responsive'
import vmAereaPraia from '../../assets/tours/lanchas/victa-maris/aerea-praia.webp?responsive'
import vmAereaMar from '../../assets/tours/lanchas/victa-maris/aerea-mar-aberto.webp?responsive'
import vmSalao from '../../assets/tours/lanchas/victa-maris/salao.webp?responsive'
import vmSalaoCozinha from '../../assets/tours/lanchas/victa-maris/salao-cozinha.webp?responsive'
import vmSalaoDoisIrmaos from '../../assets/tours/lanchas/victa-maris/salao-dois-irmaos.webp?responsive'
import vmSalaoLateral from '../../assets/tours/lanchas/victa-maris/salao-lateral.webp?responsive'
import vmCabine from '../../assets/tours/lanchas/victa-maris/cabine.webp?responsive'
import vmCeviche from '../../assets/tours/lanchas/victa-maris/ceviche.webp?responsive'
import vmFrutas from '../../assets/tours/lanchas/victa-maris/frutas.webp?responsive'
import vmCevichePraia from '../../assets/tours/lanchas/victa-maris/ceviche-praia.webp?responsive'
import vmLagosta from '../../assets/tours/lanchas/victa-maris/lagosta.webp?responsive'
import vmDeckNoite from '../../assets/tours/lanchas/victa-maris/deck-noite.webp?responsive'
import vmChurrasco from '../../assets/tours/lanchas/victa-maris/churrasco.webp?responsive'
import vmSobremesa from '../../assets/tours/lanchas/victa-maris/sobremesa-por-do-sol.webp?responsive'
import type { Localized } from '../../i18n/locales'
import { locales } from '../../i18n/locales'
import type { Picture } from 'vite-imagetools'
import type { Tour, TourFact, TourOption, TourPolicy } from '../../types'
import { factLabels } from './labels'

interface BoatConfig {
  option: TourOption
  summary?: Localized
  transferIncluded?: boolean
  showSchedule?: boolean
  gallery?: Picture[]
  policies?: TourPolicy[]
}

const dolphinsBadge: Localized = {
  pt: 'Chance de ver golfinhos',
  en: 'Chance to see dolphins',
  es: 'Chance de ver delfines',
}

const scheduleValue: Localized = {
  pt: '8h30 às 12h30 ou 14h30 às 18h30',
  en: '8:30 am–12:30 pm or 2:30–6:30 pm',
  es: '8:30–12:30 h o 14:30–18:30 h',
}

const scheduleFact: TourFact = {
  icon: 'calendar',
  label: factLabels.schedule,
  value: scheduleValue,
}

const transferValue = (included: boolean): Localized =>
  included
    ? { pt: 'Incluso', en: 'Included', es: 'Incluido' }
    : { pt: 'Não incluso', en: 'Not included', es: 'No incluido' }

const transferDetail = (included: boolean): Localized =>
  included
    ? { pt: 'Transfer incluso', en: 'Transfer included', es: 'Traslado incluido' }
    : { pt: 'Transfer não incluso', en: 'Transfer not included', es: 'Traslado no incluido' }

const bookingNote: Localized = {
  pt: 'Fale com o Adriano para saber disponibilidade e valores.',
  en: 'Message Adriano for availability and prices.',
  es: 'Habla con Adriano para saber disponibilidad y precios.',
}

const schedulePolicy = {
  icon: 'clock' as const,
  title: { pt: 'Horários', en: 'Times', es: 'Horarios' },
  items: {
    pt: ['Manhã: das 8h30 às 12h30', 'Tarde: das 14h30 às 18h30, com o pôr do sol'],
    en: ['Morning: 8:30 am to 12:30 pm', 'Afternoon: 2:30 to 6:30 pm, with the sunset'],
    es: ['Mañana: de 8:30 a 12:30 h', 'Tarde: de 14:30 a 18:30 h, con el atardecer'],
  },
}

function factValue(option: TourOption, label: Localized) {
  return option.facts.find((fact) => fact.label.pt === label.pt)?.value
}

function boatTour({
  option,
  summary,
  transferIncluded = false,
  showSchedule = true,
  gallery,
  policies = [],
}: BoatConfig): Tour {
  const transferFact: TourFact = {
    icon: 'mapPin',
    label: factLabels.transfer,
    value: transferValue(transferIncluded),
  }
  const facts = [...option.facts, ...(showSchedule ? [scheduleFact] : []), transferFact]
  const highlights = [
    factValue(option, factLabels.capacity),
    factValue(option, factLabels.duration),
  ]
  const details = Object.fromEntries(
    locales.map((locale) => [
      locale,
      [
        ...highlights.flatMap((value) => (value ? [value[locale]] : [])),
        transferDetail(transferIncluded)[locale],
      ],
    ]),
  ) as Localized<string[]>
  const description = Object.fromEntries(
    locales.map((locale) => [locale, `${option.summary[locale]} ${bookingNote[locale]}`]),
  ) as Localized

  return {
    id: `lancha-${option.id}`,
    category: 'Lancha',
    title: option.title,
    summary: summary ?? option.summary,
    description: summary ? option.summary : description,
    details,
    image: option.photos[0],
    badge: dolphinsBadge,
    options: [{ ...option, summary: summary ?? option.summary, facts }],
    policies: [...(showSchedule ? [schedulePolicy] : []), ...policies],
    gallery: gallery && gallery.length > 1 ? gallery : undefined,
  }
}

export const boatTours: Tour[] = [
  boatTour({
    option: {
      id: 'invictus-fly',
      title: {
        pt: 'Lancha NX 50 Invictus Fly',
        en: 'NX 50 Invictus Fly boat',
        es: 'Lancha NX 50 Invictus Fly',
      },
      summary: {
        pt: 'Esse passeio dispensa comentários! A lancha vai de uma ponta a outra da ilha, com parada para banho e mergulho na Baía do Sancho, a praia mais bonita do mundo. No caminho, mergulhamos com tubarões, vemos golfinhos e contemplamos o fundo do mar de Fernando de Noronha. E o festival gastronômico a bordo é ainda melhor.',
        en: 'This trip speaks for itself! The boat goes from one end of the island to the other, with a stop to swim and snorkel at Baía do Sancho, the most beautiful beach in the world. Along the way, we swim with sharks, see dolphins and take in the seabed of Fernando de Noronha. And the food festival on board is even better.',
        es: '¡Este paseo no necesita comentarios! La lancha va de una punta a otra de la isla, con parada para nadar y bucear en la Baía do Sancho, la playa más linda del mundo. En el camino, buceamos con tiburones, vemos delfines y contemplamos el fondo del mar de Fernando de Noronha. Y el festival gastronómico a bordo es todavía mejor.',
      },
      facts: [
        {
          icon: 'clock',
          label: factLabels.duration,
          value: { pt: '4 horas', en: '4 hours', es: '4 horas' },
        },
        {
          icon: 'users',
          label: factLabels.capacity,
          value: { pt: 'Até 20 pessoas', en: 'Up to 20 people', es: 'Hasta 20 personas' },
        },
        {
          icon: 'compass',
          label: { pt: 'Parada', en: 'Stop', es: 'Parada' },
          value: { pt: 'Baía do Sancho', en: 'Baía do Sancho', es: 'Baía do Sancho' },
        },
        {
          icon: 'wave',
          label: { pt: 'No mar', en: 'At sea', es: 'En el mar' },
          value: {
            pt: 'Tubarões e golfinhos',
            en: 'Sharks and dolphins',
            es: 'Tiburones y delfines',
          },
        },
        {
          icon: 'mask',
          label: { pt: 'Snorkel', en: 'Snorkel', es: 'Snorkel' },
          value: { pt: 'Equipamento incluso', en: 'Gear included', es: 'Equipo incluido' },
        },
        {
          icon: 'alert',
          label: { pt: 'Planasub', en: 'Planasub', es: 'Planasub' },
          value: { pt: 'Não incluso', en: 'Not included', es: 'No incluido' },
        },
      ],
      includes: {
        pt: [
          'De uma ponta a outra da ilha',
          'Parada para banho e mergulho na Baía do Sancho',
          'Equipamento de snorkel',
          'Festival gastronômico: batata-frita, pipoca, sashimi, ceviche, peixe na brasa, peixe na mostarda, carpaccio, picanha, linguiça toscana, pão na brasa, bruschetta, frios, frutas e chocolate',
          'Penne ao molho de queijo parmesão ou de tomate fresco com manjericão, com medalhões de cavala grelhados ou tiras de picanha grelhada',
          'Água e gelo, com cooler a bordo; outras bebidas podem ser pedidas à equipe',
        ],
        en: [
          'From one end of the island to the other',
          'Swimming and snorkeling stop at Baía do Sancho',
          'Snorkel gear',
          'Food festival: fries, popcorn, sashimi, ceviche, grilled fish, fish in mustard sauce, carpaccio, picanha, Tuscan sausage, grilled bread, bruschetta, cold cuts, fruit and chocolate',
          'Penne with parmesan or fresh tomato and basil sauce, with grilled mackerel medallions or grilled picanha strips',
          'Water and ice, with a cooler on board; other drinks can be requested from the crew',
        ],
        es: [
          'De una punta a otra de la isla',
          'Parada para nadar y bucear en la Baía do Sancho',
          'Equipo de snorkel',
          'Festival gastronómico: papas fritas, palomitas, sashimi, ceviche, pescado a la brasa, pescado a la mostaza, carpaccio, picaña, longaniza toscana, pan a la brasa, bruschetta, fiambres, frutas y chocolate',
          'Penne con salsa de queso parmesano o de tomate fresco con albahaca, con medallones de caballa a la parrilla o tiras de picaña a la parrilla',
          'Agua y hielo, con cooler a bordo; otras bebidas se pueden pedir al equipo',
        ],
      },
      photos: [iateInvictusFly, invictusFlybridge, invictusMesa],
      priceUnit: 'total',
      prices: [
        {
          label: { pt: 'Até 6 pessoas', en: 'Up to 6 people', es: 'Hasta 6 personas' },
          amount: 17000,
        },
      ],
      priceNote: {
        pt: 'Acima de 6 pessoas, R$ 600 por pessoa extra, até 20 pessoas. O planasub não está incluso. Hora extra sob consulta e sujeita à disponibilidade do barco.',
        en: 'Above 6 people, R$ 600 per extra person, up to 20 people. Planasub (towed snorkeling) is not included. Extra time on request and subject to the boat’s availability.',
        es: 'Más de 6 personas, R$ 600 por persona adicional, hasta 20 personas. El planasub no está incluido. Hora extra a consultar y sujeta a la disponibilidad del barco.',
      },
    },
    summary: {
      pt: 'De uma ponta a outra da ilha, com parada na Baía do Sancho e festival gastronômico a bordo.',
      en: 'From one end of the island to the other, with a stop at Baía do Sancho and a food festival on board.',
      es: 'De una punta a otra de la isla, con parada en la Baía do Sancho y festival gastronómico a bordo.',
    },
    transferIncluded: true,
    gallery: [iateInvictusFly, invictusFlybridge, invictusMesa],
  }),
  boatTour({
    option: {
      id: 'victa-maris-50',
      title: {
        pt: 'Lancha Victa Maris 50',
        en: 'Victa Maris 50 boat',
        es: 'Lancha Victa Maris 50',
      },
      summary: {
        pt: 'Lancha com ar-condicionado, internet via satélite e gastronomia premium a bordo, da entrada à sobremesa, com o cenário incomparável de Fernando de Noronha.',
        en: 'A boat with air conditioning, satellite internet and premium dining on board, from starter to dessert, with the unmatched scenery of Fernando de Noronha.',
        es: 'Lancha con aire acondicionado, internet satelital y gastronomía premium a bordo, de la entrada al postre, con el paisaje incomparable de Fernando de Noronha.',
      },
      facts: [
        {
          icon: 'clock',
          label: factLabels.duration,
          value: { pt: '4 horas', en: '4 hours', es: '4 horas' },
        },
        {
          icon: 'users',
          label: factLabels.capacity,
          value: { pt: 'Até 27 pessoas', en: 'Up to 27 people', es: 'Hasta 27 personas' },
        },
        {
          icon: 'mask',
          label: { pt: 'Snorkel', en: 'Snorkel', es: 'Snorkel' },
          value: { pt: 'Equipamento incluso', en: 'Gear included', es: 'Equipo incluido' },
        },
        {
          icon: 'star',
          label: { pt: 'Gastronomia', en: 'Dining', es: 'Gastronomía' },
          value: {
            pt: 'Ceviche, churrasco premium, lagosta grelhada e cocada',
            en: 'Ceviche, premium barbecue, grilled lobster and cocada',
            es: 'Ceviche, parrillada premium, langosta a la parrilla y cocada',
          },
        },
      ],
      includes: {
        pt: [
          'Tripulação experiente e atendimento personalizado',
          'Ar-condicionado em todos os ambientes internos',
          'Internet via satélite e TV a cabo',
          'Tapetes marítimos e boias',
          'Equipamento de snorkel',
          'Amplo espaço interno e externo',
          'Privacidade, conforto e segurança',
          'Serviço contínuo de alimentos e bebidas',
        ],
        en: [
          'Experienced crew and personalized service',
          'Air conditioning in every indoor area',
          'Satellite internet and cable TV',
          'Floating mats and pool floats',
          'Snorkel gear',
          'Plenty of indoor and outdoor space',
          'Privacy, comfort and safety',
          'Continuous food and drink service',
        ],
        es: [
          'Tripulación experimentada y atención personalizada',
          'Aire acondicionado en todos los ambientes internos',
          'Internet satelital y TV por cable',
          'Alfombras flotantes y boyas',
          'Equipo de snorkel',
          'Amplio espacio interno y externo',
          'Privacidad, comodidad y seguridad',
          'Servicio continuo de comidas y bebidas',
        ],
      },
      photos: [vmMorroDoPico, vmAereaPraia, vmSalao, vmLagosta, vmChurrasco, vmDeckNoite],
      priceUnit: 'total',
      prices: [
        {
          label: { pt: 'Casal (2 pessoas)', en: 'Couple (2 people)', es: 'Pareja (2 personas)' },
          amount: 5000,
        },
        { label: { pt: '4 pessoas', en: '4 people', es: '4 personas' }, amount: 10000 },
        { label: { pt: '6 pessoas', en: '6 people', es: '6 personas' }, amount: 15000 },
        { label: { pt: '8 pessoas', en: '8 people', es: '8 personas' }, amount: 20000 },
      ],
      priceNote: {
        pt: 'Experiência a R$ 2.500 por pessoa. A partir da 9ª pessoa, + R$ 2.500 por pessoa, até 27 pessoas.',
        en: 'Experience at R$ 2,500 per person. From the 9th person on, + R$ 2,500 per person, up to 27 people.',
        es: 'Experiencia a R$ 2.500 por persona. A partir de la 9.ª persona, + R$ 2.500 por persona, hasta 27 personas.',
      },
    },
    summary: {
      pt: 'Ar-condicionado, internet via satélite e gastronomia premium a bordo, com lagosta grelhada.',
      en: 'Air conditioning, satellite internet and premium dining on board, with grilled lobster.',
      es: 'Aire acondicionado, internet satelital y gastronomía premium a bordo, con langosta a la parrilla.',
    },
    gallery: [
      vmMorroDoPico,
      vmAereaPraia,
      vmAereaMar,
      vmSalao,
      vmSalaoCozinha,
      vmSalaoDoisIrmaos,
      vmSalaoLateral,
      vmCabine,
      vmCevichePraia,
      vmCeviche,
      vmFrutas,
      vmChurrasco,
      vmLagosta,
      vmSobremesa,
      vmDeckNoite,
    ],
    policies: [
      {
        icon: 'star',
        title: {
          pt: 'Gastronomia premium',
          en: 'Premium dining',
          es: 'Gastronomía premium',
        },
        items: {
          pt: [
            'Entrada: ceviche fresco e seleção de frutas tropicais',
            'Churrasco premium: picanha argentina, queijo coalho, linguiça calabresa e pão de alho',
            'Prato principal: lagosta grelhada',
            'Sobremesa: cocada artesanal',
          ],
          en: [
            'Starter: fresh ceviche and a selection of tropical fruit',
            'Premium barbecue: Argentine picanha, grilled coalho cheese, calabresa sausage and garlic bread',
            'Main course: grilled lobster',
            'Dessert: homemade cocada',
          ],
          es: [
            'Entrada: ceviche fresco y selección de frutas tropicales',
            'Parrillada premium: picaña argentina, queso coalho, longaniza calabresa y pan de ajo',
            'Plato principal: langosta a la parrilla',
            'Postre: cocada artesanal',
          ],
        },
      },
      {
        icon: 'check',
        title: { pt: 'Bebidas a bordo', en: 'Drinks on board', es: 'Bebidas a bordo' },
        items: {
          pt: [
            'Energético Red Bull: tradicional, tropical, melancia e sugar free',
            'Destilados: Absolut, Chivas Regal 12, Black Label 12 e Beefeater London',
            'Vinhos e espumantes: Freixenet Rosé, Freixenet Pinot Grigio, Cabriz Sauvignon Blanc e Chandon Brut',
            'Licores: Licor 43, Ballena, Aperol e Fireball',
            'Drinks prontos: Smirnoff Ice, Skol Beats GT e Skol Beats Senses',
            'Água com e sem gás, água tônica, Coca-Cola, Coca-Cola Zero, Fanta Uva, Fanta Laranja, Guaraná Antarctica e Guaraná Antarctica Zero',
            'Todo o gelo necessário está incluído',
          ],
          en: [
            'Red Bull energy drink: original, tropical, watermelon and sugar free',
            'Spirits: Absolut, Chivas Regal 12, Black Label 12 and Beefeater London',
            'Wines and sparkling wines: Freixenet Rosé, Freixenet Pinot Grigio, Cabriz Sauvignon Blanc and Chandon Brut',
            'Liqueurs: Licor 43, Ballena, Aperol and Fireball',
            'Ready-made drinks: Smirnoff Ice, Skol Beats GT and Skol Beats Senses',
            'Still and sparkling water, tonic water, Coca-Cola, Coca-Cola Zero, Fanta Grape, Fanta Orange, Guaraná Antarctica and Guaraná Antarctica Zero',
            'All the ice you need is included',
          ],
          es: [
            'Energizante Red Bull: tradicional, tropical, sandía y sugar free',
            'Destilados: Absolut, Chivas Regal 12, Black Label 12 y Beefeater London',
            'Vinos y espumantes: Freixenet Rosé, Freixenet Pinot Grigio, Cabriz Sauvignon Blanc y Chandon Brut',
            'Licores: Licor 43, Ballena, Aperol y Fireball',
            'Bebidas listas: Smirnoff Ice, Skol Beats GT y Skol Beats Senses',
            'Agua con y sin gas, agua tónica, Coca-Cola, Coca-Cola Zero, Fanta Uva, Fanta Naranja, Guaraná Antarctica y Guaraná Antarctica Zero',
            'Todo el hielo necesario está incluido',
          ],
        },
      },
    ],
  }),
  boatTour({
    option: {
      id: 'descaradinha',
      title: { pt: 'Lancha Descaradinha', en: 'Descaradinha boat', es: 'Lancha Descaradinha' },
      summary: {
        pt: 'Lancha Dawal de 41 pés com estrutura completa, ideal para passeios e eventos personalizados.',
        en: 'A fully equipped 41-foot Dawal boat, ideal for trips and custom events.',
        es: 'Lancha Dawal de 41 pies con estructura completa, ideal para paseos y eventos personalizados.',
      },
      facts: [
        {
          icon: 'users',
          label: factLabels.capacity,
          value: { pt: 'Até 20 pessoas', en: 'Up to 20 people', es: 'Hasta 20 personas' },
        },
      ],
      includes: {
        pt: [
          'Cabine, cozinha, banheiro e flybridge',
          'Som JBL e carregador de celular',
          'Serviço de bordo',
          'Pet friendly',
        ],
        en: [
          'Cabin, kitchen, bathroom and flybridge',
          'JBL sound system and phone charger',
          'Onboard service',
          'Pet friendly',
        ],
        es: [
          'Cabina, cocina, baño y flybridge',
          'Sonido JBL y cargador de celular',
          'Servicio a bordo',
          'Pet friendly',
        ],
      },
      photos: [descaradinha],
    },
  }),
  boatTour({
    option: {
      id: 'italiana-ferretti',
      title: {
        pt: 'Lancha Italiana Ferretti',
        en: 'Italian Ferretti boat',
        es: 'Lancha Italiana Ferretti',
      },
      summary: {
        pt: 'Ferretti de 43 pés com dois dormitórios, perfeita para quem busca conforto e exclusividade.',
        en: 'A 43-foot Ferretti with two cabins, perfect for comfort and privacy.',
        es: 'Ferretti de 43 pies con dos dormitorios, perfecta para quien busca comodidad y exclusividad.',
      },
      facts: [
        {
          icon: 'users',
          label: factLabels.capacity,
          value: { pt: 'Até 15 pessoas', en: 'Up to 15 people', es: 'Hasta 15 personas' },
        },
        {
          icon: 'clock',
          label: factLabels.duration,
          value: { pt: '4 ou 8 horas', en: '4 or 8 hours', es: '4 u 8 horas' },
        },
      ],
      includes: {
        pt: [
          'Parada para snorkel',
          'Stand up paddle e pescaria recreativa',
          'Churrasco a bordo',
          'Dois banheiros, sala, cozinha, varanda e flybridge',
        ],
        en: [
          'Snorkeling stop',
          'Stand up paddle and recreational fishing',
          'Barbecue on board',
          'Two bathrooms, lounge, kitchen, deck and flybridge',
        ],
        es: [
          'Parada para snorkel',
          'Stand up paddle y pesca recreativa',
          'Parrillada a bordo',
          'Dos baños, sala, cocina, terraza y flybridge',
        ],
      },
      photos: [italianaFerretti],
    },
  }),
  boatTour({
    option: {
      id: 'my-love',
      title: { pt: 'Lancha My Love', en: 'My Love boat', es: 'Lancha My Love' },
      summary: {
        pt: 'Passeio exclusivo pelas praias do Mar de Dentro, com diversão e churrasco de peixe.',
        en: 'A private trip along the Mar de Dentro beaches, with fun activities and grilled fish.',
        es: 'Paseo exclusivo por las playas del Mar de Dentro, con diversión y parrillada de pescado.',
      },
      facts: [
        {
          icon: 'users',
          label: factLabels.capacity,
          value: { pt: 'Até 30 pessoas', en: 'Up to 30 people', es: 'Hasta 30 personas' },
        },
      ],
      includes: {
        pt: [
          'Paradas para banho e snorkel',
          'Stand up paddle, cooler e caixa de som',
          'Churrasco de peixe com ceviche, salada, pão de alho e frutas',
        ],
        en: [
          'Swimming and snorkeling stops',
          'Stand up paddle, cooler and speaker',
          'Grilled fish with ceviche, salad, garlic bread and fruit',
        ],
        es: [
          'Paradas para nadar y hacer snorkel',
          'Stand up paddle, cooler y parlante',
          'Parrillada de pescado con ceviche, ensalada, pan de ajo y frutas',
        ],
      },
      photos: [myLove],
    },
  }),
  boatTour({
    option: {
      id: 'trovao-dos-mares',
      title: {
        pt: 'Lancha Trovão dos Mares',
        en: 'Trovão dos Mares boat',
        es: 'Lancha Trovão dos Mares',
      },
      summary: {
        pt: 'Lancha de 39 pés para explorar Noronha com conforto, com paradas para banho conforme o mar.',
        en: 'A 39-foot boat to explore Noronha in comfort, with swimming stops depending on the sea.',
        es: 'Lancha de 39 pies para explorar Noronha con comodidad, con paradas para nadar según el mar.',
      },
      facts: [
        {
          icon: 'users',
          label: factLabels.capacity,
          value: { pt: 'Até 10 pessoas', en: 'Up to 10 people', es: 'Hasta 10 personas' },
        },
        {
          icon: 'clock',
          label: factLabels.duration,
          value: { pt: 'Até 4 horas', en: 'Up to 4 hours', es: 'Hasta 4 horas' },
        },
      ],
      includes: {
        pt: ['Cabine e banheiro', 'Proa acolchoada', 'Som via Bluetooth'],
        en: ['Cabin and bathroom', 'Padded bow', 'Bluetooth sound system'],
        es: ['Cabina y baño', 'Proa acolchada', 'Sonido Bluetooth'],
      },
      photos: [trovaoDosMares],
    },
  }),
  boatTour({
    option: {
      id: 'fish-hunter',
      title: {
        pt: 'Fish Hunter: pescaria oceânica',
        en: 'Fish Hunter: ocean fishing',
        es: 'Fish Hunter: pesca oceánica',
      },
      summary: {
        pt: 'Pescaria privativa em alto-mar a bordo de uma Forza 44 com duas suítes.',
        en: 'Private deep-sea fishing on board a Forza 44 with two suites.',
        es: 'Pesca privada en alta mar a bordo de una Forza 44 con dos suites.',
      },
      facts: [],
      includes: {
        pt: [
          'Roteiros no Mar de Dentro, Mar de Fora, Banco Alto Fundo Drina e Sueste/Leste',
          'Lanches, bebidas e cooler com gelo e água',
          'Duas suítes, sala, cozinha e banheiro',
        ],
        en: [
          'Routes in Mar de Dentro, Mar de Fora, Alto Fundo Drina bank and Sueste/Leste',
          'Snacks, drinks and cooler with ice and water',
          'Two suites, lounge, kitchen and bathroom',
        ],
        es: [
          'Rutas en el Mar de Dentro, Mar de Fora, Banco Alto Fundo Drina y Sueste/Leste',
          'Bocadillos, bebidas y cooler con hielo y agua',
          'Dos suites, sala, cocina y baño',
        ],
      },
      photos: [fishHunter],
    },
  }),
  boatTour({
    option: {
      id: 'vision',
      title: { pt: 'Lancha Vision', en: 'Vision boat', es: 'Lancha Vision' },
      summary: {
        pt: 'Passeio rápido de 1 hora pela área de proteção ambiental, Praia da Biboca, naufrágio e Morro São José.',
        en: 'A quick 1-hour ride through the protected area, Biboca Beach, the shipwreck and Morro São José.',
        es: 'Paseo rápido de 1 hora por el área de protección ambiental, la Praia da Biboca, el naufragio y el Morro São José.',
      },
      facts: [
        {
          icon: 'clock',
          label: factLabels.duration,
          value: { pt: '1 hora', en: '1 hour', es: '1 hora' },
        },
      ],
      photos: [vision],
    },
    showSchedule: false,
  }),
]
