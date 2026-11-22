import type { Localized } from '../i18n/locales'

export interface TipPlace {
  name: string
  instagram: string
  href: string
}

function instagramPlace(name: string, handle: string): TipPlace {
  return { name, instagram: `@${handle}`, href: `https://www.instagram.com/${handle}` }
}

export const sunsetPlaces: TipPlace[] = [
  instagramPlace('Mirante do Boldró', 'mirantedoboldro'),
  instagramPlace('Bar do Meio, Praia da Conceição', 'bardomeio_noronha'),
]

export const nightPlaces: TipPlace[] = [
  instagramPlace('Forte da Vila dos Remédios', 'fortenoronha'),
  instagramPlace('Bar do Cachorro', 'bardocachorro'),
  instagramPlace('Bar do Meio', 'bardomeio_noronha'),
  instagramPlace('Restaurante Mirante do Boldró', 'mirantedoboldro'),
  instagramPlace('Restaurante Yó', 'yo.noronha'),
  instagramPlace('Samba da Edilma', 'restaurantedaedilma'),
  {
    name: 'Festival Gastronômico Zé Maria',
    instagram: 'linktr.ee/PousadaZeMaria',
    href: 'https://linktr.ee/PousadaZeMaria',
  },
  instagramPlace('Restaurante Varanda', 'varandanoronha'),
  instagramPlace('Restaurante Cacimba', 'cacimbanoronha'),
  instagramPlace('Restaurante Do Vale', 'restaurantedovalenoronha'),
  instagramPlace('Restaurante da Xica da Silva', 'xicadasilvanoronha'),
  instagramPlace('Restaurante Benedita', 'benedita.noronha'),
  instagramPlace('Restaurante Mergulhão', 'mergulhaonoronhaofc'),
  instagramPlace('Restaurante Museu dos Tubarões', 'museutubaroes'),
]

export const timeZoneTip: { title: Localized; text: Localized } = {
  title: {
    pt: 'Cuidado com o fuso horário da ilha',
    en: 'Watch out for the island time zone',
    es: 'Cuidado con el huso horario de la isla',
  },
  text: {
    pt: 'Fernando de Noronha está 1 hora à frente do horário de Brasília. Todos os horários dos passeios são no horário da ilha, então ajuste o relógio e o celular ao chegar.',
    en: 'Fernando de Noronha is 1 hour ahead of Brasília time. All tour times are in island time, so set your watch and phone when you arrive.',
    es: 'Fernando de Noronha está 1 hora adelante del horario de Brasilia. Todos los horarios de los paseos son en hora de la isla, así que ajusta el reloj y el celular al llegar.',
  },
}
