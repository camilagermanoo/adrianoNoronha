import { useState } from 'react'
import { itineraries } from '../../data/itineraries'
import { whatsAppLink } from '../../data/navigation'
import { tours } from '../../data/tours'
import { useLanguage } from '../../i18n/context'
import { cx } from '../../utils/classNames'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Itineraries.module.css'

const tourTitles = new Map(tours.map((tour) => [tour.id, tour.title]))

export function Itineraries() {
  const { t, l } = useLanguage()
  const [activeId, setActiveId] = useState(itineraries[1].id)
  const active = itineraries.find((itinerary) => itinerary.id === activeId) ?? itineraries[0]
  const activeTitle = l(active.title)

  const tourName = (id: string) => {
    const title = tourTitles.get(id)
    return title ? l(title) : id
  }

  return (
    <section id="roteiros" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div>
          <SectionHeader
            eyebrow={t.itineraries.eyebrow}
            title={t.itineraries.title}
            description={t.itineraries.description}
            align="left"
            tone="light"
          />

          <div className={styles.options} role="tablist" aria-label={t.itineraries.durationAria}>
            {itineraries.map((itinerary) => (
              <button
                key={itinerary.id}
                type="button"
                role="tab"
                aria-selected={itinerary.id === activeId}
                className={cx(styles.option, itinerary.id === activeId && styles.optionActive)}
                onClick={() => setActiveId(itinerary.id)}
              >
                <strong>{itinerary.days}</strong>
                <span>{t.itineraries.days}</span>
              </button>
            ))}
          </div>

          <h3 className={styles.title}>{activeTitle}</h3>
          <p className={styles.summary}>{l(active.summary)}</p>

          <Button
            href={whatsAppLink(t.itineraries.message(activeTitle, active.days))}
            target="_blank"
            rel="noreferrer"
            variant="whatsapp"
          >
            <Icon name="whatsapp" size={20} />
            {t.itineraries.cta}
          </Button>
        </div>

        <ol
          data-reveal
          className={styles.timeline}
          role="tabpanel"
          aria-label={t.itineraries.timelineAria(active.days)}
        >
          {active.plan.map((step, index) => (
            <li key={`${active.id}-${index}`} className={styles.step}>
              <span className={styles.day}>{t.itineraries.day(index + 1)}</span>
              <div className={styles.stepBody}>
                <p className={styles.tours}>
                  {step.tourIds.length > 0
                    ? step.tourIds.map(tourName).join(' + ')
                    : t.itineraries.freeDay}
                </p>
                <p className={styles.note}>{l(step.note)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
