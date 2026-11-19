import { useRef } from 'react'
import { destinations } from '../../data/destinations'
import { useAutoScroll } from '../../hooks/useAutoScroll'
import { useLanguage } from '../../i18n/context'
import { Icon } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Destinations.module.css'

const loopedDestinations = [...destinations, ...destinations]

export function Destinations() {
  const { t, l } = useLanguage()
  const trackRef = useRef<HTMLUListElement>(null)
  const { pause, resume, pauseTemporarily } = useAutoScroll(trackRef, { speed: 50 })

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    pauseTemporarily()
    const distance = track.clientWidth * 0.8
    const loopWidth = track.scrollWidth / 2
    if (direction === -1 && track.scrollLeft < distance) track.scrollLeft += loopWidth
    if (direction === 1 && track.scrollLeft + distance > loopWidth * 1.5) {
      track.scrollLeft -= loopWidth
    }
    track.scrollBy({ left: direction * distance, behavior: 'smooth' })
  }

  return (
    <section id="destinos" className={styles.section}>
      <div className={`container ${styles.top}`}>
        <SectionHeader eyebrow={t.destinations.eyebrow} title={t.destinations.title} align="left" />
        <div className={styles.controls}>
          <button type="button" onClick={() => scroll(-1)} aria-label={t.destinations.previous}>
            <Icon name="arrowRight" size={20} className={styles.flip} />
          </button>
          <button type="button" onClick={() => scroll(1)} aria-label={t.destinations.next}>
            <Icon name="arrowRight" size={20} />
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        data-reveal
        className={styles.track}
        onMouseEnter={pause}
        onMouseLeave={() => resume()}
        onFocus={pause}
        onBlur={() => resume()}
        onTouchStart={pause}
        onTouchEnd={() => resume(4000)}
        onWheel={pauseTemporarily}
      >
        {loopedDestinations.map((destination, index) => {
          const isClone = index >= destinations.length

          return (
            <li
              key={`${destination.id}-${index}`}
              className={styles.card}
              aria-hidden={isClone || undefined}
            >
              <img
                src={destination.image}
                alt={isClone ? '' : l(destination.name)}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <span className={styles.tip}>
                  <Icon name="mapPin" size={14} />
                  {l(destination.tip)}
                </span>
                <h3>{l(destination.name)}</h3>
                <p>{l(destination.description)}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
