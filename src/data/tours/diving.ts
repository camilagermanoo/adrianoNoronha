import batismoNaufragio from '../../assets/tours/batismo-naufragio.webp?responsive'
import cilindroEmbarcado from '../../assets/tours/cilindro-embarcado.webp?responsive'
import embarcadoCardume from '../../assets/tours/cilindro-embarcado/cardume.webp?responsive'
import naufragioCilindro from '../../assets/tours/cilindro-naufragio/naufragio.webp?responsive'
import snorkel from '../../assets/tours/snorkel.webp?responsive'
import snorkelMergulho from '../../assets/tours/snorkel-naufragio/mergulho.webp?responsive'
import snorkelPeixes from '../../assets/tours/snorkel-naufragio/peixes.webp?responsive'
import type { Tour } from '../../types'

export const divingTours: Tour[] = [
  {
    id: 'snorkel-naufragio',
    category: 'Mergulho',
    title: {
      pt: 'Mergulho de snorkel no naufrágio',
      en: 'Snorkeling at the shipwreck',
      es: 'Snorkel en el naufragio',
    },
    summary: {
      pt: 'Snorkel guiado até o naufrágio, com vídeos inclusos.',
      en: 'Guided snorkeling to the shipwreck, videos included.',
      es: 'Snorkel guiado hasta el naufragio, con videos incluidos.',
    },
    description: {
      pt: 'Observe de perto a vida marinha em um cenário cheio de encanto e aventura. O percurso de 300 m até o naufrágio dura cerca de 40 minutos dentro d’água, em 1 hora de atividade com guia. Vídeos e transfer de buggy estão inclusos; os equipamentos de mergulho não.',
      en: 'See marine life up close in a charming, adventurous setting. The 300 m route to the shipwreck takes about 40 minutes in the water, within a 1-hour guided activity. Videos and buggy transfer are included; diving gear is not.',
      es: 'Observa de cerca la vida marina en un escenario lleno de encanto y aventura. El recorrido de 300 m hasta el naufragio dura unos 40 minutos en el agua, en 1 hora de actividad con guía. Los videos y el traslado en buggy están incluidos; el equipo de buceo no.',
    },
    details: {
      pt: ['300 m de percurso', 'Vídeos inclusos', 'Transfer de buggy'],
      en: ['300 m route', 'Videos included', 'Buggy transfer'],
      es: ['300 m de recorrido', 'Videos incluidos', 'Traslado en buggy'],
    },
    image: snorkelMergulho,
    gallery: [snorkelPeixes, snorkel],
  },
  {
    id: 'batismo-naufragio',
    category: 'Mergulho',
    title: {
      pt: 'Mergulho de cilindro no naufrágio',
      en: 'Scuba dive at the shipwreck',
      es: 'Buceo con tanque en el naufragio',
    },
    summary: {
      pt: 'Mergulho com cilindro saindo da praia até o naufrágio do Porto.',
      en: 'A scuba dive from the beach to the harbor shipwreck.',
      es: 'Buceo con tanque desde la orilla hasta el naufragio del Puerto.',
    },
    description: {
      pt: 'Explore o naufrágio de perto e descubra um mundo subaquático repleto de vida marinha. Saindo da beira da praia, são cerca de 40 minutos embaixo d’água, a 8 metros de profundidade, em 2 horas de atividade com instrutor qualificado. Não é preciso ter experiência.',
      en: 'Explore the shipwreck up close and discover an underwater world full of marine life. Starting from the beach, you spend about 40 minutes underwater, 8 meters deep, within a 2-hour activity with a qualified instructor. No experience needed.',
      es: 'Explora el naufragio de cerca y descubre un mundo submarino lleno de vida marina. Saliendo desde la orilla, son unos 40 minutos bajo el agua, a 8 metros de profundidad, en 2 horas de actividad con instructor calificado. No se necesita experiencia.',
    },
    details: {
      pt: ['40 min embaixo d’água', '2 h de atividade', 'Sem transfer'],
      en: ['40 min underwater', '2-hour activity', 'No transfer'],
      es: ['40 min bajo el agua', '2 h de actividad', 'Sin traslado'],
    },
    image: naufragioCilindro,
    gallery: [batismoNaufragio],
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
      pt: 'Mergulho a partir do barco, guiado por instrutor e com tudo incluso.',
      en: 'A dive from the boat, led by an instructor with everything included.',
      es: 'Buceo desde el barco, guiado por instructor y con todo incluido.',
    },
    description: {
      pt: 'Explore o fascinante mundo subaquático da ilha, cercado por corais, peixes coloridos e uma natureza marinha surpreendente. O mergulho é acompanhado por instrutor, com todo o equipamento e transfer inclusos, em saídas diárias.',
      en: 'Explore the island’s fascinating underwater world, surrounded by corals, colorful fish and amazing marine life. The dive is led by an instructor, with all equipment and transfer included, on daily departures.',
      es: 'Explora el fascinante mundo submarino de la isla, rodeado de corales, peces de colores y una naturaleza marina sorprendente. El buceo es acompañado por instructor, con todo el equipo y el traslado incluidos, en salidas diarias.',
    },
    details: {
      pt: ['7h15 às 11h30 ou 13h30 às 17h', 'Equipamento incluso', 'Transfer incluso'],
      en: ['7:15 to 11:30 am or 1:30 to 5 pm', 'Equipment included', 'Transfer included'],
      es: ['7:15 a 11:30 h o 13:30 a 17 h', 'Equipo incluido', 'Traslado incluido'],
    },
    image: embarcadoCardume,
    gallery: [cilindroEmbarcado],
  },
]
