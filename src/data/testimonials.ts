import type { Locale, Localized } from '../i18n/locales'

export interface Testimonial {
  id: string
  author?: string
  country?: string
  instagram?: string
  source: 'Instagram' | 'WhatsApp'
  tourId?: string
  originalLocale: Locale
  quote: Localized
}

export const testimonials: Testimonial[] = [
  {
    id: 'sabrinna',
    author: 'Sabrinna A.',
    source: 'Instagram',
    originalLocale: 'pt',
    quote: {
      pt: 'Quem estiver vindo para Fernando de Noronha, não deixe de fazer a sua programação pela ilha com o meu amigo Adriano. A sua experiência em Noronha será inesquecível!',
      en: 'If you are coming to Fernando de Noronha, make sure to plan your island program with my friend Adriano. Your experience in Noronha will be unforgettable!',
      es: 'Si vienes a Fernando de Noronha, no dejes de organizar tu programación por la isla con mi amigo Adriano. ¡Tu experiencia en Noronha será inolvidable!',
    },
  },
  {
    id: 'lari',
    author: 'Lari A.',
    source: 'Instagram',
    originalLocale: 'pt',
    quote: {
      pt: 'Graças ao Adriano, nossa viagem foi inesquecível! Roteiro perfeito! Obrigada, amigo!',
      en: 'Thanks to Adriano, our trip was unforgettable! Perfect itinerary! Thank you, my friend!',
      es: '¡Gracias a Adriano, nuestro viaje fue inolvidable! ¡Itinerario perfecto! ¡Gracias, amigo!',
    },
  },
  {
    id: 'viajante-bike',
    source: 'WhatsApp',
    tourId: 'bike-aquatica',
    originalLocale: 'en',
    quote: {
      pt: 'Muito obrigada pela melhor experiência da minha vida! Foi incrível. Nunca vou esquecer! E vou dizer a todos os meus amigos para reservarem com você!',
      en: 'Thank you so much for the best experience of my life! It was amazing. I will never forget it! And I will tell all my friends to book with you!',
      es: '¡Muchas gracias por la mejor experiencia de mi vida! Fue increíble. ¡Nunca la voy a olvidar! ¡Y les diré a todos mis amigos que reserven contigo!',
    },
  },
  {
    id: 'samara',
    author: 'Samara M.',
    source: 'Instagram',
    originalLocale: 'pt',
    quote: {
      pt: 'Para quem quer vir para Noronha, super indico o Adriano. Excelentes passeios e ainda é fotógrafo. Gratidão, Adriano!',
      en: 'For anyone coming to Noronha, I highly recommend Adriano. Excellent tours and he is a photographer too. Thank you, Adriano!',
      es: 'Para quien quiera venir a Noronha, recomiendo mucho a Adriano. Excelentes paseos y además es fotógrafo. ¡Gracias, Adriano!',
    },
  },
  {
    id: 'amanda',
    author: 'Amanda G.',
    source: 'Instagram',
    originalLocale: 'pt',
    quote: {
      pt: 'Obrigada por toda paciência, suporte, tu foi surreal.',
      en: 'Thank you for all the patience and support, you were unreal.',
      es: 'Gracias por toda la paciencia y el apoyo, fuiste increíble.',
    },
  },
  {
    id: 'luciano',
    author: 'Luciano',
    source: 'Instagram',
    originalLocale: 'pt',
    quote: {
      pt: 'Na ilha temos o apoio do Adriano. 10/10!',
      en: 'On the island we have Adriano by our side. 10/10!',
      es: 'En la isla contamos con el apoyo de Adriano. ¡10/10!',
    },
  },
]
