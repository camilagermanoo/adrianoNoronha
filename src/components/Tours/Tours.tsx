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
          title="Os passeios mais procurados de Fernando de Noronha"
          description="Grupos reduzidos, guia credenciado e todas as autorizações do Parque Nacional Marinho organizadas para você só aproveitar."
          align="left"
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
