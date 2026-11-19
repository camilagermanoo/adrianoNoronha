import bordoLancha from '../assets/moments/bordo-lancha.webp?responsive'
import canoaAmanhecer from '../assets/moments/canoa-amanhecer.webp?responsive'
import casalMirante from '../assets/moments/casal-mirante.webp?responsive'
import churrascoBordo from '../assets/moments/churrasco-bordo.webp?responsive'
import piscinaCasal from '../assets/moments/piscina-casal.webp?responsive'
import piscinaRochas from '../assets/moments/piscina-rochas.webp?responsive'
import porDoSolMar from '../assets/moments/por-do-sol-mar.webp?responsive'
import type { Picture } from 'vite-imagetools'
import type { Localized } from '../i18n/locales'

export interface Moment {
  id: string
  image: Picture
  caption: Localized
  tall?: boolean
}

export const moments: Moment[] = [
  {
    id: 'canoa',
    image: canoaAmanhecer,
    caption: {
      pt: 'Canoa havaiana ao amanhecer',
      en: 'Outrigger canoe at sunrise',
      es: 'Canoa hawaiana al amanecer',
    },
    tall: true,
  },
  {
    id: 'piscina-casal',
    image: piscinaCasal,
    caption: {
      pt: 'Piscinas naturais na maré baixa',
      en: 'Natural pools at low tide',
      es: 'Piscinas naturales con marea baja',
    },
  },
  {
    id: 'por-do-sol',
    image: porDoSolMar,
    caption: {
      pt: 'Pôr do sol visto do mar',
      en: 'Sunset seen from the sea',
      es: 'Atardecer visto desde el mar',
    },
    tall: true,
  },
  {
    id: 'piscina-rochas',
    image: piscinaRochas,
    caption: {
      pt: 'Entre as rochas do circuito das piscinas',
      en: 'Among the rocks of the pools circuit',
      es: 'Entre las rocas del circuito de piscinas',
    },
  },
  {
    id: 'churrasco',
    image: churrascoBordo,
    caption: {
      pt: 'Churrasco de peixe a bordo',
      en: 'Grilled fish on board',
      es: 'Parrillada de pescado a bordo',
    },
  },
  {
    id: 'casal-mirante',
    image: casalMirante,
    caption: {
      pt: 'Fim de tarde no alto da trilha',
      en: 'Late afternoon at the top of the trail',
      es: 'Atardecer en lo alto del sendero',
    },
  },
  {
    id: 'bordo',
    image: bordoLancha,
    caption: {
      pt: 'Serviço de bordo na lancha privativa',
      en: 'Onboard service on the private speedboat',
      es: 'Servicio a bordo en la lancha privada',
    },
  },
]
