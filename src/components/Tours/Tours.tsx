import { useMemo, useState } from 'react'
import { tours } from '../../data/tours'
import { useLanguage } from '../../i18n/context'
import type { TourCategory } from '../../types'
import { cx } from '../../utils/classNames'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { TourCard } from './TourCard'
import styles from './Tours.module.css'

type Filter = 'Todos' | TourCategory

const filters: Filter[] = ['Todos', 'Terra', 'Mar', 'Lancha', 'Mergulho', 'Experiência', 'Aluguel']

function countByFilter(filter: Filter) {
  return filter === 'Todos' ? tours.length : tours.filter((tour) => tour.category === filter).length
}

export function Tours() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<Filter>('Todos')

  const visibleTours = useMemo(
    () =>
      activeFilter === 'Todos' ? tours : tours.filter((tour) => tour.category === activeFilter),
    [activeFilter],
  )

  return (
    <section id="passeios" className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <SectionHeader
            eyebrow={t.tours.eyebrow}
            title={t.tours.title}
            description={t.tours.description}
            align="left"
          />

          <div className={styles.tabs} role="tablist" aria-label={t.tours.tabsAria}>
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                className={cx(styles.tab, activeFilter === filter && styles.tabActive)}
                onClick={() => setActiveFilter(filter)}
              >
                {t.tours.categories[filter]}
                <span className={styles.count}>{countByFilter(filter)}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid} role="tabpanel" aria-live="polite">
          {visibleTours.map((tour, index) => (
            <TourCard key={`${activeFilter}-${tour.id}`} tour={tour} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
