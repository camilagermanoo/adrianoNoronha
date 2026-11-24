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

  it('marks the tours that are exclusive with Adriano', () => {
    expect(
      tours
        .filter((tour) => tour.exclusive?.pt === 'Exclusivo com o Adriano')
        .map((tour) => tour.id),
    ).toEqual([
      'snorkel-naufragio',
      'trilha-piquinho',
      'trilha-costa-esmeralda',
      'ensaios-subaquaticos',
      'sessao-fotos-buggy',
      'travessia-snorkel',
    ])
  })
})
