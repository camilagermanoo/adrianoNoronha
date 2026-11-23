import { useId, useState, type FormEvent } from 'react'
import { contactInfo, whatsAppLink } from '../../data/navigation'
import { tours } from '../../data/tours'
import { useLanguage } from '../../i18n/context'
import type { Localized } from '../../i18n/locales'
import { cx } from '../../utils/classNames'
import { Icon } from '../Icon/Icon'
import styles from './ContactForm.module.css'

interface SplitRule {
  optionOrder: string[]
  includeTourTitle: boolean
}

const splitTours: Record<string, SplitRule> = {
  'ilha-tour': { optionOrder: ['coletivo', 'privativo'], includeTourTitle: true },
  'lanchas-privativas': {
    optionOrder: [
      'invictus-fly',
      'victa-maris-50',
      'descaradinha',
      'italiana-ferretti',
      'amostradinha-44',
      'my-love',
      'trovao-dos-mares',
      'fish-hunter',
    ],
    includeTourTitle: false,
  },
  alugueis: {
    optionOrder: ['carro-fechado', 'buggy', 'gopro', 'moto'],
    includeTourTitle: false,
  },
}

interface TourChoice {
  id: string
  title: Localized
  suffix?: Localized
}

const tourChoices: TourChoice[] = tours.flatMap((tour) => {
  const rule = splitTours[tour.id]
  if (!rule || !tour.options) return [{ id: tour.id, title: tour.title }]
  return rule.optionOrder.flatMap((optionId) => {
    const option = tour.options?.find((item) => item.id === optionId)
    if (!option) return []
    const id = `${tour.id}-${option.id}`
    return [
      rule.includeTourTitle
        ? { id, title: tour.title, suffix: option.title }
        : { id, title: option.title },
    ]
  })
})

export function ContactForm() {
  const { t, l } = useLanguage()
  const id = useId()
  const [name, setName] = useState('')
  const [dates, setDates] = useState('')
  const [people, setPeople] = useState('2')
  const [selectedTourIds, setSelectedTourIds] = useState<string[]>([])
  const [notes, setNotes] = useState('')

  const toggleTour = (tourId: string) => {
    setSelectedTourIds((current) =>
      current.includes(tourId) ? current.filter((item) => item !== tourId) : [...current, tourId],
    )
  }

  const choiceLabel = (choice: TourChoice) =>
    choice.suffix ? `${l(choice.title)} ${l(choice.suffix).toLowerCase()}` : l(choice.title)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const selectedTitles = tourChoices
      .filter((choice) => selectedTourIds.includes(choice.id))
      .map(choiceLabel)
    const message = t.contact.message({
      name: name.trim(),
      dates: dates.trim(),
      people,
      tours: selectedTitles,
      notes: notes.trim(),
    })
    window.open(whatsAppLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contato" className={styles.section}>
      <div data-reveal className={`container ${styles.card}`}>
        <aside className={styles.info}>
          <span className={styles.eyebrow}>{t.contact.eyebrow}</span>
          <h2 className={styles.heading}>{t.contact.title}</h2>
          <p>{t.contact.text}</p>

          <ul className={styles.channels}>
            <li>
              <Icon name="whatsapp" size={20} />
              <a href={whatsAppLink(t.common.whatsappDefault)} target="_blank" rel="noreferrer">
                {contactInfo.whatsappDisplay}
              </a>
            </li>
            <li>
              <Icon name="instagram" size={20} />
              <a href={contactInfo.instagramUrl} target="_blank" rel="noreferrer">
                @{contactInfo.instagram}
              </a>
            </li>
            <li>
              <Icon name="check" size={20} />
              {t.footer.paymentMethods}
            </li>
          </ul>
        </aside>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor={`${id}-name`}>{t.contact.nameLabel}</label>
              <input
                id={`${id}-name`}
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="given-name"
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor={`${id}-people`}>{t.contact.peopleLabel}</label>
              <input
                id={`${id}-people`}
                type="number"
                min={1}
                max={30}
                value={people}
                onChange={(event) => setPeople(event.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor={`${id}-dates`}>{t.contact.datesLabel}</label>
            <input
              id={`${id}-dates`}
              value={dates}
              onChange={(event) => setDates(event.target.value)}
              placeholder={t.contact.datesPlaceholder}
            />
          </div>

          <fieldset className={styles.field}>
            <legend>{t.contact.toursLegend}</legend>
            <div className={styles.chips}>
              {tourChoices.map((choice) => {
                const isSelected = selectedTourIds.includes(choice.id)

                return (
                  <button
                    key={choice.id}
                    type="button"
                    aria-pressed={isSelected}
                    className={cx(styles.chip, isSelected && styles.chipActive)}
                    onClick={() => toggleTour(choice.id)}
                  >
                    {isSelected && <Icon name="check" size={14} />}
                    {choiceLabel(choice)}
                  </button>
                )
              })}
            </div>
          </fieldset>

          <div className={styles.field}>
            <label htmlFor={`${id}-notes`}>{t.contact.notesLabel}</label>
            <textarea
              id={`${id}-notes`}
              rows={3}
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder={t.contact.notesPlaceholder}
            />
          </div>

          <button type="submit" className={styles.submit}>
            <Icon name="whatsapp" size={20} />
            {t.contact.submit}
          </button>
        </form>
      </div>
    </section>
  )
}
