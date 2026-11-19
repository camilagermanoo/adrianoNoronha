import { useMemo, useState } from 'react'
import { tours } from '../../data/tours'
import type { Tour, TourCategory } from '../../types'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { TourDetails } from '../TourDetails/TourDetails'
import { TourCard } from './TourCard'
import styles from './Tours.module.css'

type Filter = 'Todos' | TourCategory

const filters: Filter[] = ['Todos', 'Terra', 'Mar', 'Mergulho', 'Aluguel']

function countByFilter(filter: Filter) {
  return filter === 'Todos' ? tours.length : tours.filter((tour) => tour.category === filter).length
}

export function Tours() {
  const [activeFilter, setActiveFilter] = useState<Filter>('Todos')
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)

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
            eyebrow="Passeios"
            title="Escolha como quer conhecer a ilha"
            description="Pela terra, pelo mar ou debaixo d'água. Passeios coletivos ou privativos, com guia credenciado e reserva direta pelo WhatsApp."
            align="left"
          />

          <div className={styles.tabs} role="tablist" aria-label="Categorias de passeio">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                className={`${styles.tab} ${activeFilter === filter ? styles.tabActive : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
                <span className={styles.count}>{countByFilter(filter)}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid} role="tabpanel" aria-live="polite">
          {visibleTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} onOpenDetails={setSelectedTour} />
          ))}
        </div>
      </div>

      <TourDetails tour={selectedTour} onClose={() => setSelectedTour(null)} />
    </section>
  )
}
