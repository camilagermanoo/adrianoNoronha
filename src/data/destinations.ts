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
    name: 'Baía dos Porcos',
    description: 'Piscinas entre as rochas e a vista mais famosa do Morro Dois Irmãos.',
    tip: 'Vá na maré baixa',
    image: baiaDosPorcos,
  },
  {
    id: 'baia-do-sancho',
    name: 'Baía do Sancho',
    description: 'Areia dourada, falésias e um mar tão claro que parece piscina.',
    tip: 'Acesso por escada ou de barco',
    image: sancho,
  },
  {
    id: 'piscinas-naturais',
    name: 'Piscinas naturais',
    description: 'Poças cristalinas que surgem entre as pedras quando a maré baixa.',
    tip: 'Circuito guiado disponível',
    image: piscinas,
  },
  {
    id: 'mirantes',
    name: 'Mirantes',
    description: 'Pontos altos para ver a ilha inteira, os golfinhos e o horizonte.',
    tip: 'Incluídos no Ilha Tour',
    image: mirantes,
  },
  {
    id: 'mar-de-fora',
    name: 'Mar de Fora',
    description: 'O lado voltado para a África, com costões, vento e paisagem selvagem.',
    tip: 'Trilhas do Parque Nacional',
    image: marDeFora,
  },
  {
    id: 'praias',
    name: 'Praias do Mar de Dentro',
    description: 'Águas calmas e mornas, perfeitas para banho e snorkel.',
    tip: 'Ótimas para snorkel',
    image: praias,
  },
  {
    id: 'por-do-sol',
    name: 'Pôr do sol',
    description: 'Todo fim de tarde tem espetáculo, da areia, do mirante ou do barco.',
    tip: 'Entardecer VIP ou Piquinho',
    image: porDoSol,
  },
]
