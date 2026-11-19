import { useId, useState, type FormEvent } from 'react'
import { contactInfo, whatsAppLink } from '../../data/navigation'
import { tours } from '../../data/tours'
import { useLanguage } from '../../i18n/context'
import { cx } from '../../utils/classNames'
import { Icon } from '../Icon/Icon'
import styles from './ContactForm.module.css'

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const selectedTitles = tours
      .filter((tour) => selectedTourIds.includes(tour.id))
      .map((tour) => l(tour.title))
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
              <a
                href={`https://instagram.com/${contactInfo.instagram}`}
                target="_blank"
                rel="noreferrer"
              >
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
              {tours.map((tour) => {
                const isSelected = selectedTourIds.includes(tour.id)

                return (
                  <button
                    key={tour.id}
                    type="button"
                    aria-pressed={isSelected}
                    className={cx(styles.chip, isSelected && styles.chipActive)}
                    onClick={() => toggleTour(tour.id)}
                  >
                    {isSelected && <Icon name="check" size={14} />}
                    {l(tour.title)}
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
