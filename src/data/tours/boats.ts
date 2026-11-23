import descaradinhaPico from '../../assets/tours/lanchas/descaradinha/aerea-morro-do-pico.webp?responsive'
import descaradinhaMar from '../../assets/tours/lanchas/descaradinha/aerea-mar-aberto.webp?responsive'
import descaradinhaPeixe from '../../assets/tours/lanchas/descaradinha/peixe.webp?responsive'
import descaradinhaCeviche from '../../assets/tours/lanchas/descaradinha/ceviche.webp?responsive'
import descaradinhaTimao from '../../assets/tours/lanchas/descaradinha/flybridge-timao.webp?responsive'
import fishHunter from '../../assets/tours/lanchas/fish-hunter.webp?responsive'
import iateInvictusFly from '../../assets/tours/lanchas/iate-invictus-fly.webp?responsive'
import invictusFlybridge from '../../assets/tours/lanchas/invictus-flybridge.webp?responsive'
import invictusMesa from '../../assets/tours/lanchas/invictus-mesa-morro-do-pico.webp?responsive'
import invictusSuite from '../../assets/tours/lanchas/invictus-suite.webp?responsive'
import invictusBanheiro from '../../assets/tours/lanchas/invictus-banheiro.webp?responsive'
import ferrettiPico from '../../assets/tours/lanchas/ferretti/morro-do-pico.webp?responsive'
import ferrettiProa from '../../assets/tours/lanchas/ferretti/proa-dois-irmaos.webp?responsive'
import ferrettiSala from '../../assets/tours/lanchas/ferretti/sala.webp?responsive'
import ferrettiCostao from '../../assets/tours/lanchas/ferretti/costao.webp?responsive'
import myLove from '../../assets/tours/lanchas/my-love.webp?responsive'
import trovaoDosMares from '../../assets/tours/lanchas/trovao-dos-mares.webp?responsive'
import transparentePraia from '../../assets/tours/lanchas/transparente/lancha-praia.webp?responsive'
import transparenteGolfinhos from '../../assets/tours/lanchas/transparente/golfinhos-casco.webp?responsive'
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
import vmChurrascoMorro from '../../assets/tours/lanchas/victa-maris/churrasco-morro-do-pico.webp?responsive'
import vmSobremesaTacas from '../../assets/tours/lanchas/victa-maris/sobremesa-tacas.webp?responsive'
import vmLagostaMorro from '../../assets/tours/lanchas/victa-maris/lagosta-morro-do-pico.webp?responsive'
import vmCocada from '../../assets/tours/lanchas/victa-maris/cocada.webp?responsive'
import vmLagostaLaranjas from '../../assets/tours/lanchas/victa-maris/lagosta-laranjas.webp?responsive'
import vmCevichePrato from '../../assets/tours/lanchas/victa-maris/ceviche-prato.webp?responsive'
import amPico from '../../assets/tours/lanchas/amostradinha/morro-do-pico.webp?responsive'
import amFimDeTarde from '../../assets/tours/lanchas/amostradinha/dois-irmaos-fim-de-tarde.webp?responsive'
import amProa from '../../assets/tours/lanchas/amostradinha/proa-dois-irmaos.webp?responsive'
import amFlybridge from '../../assets/tours/lanchas/amostradinha/proa-flybridge.webp?responsive'
import amMesa from '../../assets/tours/lanchas/amostradinha/mesa.webp?responsive'
import amSala from '../../assets/tours/lanchas/amostradinha/sala.webp?responsive'
import amDeck from '../../assets/tours/lanchas/amostradinha/deck.webp?responsive'
import type { Localized } from '../../i18n/locales'
import { locales } from '../../i18n/locales'
import type { Picture } from 'vite-imagetools'
import type { Tour, TourFact, TourOption, TourPolicy } from '../../types'
import { factLabels } from './labels'

interface BoatConfig {
  option: TourOption
  summary?: Localized
  transferIncluded?: boolean
  transferNote?: { value: Localized; detail: Localized }
  showSchedule?: boolean
  gallery?: Picture[]
  policies?: TourPolicy[]
  imagePosition?: string
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

function boatOption({
  option,
  transferIncluded = false,
  transferNote,
  showSchedule = true,
  policies = [],
}: BoatConfig): TourOption {
  const transferFact: TourFact = {
    icon: 'mapPin',
    label: factLabels.transfer,
    value: transferNote?.value ?? transferValue(transferIncluded),
  }
  return {
    ...option,
    facts: [...option.facts, ...(showSchedule ? [scheduleFact] : []), transferFact],
    notes: policies.length > 0 ? policies : undefined,
  }
}

function boatTour({
  option,
  summary,
  transferIncluded = false,
  transferNote,
  showSchedule = true,
  gallery,
  policies = [],
  imagePosition,
}: BoatConfig): Tour {
  const transferFact: TourFact = {
    icon: 'mapPin',
    label: factLabels.transfer,
    value: transferNote?.value ?? transferValue(transferIncluded),
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
        (transferNote?.detail ?? transferDetail(transferIncluded))[locale],
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
    imagePosition,
    heroImagePosition: imagePosition,
    badge: dolphinsBadge,
    options: [{ ...option, summary: summary ?? option.summary, facts }],
    policies: [...(showSchedule ? [schedulePolicy] : []), ...policies],
    gallery: gallery && gallery.length > 1 ? gallery : undefined,
  }
}

const privateBoats: BoatConfig[] = [
  {
    option: {
      id: 'invictus-fly',
      title: {
        pt: 'Lancha NX 50 Invictus Fly',
        en: 'NX 50 Invictus Fly boat',
        es: 'Lancha NX 50 Invictus Fly',
      },
      summary: {
        pt: 'Esse passeio dispensa comentários! A lancha vai de uma ponta a outra da ilha, com parada para banho e mergulho na Baía do Sancho, a praia mais bonita do mundo. No caminho, mergulhamos com tubarões, vemos golfinhos, fazemos planasub e contemplamos o fundo do mar de Fernando de Noronha. E o festival gastronômico a bordo é ainda melhor.',
        en: 'This trip speaks for itself! The boat goes from one end of the island to the other, with a stop to swim and snorkel at Baía do Sancho, the most beautiful beach in the world. Along the way, we swim with sharks, see dolphins, go planasub (towed snorkeling) and take in the seabed of Fernando de Noronha. And the food festival on board is even better.',
        es: '¡Este paseo no necesita comentarios! La lancha va de una punta a otra de la isla, con parada para nadar y bucear en la Baía do Sancho, la playa más linda del mundo. En el camino, buceamos con tiburones, vemos delfines, hacemos planasub y contemplamos el fondo del mar de Fernando de Noronha. Y el festival gastronómico a bordo es todavía mejor.',
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
          icon: 'wave',
          label: { pt: 'Planasub', en: 'Planasub', es: 'Planasub' },
          value: { pt: 'Incluso', en: 'Included', es: 'Incluido' },
        },
      ],
      includes: {
        pt: [
          'De uma ponta a outra da ilha',
          'Parada para banho e mergulho na Baía do Sancho',
          'Equipamento de snorkel',
          'Atividade de planasub',
          'Festival gastronômico: batata-frita, pipoca, sashimi, ceviche, peixe na brasa, peixe na mostarda, carpaccio, picanha, linguiça toscana, pão na brasa, bruschetta, frios, frutas e chocolate',
          'Penne ao molho de queijo parmesão ou de tomate fresco com manjericão, com medalhões de cavala grelhados ou tiras de picanha grelhada',
          'Água e gelo, com cooler a bordo; outras bebidas podem ser pedidas à equipe',
        ],
        en: [
          'From one end of the island to the other',
          'Swimming and snorkeling stop at Baía do Sancho',
          'Snorkel gear',
          'Planasub (towed snorkeling)',
          'Food festival: fries, popcorn, sashimi, ceviche, grilled fish, fish in mustard sauce, carpaccio, picanha, Tuscan sausage, grilled bread, bruschetta, cold cuts, fruit and chocolate',
          'Penne with parmesan or fresh tomato and basil sauce, with grilled mackerel medallions or grilled picanha strips',
          'Water and ice, with a cooler on board; other drinks can be requested from the crew',
        ],
        es: [
          'De una punta a otra de la isla',
          'Parada para nadar y bucear en la Baía do Sancho',
          'Equipo de snorkel',
          'Actividad de planasub',
          'Festival gastronómico: papas fritas, palomitas, sashimi, ceviche, pescado a la brasa, pescado a la mostaza, carpaccio, picaña, longaniza toscana, pan a la brasa, bruschetta, fiambres, frutas y chocolate',
          'Penne con salsa de queso parmesano o de tomate fresco con albahaca, con medallones de caballa a la parrilla o tiras de picaña a la parrilla',
          'Agua y hielo, con cooler a bordo; otras bebidas se pueden pedir al equipo',
        ],
      },
      photos: [iateInvictusFly, invictusFlybridge, invictusMesa, invictusSuite, invictusBanheiro],
      priceUnit: 'total',
      prices: [
        {
          label: { pt: 'Até 6 pessoas', en: 'Up to 6 people', es: 'Hasta 6 personas' },
          amount: 17000,
        },
      ],
      priceNote: {
        pt: 'Acima de 6 pessoas, R$ 600 por pessoa extra, até 20 pessoas. Hora extra sob consulta e sujeita à disponibilidade do barco.',
        en: 'Above 6 people, R$ 600 per extra person, up to 20 people. Extra time on request and subject to the boat’s availability.',
        es: 'Más de 6 personas, R$ 600 por persona adicional, hasta 20 personas. Hora extra a consultar y sujeta a la disponibilidad del barco.',
      },
    },
    summary: {
      pt: 'De uma ponta a outra da ilha, com parada na Baía do Sancho e festival gastronômico a bordo.',
      en: 'From one end of the island to the other, with a stop at Baía do Sancho and a food festival on board.',
      es: 'De una punta a otra de la isla, con parada en la Baía do Sancho y festival gastronómico a bordo.',
    },
    transferIncluded: true,
    transferNote: {
      value: {
        pt: 'Mediante disponibilidade, até 5 pessoas',
        en: 'Subject to availability, up to 5 people',
        es: 'Según disponibilidad, hasta 5 personas',
      },
      detail: {
        pt: 'Transfer mediante disponibilidade',
        en: 'Transfer subject to availability',
        es: 'Traslado según disponibilidad',
      },
    },
    gallery: [iateInvictusFly, invictusFlybridge, invictusMesa, invictusSuite, invictusBanheiro],
  },
  {
    option: {
      id: 'victa-maris-50',
      title: {
        pt: 'Lancha Victa Maris 50',
        en: 'Victa Maris 50 boat',
        es: 'Lancha Victa Maris 50',
      },
      summary: {
        pt: 'Passeio de 4 horas na área da APA, do Morro São José ao Morro Dois Irmãos, em uma lancha com ar-condicionado, internet via satélite e gastronomia premium a bordo, da entrada à sobremesa, com o cenário incomparável de Fernando de Noronha.',
        en: 'A 4-hour trip through the APA area, from Morro São José to Morro Dois Irmãos, on a boat with air conditioning, satellite internet and premium dining on board, from starter to dessert, with the unmatched scenery of Fernando de Noronha.',
        es: 'Paseo de 4 horas por el área de la APA, del Morro São José al Morro Dois Irmãos, en una lancha con aire acondicionado, internet satelital y gastronomía premium a bordo, de la entrada al postre, con el paisaje incomparable de Fernando de Noronha.',
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
          icon: 'compass',
          label: { pt: 'Trajeto', en: 'Route', es: 'Trayecto' },
          value: {
            pt: 'Área da APA, do Morro São José ao Morro Dois Irmãos',
            en: 'APA area, from Morro São José to Morro Dois Irmãos',
            es: 'Área de la APA, del Morro São José al Morro Dois Irmãos',
          },
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
        {
          icon: 'check',
          label: { pt: 'Bebidas', en: 'Drinks', es: 'Bebidas' },
          value: { pt: 'Open bar', en: 'Open bar', es: 'Barra libre' },
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
          'Serviço contínuo de alimentos e bebidas, com open bar',
        ],
        en: [
          'Experienced crew and personalized service',
          'Air conditioning in every indoor area',
          'Satellite internet and cable TV',
          'Floating mats and pool floats',
          'Snorkel gear',
          'Plenty of indoor and outdoor space',
          'Privacy, comfort and safety',
          'Continuous food and drink service, with an open bar',
        ],
        es: [
          'Tripulación experimentada y atención personalizada',
          'Aire acondicionado en todos los ambientes internos',
          'Internet satelital y TV por cable',
          'Alfombras flotantes y boyas',
          'Equipo de snorkel',
          'Amplio espacio interno y externo',
          'Privacidad, comodidad y seguridad',
          'Servicio continuo de comidas y bebidas, con barra libre',
        ],
      },
      photos: [
        vmAereaMar,
        vmMorroDoPico,
        vmAereaPraia,
        vmSalao,
        vmLagostaMorro,
        vmChurrascoMorro,
        vmDeckNoite,
      ],
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
      pt: 'Ar-condicionado, internet via satélite, open bar e gastronomia premium a bordo, com lagosta grelhada.',
      en: 'Air conditioning, satellite internet, an open bar and premium dining on board, with grilled lobster.',
      es: 'Aire acondicionado, internet satelital, barra libre y gastronomía premium a bordo, con langosta a la parrilla.',
    },
    imagePosition: 'center 72%',
    gallery: [
      vmAereaMar,
      vmMorroDoPico,
      vmAereaPraia,
      vmSalao,
      vmSalaoCozinha,
      vmSalaoDoisIrmaos,
      vmSalaoLateral,
      vmCabine,
      vmCevichePraia,
      vmCeviche,
      vmCevichePrato,
      vmFrutas,
      vmChurrascoMorro,
      vmChurrasco,
      vmLagostaMorro,
      vmLagosta,
      vmLagostaLaranjas,
      vmCocada,
      vmSobremesaTacas,
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
        title: {
          pt: 'Open bar a bordo',
          en: 'Open bar on board',
          es: 'Barra libre a bordo',
        },
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
  },
  {
    option: {
      id: 'descaradinha',
      title: { pt: 'Lancha Descaradinha', en: 'Descaradinha boat', es: 'Lancha Descaradinha' },
      summary: {
        pt: 'Conforto e exclusividade em alto-mar! Lancha Dawal de 41 pés com cabine, cozinha, banheiro e flybridge, para um passeio náutico privativo fora da área do parque, com parada para banho e snorkel, atividade de planasub e churrasco de peixe com acompanhamentos a bordo.',
        en: 'Comfort and privacy on the open sea! A 41-foot Dawal boat with cabin, kitchen, bathroom and flybridge, for a private boat trip outside the park area, with a swimming and snorkeling stop, planasub (towed snorkeling) and grilled fish with sides on board.',
        es: '¡Comodidad y exclusividad en alta mar! Lancha Dawal de 41 pies con cabina, cocina, baño y flybridge, para un paseo náutico privado fuera del área del parque, con parada para nadar y hacer snorkel, actividad de planasub y parrillada de pescado con acompañamientos a bordo.',
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
          label: { pt: 'Trajeto', en: 'Route', es: 'Trayecto' },
          value: {
            pt: 'Fora da área do parque',
            en: 'Outside the park area',
            es: 'Fuera del área del parque',
          },
        },
        {
          icon: 'mask',
          label: { pt: 'Equipamento de snorkel', en: 'Snorkel gear', es: 'Equipo de snorkel' },
          value: { pt: 'Não incluso', en: 'Not included', es: 'No incluido' },
        },
        {
          icon: 'alert',
          label: { pt: 'Bebidas', en: 'Drinks', es: 'Bebidas' },
          value: { pt: 'Não inclusas', en: 'Not included', es: 'No incluidas' },
        },
      ],
      includes: {
        pt: [
          'Passeio náutico fora da área do parque',
          'Parada para banho e snorkel',
          'Churrasco de peixe e acompanhamentos',
          'Atividade de planasub',
          'Cooler e gelo',
          'Cabine, cozinha, banheiro e flybridge',
          'Som JBL e carregador de celular',
          'Serviço de bordo',
          'Pet friendly',
        ],
        en: [
          'Boat trip outside the park area',
          'Swimming and snorkeling stop',
          'Grilled fish with sides',
          'Planasub (towed snorkeling)',
          'Cooler and ice',
          'Cabin, kitchen, bathroom and flybridge',
          'JBL sound system and phone charger',
          'Onboard service',
          'Pet friendly',
        ],
        es: [
          'Paseo náutico fuera del área del parque',
          'Parada para nadar y hacer snorkel',
          'Parrillada de pescado y acompañamientos',
          'Actividad de planasub',
          'Cooler y hielo',
          'Cabina, cocina, baño y flybridge',
          'Sonido JBL y cargador de celular',
          'Servicio a bordo',
          'Pet friendly',
        ],
      },
      photos: [
        descaradinhaMar,
        descaradinhaPico,
        descaradinhaTimao,
        descaradinhaPeixe,
        descaradinhaCeviche,
      ],
      priceUnit: 'total',
      prices: [
        { label: { pt: '2 pessoas', en: '2 people', es: '2 personas' }, amount: 2500 },
        { label: { pt: '3 pessoas', en: '3 people', es: '3 personas' }, amount: 2850 },
        { label: { pt: '4 pessoas', en: '4 people', es: '4 personas' }, amount: 3200 },
        { label: { pt: '5 pessoas', en: '5 people', es: '5 personas' }, amount: 3500 },
        {
          label: {
            pt: 'Cada pessoa adicional',
            en: 'Each extra person',
            es: 'Cada persona adicional',
          },
          amount: 350,
          unit: 'perPerson',
        },
      ],
      priceNote: {
        pt: 'Máximo de 20 pessoas.',
        en: 'Maximum of 20 people.',
        es: 'Máximo de 20 personas.',
      },
    },
    summary: {
      pt: 'Dawal de 41 pés com flybridge, planasub e churrasco de peixe, para até 20 pessoas.',
      en: 'A 41-foot Dawal with flybridge, planasub and grilled fish, for up to 20 people.',
      es: 'Dawal de 41 pies con flybridge, planasub y parrillada de pescado, para hasta 20 personas.',
    },
    gallery: [
      descaradinhaMar,
      descaradinhaPico,
      descaradinhaTimao,
      descaradinhaPeixe,
      descaradinhaCeviche,
    ],
    imagePosition: 'center 55%',
    policies: [
      {
        icon: 'alert',
        title: { pt: 'Não incluso', en: 'Not included', es: 'No incluido' },
        items: {
          pt: ['Transfer', 'Equipamento de snorkel', 'Bebidas'],
          en: ['Transfer', 'Snorkel gear', 'Drinks'],
          es: ['Traslado', 'Equipo de snorkel', 'Bebidas'],
        },
      },
    ],
  },
  {
    option: {
      id: 'italiana-ferretti',
      title: {
        pt: 'Lancha Italiana Ferretti 43',
        en: 'Italian Ferretti 43 boat',
        es: 'Lancha Italiana Ferretti 43',
      },
      summary: {
        pt: 'Conforto, exclusividade e a melhor experiência em Noronha! Lancha privativa italiana Ferretti de 43 pés, com dois dormitórios, dois banheiros, sala de estar, cozinha, varanda, som, TV LCD, proa acolchoada king size e flybridge no segundo andar. O passeio é na área da APA, do Morro São José ao Morro Dois Irmãos, com parada para snorkeling, planasub, pescaria recreativa e churrasco de peixe a bordo.',
        en: 'Comfort, privacy and the best experience in Noronha! A private 43-foot Italian Ferretti boat with two cabins, two bathrooms, a lounge, kitchen, deck, sound system, LCD TV, a king-size padded bow and a flybridge on the upper deck. The trip runs through the APA area, from Morro São José to Morro Dois Irmãos, with a snorkeling stop, planasub, recreational fishing and grilled fish on board.',
        es: '¡Comodidad, exclusividad y la mejor experiencia en Noronha! Lancha privada italiana Ferretti de 43 pies, con dos dormitorios, dos baños, sala de estar, cocina, terraza, sonido, TV LCD, proa acolchada king size y flybridge en el segundo piso. El paseo es por el área de la APA, del Morro São José al Morro Dois Irmãos, con parada para snorkel, planasub, pesca recreativa y parrillada de pescado a bordo.',
      },
      facts: [
        {
          icon: 'clock',
          label: factLabels.duration,
          value: { pt: '4 ou 8 horas', en: '4 or 8 hours', es: '4 u 8 horas' },
        },
        {
          icon: 'users',
          label: factLabels.capacity,
          value: {
            pt: '15 clientes + 2 tripulantes',
            en: '15 guests + 2 crew',
            es: '15 clientes + 2 tripulantes',
          },
        },
        {
          icon: 'compass',
          label: { pt: 'Trajeto', en: 'Route', es: 'Trayecto' },
          value: {
            pt: 'Área da APA, do Morro São José ao Morro Dois Irmãos',
            en: 'APA area, from Morro São José to Morro Dois Irmãos',
            es: 'Área de la APA, del Morro São José al Morro Dois Irmãos',
          },
        },
        {
          icon: 'mapPin',
          label: { pt: 'Encontro', en: 'Meeting point', es: 'Encuentro' },
          value: { pt: 'Píer do Porto', en: 'Porto pier', es: 'Muelle del Porto' },
        },
        {
          icon: 'mask',
          label: { pt: 'Máscara e snorkel', en: 'Mask and snorkel', es: 'Máscara y snorkel' },
          value: { pt: 'Não inclusos', en: 'Not included', es: 'No incluidos' },
        },
        {
          icon: 'alert',
          label: { pt: 'Bebidas', en: 'Drinks', es: 'Bebidas' },
          value: { pt: 'Leve a sua', en: 'Bring your own', es: 'Lleva la tuya' },
        },
      ],
      includes: {
        pt: [
          'Passeio náutico',
          'Parada para snorkeling',
          'Atividade de planasub',
          'Churrasco de peixe, salada, pão de alho, fruta e linguiça toscana',
          'Cooler e gelo',
          'Pescaria recreativa',
        ],
        en: [
          'Boat trip',
          'Snorkeling stop',
          'Planasub (towed snorkeling)',
          'Grilled fish, salad, garlic bread, fruit and Tuscan sausage',
          'Cooler and ice',
          'Recreational fishing',
        ],
        es: [
          'Paseo náutico',
          'Parada para snorkel',
          'Actividad de planasub',
          'Parrillada de pescado, ensalada, pan de ajo, fruta y longaniza toscana',
          'Cooler y hielo',
          'Pesca recreativa',
        ],
      },
      photos: [ferrettiPico, ferrettiProa, ferrettiSala, ferrettiCostao],
      priceUnit: 'total',
      prices: [
        {
          label: { pt: 'Até 2 pessoas', en: 'Up to 2 people', es: 'Hasta 2 personas' },
          amount: 3000,
        },
        {
          label: { pt: 'Até 3 pessoas', en: 'Up to 3 people', es: 'Hasta 3 personas' },
          amount: 3300,
        },
        {
          label: { pt: 'Até 4 pessoas', en: 'Up to 4 people', es: 'Hasta 4 personas' },
          amount: 3600,
        },
        {
          label: {
            pt: 'Cada pessoa adicional',
            en: 'Each extra person',
            es: 'Cada persona adicional',
          },
          amount: 300,
          unit: 'perPerson',
        },
      ],
      priceNote: {
        pt: 'Valores do fretamento de 4 horas, até 15 clientes. Fretamento de 8 horas (10h às 18h30) sob consulta.',
        en: 'Prices for a 4-hour charter, up to 15 guests. 8-hour charter (10 am to 6:30 pm) on request.',
        es: 'Precios del fletamento de 4 horas, hasta 15 clientes. Fletamento de 8 horas (10 a 18:30 h) a consultar.',
      },
    },
    summary: {
      pt: 'Ferretti de 43 pés com 2 dormitórios, flybridge, snorkeling, planasub e churrasco de peixe.',
      en: 'A 43-foot Ferretti with 2 cabins, flybridge, snorkeling, planasub and grilled fish.',
      es: 'Ferretti de 43 pies con 2 dormitorios, flybridge, snorkel, planasub y parrillada de pescado.',
    },
    gallery: [ferrettiPico, ferrettiProa, ferrettiSala, ferrettiCostao],
    policies: [
      {
        icon: 'clock',
        title: { pt: 'Passeio de 8 horas', en: '8-hour trip', es: 'Paseo de 8 horas' },
        items: {
          pt: ['Das 10h às 18h30'],
          en: ['From 10 am to 6:30 pm'],
          es: ['De 10 a 18:30 h'],
        },
      },
      {
        icon: 'alert',
        title: { pt: 'Atenção', en: 'Please note', es: 'Atención' },
        items: {
          pt: [
            'Bebidas não inclusas e não vendidas a bordo: leve a sua bebida.',
            'Transfer não incluso: o encontro é no píer do Porto.',
            'As camas da lancha não são liberadas para uso.',
            'Máscara e snorkel não inclusos: podem ser alugados em uma loja autorizada no Porto.',
          ],
          en: [
            'Drinks are not included and not sold on board: bring your own.',
            'Transfer is not included: the meeting point is the Porto pier.',
            'The boat’s beds are not available for use.',
            'Mask and snorkel are not included: they can be rented at an authorized shop at the Porto.',
          ],
          es: [
            'Bebidas no incluidas ni vendidas a bordo: lleva la tuya.',
            'Traslado no incluido: el encuentro es en el muelle del Porto.',
            'Las camas de la lancha no están liberadas para uso.',
            'Máscara y snorkel no incluidos: se pueden alquilar en una tienda autorizada en el Porto.',
          ],
        },
      },
    ],
  },
  {
    option: {
      id: 'amostradinha-44',
      title: {
        pt: 'Lancha Amostradinha 44',
        en: 'Amostradinha 44 boat',
        es: 'Lancha Amostradinha 44',
      },
      summary: {
        pt: 'Lancha de 44 pés com flybridge, sala com TV, deck amplo e proa acolchoada, para curtir o mar de Noronha com o Morro do Pico e o Morro Dois Irmãos no horizonte. A bordo, churrasco de peixe e picanha, ceviche, pão de alho, salada e frutas, e ainda dá para fazer planasub levando o próprio equipamento.',
        en: 'A 44-foot boat with flybridge, lounge with TV, a large deck and a padded bow, to enjoy the Noronha sea with Morro do Pico and Morro Dois Irmãos on the horizon. On board, grilled fish and picanha, ceviche, garlic bread, salad and fruit, and you can also go planasub (towed snorkeling) with your own gear.',
        es: 'Lancha de 44 pies con flybridge, sala con TV, cubierta amplia y proa acolchada, para disfrutar el mar de Noronha con el Morro do Pico y el Morro Dois Irmãos en el horizonte. A bordo, parrillada de pescado y picaña, ceviche, pan de ajo, ensalada y frutas, y también se puede hacer planasub llevando el propio equipo.',
      },
      facts: [
        {
          icon: 'users',
          label: factLabels.capacity,
          value: { pt: 'Até 22 pessoas', en: 'Up to 22 people', es: 'Hasta 22 personas' },
        },
        {
          icon: 'star',
          label: { pt: 'Gastronomia', en: 'Dining', es: 'Gastronomía' },
          value: {
            pt: 'Churrasco de peixe e picanha, ceviche, pão de alho, salada e frutas',
            en: 'Grilled fish and picanha, ceviche, garlic bread, salad and fruit',
            es: 'Parrillada de pescado y picaña, ceviche, pan de ajo, ensalada y frutas',
          },
        },
        {
          icon: 'alert',
          label: { pt: 'Bebidas e gelo', en: 'Drinks and ice', es: 'Bebidas y hielo' },
          value: { pt: 'Leve os seus', en: 'Bring your own', es: 'Lleva los tuyos' },
        },
        {
          icon: 'mask',
          label: { pt: 'Planasub', en: 'Planasub', es: 'Planasub' },
          value: {
            pt: 'Leve colete e máscara',
            en: 'Bring a vest and mask',
            es: 'Lleva chaleco y máscara',
          },
        },
      ],
      includes: {
        pt: ['Churrasco de peixe e picanha', 'Ceviche', 'Pão de alho', 'Salada e frutas'],
        en: ['Grilled fish and picanha', 'Ceviche', 'Garlic bread', 'Salad and fruit'],
        es: ['Parrillada de pescado y picaña', 'Ceviche', 'Pan de ajo', 'Ensalada y frutas'],
      },
      photos: [amPico, amFimDeTarde, amProa, amFlybridge, amMesa, amSala, amDeck],
      priceUnit: 'total',
      prices: [
        { label: { pt: '2 pessoas', en: '2 people', es: '2 personas' }, amount: 3300 },
        { label: { pt: '3 pessoas', en: '3 people', es: '3 personas' }, amount: 3600 },
        { label: { pt: '4 pessoas', en: '4 people', es: '4 personas' }, amount: 3900 },
        { label: { pt: '5 pessoas', en: '5 people', es: '5 personas' }, amount: 4200 },
        {
          label: {
            pt: 'Cada pessoa adicional',
            en: 'Each extra person',
            es: 'Cada persona adicional',
          },
          amount: 300,
          unit: 'perPerson',
        },
      ],
      priceNote: {
        pt: 'Por exemplo: 10 pessoas R$ 5.700, 15 pessoas R$ 7.200 e 22 pessoas R$ 9.300. Máximo de 22 pessoas.',
        en: 'For example: 10 people R$ 5,700, 15 people R$ 7,200 and 22 people R$ 9,300. Maximum of 22 people.',
        es: 'Por ejemplo: 10 personas R$ 5.700, 15 personas R$ 7.200 y 22 personas R$ 9.300. Máximo de 22 personas.',
      },
    },
    policies: [
      {
        icon: 'alert',
        title: { pt: 'Importante', en: 'Important', es: 'Importante' },
        items: {
          pt: [
            'Bebidas e gelo são de responsabilidade do cliente.',
            'Para fazer o planasub, é necessário levar o próprio equipamento de mergulho (colete e máscara).',
          ],
          en: [
            'Drinks and ice are the guest’s responsibility.',
            'To go planasub, you need to bring your own diving gear (vest and mask).',
          ],
          es: [
            'Bebidas y hielo son responsabilidad del cliente.',
            'Para hacer planasub, es necesario llevar el propio equipo de buceo (chaleco y máscara).',
          ],
        },
      },
    ],
  },
  {
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
  },
  {
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
  },
  {
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
  },
]

const privateBoatsTour: Tour = {
  id: 'lanchas-privativas',
  cardShowsOptions: true,
  category: 'Lancha',
  title: { pt: 'Lanchas privativas', en: 'Private boats', es: 'Lanchas privadas' },
  summary: {
    pt: 'Passeios exclusivos de lancha em Noronha: escolha a embarcação ideal para o seu grupo.',
    en: 'Private boat trips in Noronha: choose the right boat for your group.',
    es: 'Paseos exclusivos en lancha en Noronha: elige la embarcación ideal para tu grupo.',
  },
  description: {
    pt: 'Conheça Fernando de Noronha pelo mar com conforto e exclusividade. Cada lancha tem estrutura, roteiro, cardápio e valores próprios, então veja os detalhes de cada uma abaixo e fale com o Adriano para reservar.',
    en: 'Discover Fernando de Noronha by sea with comfort and privacy. Each boat has its own layout, route, menu and prices, so check the details of each one below and message Adriano to book.',
    es: 'Conoce Fernando de Noronha por el mar con comodidad y exclusividad. Cada lancha tiene su propia estructura, recorrido, menú y precios, así que mira los detalles de cada una abajo y habla con Adriano para reservar.',
  },
  details: {
    pt: [
      `${privateBoats.length} opções de lanchas`,
      '8h30 às 12h30 ou 14h30 às 18h30',
      'Passeios exclusivos',
    ],
    en: [
      `${privateBoats.length} boat options`,
      '8:30 am–12:30 pm or 2:30–6:30 pm',
      'Private trips',
    ],
    es: [
      `${privateBoats.length} opciones de lanchas`,
      '8:30–12:30 h o 14:30–18:30 h',
      'Paseos exclusivos',
    ],
  },
  image: iateInvictusFly,
  badge: dolphinsBadge,
  optionStyle: 'named',
  options: privateBoats.map(boatOption),
  policies: [
    schedulePolicy,
    {
      icon: 'mapPin',
      title: { pt: 'Transfer', en: 'Transfer', es: 'Traslado' },
      items: {
        pt: [
          'O transfer não está incluso nas lanchas privativas.',
          'A exceção é a Lancha NX 50 Invictus Fly, com transfer mediante disponibilidade, até 5 pessoas.',
        ],
        en: [
          'Transfer is not included on the private boats.',
          'The exception is the NX 50 Invictus Fly boat, with transfer subject to availability, up to 5 people.',
        ],
        es: [
          'El traslado no está incluido en las lanchas privadas.',
          'La excepción es la Lancha NX 50 Invictus Fly, con traslado según disponibilidad, hasta 5 personas.',
        ],
      },
    },
    {
      icon: 'wave',
      title: { pt: 'Golfinhos', en: 'Dolphins', es: 'Delfines' },
      items: {
        pt: ['Em todos os passeios de lancha há chance de ver golfinhos.'],
        en: ['Every boat trip has a chance to see dolphins.'],
        es: ['En todos los paseos en lancha hay chance de ver delfines.'],
      },
    },
  ],
}

export const boatTours: Tour[] = [
  privateBoatsTour,
  boatTour({
    option: {
      id: 'transparente',
      title: {
        pt: 'Lancha Transparente',
        en: 'Clear-bottom boat',
        es: 'Lancha Transparente',
      },
      summary: {
        pt: 'O mar como você nunca viu! Um passeio de 1 hora em uma lancha com casco transparente pela APA (Área de Proteção Ambiental): saída da Praia do Porto, passando pela Praia da Biboca e pelo naufrágio, navegando até o Morro São José. Pelo casco dá para ver o fundo do mar e, com sorte, até os golfinhos passando embaixo da lancha. É um passeio de contemplação, sem parada para banho.',
        en: 'The sea like you have never seen it! A 1-hour trip on a clear-bottom boat through the APA (Environmental Protection Area): departing from Praia do Porto, passing Biboca Beach and the shipwreck, and sailing to Morro São José. Through the hull you can see the seabed and, with luck, even dolphins swimming under the boat. It is a sightseeing trip, with no swimming stop.',
        es: '¡El mar como nunca lo viste! Un paseo de 1 hora en una lancha con casco transparente por la APA (Área de Protección Ambiental): salida de la Praia do Porto, pasando por la Praia da Biboca y el naufragio, navegando hasta el Morro São José. Por el casco se ve el fondo del mar y, con suerte, hasta los delfines pasando debajo de la lancha. Es un paseo de contemplación, sin parada para nadar.',
      },
      facts: [
        {
          icon: 'clock',
          label: factLabels.duration,
          value: { pt: '1 hora', en: '1 hour', es: '1 hora' },
        },
        {
          icon: 'users',
          label: factLabels.capacity,
          value: {
            pt: 'Privativo até 6 pessoas',
            en: 'Private up to 6 people',
            es: 'Privado hasta 6 personas',
          },
        },
        {
          icon: 'calendar',
          label: { pt: 'Saídas', en: 'Departures', es: 'Salidas' },
          value: {
            pt: '8h, 9h30, 11h e 13h30',
            en: '8 am, 9:30 am, 11 am and 1:30 pm',
            es: '8 h, 9:30 h, 11 h y 13:30 h',
          },
        },
        {
          icon: 'compass',
          label: { pt: 'Trajeto', en: 'Route', es: 'Trayecto' },
          value: {
            pt: 'Praia da Biboca, naufrágio e Morro São José',
            en: 'Biboca Beach, the shipwreck and Morro São José',
            es: 'Praia da Biboca, el naufragio y el Morro São José',
          },
        },
        {
          icon: 'mapPin',
          label: { pt: 'Saída', en: 'Departure point', es: 'Salida' },
          value: { pt: 'Praia do Porto', en: 'Praia do Porto', es: 'Praia do Porto' },
        },
        {
          icon: 'wave',
          label: { pt: 'Parada para banho', en: 'Swimming stop', es: 'Parada para nadar' },
          value: { pt: 'Não tem', en: 'None', es: 'No tiene' },
        },
        {
          icon: 'mask',
          label: { pt: 'Equipamento', en: 'Gear', es: 'Equipo' },
          value: { pt: 'Não incluso', en: 'Not included', es: 'No incluido' },
        },
      ],
      photos: [transparentePraia, transparenteGolfinhos],
      priceUnit: 'perPerson',
      prices: [
        { label: { pt: 'Coletivo', en: 'Shared', es: 'Compartido' }, amount: 290 },
        {
          label: {
            pt: 'Privativo (até 6 pessoas)',
            en: 'Private (up to 6 people)',
            es: 'Privado (hasta 6 personas)',
          },
          amount: 1740,
          unit: 'total',
        },
        {
          label: { pt: 'Criança de 2 a 3 anos', en: 'Child aged 2 to 3', es: 'Niño de 2 a 3 años' },
          amount: 160,
        },
      ],
      priceNote: {
        pt: 'Criança até 1 ano não paga.',
        en: 'Children up to 1 year old ride free.',
        es: 'Niños hasta 1 año no pagan.',
      },
    },
    summary: {
      pt: 'O mar como você nunca viu: 1 hora pela APA em uma lancha com casco transparente.',
      en: 'The sea like you have never seen it: 1 hour through the APA on a clear-bottom boat.',
      es: 'El mar como nunca lo viste: 1 hora por la APA en una lancha con casco transparente.',
    },
    showSchedule: false,
    imagePosition: 'center 78%',
    gallery: [transparentePraia, transparenteGolfinhos],
    policies: [
      {
        icon: 'alert',
        title: { pt: 'Antes de embarcar', en: 'Before boarding', es: 'Antes de embarcar' },
        items: {
          pt: [
            'Não é permitido embarcar depois da praia, molhado ou depois de trilha.',
            'O transfer não está incluso.',
            'Ao confirmar o passeio, informe se autoriza o uso responsável da sua imagem nas redes sociais.',
          ],
          en: [
            'Boarding is not allowed after the beach, while wet or after a trail.',
            'Transfer is not included.',
            'When confirming the trip, let us know whether you allow responsible use of your image on social media.',
          ],
          es: [
            'No se permite embarcar después de la playa, mojado o después de un sendero.',
            'El traslado no está incluido.',
            'Al confirmar el paseo, informa si autorizas el uso responsable de tu imagen en las redes sociales.',
          ],
        },
      },
    ],
  }),
]
