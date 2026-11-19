import type { CSSProperties } from 'react'
import { whatsAppLink } from '../../data/navigation'
import { useLanguage } from '../../i18n/context'
import type { Tour } from '../../types'
import { cx } from '../../utils/classNames'
import { Icon } from '../Icon/Icon'
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage'
import styles from './Tours.module.css'

interface TourCardProps {
  tour: Tour
  index: number
  onOpenDetails: (tour: Tour) => void
}

export function TourCard({ tour, index, onOpenDetails }: TourCardProps) {
  const { t, l } = useLanguage()
  const title = l(tour.title)

  return (
    <article
      className={cx(styles.card, tour.highlight && styles.highlight)}
      data-reveal
      style={{ '--reveal-delay': `${(index % 3) * 90}ms` } as CSSProperties}
    >
      <button
        type="button"
        className={styles.media}
        onClick={() => onOpenDetails(tour)}
        aria-label={t.tours.viewDetailsOf(title)}
      >
        <ResponsiveImage
          picture={tour.image}
          sizes="(max-width: 640px) 100vw, (max-width: 1060px) 50vw, 400px"
          loading="lazy"
          className={styles.image}
        />
        <span className={styles.category}>{t.tours.categories[tour.category]}</span>
        {tour.highlight && <span className={styles.pick}>{t.tours.firstDay}</span>}
      </button>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{l(tour.summary)}</p>

        <ul className={styles.details}>
          {l(tour.details).map((detail) => (
            <li key={detail}>
              <Icon name="check" size={14} />
              {detail}
            </li>
          ))}
        </ul>

        {tour.requiresParkCard && (
          <p className={styles.notice}>
            <Icon name="shield" size={16} />
            {t.tours.parkCardShort}
          </p>
        )}

        <div className={styles.actions}>
          <button type="button" className={styles.more} onClick={() => onOpenDetails(tour)}>
            {t.tours.viewDetails}
          </button>
          <a
            href={whatsAppLink(t.tours.bookMessage(title))}
            target="_blank"
            rel="noreferrer"
            className={styles.book}
          >
            <Icon name="whatsapp" size={18} />
            {t.tours.consult}
          </a>
        </div>
      </div>
    </article>
  )
}
