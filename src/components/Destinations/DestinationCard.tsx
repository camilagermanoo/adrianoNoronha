import type { Destination } from '../../types'
import { Scene } from '../Scene/Scene'
import styles from './Destinations.module.css'

interface DestinationCardProps {
  destination: Destination
}

export function DestinationCard({ destination }: DestinationCardProps) {
  const { name, category, description, bestFor, gradient, image } = destination

  return (
    <article className={styles.card}>
      <Scene gradient={gradient} image={image} alt={name} className={styles.scene}>
        <span className={styles.category}>{category}</span>
      </Scene>

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
