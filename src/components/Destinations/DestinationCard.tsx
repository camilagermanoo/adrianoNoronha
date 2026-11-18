import type { CSSProperties } from 'react'
import type { Destination } from '../../types'
import styles from './Destinations.module.css'

interface DestinationCardProps {
  destination: Destination
}

export function DestinationCard({ destination }: DestinationCardProps) {
  const { name, category, description, bestFor, gradient, image } = destination
  const sceneStyle = {
    '--scene-from': gradient[0],
    '--scene-to': gradient[1],
  } as CSSProperties

  return (
    <article className={styles.card}>
      <div className={styles.scene} style={sceneStyle}>
        {image ? (
          <img src={image} alt={name} loading="lazy" className={styles.image} />
        ) : (
          <svg viewBox="0 0 400 240" className={styles.pattern} aria-hidden="true">
            <path d="M0 170 C 80 140 160 200 240 170 S 360 140 400 160 V240 H0 Z" />
            <path d="M0 200 C 90 180 170 225 260 200 S 360 185 400 195 V240 H0 Z" />
          </svg>
        )}
        <span className={styles.category}>{category}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.bestFor}>
          <span>Ideal para</span> {bestFor}
        </p>
      </div>
    </article>
  )
}
