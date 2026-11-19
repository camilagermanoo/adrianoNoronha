import descaradinha from '../../assets/tours/lanchas/descaradinha.webp?responsive'
import fishHunter from '../../assets/tours/lanchas/fish-hunter.webp?responsive'
import iateInvictusFly from '../../assets/tours/lanchas/iate-invictus-fly.webp?responsive'
import italianaFerretti from '../../assets/tours/lanchas/italiana-ferretti.webp?responsive'
import myLove from '../../assets/tours/lanchas/my-love.webp?responsive'
import trovaoDosMares from '../../assets/tours/lanchas/trovao-dos-mares.webp?responsive'
import vision from '../../assets/tours/lanchas/vision.webp?responsive'
import type { Tour } from '../../types'
import { factLabels } from './labels'

export const boatTours: Tour[] = [
  {
    id: 'lanchas-privativas',
    category: 'Lancha',
    title: { pt: 'Lanchas privativas', en: 'Private boats', es: 'Lanchas privadas' },
    summary: {
      pt: 'Sete embarcações para passeios exclusivos, de 1 a 8 horas.',
      en: 'Seven boats for private trips, from 1 to 8 hours.',
      es: 'Siete embarcaciones para paseos exclusivos, de 1 a 8 horas.',
    },
    description: {
      pt: 'Conheça Noronha pelo mar com conforto e exclusividade. Do passeio rápido de 1 hora à pescaria oceânica, escolha a embarcação ideal para o seu grupo e fale com o Adriano para saber disponibilidade e valores.',
      en: 'Discover Noronha by sea with comfort and privacy. From a quick 1-hour ride to ocean fishing, choose the right boat for your group and message Adriano for availability and prices.',
      es: 'Conoce Noronha por el mar con comodidad y exclusividad. Del paseo rápido de 1 hora a la pesca oceánica, elige la embarcación ideal para tu grupo y habla con Adriano para saber disponibilidad y precios.',
    },
    details: {
      pt: ['7 embarcações', 'Até 30 pessoas', 'Passeios exclusivos'],
      en: ['7 boats', 'Up to 30 people', 'Private trips'],
      es: ['7 embarcaciones', 'Hasta 30 personas', 'Paseos exclusivos'],
    },
    image: italianaFerretti,
    optionStyle: 'standalone',
    options: [
      {
        id: 'descaradinha',
        title: { pt: 'Lancha Descaradinha', en: 'Descaradinha boat', es: 'Lancha Descaradinha' },
        summary: {
          pt: 'Lancha Dawal de 41 pés com estrutura completa, ideal para passeios e eventos personalizados.',
          en: 'A fully equipped 41-foot Dawal boat, ideal for trips and custom events.',
          es: 'Lancha Dawal de 41 pies con estructura completa, ideal para paseos y eventos personalizados.',
        },
        facts: [
          {
            icon: 'users',
            label: factLabels.capacity,
            value: { pt: 'Até 20 pessoas', en: 'Up to 20 people', es: 'Hasta 20 personas' },
          },
        ],
        includes: {
          pt: [
            'Cabine, cozinha, banheiro e flybridge',
            'Som JBL e carregador de celular',
            'Serviço de bordo',
            'Pet friendly',
          ],
          en: [
            'Cabin, kitchen, bathroom and flybridge',
            'JBL sound system and phone charger',
            'Onboard service',
            'Pet friendly',
          ],
          es: [
            'Cabina, cocina, baño y flybridge',
            'Sonido JBL y cargador de celular',
            'Servicio a bordo',
            'Pet friendly',
          ],
        },
        photos: [descaradinha],
      },
      {
        id: 'italiana-ferretti',
        title: {
          pt: 'Lancha Italiana Ferretti',
          en: 'Italian Ferretti boat',
          es: 'Lancha Italiana Ferretti',
        },
        summary: {
          pt: 'Ferretti de 43 pés com dois dormitórios, perfeita para quem busca conforto e exclusividade.',
          en: 'A 43-foot Ferretti with two cabins, perfect for comfort and privacy.',
          es: 'Ferretti de 43 pies con dos dormitorios, perfecta para quien busca comodidad y exclusividad.',
        },
        facts: [
          {
            icon: 'users',
            label: factLabels.capacity,
            value: { pt: 'Até 15 pessoas', en: 'Up to 15 people', es: 'Hasta 15 personas' },
          },
          {
            icon: 'clock',
            label: factLabels.duration,
            value: { pt: '4 ou 8 horas', en: '4 or 8 hours', es: '4 u 8 horas' },
          },
        ],
        includes: {
          pt: [
            'Parada para snorkel',
            'Stand up paddle e pescaria recreativa',
            'Churrasco a bordo',
            'Dois banheiros, sala, cozinha, varanda e flybridge',
          ],
          en: [
            'Snorkeling stop',
            'Stand up paddle and recreational fishing',
            'Barbecue on board',
            'Two bathrooms, lounge, kitchen, deck and flybridge',
          ],
          es: [
            'Parada para snorkel',
            'Stand up paddle y pesca recreativa',
            'Parrillada a bordo',
            'Dos baños, sala, cocina, terraza y flybridge',
          ],
        },
        photos: [italianaFerretti],
      },
      {
        id: 'my-love',
        title: { pt: 'Lancha My Love', en: 'My Love boat', es: 'Lancha My Love' },
        summary: {
          pt: 'Passeio exclusivo pelas praias do Mar de Dentro, com diversão e churrasco de peixe.',
          en: 'A private trip along the Mar de Dentro beaches, with fun activities and grilled fish.',
          es: 'Paseo exclusivo por las playas del Mar de Dentro, con diversión y parrillada de pescado.',
        },
        facts: [
          {
            icon: 'users',
            label: factLabels.capacity,
            value: { pt: 'Até 30 pessoas', en: 'Up to 30 people', es: 'Hasta 30 personas' },
          },
        ],
        includes: {
          pt: [
            'Paradas para banho e snorkel',
            'Stand up paddle, cooler e caixa de som',
            'Churrasco de peixe com ceviche, salada, pão de alho e frutas',
          ],
          en: [
            'Swimming and snorkeling stops',
            'Stand up paddle, cooler and speaker',
            'Grilled fish with ceviche, salad, garlic bread and fruit',
          ],
          es: [
            'Paradas para nadar y hacer snorkel',
            'Stand up paddle, cooler y parlante',
            'Parrillada de pescado con ceviche, ensalada, pan de ajo y frutas',
          ],
        },
        photos: [myLove],
      },
      {
        id: 'iate-invictus-fly',
        title: {
          pt: 'Iate NX 50 Invictus Fly',
          en: 'NX 50 Invictus Fly yacht',
          es: 'Yate NX 50 Invictus Fly',
        },
        summary: {
          pt: 'Iate de 50 pés com acesso exclusivo à Baía do Sancho e serviço gastronômico completo.',
          en: 'A 50-foot yacht with exclusive access to Baía do Sancho and full dining service.',
          es: 'Yate de 50 pies con acceso exclusivo a la Baía do Sancho y servicio gastronómico completo.',
        },
        facts: [
          {
            icon: 'users',
            label: factLabels.capacity,
            value: { pt: 'Até 6 pessoas', en: 'Up to 6 people', es: 'Hasta 6 personas' },
          },
          {
            icon: 'clock',
            label: factLabels.duration,
            value: { pt: '4 horas', en: '4 hours', es: '4 horas' },
          },
        ],
        includes: {
          pt: ['Acesso à Baía do Sancho', 'Comidas e bebidas a bordo'],
          en: ['Access to Baía do Sancho', 'Food and drinks on board'],
          es: ['Acceso a la Baía do Sancho', 'Comidas y bebidas a bordo'],
        },
        photos: [iateInvictusFly],
      },
      {
        id: 'trovao-dos-mares',
        title: {
          pt: 'Lancha Trovão dos Mares',
          en: 'Trovão dos Mares boat',
          es: 'Lancha Trovão dos Mares',
        },
        summary: {
          pt: 'Lancha de 39 pés para explorar Noronha com conforto, com paradas para banho conforme o mar.',
          en: 'A 39-foot boat to explore Noronha in comfort, with swimming stops depending on the sea.',
          es: 'Lancha de 39 pies para explorar Noronha con comodidad, con paradas para nadar según el mar.',
        },
        facts: [
          {
            icon: 'users',
            label: factLabels.capacity,
            value: { pt: 'Até 10 pessoas', en: 'Up to 10 people', es: 'Hasta 10 personas' },
          },
          {
            icon: 'clock',
            label: factLabels.duration,
            value: { pt: 'Até 4 horas', en: 'Up to 4 hours', es: 'Hasta 4 horas' },
          },
        ],
        includes: {
          pt: ['Cabine e banheiro', 'Proa acolchoada', 'Som via Bluetooth'],
          en: ['Cabin and bathroom', 'Padded bow', 'Bluetooth sound system'],
          es: ['Cabina y baño', 'Proa acolchada', 'Sonido Bluetooth'],
        },
        photos: [trovaoDosMares],
      },
      {
        id: 'fish-hunter',
        title: {
          pt: 'Fish Hunter: pescaria oceânica',
          en: 'Fish Hunter: ocean fishing',
          es: 'Fish Hunter: pesca oceánica',
        },
        summary: {
          pt: 'Pescaria privativa em alto-mar a bordo de uma Forza 44 com duas suítes.',
          en: 'Private deep-sea fishing on board a Forza 44 with two suites.',
          es: 'Pesca privada en alta mar a bordo de una Forza 44 con dos suites.',
        },
        facts: [],
        includes: {
          pt: [
            'Roteiros no Mar de Dentro, Mar de Fora, Banco Alto Fundo Drina e Sueste/Leste',
            'Lanches, bebidas e cooler com gelo e água',
            'Duas suítes, sala, cozinha e banheiro',
          ],
          en: [
            'Routes in Mar de Dentro, Mar de Fora, Alto Fundo Drina bank and Sueste/Leste',
            'Snacks, drinks and cooler with ice and water',
            'Two suites, lounge, kitchen and bathroom',
          ],
          es: [
            'Rutas en el Mar de Dentro, Mar de Fora, Banco Alto Fundo Drina y Sueste/Leste',
            'Bocadillos, bebidas y cooler con hielo y agua',
            'Dos suites, sala, cocina y baño',
          ],
        },
        photos: [fishHunter],
      },
      {
        id: 'vision',
        title: { pt: 'Lancha Vision', en: 'Vision boat', es: 'Lancha Vision' },
        summary: {
          pt: 'Passeio rápido de 1 hora pela área de proteção ambiental, Praia da Biboca, naufrágio e Morro São José.',
          en: 'A quick 1-hour ride through the protected area, Biboca Beach, the shipwreck and Morro São José.',
          es: 'Paseo rápido de 1 hora por el área de protección ambiental, la Praia da Biboca, el naufragio y el Morro São José.',
        },
        facts: [
          {
            icon: 'clock',
            label: factLabels.duration,
            value: { pt: '1 hora', en: '1 hour', es: '1 hora' },
          },
        ],
        photos: [vision],
      },
    ],
  },
]
