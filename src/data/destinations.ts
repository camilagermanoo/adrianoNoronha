import baiaDosPorcos from '../assets/places/baia-dos-porcos.webp'
import marDeFora from '../assets/places/mar-de-fora.webp'
import mirantes from '../assets/places/mirantes.webp'
import piscinas from '../assets/places/piscinas.webp'
import porDoSol from '../assets/places/por-do-sol.webp'
import praias from '../assets/places/praias.webp'
import sancho from '../assets/places/sancho.webp'
import type { Destination } from '../types'

export const destinations: Destination[] = [
  {
    id: 'baia-dos-porcos',
    name: { pt: 'Baía dos Porcos', en: 'Baía dos Porcos', es: 'Baía dos Porcos' },
    description: {
      pt: 'Piscinas entre as rochas e a vista mais famosa do Morro Dois Irmãos.',
      en: 'Rock pools and the most famous view of Morro Dois Irmãos.',
      es: 'Piscinas entre las rocas y la vista más famosa del Morro Dois Irmãos.',
    },
    tip: { pt: 'Vá na maré baixa', en: 'Go at low tide', es: 'Ve con marea baja' },
    image: baiaDosPorcos,
  },
  {
    id: 'baia-do-sancho',
    name: { pt: 'Baía do Sancho', en: 'Baía do Sancho', es: 'Baía do Sancho' },
    description: {
      pt: 'Areia dourada, falésias e um mar tão claro que parece piscina.',
      en: 'Golden sand, cliffs and water so clear it looks like a pool.',
      es: 'Arena dorada, acantilados y un mar tan claro que parece piscina.',
    },
    tip: {
      pt: 'Acesso por escada ou de barco',
      en: 'Reached by ladder or by boat',
      es: 'Acceso por escalera o en barco',
    },
    image: sancho,
  },
  {
    id: 'piscinas-naturais',
    name: { pt: 'Piscinas naturais', en: 'Natural pools', es: 'Piscinas naturales' },
    description: {
      pt: 'Poças cristalinas que surgem entre as pedras quando a maré baixa.',
      en: 'Crystal-clear pools that appear between the rocks at low tide.',
      es: 'Pozas cristalinas que aparecen entre las rocas cuando baja la marea.',
    },
    tip: {
      pt: 'Circuito guiado disponível',
      en: 'Guided circuit available',
      es: 'Circuito guiado disponible',
    },
    image: piscinas,
  },
  {
    id: 'mirantes',
    name: { pt: 'Mirantes', en: 'Viewpoints', es: 'Miradores' },
    description: {
      pt: 'Pontos altos para ver a ilha inteira, os golfinhos e o horizonte.',
      en: 'High spots to see the whole island, the dolphins and the horizon.',
      es: 'Puntos altos para ver toda la isla, los delfines y el horizonte.',
    },
    tip: {
      pt: 'Incluídos no Ilha Tour',
      en: 'Included in the Island Tour',
      es: 'Incluidos en el Ilha Tour',
    },
    image: mirantes,
  },
  {
    id: 'mar-de-fora',
    name: { pt: 'Mar de Fora', en: 'Mar de Fora', es: 'Mar de Fora' },
    description: {
      pt: 'O lado voltado para a África, com costões, vento e paisagem selvagem.',
      en: 'The side facing Africa, with rocky shores, wind and wild landscapes.',
      es: 'El lado que mira hacia África, con costas rocosas, viento y paisaje salvaje.',
    },
    tip: {
      pt: 'Trilhas do Parque Nacional',
      en: 'National Park trails',
      es: 'Senderos del Parque Nacional',
    },
    image: marDeFora,
  },
  {
    id: 'praias',
    name: {
      pt: 'Praias do Mar de Dentro',
      en: 'Mar de Dentro beaches',
      es: 'Playas del Mar de Dentro',
    },
    description: {
      pt: 'Águas calmas e mornas, perfeitas para banho e snorkel.',
      en: 'Calm, warm water, perfect for swimming and snorkeling.',
      es: 'Aguas calmas y tibias, perfectas para nadar y hacer snorkel.',
    },
    tip: { pt: 'Ótimas para snorkel', en: 'Great for snorkeling', es: 'Ideales para snorkel' },
    image: praias,
  },
  {
    id: 'por-do-sol',
    name: { pt: 'Pôr do sol', en: 'Sunsets', es: 'Atardeceres' },
    description: {
      pt: 'Todo fim de tarde tem espetáculo, da areia, do mirante ou do barco.',
      en: 'Every evening puts on a show, from the sand, a viewpoint or a boat.',
      es: 'Cada tarde hay espectáculo, desde la arena, el mirador o el barco.',
    },
    tip: {
      pt: 'Entardecer VIP ou Piquinho',
      en: 'VIP Sunset or Piquinho',
      es: 'Atardecer VIP o Piquinho',
    },
    image: porDoSol,
  },
]
