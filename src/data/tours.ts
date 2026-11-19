import aluguel from '../assets/tours/aluguel.webp'
import barcoTradicional from '../assets/tours/barco-tradicional.webp'
import batismoNaufragio from '../assets/tours/batismo-naufragio.webp'
import bikeAquatica from '../assets/tours/bike-aquatica.webp'
import canoaHavaiana from '../assets/tours/canoa-havaiana.webp'
import cilindroEmbarcado from '../assets/tours/cilindro-embarcado.webp'
import entardecerVip from '../assets/tours/entardecer-vip.webp'
import ilhaTourPrivativo from '../assets/tours/ilha-tour-privativo.webp'
import ilhaTour from '../assets/tours/ilha-tour.webp'
import lanchaPrivativa from '../assets/tours/lancha-privativa.webp'
import piscinasNaturais from '../assets/tours/piscinas-naturais.webp'
import snorkel from '../assets/tours/snorkel.webp'
import trilhaPiquinho from '../assets/tours/trilha-piquinho.webp'
import trilhasParque from '../assets/tours/trilhas-parque.webp'
import type { Tour } from '../types'

export const tours: Tour[] = [
  {
    id: 'ilha-tour-coletivo',
    title: 'Ilha Tour coletivo',
    category: 'Terra',
    description:
      'Cerca de 80% da ilha em um único dia, em caminhonete 4x4 com grupo de até 10 pessoas. O guia nativo conta a história do arquipélago e ajuda nas fotos. Ideal para quem chega pela primeira vez.',
    details: ['8h30 até o pôr do sol', 'Transfer incluso', 'Parada para mergulho'],
    image: ilhaTour,
    requiresParkCard: true,
    highlight: true,
  },
  {
    id: 'ilha-tour-privativo',
    title: 'Ilha Tour privativo',
    category: 'Terra',
    description:
      'O dia inteiro de buggy com guia exclusivo, passando por Capela São Pedro, Buraco da Raquel, Sueste, Leão, Sancho, Mirante Dois Irmãos, Cacimba do Padre, Baía dos Porcos e pôr do sol.',
    details: ['9h às 18h', 'Buggy exclusivo', 'FotoSub incluso'],
    image: ilhaTourPrivativo,
    requiresParkCard: true,
  },
  {
    id: 'piscinas-naturais',
    title: 'Circuito das piscinas naturais',
    category: 'Terra',
    description:
      'Feito na maré baixa, começa na piscina do Morro de Fora, na Praia da Conceição, segue para o Buraco do Galego, na Praia do Cachorro, e termina na Lasca da Velha.',
    details: ['Somente na maré baixa', 'Com guia'],
    image: piscinasNaturais,
  },
  {
    id: 'trilha-piquinho',
    title: 'Trilha do Piquinho',
    category: 'Terra',
    description:
      'Subida pelas pedras a partir da estrada da Conceição até 217 m de altura, com vista para o Morro do Pico, Praia do Cachorro, Fortaleza dos Remédios e um pôr do sol inesquecível.',
    details: ['Início às 16h30', '2 km', 'Termina no pôr do sol'],
    image: trilhaPiquinho,
  },
  {
    id: 'trilhas-parque',
    title: 'Trilhas do Parque Nacional',
    category: 'Terra',
    description:
      'Atalaia, Caieiras, Morro São José, Capim-Açu e Abreus: as trilhas do parque passam por praias intocadas, falésias e piscinas naturais, com chance de ver golfinhos.',
    details: ['Agendamento pelo ICMBio', '5 opções de trilha'],
    image: trilhasParque,
    requiresParkCard: true,
  },
  {
    id: 'canoa-havaiana',
    title: 'Canoa havaiana',
    category: 'Mar',
    description:
      'Remada coletiva para até 12 pessoas para ver o nascer do sol na Ponta do Air France, com possível presença de golfinhos. Dá para fazer no dia de ir embora, qualquer que seja o horário do voo.',
    details: ['Nascer do sol', '4 km', 'Transfer incluso'],
    image: canoaHavaiana,
  },
  {
    id: 'bike-aquatica',
    title: 'Bike aquática',
    category: 'Mar',
    description:
      'Pedalada sobre o mar em bikes individuais ou duplas, sempre com guia e equipamento de proteção. Grandes chances de ver golfinhos de um ângulo diferente.',
    details: ['50 a 60 minutos', '8h, 9h, 10h, 11h ou 17h', 'Sem transfer'],
    image: bikeAquatica,
  },
  {
    id: 'entardecer-vip',
    title: 'Entardecer VIP',
    category: 'Mar',
    description:
      'Catamarã com planasub na região portuária, navegação pela costa até o Morro Dois Irmãos e churrasco de peixe a bordo enquanto o sol se põe em uma praia de mar calmo.',
    details: ['14h30 até o pôr do sol', 'Churrasco de peixe', 'Planasub'],
    image: entardecerVip,
  },
  {
    id: 'barco-tradicional',
    title: 'Barco tradicional',
    category: 'Mar',
    description:
      'Saída coletiva de escuna ou catamarã até a Ponta da Sapata, com parada de cerca de 50 minutos para mergulho na Baía do Sancho em barco credenciado.',
    details: ['8h30 às 12h', 'Transfer incluso', 'Parada no Sancho'],
    image: barcoTradicional,
    requiresParkCard: true,
  },
  {
    id: 'lancha-privativa',
    title: 'Lancha privativa',
    category: 'Mar',
    description:
      'Quatro horas de lancha só para o seu grupo, do Porto até a Cacimba do Padre, com parada para banho, chance de golfinhos e pôr do sol no mar. Churrasco de peixe, salada, frutas e frios a bordo.',
    details: ['4 horas', 'Serviço de bordo', 'Planasub'],
    image: lanchaPrivativa,
  },
  {
    id: 'snorkel',
    title: 'Mergulho de snorkel',
    category: 'Mergulho',
    description:
      'Águas cristalinas com tartarugas, arraias, corais e cardumes coloridos. Qualquer pessoa pode fazer, mesmo sem experiência, em pontos como a Baía do Sancho e a Baía dos Porcos.',
    details: ['2 km', 'Para todas as idades'],
    image: snorkel,
  },
  {
    id: 'batismo-naufragio',
    title: 'Batismo no naufrágio',
    category: 'Mergulho',
    description:
      'Primeiro mergulho com cilindro saindo da beira da praia até o naufrágio do Porto, a 8 metros de profundidade, com instrutor qualificado durante toda a experiência.',
    details: ['8 m de profundidade', '40 min submerso', 'Sem transfer'],
    image: batismoNaufragio,
  },
  {
    id: 'cilindro-embarcado',
    title: 'Mergulho de cilindro embarcado',
    category: 'Mergulho',
    description:
      'Mergulho a partir do barco para quem nunca mergulhou e quer conhecer o fundo do mar do arquipélago, em operação segura e com instrutor experiente.',
    details: ['8 m de profundidade', '40 min submerso', 'Transfer incluso'],
    image: cilindroEmbarcado,
  },
  {
    id: 'aluguel',
    title: 'Aluguel de buggy, moto e GoPro',
    category: 'Aluguel',
    description:
      'Explore a ilha no seu ritmo com veículos em ótimo estado e registre cada momento com uma GoPro. Diárias com preço acessível.',
    details: ['Diária', 'Buggy, moto ou GoPro'],
    image: aluguel,
  },
]
