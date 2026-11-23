import { describe, expect, it } from 'vitest'
import { tours } from '.'

describe('tours', () => {
  it('follows the order requested by Adriano', () => {
    expect(tours.map((tour) => tour.id)).toEqual([
      'ilha-tour',
      'entardecer-vip',
      'canoa-havaiana',
      'snorkel-naufragio',
      'bike-aquatica',
      'barco-tradicional',
      'lanchas-privativas',
      'piscinas-naturais',
      'piscina-morro-de-fora',
      'mergulho-cilindro-naufragio',
      'mergulho-cilindro-embarcado',
      'trilha-piquinho',
      'trilhas-parque',
      'trilha-costa-esmeralda',
      'ensaios-subaquaticos',
      'sessao-fotos-buggy',
      'lancha-transparente',
      'catamara-trovao-dos-mares',
      'catamara-happy-days',
      'travessia-snorkel',
      'passeio-a-cavalo',
      'rapel',
      'alugueis',
    ])
  })
})
