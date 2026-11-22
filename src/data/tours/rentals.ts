import buggy from '../../assets/tours/alugueis/buggy.webp?responsive'
import carroFechado from '../../assets/tours/alugueis/carro-fechado.webp?responsive'
import gopro from '../../assets/tours/alugueis/gopro.webp?responsive'
import moto from '../../assets/tours/alugueis/moto.webp?responsive'
import type { Tour } from '../../types'
import { dailyRate, factLabels } from './labels'

export const rentalTours: Tour[] = [
  {
    id: 'alugueis',
    category: 'Aluguel',
    title: { pt: 'Aluguéis', en: 'Rentals', es: 'Alquileres' },
    summary: {
      pt: 'Buggy, carro fechado, moto e GoPro para explorar no seu ritmo.',
      en: 'Buggy, car, motorbike and GoPro to explore at your own pace.',
      es: 'Buggy, auto cerrado, moto y GoPro para explorar a tu ritmo.',
    },
    description: {
      pt: 'Explore a ilha no seu ritmo com veículos em ótimo estado e registre cada momento com uma GoPro. Escolha a opção ideal e fale com o Adriano para saber a disponibilidade. As diárias são de 24 horas.',
      en: 'Explore the island at your own pace with well-kept vehicles and capture every moment with a GoPro. Pick the right option and message Adriano to check availability. Rentals are per 24-hour day.',
      es: 'Explora la isla a tu ritmo con vehículos en excelente estado y registra cada momento con una GoPro. Elige la opción ideal y habla con Adriano para saber la disponibilidad. Los alquileres son por día de 24 horas.',
    },
    details: {
      pt: ['Diárias de 24h', 'Buggy, carro, moto ou GoPro', 'A partir de R$ 250'],
      en: ['24-hour rentals', 'Buggy, car, motorbike or GoPro', 'From R$ 250'],
      es: ['Por día de 24 h', 'Buggy, auto, moto o GoPro', 'Desde R$ 250'],
    },
    image: buggy,
    heroImage: buggy,
    imagePosition: 'center 60%',
    heroImagePosition: 'center 60%',
    optionStyle: 'standalone',
    options: [
      {
        id: 'buggy',
        title: { pt: 'Aluguel de buggy', en: 'Buggy rental', es: 'Alquiler de buggy' },
        summary: {
          pt: 'O jeito clássico de rodar pela ilha, ao ar livre.',
          en: 'The classic open-air way to get around the island.',
          es: 'La forma clásica de recorrer la isla, al aire libre.',
        },
        facts: [{ icon: 'calendar', label: factLabels.period, value: dailyRate }],
        photos: [buggy],
        priceUnit: 'perDay',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 500 }],
      },
      {
        id: 'carro-fechado',
        title: { pt: 'Aluguel de carro fechado', en: 'Car rental', es: 'Alquiler de auto cerrado' },
        summary: {
          pt: 'Mais conforto e proteção do sol e da chuva para circular pela ilha.',
          en: 'More comfort and shelter from sun and rain while getting around.',
          es: 'Más comodidad y protección del sol y la lluvia para recorrer la isla.',
        },
        facts: [{ icon: 'calendar', label: factLabels.period, value: dailyRate }],
        photos: [carroFechado],
        priceUnit: 'perDay',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 700 }],
      },
      {
        id: 'moto',
        title: { pt: 'Aluguel de moto', en: 'Motorbike rental', es: 'Alquiler de moto' },
        summary: {
          pt: 'Agilidade para ir de praia em praia.',
          en: 'An easy way to hop from beach to beach.',
          es: 'Agilidad para ir de playa en playa.',
        },
        facts: [{ icon: 'calendar', label: factLabels.period, value: dailyRate }],
        photos: [moto],
        priceUnit: 'perDay',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 250 }],
      },
      {
        id: 'gopro',
        title: { pt: 'Aluguel de GoPro', en: 'GoPro rental', es: 'Alquiler de GoPro' },
        summary: {
          pt: 'Registre mergulhos e passeios em fotos e vídeos.',
          en: 'Capture your dives and trips in photos and videos.',
          es: 'Registra buceos y paseos en fotos y videos.',
        },
        facts: [{ icon: 'calendar', label: factLabels.period, value: dailyRate }],
        photos: [gopro],
        priceUnit: 'perDay',
        prices: [{ label: { pt: 'Valor', en: 'Price', es: 'Precio' }, amount: 250 }],
      },
    ],
    gallery: [buggy, carroFechado, moto, gopro],
  },
]
