import { tours } from '../../data/tours'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { TourCard } from './TourCard'
import styles from './Tours.module.css'

export function Tours() {
  return (
    <section id="passeios" className={styles.section}>
      <div className="container">
        <SectionHeader
          eyebrow="Passeios"
          title="Roteiros pensados para cada estilo de viagem"
          description="Grupos reduzidos, guia credenciado e todas as autorizações do Parque Nacional Marinho incluídas."
          tone="light"
        />

        <div className={styles.grid}>
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  )
}
