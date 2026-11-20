import embarcadoCardume from '../../assets/tours/cilindro-embarcado/cardume.webp?responsive'
import embarcadoCorais from '../../assets/tours/cilindro-embarcado/corais.webp?responsive'
import embarcadoEsponja from '../../assets/tours/cilindro-embarcado/esponja.webp?responsive'
import embarcadoCatamaras from '../../assets/tours/cilindro-embarcado/catamaras.webp?responsive'
import embarcadoRaia from '../../assets/tours/cilindro-embarcado/raia.webp?responsive'
import embarcadoTartaruga from '../../assets/tours/cilindro-embarcado/tartaruga.webp?responsive'
import naufragioCilindro from '../../assets/tours/cilindro-naufragio/naufragio.webp?responsive'
import naufragioTartaruga from '../../assets/tours/cilindro-naufragio/tartaruga.webp?responsive'
import naufragioJoinha from '../../assets/tours/cilindro-naufragio/joinha-naufragio.webp?responsive'
import snorkelGrupo from '../../assets/tours/snorkel-naufragio/grupo-adriano.webp?responsive'
import snorkelJoinha from '../../assets/tours/snorkel-naufragio/joinha-naufragio.webp?responsive'
import snorkelMascara from '../../assets/tours/snorkel-naufragio/mascara-amarela.webp?responsive'
import snorkelTartaruga from '../../assets/tours/snorkel-naufragio/tartaruga.webp?responsive'
import type { Tour } from '../../types'
import { factLabels } from './labels'

export const divingTours: Tour[] = [
  {
    id: 'snorkel-naufragio',
    category: 'Mar',
    title: {
      pt: 'Mergulho de snorkel no naufrágio',
      en: 'Snorkeling at the shipwreck',
      es: 'Snorkel en el naufragio',
    },
    summary: {
      pt: 'Snorkel guiado até o naufrágio da Praia do Porto, com vídeos inclusos.',
      en: 'Guided snorkeling to the Porto Beach shipwreck, videos included.',
      es: 'Snorkel guiado hasta el naufragio de la Praia do Porto, con videos incluidos.',
    },
    description: {
      pt: 'O mergulho com snorkel é uma experiência imperdível, com águas cristalinas e rica vida marinha, incluindo peixes coloridos, tartarugas, arraias e até golfinhos. A Praia do Porto é um local muito procurado para o snorkel, com um naufrágio de 140 m de comprimento a até 9 m de profundidade, que atrai diversas espécies marinhas. O percurso tem 300 m e o passeio dura cerca de 1 hora, sempre com guia e com vídeos inclusos.',
      en: 'Snorkeling is a must-do experience, with crystal-clear water and rich marine life, including colorful fish, turtles, rays and even dolphins. Porto Beach is a popular snorkeling spot, with a 140 m long shipwreck lying up to 9 m deep that attracts many marine species. The route is 300 m long and the trip lasts about 1 hour, always with a guide and with videos included.',
      es: 'El snorkel es una experiencia imperdible, con aguas cristalinas y rica vida marina, incluidos peces de colores, tortugas, rayas y hasta delfines. La Praia do Porto es un lugar muy buscado para el snorkel, con un naufragio de 140 m de largo a hasta 9 m de profundidad que atrae a diversas especies marinas. El recorrido tiene 300 m y el paseo dura cerca de 1 hora, siempre con guía y con videos incluidos.',
    },
    details: {
      pt: ['8h, 10h ou 12h', 'Cerca de 1h', 'R$ 250 por pessoa'],
      en: ['8 am, 10 am or 12 pm', 'About 1 hour', 'R$ 250 per person'],
      es: ['8, 10 o 12 h', 'Cerca de 1 h', 'R$ 250 por persona'],
    },
    image: snorkelTartaruga,
    heroImage: snorkelTartaruga,
    badge: {
      pt: 'Chance de ver golfinhos',
      en: 'Chance to see dolphins',
      es: 'Chance de ver delfines',
    },
    highlights: [
      {
        icon: 'mask',
        title: { pt: 'Naufrágio de 140 m', en: '140 m shipwreck', es: 'Naufragio de 140 m' },
        text: {
          pt: 'A até 9 m de profundidade, cercado de vida marinha.',
          en: 'Lying up to 9 m deep, surrounded by marine life.',
          es: 'A hasta 9 m de profundidad, rodeado de vida marina.',
        },
      },
      {
        icon: 'wave',
        title: { pt: 'Vida marinha', en: 'Marine life', es: 'Vida marina' },
        text: {
          pt: 'Peixes coloridos, tartarugas, arraias e até golfinhos.',
          en: 'Colorful fish, turtles, rays and even dolphins.',
          es: 'Peces de colores, tortugas, rayas y hasta delfines.',
        },
      },
      {
        icon: 'camera',
        title: { pt: 'Vídeos inclusos', en: 'Videos included', es: 'Videos incluidos' },
        text: {
          pt: 'Você leva para casa os vídeos do seu mergulho.',
          en: 'Take home the videos of your dive.',
          es: 'Te llevas los videos de tu buceo.',
        },
      },
      {
        icon: 'shield',
        title: { pt: 'Com guia', en: 'With a guide', es: 'Con guía' },
        text: {
          pt: 'Percurso de 300 m acompanhado do começo ao fim.',
          en: 'A 300 m route guided from start to finish.',
          es: 'Recorrido de 300 m acompañado de principio a fin.',
        },
      },
    ],
    options: [
      {
        id: 'snorkel',
        title: {
          pt: 'Mergulho de snorkel no naufrágio',
          en: 'Snorkeling at the shipwreck',
          es: 'Snorkel en el naufragio',
        },
        summary: {
          pt: 'O uso de snorkel, colete e nadadeira é obrigatório. Se você não tiver, alugamos em uma loja credenciada, e o aluguel é pago por você.',
          en: 'Snorkel, life jacket and fins are mandatory. If you do not have them, we rent them at an accredited shop, and you pay for the rental.',
          es: 'El uso de snorkel, chaleco y aletas es obligatorio. Si no los tienes, los alquilamos en una tienda acreditada, y el alquiler lo pagas tú.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.schedule,
            value: {
              pt: '8h, 10h ou 12h, cerca de 1h',
              en: '8 am, 10 am or 12 pm, about 1 hour',
              es: '8, 10 o 12 h, cerca de 1 h',
            },
          },
          {
            icon: 'mapPin',
            label: factLabels.transfer,
            value: { pt: 'Incluso', en: 'Included', es: 'Incluido' },
          },
        ],
        includes: {
          pt: [
            'Guia e vídeos do mergulho',
            'Percurso de 300 m até o naufrágio',
            'Snorkel, colete e nadadeira obrigatórios (aluguel por sua conta)',
          ],
          en: [
            'Guide and videos of the dive',
            '300 m route to the shipwreck',
            'Snorkel, life jacket and fins required (rental paid by you)',
          ],
          es: [
            'Guía y videos del buceo',
            'Recorrido de 300 m hasta el naufragio',
            'Snorkel, chaleco y aletas obligatorios (alquiler a tu cargo)',
          ],
        },
        photos: [snorkelTartaruga, snorkelJoinha, snorkelMascara, snorkelGrupo],
        priceUnit: 'perPerson',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 250 }],
      },
    ],
    gallery: [snorkelGrupo, snorkelTartaruga, snorkelMascara, snorkelJoinha],
  },
  {
    id: 'mergulho-cilindro-naufragio',
    category: 'Mar',
    title: {
      pt: 'Mergulho de cilindro no naufrágio',
      en: 'Shipwreck scuba dive',
      es: 'Buceo con tanque en el naufragio',
    },
    summary: {
      pt: 'Batismo de mergulho com cilindro no Naufrágio do Porto, com aula e instrutores experientes.',
      en: 'A scuba diving introduction at the Porto shipwreck, with a briefing and experienced instructors.',
      es: 'Bautismo de buceo con tanque en el Naufragio del Puerto, con clase e instructores experimentados.',
    },
    description: {
      pt: 'Viva uma experiência inesquecível explorando o Naufrágio do Porto, a 300 m da Praia do Porto, um dos pontos mais fascinantes de Fernando de Noronha. A atividade é feita com instrutores experientes, garantindo segurança total do começo ao fim. Antes do mergulho, você participa de uma aula introdutória com todas as instruções e procedimentos. Em seguida, há uma fase de adaptação na água, ideal para iniciantes ou para quem quer se familiarizar com o equipamento. São cerca de 40 minutos embaixo d’água, a até 9 m de profundidade, em uma atividade de 2 horas no total. Crianças podem mergulhar a partir dos 10 anos, com atenção redobrada dos instrutores para a segurança, o conforto e a tranquilidade da criança e dos pais.',
      en: 'Enjoy an unforgettable experience exploring the Porto shipwreck, 300 m from Porto Beach, one of the most fascinating spots in Fernando de Noronha. The activity is led by experienced instructors, keeping you completely safe from start to finish. Before the dive, you join an introductory class with all the instructions and procedures. Then there is an adaptation phase in the water, ideal for beginners or anyone who wants to get used to the equipment. You spend about 40 minutes underwater, up to 9 m deep, in a 2-hour activity in total. Children can dive from age 10, with extra attention from the instructors to keep both the child and the parents safe, comfortable and at ease.',
      es: 'Vive una experiencia inolvidable explorando el Naufragio del Puerto, a 300 m de la Praia do Porto, uno de los puntos más fascinantes de Fernando de Noronha. La actividad se hace con instructores experimentados, con total seguridad de principio a fin. Antes del buceo, participas en una clase introductoria con todas las instrucciones y procedimientos. Después hay una fase de adaptación en el agua, ideal para principiantes o para quien quiere familiarizarse con el equipo. Son unos 40 minutos bajo el agua, a hasta 9 m de profundidad, en una actividad de 2 horas en total. Los niños pueden bucear a partir de los 10 años, con atención redoblada de los instructores para la seguridad, la comodidad y la tranquilidad del niño y de los padres.',
    },
    details: {
      pt: ['8h, 10h, 13h ou 15h', 'Até 9 m de profundidade', 'R$ 500 por pessoa'],
      en: ['8 am, 10 am, 1 pm or 3 pm', 'Up to 9 m deep', 'R$ 500 per person'],
      es: ['8, 10, 13 o 15 h', 'Hasta 9 m de profundidad', 'R$ 500 por persona'],
    },
    image: naufragioCilindro,
    heroImage: naufragioCilindro,
    badge: {
      pt: 'Chance de ver golfinhos',
      en: 'Chance to see dolphins',
      es: 'Chance de ver delfines',
    },
    highlights: [
      {
        icon: 'shield',
        title: {
          pt: 'Aula e adaptação',
          en: 'Briefing and adaptation',
          es: 'Clase y adaptación',
        },
        text: {
          pt: 'Aula introdutória e adaptação na água antes de descer, ideal para iniciantes.',
          en: 'An introductory class and time to adapt in the water before going down, ideal for beginners.',
          es: 'Clase introductoria y adaptación en el agua antes de bajar, ideal para principiantes.',
        },
      },
      {
        icon: 'mask',
        title: { pt: 'Naufrágio do Porto', en: 'Porto shipwreck', es: 'Naufragio del Puerto' },
        text: {
          pt: 'Cerca de 40 minutos embaixo d’água, a até 9 m de profundidade.',
          en: 'About 40 minutes underwater, up to 9 m deep.',
          es: 'Unos 40 minutos bajo el agua, a hasta 9 m de profundidad.',
        },
      },
      {
        icon: 'family',
        title: {
          pt: 'Crianças a partir de 10 anos',
          en: 'Children from age 10',
          es: 'Niños a partir de 10 años',
        },
        text: {
          pt: 'Atenção redobrada dos instrutores para a criança e para os pais.',
          en: 'Extra attention from the instructors for the child and the parents.',
          es: 'Atención redoblada de los instructores para el niño y los padres.',
        },
      },
      {
        icon: 'users',
        title: {
          pt: 'Instrutores experientes',
          en: 'Experienced instructors',
          es: 'Instructores experimentados',
        },
        text: {
          pt: 'Atividade credenciada, dentro de todas as normas de segurança.',
          en: 'An accredited activity that follows all safety standards.',
          es: 'Actividad acreditada, dentro de todas las normas de seguridad.',
        },
      },
    ],
    options: [
      {
        id: 'naufragio',
        title: {
          pt: 'Mergulho de cilindro no naufrágio',
          en: 'Shipwreck scuba dive',
          es: 'Buceo con tanque en el naufragio',
        },
        summary: {
          pt: 'Encontro na Praia do Porto. Recomendamos chegar com 10 minutos de antecedência. Horários sujeitos à disponibilidade: consulte com antecedência para garantir sua vaga.',
          en: 'Meeting point at Porto Beach. Please arrive 10 minutes early. Times depend on availability, so ask in advance to secure your spot.',
          es: 'Encuentro en la Praia do Porto. Recomendamos llegar con 10 minutos de anticipación. Horarios sujetos a disponibilidad: consulta con anticipación para asegurar tu lugar.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.schedule,
            value: {
              pt: '8h, 10h, 13h ou 15h',
              en: '8 am, 10 am, 1 pm or 3 pm',
              es: '8, 10, 13 o 15 h',
            },
          },
          {
            icon: 'compass',
            label: factLabels.duration,
            value: {
              pt: '2h no total, cerca de 40 min embaixo d’água',
              en: '2 hours in total, about 40 min underwater',
              es: '2 h en total, unos 40 min bajo el agua',
            },
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
          pt: [
            'Aula introdutória e adaptação na água',
            'Acompanhamento de instrutores experientes',
            'Crianças a partir de 10 anos',
          ],
          en: [
            'Introductory class and adaptation in the water',
            'Guided by experienced instructors',
            'Children from age 10',
          ],
          es: [
            'Clase introductoria y adaptación en el agua',
            'Acompañamiento de instructores experimentados',
            'Niños a partir de 10 años',
          ],
        },
        photos: [naufragioCilindro, naufragioTartaruga, naufragioJoinha],
        priceUnit: 'perPerson',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 500 }],
      },
    ],
    gallery: [naufragioTartaruga, naufragioJoinha, naufragioCilindro],
  },
  {
    id: 'mergulho-cilindro-embarcado',
    category: 'Mar',
    title: {
      pt: 'Mergulho de cilindro embarcado',
      en: 'Boat scuba dive',
      es: 'Buceo con tanque desde barco',
    },
    summary: {
      pt: 'Batismo de mergulho saindo de catamarã nas Ilhas Secundárias, com 1 instrutor para cada cliente.',
      en: 'A scuba diving introduction from a catamaran around the secondary islands, with one instructor per guest.',
      es: 'Bautismo de buceo saliendo en catamarán por las islas secundarias, con 1 instructor por cliente.',
    },
    description: {
      pt: 'O mergulho é feito na área do Parque Marinho, na região das Ilhas Secundárias. A navegação é em um catamarã espaçoso e confortável, com o melhor capitão da ilha, que sempre escolhe o ponto de mergulho mais bonito e seguro de acordo com as condições do mar no dia. O batismo é uma experiência tranquila, segura e divertida para quem nunca mergulhou, não tem curso ou não sabe nadar. O atendimento é exclusivo, com 1 instrutor para cada cliente, e os instrutores são profissionais certificados e experientes que ficam com você durante todo o mergulho. Como no Parque Marinho é proibido pescar, a vida marinha é muito rica: é comum ver tartarugas, moreias, tubarões-lixa e tubarões-limão (inofensivos), polvos, raias-prego, raias-chita e muitos outros peixes.',
      en: 'The dive takes place in the Marine Park, around the secondary islands. You sail on a spacious, comfortable catamaran with the best captain on the island, who always picks the most beautiful and safest dive spot for the day’s sea conditions. The introductory dive is a calm, safe and fun experience for anyone who has never dived, has no certification or cannot swim. The service is exclusive, with one instructor per guest, and the instructors are certified, experienced professionals who stay with you throughout the dive. Since fishing is forbidden in the Marine Park, marine life is very rich: it is common to see turtles, moray eels, nurse sharks and lemon sharks (harmless), octopuses, rays and many other fish.',
      es: 'El buceo se hace en el área del Parque Marino, en la región de las islas secundarias. La navegación es en un catamarán amplio y cómodo, con el mejor capitán de la isla, que siempre elige el punto de buceo más lindo y seguro según las condiciones del mar del día. El bautismo es una experiencia tranquila, segura y divertida para quien nunca buceó, no tiene curso o no sabe nadar. La atención es exclusiva, con 1 instructor por cliente, y los instructores son profesionales certificados y experimentados que te acompañan durante todo el buceo. Como en el Parque Marino está prohibido pescar, la vida marina es muy rica: es común ver tortugas, morenas, tiburones gata y tiburones limón (inofensivos), pulpos, rayas y muchos otros peces.',
    },
    details: {
      pt: ['Manhã ou tarde', 'Até 12 m de profundidade', 'A partir de R$ 1.050'],
      en: ['Morning or afternoon', 'Up to 12 m deep', 'From R$ 1,050'],
      es: ['Mañana o tarde', 'Hasta 12 m de profundidad', 'Desde R$ 1.050'],
    },
    image: embarcadoTartaruga,
    heroImage: embarcadoTartaruga,
    requiresParkCard: true,
    badge: {
      pt: 'Chance de ver golfinhos',
      en: 'Chance to see dolphins',
      es: 'Chance de ver delfines',
    },
    highlights: [
      {
        icon: 'users',
        title: {
          pt: '1 instrutor por cliente',
          en: 'One instructor per guest',
          es: '1 instructor por cliente',
        },
        text: {
          pt: 'Para quem nunca mergulhou, não tem curso ou não sabe nadar.',
          en: 'For anyone who has never dived, has no certification or cannot swim.',
          es: 'Para quien nunca buceó, no tiene curso o no sabe nadar.',
        },
      },
      {
        icon: 'compass',
        title: { pt: 'Ilhas Secundárias', en: 'Secondary islands', es: 'Islas secundarias' },
        text: {
          pt: 'Catamarã confortável e o melhor ponto do dia, escolhido pelo capitão.',
          en: 'A comfortable catamaran and the best spot of the day, picked by the captain.',
          es: 'Catamarán cómodo y el mejor punto del día, elegido por el capitán.',
        },
      },
      {
        icon: 'wave',
        title: { pt: 'Vida marinha rica', en: 'Rich marine life', es: 'Vida marina rica' },
        text: {
          pt: 'Tartarugas, moreias, tubarões inofensivos, polvos e raias.',
          en: 'Turtles, moray eels, harmless sharks, octopuses and rays.',
          es: 'Tortugas, morenas, tiburones inofensivos, pulpos y rayas.',
        },
      },
      {
        icon: 'mask',
        title: { pt: 'Até 12 m', en: 'Up to 12 m', es: 'Hasta 12 m' },
        text: {
          pt: 'Cerca de 35 minutos de mergulho, com equipamento incluso.',
          en: 'About 35 minutes of diving, with all gear included.',
          es: 'Unos 35 minutos de buceo, con equipo incluido.',
        },
      },
    ],
    options: [
      {
        id: 'batismo',
        title: {
          pt: 'Batismo embarcado',
          en: 'Boat introductory dive',
          es: 'Bautismo desde barco',
        },
        summary: {
          pt: 'No caminho até o ponto de mergulho os instrutores dão uma aula rápida. Depois, você é equipado, pratica exercícios básicos na superfície e começa o mergulho quando se sentir confortável.',
          en: 'On the way to the dive spot, the instructors give a short class. Then you get geared up, practice basic exercises at the surface and start diving when you feel comfortable.',
          es: 'En el camino al punto de buceo, los instructores dan una clase breve. Después te equipan, practicas ejercicios básicos en la superficie y empiezas a bucear cuando te sientas cómodo.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.schedule,
            value: {
              pt: '7h15 às 11h30 ou 13h30 às 17h (domingo só às 7h30)',
              en: '7:15–11:30 am or 1:30–5 pm (Sundays 7:30 am only)',
              es: '7:15 a 11:30 h o 13:30 a 17 h (domingos solo a las 7:30 h)',
            },
          },
          {
            icon: 'compass',
            label: factLabels.duration,
            value: {
              pt: 'Cerca de 35 min, até 12 m',
              en: 'About 35 min, up to 12 m',
              es: 'Unos 35 min, hasta 12 m',
            },
          },
          {
            icon: 'mapPin',
            label: factLabels.transfer,
            value: {
              pt: 'Ida e volta incluso',
              en: 'Round trip included',
              es: 'Ida y vuelta incluido',
            },
          },
        ],
        includes: {
          pt: [
            'Todo o equipamento, higienizado',
            '1 instrutor para cada cliente',
            'Aula rápida a caminho do ponto de mergulho',
          ],
          en: [
            'All equipment, sanitized',
            'One instructor per guest',
            'Short class on the way to the dive spot',
          ],
          es: [
            'Todo el equipo, higienizado',
            '1 instructor por cliente',
            'Clase breve camino al punto de buceo',
          ],
        },
        photos: [
          embarcadoTartaruga,
          embarcadoCatamaras,
          embarcadoRaia,
          embarcadoCardume,
          embarcadoCorais,
          embarcadoEsponja,
        ],
        priceUnit: 'perPerson',
        prices: [
          {
            label: {
              pt: 'Mergulho no dinheiro ou Pix',
              en: 'Dive, cash or Pix',
              es: 'Buceo en efectivo o Pix',
            },
            amount: 1050,
          },
          {
            label: {
              pt: 'Mergulho no cartão (via link)',
              en: 'Dive, card (payment link)',
              es: 'Buceo con tarjeta (link de pago)',
            },
            amount: 1150,
          },
          {
            label: {
              pt: 'Acompanhante (sem mergulhar)',
              en: 'Companion (not diving)',
              es: 'Acompañante (sin bucear)',
            },
            amount: 450,
          },
        ],
        priceNote: {
          pt: 'Para confirmar a reserva, preencha a ficha de cadastro e faça o pagamento até as 19h do dia anterior ao mergulho.',
          en: 'To confirm your booking, fill in the registration form and pay by 7 pm the day before the dive.',
          es: 'Para confirmar la reserva, completa la ficha de registro y paga hasta las 19 h del día anterior al buceo.',
        },
      },
    ],
    policies: [
      {
        icon: 'alert',
        title: {
          pt: 'Antes do mergulho',
          en: 'Before the dive',
          es: 'Antes del buceo',
        },
        items: {
          pt: [
            'Não é permitido embarcar sem ter pago e preenchido a ficha de cadastro.',
            'Apresente a carteirinha ou o QR Code do Parque Nacional Marinho antes do embarque.',
            'Mude o fuso horário do celular para o modo manual para não perder o horário.',
            'Não é permitido mergulhar no dia da volta ao continente: mergulhe até um dia antes.',
            'Não é permitido consumir bebidas alcoólicas ou drogas antes do mergulho, nem estar sob o efeito delas.',
          ],
          en: [
            'You cannot board without paying and filling in the registration form.',
            'Show your Marine National Park card or QR code before boarding.',
            'Set your phone’s time zone to manual so you don’t miss the time.',
            'Diving is not allowed on the day you fly back to the mainland: dive up to the day before.',
            'Alcohol or drugs are not allowed before the dive, and you cannot be under their effect.',
          ],
          es: [
            'No se puede embarcar sin haber pagado y completado la ficha de registro.',
            'Presenta el carnet o el código QR del Parque Nacional Marino antes de embarcar.',
            'Pon la zona horaria del celular en modo manual para no perder el horario.',
            'No se puede bucear el día del regreso al continente: bucea hasta un día antes.',
            'No se permite consumir alcohol o drogas antes del buceo, ni estar bajo su efecto.',
          ],
        },
      },
      {
        icon: 'camera',
        title: {
          pt: 'Fotos do mergulho',
          en: 'Dive photos',
          es: 'Fotos del buceo',
        },
        items: {
          pt: [
            'O fotógrafo a bordo registra todos os participantes durante o mergulho.',
            'Depois, você escolhe na loja quantas fotos quer comprar, se quiser.',
            'A loja da Barracudas fica no prédio da Rip Curl e da Águas Claras, ao lado da Praça Flamboyant.',
            'Fotos disponíveis de segunda a sábado, das 18h30 às 20h30, digitais e em alta resolução, transferidas direto para o seu celular.',
          ],
          en: [
            'The photographer on board takes pictures of every participant during the dive.',
            'Afterwards, you choose at the shop how many photos you want to buy, if any.',
            'The Barracudas shop is in the same building as Rip Curl and Águas Claras, next to Praça Flamboyant.',
            'Photos are available Monday to Saturday, 6:30 to 8:30 pm, digital and in high resolution, sent straight to your phone.',
          ],
          es: [
            'El fotógrafo a bordo registra a todos los participantes durante el buceo.',
            'Después eliges en la tienda cuántas fotos quieres comprar, si quieres.',
            'La tienda de Barracudas está en el edificio de Rip Curl y Águas Claras, al lado de la Praça Flamboyant.',
            'Fotos disponibles de lunes a sábado, de 18:30 a 20:30 h, digitales y en alta resolución, enviadas directo a tu celular.',
          ],
        },
      },
      {
        icon: 'calendar',
        title: {
          pt: 'Política de cancelamento',
          en: 'Cancellation policy',
          es: 'Política de cancelación',
        },
        items: {
          pt: [
            'Até 7 dias antes do passeio: reembolso de 100%.',
            'De 7 dias a 1 dia antes: reembolso de 30%.',
            'Nas 24 horas antes do passeio: sem reembolso.',
            'Não comparecimento não dá direito a reembolso nem remarcação.',
            'Cancelamento por questão médica tem reembolso integral, com atestado médico.',
          ],
          en: [
            'Up to 7 days before the trip: 100% refund.',
            'From 7 days to 1 day before: 30% refund.',
            'Within 24 hours of the trip: no refund.',
            'No-shows get no refund or rescheduling.',
            'Medical cancellations get a full refund with a doctor’s note.',
          ],
          es: [
            'Hasta 7 días antes del paseo: reembolso del 100%.',
            'De 7 días a 1 día antes: reembolso del 30%.',
            'En las 24 horas antes del paseo: sin reembolso.',
            'No presentarse no da derecho a reembolso ni a cambio de fecha.',
            'Las cancelaciones por motivos médicos tienen reembolso total, con certificado médico.',
          ],
        },
      },
    ],
    gallery: [
      embarcadoRaia,
      embarcadoCardume,
      embarcadoCatamaras,
      embarcadoCorais,
      embarcadoEsponja,
      embarcadoTartaruga,
    ],
  },
]
