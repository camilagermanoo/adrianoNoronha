import { contactInfo } from '../../data/navigation'
import type { Tour } from '../../types'
import { buildWhatsAppLink, formatCurrency } from '../../utils/format'
import { Button } from '../Button/Button'
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
  const { title, description, duration, difficulty, price, includes, featured } = tour
  const bookingLink = buildWhatsAppLink(
    contactInfo.whatsapp,
    `Olá! Gostaria de reservar o passeio "${title}".`,
  )

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      {featured && <span className={styles.badge}>Mais procurado</span>}

      <header className={styles.cardHeader}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.meta}>
          <li>{duration}</li>
          <li className={difficultyClassName[difficulty]}>{difficulty}</li>
        </ul>
      </header>

      <p className={styles.description}>{description}</p>

      <ul className={styles.includes} aria-label="O que está incluso">
        {includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <footer className={styles.cardFooter}>
        <p className={styles.price}>
          <span>A partir de</span>
          {formatCurrency(price)}
          <small>/pessoa</small>
        </p>
        <Button
          href={bookingLink}
          target="_blank"
          rel="noreferrer"
          variant={featured ? 'primary' : 'secondary'}
        >
          Reservar
        </Button>
      </footer>
    </article>
  )
}
