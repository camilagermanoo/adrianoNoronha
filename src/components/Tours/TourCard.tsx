import type { CSSProperties } from 'react'
import { whatsAppLink } from '../../data/navigation'
import type { Tour } from '../../types'
import { Icon } from '../Icon/Icon'
import styles from './Tours.module.css'

interface TourCardProps {
  tour: Tour
  index: number
  onOpenDetails: (tour: Tour) => void
}

export function TourCard({ tour, index, onOpenDetails }: TourCardProps) {
  const { title, category, summary, details, image, requiresParkCard, highlight } = tour

  return (
    <article
      className={`${styles.card} ${highlight ? styles.highlight : ''}`}
      data-reveal
      style={{ '--reveal-delay': `${(index % 3) * 90}ms` } as CSSProperties}
    >
      <button
        type="button"
        className={styles.media}
        onClick={() => onOpenDetails(tour)}
        aria-label={`Ver detalhes de ${title}`}
      >
        <img src={image} alt="" loading="lazy" className={styles.image} />
        <span className={styles.category}>{category}</span>
        {highlight && <span className={styles.pick}>Ideal para o 1º dia</span>}
      </button>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{summary}</p>

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

        <div className={styles.actions}>
          <button type="button" className={styles.more} onClick={() => onOpenDetails(tour)}>
            Ver detalhes
          </button>
          <a
            href={whatsAppLink(`Olá, Adriano! Quero saber valores e datas do passeio "${title}".`)}
            target="_blank"
            rel="noreferrer"
            className={styles.book}
          >
            <Icon name="whatsapp" size={18} />
            Consultar
          </a>
        </div>
      </div>
    </article>
  )
}
