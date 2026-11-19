import bordoLancha from '../assets/moments/bordo-lancha.webp'
import canoaAmanhecer from '../assets/moments/canoa-amanhecer.webp'
import casalMirante from '../assets/moments/casal-mirante.webp'
import churrascoBordo from '../assets/moments/churrasco-bordo.webp'
import piscinaCasal from '../assets/moments/piscina-casal.webp'
import piscinaRochas from '../assets/moments/piscina-rochas.webp'
import porDoSolMar from '../assets/moments/por-do-sol-mar.webp'

export interface Moment {
  image: string
  caption: string
  tall?: boolean
}

export const moments: Moment[] = [
  { image: canoaAmanhecer, caption: 'Canoa havaiana ao amanhecer', tall: true },
  { image: piscinaCasal, caption: 'Piscinas naturais na maré baixa' },
  { image: porDoSolMar, caption: 'Pôr do sol visto do mar', tall: true },
  { image: piscinaRochas, caption: 'Entre as rochas do circuito das piscinas' },
  { image: churrascoBordo, caption: 'Churrasco de peixe a bordo' },
  { image: casalMirante, caption: 'Fim de tarde no alto da trilha' },
  { image: bordoLancha, caption: 'Serviço de bordo na lancha privativa' },
]
