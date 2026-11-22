import type { Localized } from '../i18n/locales'

export interface ChecklistItem {
  id: string
  title: Localized
  description: Localized
  link?: { label: Localized; href: string }
}

export const checklist: ChecklistItem[] = [
  {
    id: 'tpa',
    title: {
      pt: 'Pague a Taxa de Preservação Ambiental',
      en: 'Pay the Environmental Preservation Fee',
      es: 'Paga la Tasa de Preservación Ambiental',
    },
    description: {
      pt: 'A TPA é obrigatória para todo visitante e cobrada por dia de permanência. Dá para pagar on-line antes de embarcar.',
      en: 'The TPA is mandatory for every visitor and charged per day of stay. You can pay online before you fly.',
      es: 'La TPA es obligatoria para todo visitante y se cobra por día de estadía. Se puede pagar en línea antes de embarcar.',
    },
    link: {
      label: {
        pt: 'Site oficial da TPA',
        en: 'Official TPA website',
        es: 'Sitio oficial de la TPA',
      },
      href: 'https://www.noronha.pe.gov.br/',
    },
  },
  {
    id: 'parque',
    title: {
      pt: 'Garanta o cartão do Parque Nacional',
      en: 'Get the National Park card',
      es: 'Consigue la tarjeta del Parque Nacional',
    },
    description: {
      pt: 'É exigido em vários passeios, como o Ilha Tour e o barco até o Sancho, e dá acesso às praias dentro do parque.',
      en: 'It is required on several tours, such as the Island Tour and the boat to Sancho, and gives access to the beaches inside the park.',
      es: 'Se exige en varios paseos, como el Ilha Tour y el barco hasta Sancho, y da acceso a las playas dentro del parque.',
    },
    link: {
      label: {
        pt: 'Comprar ingresso do parque',
        en: 'Buy the park ticket',
        es: 'Comprar la entrada del parque',
      },
      href: 'https://www.parnanoronha.com.br/',
    },
  },
  {
    id: 'trilhas',
    title: {
      pt: 'Agende as trilhas controladas',
      en: 'Book the controlled trails',
      es: 'Reserva los senderos controlados',
    },
    description: {
      pt: 'Trilhas como Atalaia e Capim-Açu têm vagas limitadas e são agendadas pelo site ou na loja do ICMBio.',
      en: 'Trails like Atalaia and Capim-Açu have limited spots and are booked on the ICMBio website or at its office.',
      es: 'Senderos como Atalaia y Capim-Açu tienen cupos limitados y se reservan en el sitio o en la oficina del ICMBio.',
    },
  },
  {
    id: 'fuso',
    title: {
      pt: 'Ajuste o relógio: 1 hora à frente de Brasília',
      en: 'Set your watch: 1 hour ahead of Brasília',
      es: 'Ajusta el reloj: 1 hora adelante de Brasilia',
    },
    description: {
      pt: 'Fernando de Noronha tem fuso próprio, 1 hora à frente do horário de Brasília. Todos os horários dos passeios são no horário da ilha, então fique atento para não perder nenhuma saída.',
      en: 'Fernando de Noronha has its own time zone, 1 hour ahead of Brasília. All tour times are in island time, so pay attention so you do not miss a departure.',
      es: 'Fernando de Noronha tiene huso propio, 1 hora adelante del horario de Brasilia. Todos los horarios de los paseos son en hora de la isla, así que presta atención para no perder ninguna salida.',
    },
  },
  {
    id: 'mare',
    title: { pt: 'Fique de olho na maré', en: 'Keep an eye on the tide', es: 'Atento a la marea' },
    description: {
      pt: 'Piscinas naturais e alguns passeios só acontecem na maré baixa. Montamos o roteiro de acordo com a tábua de marés.',
      en: 'Natural pools and some tours only happen at low tide. We plan your itinerary around the tide table.',
      es: 'Las piscinas naturales y algunos paseos solo se hacen con marea baja. Armamos el itinerario según la tabla de mareas.',
    },
  },
  {
    id: 'reserva',
    title: {
      pt: 'Reserve os passeios com antecedência',
      en: 'Book your tours in advance',
      es: 'Reserva los paseos con anticipación',
    },
    description: {
      pt: 'Na alta temporada as vagas acabam rápido. Fale com o Adriano pelo WhatsApp e deixe tudo combinado antes de chegar.',
      en: 'In high season spots fill up fast. Message Adriano on WhatsApp and have everything arranged before you arrive.',
      es: 'En temporada alta los cupos se agotan rápido. Habla con Adriano por WhatsApp y deja todo acordado antes de llegar.',
    },
  },
]
