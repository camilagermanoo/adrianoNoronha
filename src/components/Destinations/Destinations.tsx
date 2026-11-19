import { useRef } from 'react'
import { destinations } from '../../data/destinations'
import { Icon } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Destinations.module.css'

export function Destinations() {
  const trackRef = useRef<HTMLUListElement>(null)

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section id="destinos" className={styles.section}>
      <div className={`container ${styles.top}`}>
        <SectionHeader
          eyebrow="Destinos"
          title="Lugares que você vai querer guardar na memória"
          align="left"
        />
        <div className={styles.controls}>
          <button type="button" onClick={() => scroll(-1)} aria-label="Destinos anteriores">
            <Icon name="arrowRight" size={20} className={styles.flip} />
          </button>
          <button type="button" onClick={() => scroll(1)} aria-label="Próximos destinos">
            <Icon name="arrowRight" size={20} />
          </button>
        </div>
      </div>

      <ul ref={trackRef} className={styles.track}>
        {destinations.map((destination) => (
          <li key={destination.id} className={styles.card}>
            <img src={destination.image} alt={destination.name} loading="lazy" />
            <div className={styles.overlay}>
              <span className={styles.tip}>
                <Icon name="mapPin" size={14} />
                {destination.tip}
              </span>
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
