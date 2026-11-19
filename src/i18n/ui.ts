import type { Locale } from './locales'

interface PlannerMessage {
  interest: string
  arrival: string
  group: string
}

interface ContactMessage {
  name: string
  dates: string
  people: string
  tours: string[]
  notes: string
}

const pt = {
  meta: {
    title: 'Adriano Noronha | Passeios em Fernando de Noronha',
    description:
      'Passeios guiados em Fernando de Noronha com guia credenciado: Ilha Tour, barco, canoa havaiana, mergulho e trilhas. Coletivo ou privativo, com reserva pelo WhatsApp.',
  },
  common: {
    language: 'Idioma',
    backToTop: 'Voltar ao topo',
    whatsappAria: 'Fale com o Adriano pelo WhatsApp',
    whatsappDefault: 'Olá, Adriano! Quero ajuda para planejar meus passeios em Noronha.',
    close: 'Fechar',
  },
  nav: {
    aria: 'Navegação principal',
    footerAria: 'Links do rodapé',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    planTrip: 'Planejar viagem',
    items: {
      passeios: 'Passeios',
      roteiros: 'Roteiros',
      destinos: 'Destinos',
      sobre: 'Sobre',
      duvidas: 'Dúvidas',
    },
  },
  logo: {
    subtitle: 'Passeios na ilha',
    homeAria: 'Adriano Noronha, início',
  },
  hero: {
    kicker: 'Fernando de Noronha, Pernambuco',
    titleStart: 'A ilha contada por quem',
    titleHighlight: 'vive',
    titleEnd: 'nela',
    subtitle:
      'Passeios guiados por mar e por terra, no ritmo da maré e com o olhar de quem conhece cada enseada, trilha e mirante do arquipélago.',
    ctaTours: 'Conhecer passeios',
    ctaAbout: 'Quem é o Adriano',
    photoAlt: 'Morro Dois Irmãos visto do mar em Fernando de Noronha',
    chipCredentialPrefix: 'Guia credenciado',
    chipTypePrefix: 'Coletivo ou',
    chipTypeHighlight: 'privativo',
  },
  planner: {
    aria: 'Planejador de passeios',
    interestLabel: 'O que você quer viver?',
    arrivalLabel: 'Chegada na ilha',
    groupLabel: 'Quantas pessoas?',
    submit: 'Receber sugestões',
    interests: [
      'Ilha Tour',
      'Passeios de barco',
      'Mergulho',
      'Trilhas e piscinas naturais',
      'Aluguel de buggy, moto ou GoPro',
      'Ainda não sei',
    ],
    groups: ['1 pessoa', '2 pessoas', '3 a 4 pessoas', '5 ou mais'],
    dateToBeDefined: 'data a definir',
    message: ({ interest, arrival, group }: PlannerMessage) =>
      `Olá, Adriano! Quero planejar meus passeios em Noronha.\n• Interesse: ${interest}\n• Chegada: ${arrival}\n• Grupo: ${group}`,
  },
  tours: {
    eyebrow: 'Passeios',
    title: 'Escolha como quer conhecer a ilha',
    description:
      "Pela terra, pelo mar ou debaixo d'água. Passeios coletivos ou privativos, com guia credenciado e reserva direta pelo WhatsApp.",
    tabsAria: 'Categorias de passeio',
    categories: {
      Todos: 'Todos',
      Terra: 'Terra',
      Mar: 'Mar',
      Mergulho: 'Mergulho',
      Aluguel: 'Aluguel',
    },
    firstDay: 'Ideal para o 1º dia',
    parkCardShort: 'Exige o cartão do Parque Nacional',
    parkCardFull: 'Uso obrigatório do cartão do Parque Nacional de Fernando de Noronha.',
    viewDetails: 'Ver detalhes',
    viewDetailsOf: (title: string) => `Ver detalhes de ${title}`,
    consult: 'Consultar',
    consultWhatsApp: 'Consultar valores no WhatsApp',
    detailsHeading: 'Detalhes',
    bookMessage: (title: string) =>
      `Olá, Adriano! Quero saber valores e datas do passeio "${title}".`,
  },
  itineraries: {
    eyebrow: 'Roteiros',
    title: 'Quantos dias você vai ficar?',
    description:
      'Sugestões montadas pelo Adriano para cada tamanho de viagem. A gente ajusta tudo conforme a maré e o seu ritmo.',
    durationAria: 'Duração da viagem',
    days: 'dias',
    day: (number: number) => `Dia ${number}`,
    freeDay: 'Dia livre',
    cta: 'Quero este roteiro',
    timelineAria: (days: number) => `Roteiro de ${days} dias`,
    message: (title: string, days: number) =>
      `Olá, Adriano! Gostei do roteiro "${title}" de ${days} dias. Pode me passar os valores?`,
  },
  destinations: {
    eyebrow: 'Destinos',
    title: 'Lugares que você vai querer guardar na memória',
    previous: 'Destinos anteriores',
    next: 'Próximos destinos',
  },
  about: {
    eyebrow: 'Sobre',
    title: 'Prazer, Adriano',
    description:
      'Sou guia credenciado pelo Cadastur e apresento Fernando de Noronha com as histórias e os fatos do arquipélago. Atendo grupos e famílias, em passeios coletivos ou privativos, sempre em carro seguro e confortável.',
    photoAlt: 'Grupo de viajantes em um mirante de Fernando de Noronha durante passeio',
    stats: [
      { value: 'Cadastur', label: 'guia credenciado' },
      { value: 'Coletivo', label: 'ou privativo' },
      { value: '4x4', label: 'carro confortável' },
    ],
    pillars: [
      {
        title: 'Respeito à ilha',
        text: 'Seguimos as regras do Parque Nacional Marinho e ensinamos a visitar sem deixar rastro.',
      },
      {
        title: 'Grupos pequenos',
        text: 'Menos gente por passeio significa mais tempo em cada lugar e atenção para todo mundo.',
      },
      {
        title: 'Olhar local',
        text: 'Histórias, horários de maré e cantinhos que só quem vive em Noronha conhece.',
      },
    ],
  },
  moments: {
    eyebrow: 'Momentos',
    title: 'Quem passeia com o Adriano volta com histórias',
    description: 'Registros reais dos passeios pela ilha. Acompanhe as saídas do dia no Instagram.',
  },
  checklist: {
    eyebrow: 'Antes de viajar',
    title: 'Cinco passos para chegar na ilha sem imprevistos',
    description:
      'Noronha tem regras próprias para proteger o arquipélago. Com essa lista você chega pronto para aproveitar.',
  },
  faq: {
    eyebrow: 'Dúvidas',
    title: 'Antes de reservar, tire suas dúvidas',
  },
  contact: {
    eyebrow: 'Monte seu combo',
    title: 'Conte sobre a sua viagem',
    text: 'Escolha os passeios que chamaram sua atenção e envie direto para o WhatsApp do Adriano. Ele responde com disponibilidade e valores.',
    nameLabel: 'Seu nome',
    peopleLabel: 'Pessoas',
    datesLabel: 'Quando você vai estar na ilha?',
    datesPlaceholder: 'Ex.: de 10 a 15 de março',
    toursLegend: 'Passeios de interesse',
    notesLabel: 'Algo que o Adriano precisa saber?',
    notesPlaceholder: 'Crianças no grupo, horário do voo, preferências...',
    submit: 'Enviar pelo WhatsApp',
    message: ({ name, dates, people, tours, notes }: ContactMessage) =>
      [
        `Olá, Adriano! Meu nome é ${name}.`,
        `• Datas na ilha: ${dates || 'a definir'}`,
        `• Pessoas: ${people}`,
        `• Passeios: ${tours.length > 0 ? tours.join(', ') : 'quero sugestões'}`,
        ...(notes ? [`• Observações: ${notes}`] : []),
      ].join('\n'),
  },
  footer: {
    text: 'Passeios guiados em Fernando de Noronha com guia credenciado, em grupo ou só para a sua família.',
    whatsappCta: 'Chamar no WhatsApp',
    navigation: 'Navegação',
    contact: 'Contato',
    payment: 'Pagamento',
    paymentMethods: 'Dinheiro, Pix ou cartão (com taxa)',
    credential: 'Guia credenciado Cadastur',
    rights: (year: number) => `© ${year} Adriano Noronha Passeios. Todos os direitos reservados.`,
  },
}

export type UiStrings = typeof pt

const en: UiStrings = {
  meta: {
    title: 'Adriano Noronha | Tours in Fernando de Noronha',
    description:
      'Guided tours in Fernando de Noronha with a certified local guide: island tour, boat trips, outrigger canoe, diving and trails. Shared or private, booked on WhatsApp.',
  },
  common: {
    language: 'Language',
    backToTop: 'Back to top',
    whatsappAria: 'Message Adriano on WhatsApp',
    whatsappDefault: 'Hi, Adriano! I would like help planning my tours in Noronha.',
    close: 'Close',
  },
  nav: {
    aria: 'Main navigation',
    footerAria: 'Footer links',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    planTrip: 'Plan your trip',
    items: {
      passeios: 'Tours',
      roteiros: 'Itineraries',
      destinos: 'Places',
      sobre: 'About',
      duvidas: 'FAQ',
    },
  },
  logo: {
    subtitle: 'Island tours',
    homeAria: 'Adriano Noronha, home',
  },
  hero: {
    kicker: 'Fernando de Noronha, Brazil',
    titleStart: 'The island, shown by someone who',
    titleHighlight: 'lives',
    titleEnd: 'there',
    subtitle:
      'Guided tours by sea and by land, following the tides and led by someone who knows every cove, trail and viewpoint of the archipelago.',
    ctaTours: 'Explore tours',
    ctaAbout: 'Meet Adriano',
    photoAlt: 'Morro Dois Irmãos seen from the sea in Fernando de Noronha',
    chipCredentialPrefix: 'Certified guide',
    chipTypePrefix: 'Shared or',
    chipTypeHighlight: 'private',
  },
  planner: {
    aria: 'Tour planner',
    interestLabel: 'What would you like to do?',
    arrivalLabel: 'Arrival on the island',
    groupLabel: 'How many people?',
    submit: 'Get suggestions',
    interests: [
      'Island Tour',
      'Boat trips',
      'Diving',
      'Trails and natural pools',
      'Buggy, motorbike or GoPro rental',
      'Not sure yet',
    ],
    groups: ['1 person', '2 people', '3 to 4 people', '5 or more'],
    dateToBeDefined: 'date to be defined',
    message: ({ interest, arrival, group }: PlannerMessage) =>
      `Hi, Adriano! I would like to plan my tours in Noronha.\n• Interest: ${interest}\n• Arrival: ${arrival}\n• Group: ${group}`,
  },
  tours: {
    eyebrow: 'Tours',
    title: 'Choose how you want to explore the island',
    description:
      'On land, at sea or underwater. Shared or private tours with a certified guide and direct booking on WhatsApp.',
    tabsAria: 'Tour categories',
    categories: {
      Todos: 'All',
      Terra: 'Land',
      Mar: 'Sea',
      Mergulho: 'Diving',
      Aluguel: 'Rental',
    },
    firstDay: 'Perfect for day one',
    parkCardShort: 'National Park card required',
    parkCardFull: 'The Fernando de Noronha National Park card is mandatory for this tour.',
    viewDetails: 'View details',
    viewDetailsOf: (title: string) => `View details of ${title}`,
    consult: 'Ask price',
    consultWhatsApp: 'Ask for prices on WhatsApp',
    detailsHeading: 'Details',
    bookMessage: (title: string) =>
      `Hi, Adriano! I would like to know prices and dates for the "${title}" tour.`,
  },
  itineraries: {
    eyebrow: 'Itineraries',
    title: 'How many days will you stay?',
    description:
      'Suggestions put together by Adriano for every trip length. Everything is adjusted to the tides and your pace.',
    durationAria: 'Trip length',
    days: 'days',
    day: (number: number) => `Day ${number}`,
    freeDay: 'Free day',
    cta: 'I want this itinerary',
    timelineAria: (days: number) => `${days}-day itinerary`,
    message: (title: string, days: number) =>
      `Hi, Adriano! I liked the ${days}-day itinerary "${title}". Could you send me the prices?`,
  },
  destinations: {
    eyebrow: 'Places',
    title: 'Places you will want to remember forever',
    previous: 'Previous places',
    next: 'Next places',
  },
  about: {
    eyebrow: 'About',
    title: "Hi, I'm Adriano",
    description:
      'I am a Cadastur-certified guide and I show Fernando de Noronha through the stories and facts of the archipelago. I welcome groups and families on shared or private tours, always in a safe and comfortable vehicle.',
    photoAlt: 'Group of travelers at a viewpoint in Fernando de Noronha during a tour',
    stats: [
      { value: 'Cadastur', label: 'certified guide' },
      { value: 'Shared', label: 'or private' },
      { value: '4x4', label: 'comfortable vehicle' },
    ],
    pillars: [
      {
        title: 'Respect for the island',
        text: 'We follow the Marine National Park rules and show how to visit without leaving a trace.',
      },
      {
        title: 'Small groups',
        text: 'Fewer people per tour means more time at each spot and attention for everyone.',
      },
      {
        title: 'Local insight',
        text: 'Stories, tide times and hidden corners only people who live in Noronha know.',
      },
    ],
  },
  moments: {
    eyebrow: 'Moments',
    title: 'Everyone who tours with Adriano comes back with stories',
    description: 'Real moments from tours around the island. Follow the daily trips on Instagram.',
  },
  checklist: {
    eyebrow: 'Before you travel',
    title: 'Five steps to arrive on the island without surprises',
    description:
      'Noronha has its own rules to protect the archipelago. With this list you arrive ready to enjoy it.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions before booking',
  },
  contact: {
    eyebrow: 'Build your combo',
    title: 'Tell us about your trip',
    text: 'Pick the tours that caught your eye and send them straight to Adriano on WhatsApp. He replies with availability and prices.',
    nameLabel: 'Your name',
    peopleLabel: 'People',
    datesLabel: 'When will you be on the island?',
    datesPlaceholder: 'E.g. March 10 to 15',
    toursLegend: 'Tours you are interested in',
    notesLabel: 'Anything Adriano should know?',
    notesPlaceholder: 'Children in the group, flight times, preferences...',
    submit: 'Send on WhatsApp',
    message: ({ name, dates, people, tours, notes }: ContactMessage) =>
      [
        `Hi, Adriano! My name is ${name}.`,
        `• Dates on the island: ${dates || 'to be defined'}`,
        `• People: ${people}`,
        `• Tours: ${tours.length > 0 ? tours.join(', ') : 'I would like suggestions'}`,
        ...(notes ? [`• Notes: ${notes}`] : []),
      ].join('\n'),
  },
  footer: {
    text: 'Guided tours in Fernando de Noronha with a certified guide, in a group or just for your family.',
    whatsappCta: 'Chat on WhatsApp',
    navigation: 'Navigation',
    contact: 'Contact',
    payment: 'Payment',
    paymentMethods: 'Cash, Pix or card (fee applies)',
    credential: 'Cadastur certified guide',
    rights: (year: number) => `© ${year} Adriano Noronha Passeios. All rights reserved.`,
  },
}

const es: UiStrings = {
  meta: {
    title: 'Adriano Noronha | Paseos en Fernando de Noronha',
    description:
      'Paseos guiados en Fernando de Noronha con guía acreditado: Ilha Tour, barco, canoa hawaiana, buceo y senderos. Compartidos o privados, con reserva por WhatsApp.',
  },
  common: {
    language: 'Idioma',
    backToTop: 'Volver arriba',
    whatsappAria: 'Habla con Adriano por WhatsApp',
    whatsappDefault: '¡Hola, Adriano! Quiero ayuda para planificar mis paseos en Noronha.',
    close: 'Cerrar',
  },
  nav: {
    aria: 'Navegación principal',
    footerAria: 'Enlaces del pie de página',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    planTrip: 'Planificar viaje',
    items: {
      passeios: 'Paseos',
      roteiros: 'Itinerarios',
      destinos: 'Destinos',
      sobre: 'Sobre mí',
      duvidas: 'Preguntas',
    },
  },
  logo: {
    subtitle: 'Paseos en la isla',
    homeAria: 'Adriano Noronha, inicio',
  },
  hero: {
    kicker: 'Fernando de Noronha, Brasil',
    titleStart: 'La isla contada por quien',
    titleHighlight: 'vive',
    titleEnd: 'en ella',
    subtitle:
      'Paseos guiados por mar y por tierra, al ritmo de la marea y con la mirada de quien conoce cada ensenada, sendero y mirador del archipiélago.',
    ctaTours: 'Ver paseos',
    ctaAbout: 'Conoce a Adriano',
    photoAlt: 'Morro Dois Irmãos visto desde el mar en Fernando de Noronha',
    chipCredentialPrefix: 'Guía acreditado',
    chipTypePrefix: 'Compartido o',
    chipTypeHighlight: 'privado',
  },
  planner: {
    aria: 'Planificador de paseos',
    interestLabel: '¿Qué quieres vivir?',
    arrivalLabel: 'Llegada a la isla',
    groupLabel: '¿Cuántas personas?',
    submit: 'Recibir sugerencias',
    interests: [
      'Ilha Tour',
      'Paseos en barco',
      'Buceo',
      'Senderos y piscinas naturales',
      'Alquiler de buggy, moto o GoPro',
      'Todavía no sé',
    ],
    groups: ['1 persona', '2 personas', '3 a 4 personas', '5 o más'],
    dateToBeDefined: 'fecha por definir',
    message: ({ interest, arrival, group }: PlannerMessage) =>
      `¡Hola, Adriano! Quiero planificar mis paseos en Noronha.\n• Interés: ${interest}\n• Llegada: ${arrival}\n• Grupo: ${group}`,
  },
  tours: {
    eyebrow: 'Paseos',
    title: 'Elige cómo quieres conocer la isla',
    description:
      'Por tierra, por mar o bajo el agua. Paseos compartidos o privados, con guía acreditado y reserva directa por WhatsApp.',
    tabsAria: 'Categorías de paseo',
    categories: {
      Todos: 'Todos',
      Terra: 'Tierra',
      Mar: 'Mar',
      Mergulho: 'Buceo',
      Aluguel: 'Alquiler',
    },
    firstDay: 'Ideal para el 1.er día',
    parkCardShort: 'Requiere la tarjeta del Parque Nacional',
    parkCardFull: 'Es obligatoria la tarjeta del Parque Nacional de Fernando de Noronha.',
    viewDetails: 'Ver detalles',
    viewDetailsOf: (title: string) => `Ver detalles de ${title}`,
    consult: 'Consultar',
    consultWhatsApp: 'Consultar precios por WhatsApp',
    detailsHeading: 'Detalles',
    bookMessage: (title: string) =>
      `¡Hola, Adriano! Quiero saber precios y fechas del paseo "${title}".`,
  },
  itineraries: {
    eyebrow: 'Itinerarios',
    title: '¿Cuántos días te vas a quedar?',
    description:
      'Sugerencias armadas por Adriano para cada duración de viaje. Ajustamos todo según la marea y tu ritmo.',
    durationAria: 'Duración del viaje',
    days: 'días',
    day: (number: number) => `Día ${number}`,
    freeDay: 'Día libre',
    cta: 'Quiero este itinerario',
    timelineAria: (days: number) => `Itinerario de ${days} días`,
    message: (title: string, days: number) =>
      `¡Hola, Adriano! Me gustó el itinerario "${title}" de ${days} días. ¿Me pasas los precios?`,
  },
  destinations: {
    eyebrow: 'Destinos',
    title: 'Lugares que vas a querer guardar en la memoria',
    previous: 'Destinos anteriores',
    next: 'Próximos destinos',
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Mucho gusto, soy Adriano',
    description:
      'Soy guía acreditado por Cadastur y presento Fernando de Noronha con las historias y los datos del archipiélago. Atiendo grupos y familias, en paseos compartidos o privados, siempre en un vehículo seguro y cómodo.',
    photoAlt: 'Grupo de viajeros en un mirador de Fernando de Noronha durante un paseo',
    stats: [
      { value: 'Cadastur', label: 'guía acreditado' },
      { value: 'Compartido', label: 'o privado' },
      { value: '4x4', label: 'vehículo cómodo' },
    ],
    pillars: [
      {
        title: 'Respeto por la isla',
        text: 'Seguimos las reglas del Parque Nacional Marino y enseñamos a visitar sin dejar rastro.',
      },
      {
        title: 'Grupos pequeños',
        text: 'Menos personas por paseo significa más tiempo en cada lugar y atención para todos.',
      },
      {
        title: 'Mirada local',
        text: 'Historias, horarios de marea y rincones que solo conoce quien vive en Noronha.',
      },
    ],
  },
  moments: {
    eyebrow: 'Momentos',
    title: 'Quien pasea con Adriano vuelve con historias',
    description:
      'Registros reales de los paseos por la isla. Sigue las salidas del día en Instagram.',
  },
  checklist: {
    eyebrow: 'Antes de viajar',
    title: 'Cinco pasos para llegar a la isla sin imprevistos',
    description:
      'Noronha tiene reglas propias para proteger el archipiélago. Con esta lista llegas listo para disfrutar.',
  },
  faq: {
    eyebrow: 'Preguntas',
    title: 'Antes de reservar, resuelve tus dudas',
  },
  contact: {
    eyebrow: 'Arma tu combo',
    title: 'Cuéntanos sobre tu viaje',
    text: 'Elige los paseos que te llamaron la atención y envíalos directo al WhatsApp de Adriano. Él responde con disponibilidad y precios.',
    nameLabel: 'Tu nombre',
    peopleLabel: 'Personas',
    datesLabel: '¿Cuándo vas a estar en la isla?',
    datesPlaceholder: 'Ej.: del 10 al 15 de marzo',
    toursLegend: 'Paseos de interés',
    notesLabel: '¿Algo que Adriano deba saber?',
    notesPlaceholder: 'Niños en el grupo, horario del vuelo, preferencias...',
    submit: 'Enviar por WhatsApp',
    message: ({ name, dates, people, tours, notes }: ContactMessage) =>
      [
        `¡Hola, Adriano! Me llamo ${name}.`,
        `• Fechas en la isla: ${dates || 'por definir'}`,
        `• Personas: ${people}`,
        `• Paseos: ${tours.length > 0 ? tours.join(', ') : 'quiero sugerencias'}`,
        ...(notes ? [`• Observaciones: ${notes}`] : []),
      ].join('\n'),
  },
  footer: {
    text: 'Paseos guiados en Fernando de Noronha con guía acreditado, en grupo o solo para tu familia.',
    whatsappCta: 'Escribir por WhatsApp',
    navigation: 'Navegación',
    contact: 'Contacto',
    payment: 'Pago',
    paymentMethods: 'Efectivo, Pix o tarjeta (con recargo)',
    credential: 'Guía acreditado Cadastur',
    rights: (year: number) => `© ${year} Adriano Noronha Passeios. Todos los derechos reservados.`,
  },
}

export const ui: Record<Locale, UiStrings> = { pt, en, es }
