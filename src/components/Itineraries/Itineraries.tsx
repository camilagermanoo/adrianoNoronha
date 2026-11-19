import { useState } from 'react'
import { itineraries } from '../../data/itineraries'
import { whatsAppLink } from '../../data/navigation'
import { tours } from '../../data/tours'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Itineraries.module.css'

const tourTitles = new Map(tours.map((tour) => [tour.id, tour.title]))

export function Itineraries() {
  const [activeId, setActiveId] = useState(itineraries[1].id)
  const active = itineraries.find((itinerary) => itinerary.id === activeId) ?? itineraries[0]

  return (
    <section id="roteiros" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div>
          <SectionHeader
            eyebrow="Roteiros"
            title="Quantos dias você vai ficar?"
            description="Sugestões montadas pelo Adriano para cada tamanho de viagem. A gente ajusta tudo conforme a maré e o seu ritmo."
            align="left"
            tone="light"
          />

          <div className={styles.options} role="tablist" aria-label="Duração da viagem">
            {itineraries.map((itinerary) => (
              <button
                key={itinerary.id}
                type="button"
                role="tab"
                aria-selected={itinerary.id === activeId}
                className={`${styles.option} ${itinerary.id === activeId ? styles.optionActive : ''}`}
                onClick={() => setActiveId(itinerary.id)}
              >
                <strong>{itinerary.days}</strong>
                <span>dias</span>
              </button>
            ))}
          </div>

          <h3 className={styles.title}>{active.title}</h3>
          <p className={styles.summary}>{active.summary}</p>

          <Button
            href={whatsAppLink(
              `Olá, Adriano! Gostei do roteiro "${active.title}" de ${active.days} dias. Pode me passar os valores?`,
            )}
            target="_blank"
            rel="noreferrer"
            variant="whatsapp"
          >
            <Icon name="whatsapp" size={20} />
            Quero este roteiro
          </Button>
        </div>

        <ol
          data-reveal
          className={styles.timeline}
          role="tabpanel"
          aria-label={`Roteiro de ${active.days} dias`}
        >
          {active.plan.map((step) => (
            <li key={step.day} className={styles.step}>
              <span className={styles.day}>{step.day}</span>
              <div className={styles.stepBody}>
                {step.tourIds.length > 0 ? (
                  <p className={styles.tours}>
                    {step.tourIds.map((id) => tourTitles.get(id) ?? id).join(' + ')}
                  </p>
                ) : (
                  <p className={styles.tours}>Dia livre</p>
                )}
                <p className={styles.note}>{step.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
