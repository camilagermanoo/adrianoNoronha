import type { Localized } from '../i18n/locales'

export interface FaqItem {
  id: string
  question: Localized
  answer: Localized
}

export const faqItems: FaqItem[] = [
  {
    id: 'grupo-privativo',
    question: {
      pt: 'Os passeios são em grupo ou privativos?',
      en: 'Are the tours shared or private?',
      es: '¿Los paseos son en grupo o privados?',
    },
    answer: {
      pt: 'Os dois. Há saídas coletivas, como o Ilha Tour em grupo de até 10 pessoas, e opções privativas para você e sua família, como o Ilha Tour de buggy e a lancha.',
      en: 'Both. There are shared departures, like the Island Tour in groups of up to 10 people, and private options for you and your family, like the buggy Island Tour and the speedboat.',
      es: 'Los dos. Hay salidas compartidas, como el Ilha Tour en grupos de hasta 10 personas, y opciones privadas para ti y tu familia, como el Ilha Tour en buggy y la lancha.',
    },
  },
  {
    id: 'cartao-parque',
    question: {
      pt: 'Preciso do cartão do Parque Nacional?',
      en: 'Do I need the National Park card?',
      es: '¿Necesito la tarjeta del Parque Nacional?',
    },
    answer: {
      pt: 'Para alguns passeios, sim. O Ilha Tour, o barco tradicional até o Sancho e as trilhas do parque exigem o cartão do Parque Nacional de Fernando de Noronha.',
      en: 'For some tours, yes. The Island Tour, the traditional boat to Sancho and the park trails require the Fernando de Noronha National Park card.',
      es: 'Para algunos paseos, sí. El Ilha Tour, el barco tradicional hasta Sancho y los senderos del parque exigen la tarjeta del Parque Nacional de Fernando de Noronha.',
    },
  },
  {
    id: 'transfer',
    question: {
      pt: 'O transfer está incluso?',
      en: 'Is transfer included?',
      es: '¿El traslado está incluido?',
    },
    answer: {
      pt: 'Depende do passeio. Incluem transfer: Ilha Tour coletivo, canoa havaiana, barco tradicional, catamarãs, mergulho de cilindro embarcado, snorkel no naufrágio e os ensaios de fotos. A bike aquática, o mergulho de cilindro no naufrágio e a Trilha do Piquinho não incluem.',
      en: 'It depends on the tour. Transfer is included in the shared Island Tour, outrigger canoe, traditional boat, catamarans, boat scuba dive, shipwreck snorkeling and photo shoots. The water bike, the shipwreck scuba dive and the Piquinho Trail do not include it.',
      es: 'Depende del paseo. Incluyen traslado: Ilha Tour compartido, canoa hawaiana, barco tradicional, catamaranes, buceo con tanque desde barco, snorkel en el naufragio y las sesiones de fotos. La bici acuática, el buceo con tanque en el naufragio y el Sendero del Piquinho no lo incluyen.',
    },
  },
  {
    id: 'nunca-mergulhei',
    question: {
      pt: 'Nunca mergulhei. Posso fazer os passeios de mergulho?',
      en: 'I have never dived. Can I join the diving tours?',
      es: 'Nunca buceé. ¿Puedo hacer los paseos de buceo?',
    },
    answer: {
      pt: 'Pode. O snorkel é para qualquer pessoa, e os mergulhos de batismo foram feitos para quem nunca mergulhou, sempre com instrutor qualificado e a 8 metros de profundidade.',
      en: 'Yes. Snorkeling is for everyone, and the discovery dives are designed for first-timers, always with a qualified instructor and at 8 meters deep.',
      es: 'Sí. El snorkel es para cualquier persona, y los buceos de bautismo están pensados para quien nunca buceó, siempre con instructor calificado y a 8 metros de profundidad.',
    },
  },
  {
    id: 'dia-de-ir-embora',
    question: {
      pt: 'Dá para fazer passeio no dia de ir embora?',
      en: 'Can I do a tour on my departure day?',
      es: '¿Se puede hacer un paseo el día de la partida?',
    },
    answer: {
      pt: 'Sim. A canoa havaiana acontece no nascer do sol e pode ser feita no dia do voo, independentemente do horário.',
      en: 'Yes. The outrigger canoe happens at sunrise and can be done on your flight day, whatever the time.',
      es: 'Sí. La canoa hawaiana es al amanecer y se puede hacer el día del vuelo, sin importar el horario.',
    },
  },
  {
    id: 'combo',
    question: {
      pt: 'Posso montar um combo com vários passeios?',
      en: 'Can I build a combo with several tours?',
      es: '¿Puedo armar un combo con varios paseos?',
    },
    answer: {
      pt: 'Pode e é o que a maioria dos viajantes faz. Escolha os passeios no formulário abaixo ou fale direto no WhatsApp que o Adriano monta o combo ideal para os seus dias na ilha.',
      en: 'Yes, and most travelers do. Pick the tours in the form below or message Adriano on WhatsApp and he will put together the ideal combo for your days on the island.',
      es: 'Sí, y es lo que hace la mayoría de los viajeros. Elige los paseos en el formulario de abajo o escribe directo por WhatsApp y Adriano arma el combo ideal para tus días en la isla.',
    },
  },
  {
    id: 'pagamento',
    question: {
      pt: 'Quais são as formas de pagamento?',
      en: 'Which payment methods are accepted?',
      es: '¿Cuáles son las formas de pago?',
    },
    answer: {
      pt: 'Dinheiro, Pix ou cartão mediante link (incluindo taxas).',
      en: 'Cash, Pix (Brazilian instant transfer) or card via payment link (fees included).',
      es: 'Efectivo, Pix (transferencia instantánea brasileña) o tarjeta mediante link (incluyendo tasas).',
    },
  },
]
