import { whatsAppLink } from '../../data/navigation'
import type { Tour } from '../../types'
import { Icon } from '../Icon/Icon'
import styles from './Tours.module.css'

interface TourCardProps {
  tour: Tour
}

export function TourCard({ tour }: TourCardProps) {
  const { title, category, description, details, image, requiresParkCard, highlight } = tour

  return (
    <article className={`${styles.card} ${highlight ? styles.highlight : ''}`}>
      <div className={styles.media}>
        <img src={image} alt={title} loading="lazy" className={styles.image} />
        <span className={styles.category}>{category}</span>
        {highlight && <span className={styles.pick}>Ideal para o 1º dia</span>}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.details}>
          {details.map((detail) => (
            <li key={detail}>
              <Icon name="check" size={14} />
              {detail}
            </li>
          ))}
        </ul>

        {requiresParkCard && (
          <p className={styles.notice}>
            <Icon name="shield" size={16} />
            Exige o cartão do Parque Nacional
          </p>
        )}

        <a
          href={whatsAppLink(`Olá, Adriano! Quero saber valores e datas do passeio "${title}".`)}
          target="_blank"
          rel="noreferrer"
          className={styles.book}
        >
          <Icon name="whatsapp" size={18} />
          Consultar valores
        </a>
      </div>
    </article>
  )
}
