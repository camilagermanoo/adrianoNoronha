import { whatsAppLink } from '../../data/navigation'
import type { Tour, TourCategory } from '../../types'
import { formatCurrency } from '../../utils/format'
import { Icon, type IconName } from '../Icon/Icon'
import { Scene } from '../Scene/Scene'
import styles from './Tours.module.css'

interface TourCardProps {
  tour: Tour
}

const categoryIcon: Record<TourCategory, IconName> = {
  Mar: 'wave',
  Terra: 'compass',
  Mergulho: 'mask',
}

const difficultyClassName = {
  Leve: styles.easy,
  Moderado: styles.moderate,
  Intenso: styles.hard,
}

export function TourCard({ tour }: TourCardProps) {
  const {
    title,
    category,
    description,
    duration,
    difficulty,
    price,
    priceUnit,
    gradient,
    highlight,
    image,
  } = tour

  return (
    <article className={`${styles.card} ${highlight ? styles.highlight : ''}`}>
      <Scene gradient={gradient} image={image} alt={title} className={styles.scene}>
        <span className={styles.categoryIcon} aria-hidden="true">
          <Icon name={categoryIcon[category]} size={28} />
        </span>
      </Scene>

      <div className={styles.body}>
        <div className={styles.heading}>
          <span className={styles.category}>{category}</span>
          {highlight && <span className={styles.pick}>Escolha do Adriano</span>}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.meta}>
          <li>
            <Icon name="clock" size={14} />
            {duration}
          </li>
          <li className={difficultyClassName[difficulty]}>{difficulty}</li>
        </ul>

        <div className={styles.footer}>
          <p className={styles.price}>
            <strong>{formatCurrency(price)}</strong>
            <small>{priceUnit}</small>
          </p>
          <a
            href={whatsAppLink(`Olá, Adriano! Quero reservar o passeio "${title}".`)}
            target="_blank"
            rel="noreferrer"
            className={styles.book}
          >
            Reservar
            <Icon name="arrowRight" size={16} />
          </a>
        </div>
      </div>
    </article>
  )
}
