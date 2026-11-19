import { Icon } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Fees.module.css'

const fees = [
  {
    tag: 'Obrigatória',
    title: 'Taxa de Preservação Ambiental (TPA)',
    price: 'Cobrada por dia de permanência',
    description:
      'Paga por todo visitante, on-line antes da viagem ou na chegada ao aeroporto. O valor aumenta conforme o número de dias na ilha.',
    linkLabel: 'Consultar no site oficial',
    href: 'https://www.noronha.pe.gov.br/',
  },
  {
    tag: 'Recomendada',
    title: 'Ingresso do Parque Nacional Marinho',
    price: 'Valores diferentes para brasileiros e estrangeiros',
    description:
      'Necessário para acessar praias como Sancho, Baía dos Porcos, Leão e Sueste. É válido por 10 dias a partir da primeira utilização.',
    linkLabel: 'Comprar ingresso',
    href: 'https://www.parnanoronha.com.br/',
  },
]

export function Fees() {
  return (
    <section id="taxas" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <SectionHeader
          eyebrow="Taxas de Noronha"
          title="O que você precisa pagar antes de chegar"
          description="Entenda o que é obrigatório para todo visitante e o que é necessário para aproveitar os principais atrativos."
          align="left"
        />

        <div className={styles.grid}>
          {fees.map((fee) => (
            <article key={fee.title} className={styles.card}>
              <span className={styles.tag}>{fee.tag}</span>
              <h3 className={styles.title}>{fee.title}</h3>
              <p className={styles.price}>{fee.price}</p>
              <p className={styles.description}>{fee.description}</p>
              <a href={fee.href} target="_blank" rel="noreferrer" className={styles.link}>
                {fee.linkLabel}
                <Icon name="arrowRight" size={16} />
              </a>
            </article>
          ))}
        </div>

        <p className={styles.note}>
          Os valores são definidos pelos órgãos oficiais e reajustados periodicamente. Confirme
          sempre nos sites oficiais antes da viagem.
        </p>
      </div>
    </section>
  )
}
