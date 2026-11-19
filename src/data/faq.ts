export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Qual a melhor época para visitar Fernando de Noronha?',
    answer:
      'A ilha é bonita o ano todo. De agosto a janeiro o mar costuma estar mais calmo e com melhor visibilidade para mergulho. De dezembro a março acontece a temporada de ondas no Mar de Dentro, ótima para quem gosta de surfe.',
  },
  {
    question: 'Preciso pagar alguma taxa para entrar na ilha?',
    answer:
      'Sim. A Taxa de Preservação Ambiental (TPA) é obrigatória para todos os visitantes e cobrada por dia de permanência. O ingresso do Parque Nacional Marinho é necessário para acessar as principais praias.',
  },
  {
    question: 'Como faço para reservar um passeio?',
    answer:
      'Basta clicar em qualquer botão de WhatsApp do site. Confirmamos a disponibilidade, enviamos os detalhes do roteiro e garantimos a sua vaga após o pagamento do sinal.',
  },
  {
    question: 'Os passeios têm limite de vagas?',
    answer:
      'Sim. Trabalhamos com grupos reduzidos e alguns atrativos, como o Atalaia, têm limite diário definido pelo ICMBio. Por isso recomendamos reservar com antecedência.',
  },
  {
    question: 'Crianças podem participar dos passeios?',
    answer:
      'A maioria dos passeios é indicada para todas as idades. Trilhas mais intensas e o mergulho com cilindro têm idade mínima, e indicamos as melhores opções para cada família.',
  },
  {
    question: 'Posso cancelar ou remarcar meu passeio?',
    answer:
      'Remarcações são gratuitas com até 48 horas de antecedência, sujeitas à disponibilidade. Passeios cancelados por condições do mar são remarcados ou reembolsados integralmente.',
  },
]
