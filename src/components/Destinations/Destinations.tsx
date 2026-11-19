import { useMemo, useState } from 'react'
import { destinations } from '../../data/destinations'
import type { DestinationCategory } from '../../types'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { DestinationCard } from './DestinationCard'
import styles from './Destinations.module.css'

type Filter = 'Todos' | DestinationCategory

const filters: Filter[] = ['Todos', 'Praia', 'Piscina natural', 'Mirante']

export function Destinations() {
  const [activeFilter, setActiveFilter] = useState<Filter>('Todos')

  const visibleDestinations = useMemo(
    () =>
      activeFilter === 'Todos'
        ? destinations
        : destinations.filter((destination) => destination.category === activeFilter),
    [activeFilter],
  )

  return (
    <section id="destinos" className={styles.section}>
      <div className="container">
        <SectionHeader
          eyebrow="Destinos"
          title="Os cenários mais incríveis do arquipélago"
          description="De baías cristalinas a mirantes para o pôr do sol, conheça os lugares que fazem de Noronha um destino único no mundo."
          align="left"
        />

        <div className={styles.filters} role="group" aria-label="Filtrar destinos por categoria">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`${styles.filter} ${activeFilter === filter ? styles.filterActive : ''}`}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {visibleDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  )
}
