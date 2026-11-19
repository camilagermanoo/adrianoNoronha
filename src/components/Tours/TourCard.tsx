import { whatsAppLink } from '../../data/navigation'
import type { Tour } from '../../types'
import { formatCurrency } from '../../utils/format'
import { Icon } from '../Icon/Icon'
import { Scene } from '../Scene/Scene'
import styles from './Tours.module.css'

interface TourCardProps {
  tour: Tour
}

const difficultyClassName = {
  Leve: styles.easy,
  Moderado: styles.moderate,
  Intenso: styles.hard,
}

export function TourCard({ tour }: TourCardProps) {
  const {
    title,
    tagline,
    description,
    duration,
    difficulty,
    price,
    priceUnit,
    gradient,
    badge,
    image,
  } = tour
  const bookingLink = whatsAppLink(`Olá! Gostaria de reservar o passeio "${title}".`)

  return (
    <article className={styles.card}>
      <Scene gradient={gradient} image={image} alt={title} className={styles.scene}>
        {badge && (
          <span className={`${styles.badge} ${badge === 'Novidade' ? styles.badgeNew : ''}`}>
            {badge}
          </span>
        )}
        <div className={styles.overlay}>
          <h3 className={styles.overlayTitle}>{title}</h3>
          <p className={styles.tagline}>{tagline}</p>
        </div>
      </Scene>

      <div className={styles.body}>
        <ul className={styles.meta}>
          <li>
            <Icon name="clock" size={14} />
            {duration}
          </li>
          <li className={difficultyClassName[difficulty]}>{difficulty}</li>
        </ul>

        <p className={styles.price}>
          {formatCurrency(price)}
          <small>{priceUnit}</small>
        </p>

        <p className={styles.description}>{description}</p>

        <a href={bookingLink} target="_blank" rel="noreferrer" className={styles.cta}>
          Reservar pelo WhatsApp
          <Icon name="arrowRight" size={16} />
        </a>
      </div>
    </article>
  )
}
