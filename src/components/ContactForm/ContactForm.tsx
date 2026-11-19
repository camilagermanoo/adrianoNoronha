import { useId, useState, type FormEvent } from 'react'
import { contactInfo, whatsAppLink } from '../../data/navigation'
import { tours } from '../../data/tours'
import { Icon } from '../Icon/Icon'
import styles from './ContactForm.module.css'

export function ContactForm() {
  const id = useId()
  const [name, setName] = useState('')
  const [dates, setDates] = useState('')
  const [people, setPeople] = useState('2')
  const [selectedTours, setSelectedTours] = useState<string[]>([])
  const [notes, setNotes] = useState('')

  const toggleTour = (title: string) => {
    setSelectedTours((current) =>
      current.includes(title) ? current.filter((item) => item !== title) : [...current, title],
    )
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const lines = [
      `Olá, Adriano! Meu nome é ${name.trim()}.`,
      `• Datas na ilha: ${dates.trim() || 'a definir'}`,
      `• Pessoas: ${people}`,
      `• Passeios: ${selectedTours.length > 0 ? selectedTours.join(', ') : 'quero sugestões'}`,
    ]
    if (notes.trim()) lines.push(`• Observações: ${notes.trim()}`)
    window.open(whatsAppLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contato" className={styles.section}>
      <div className={`container ${styles.card}`}>
        <aside className={styles.info}>
          <span className={styles.eyebrow}>Monte seu combo</span>
          <h2 className={styles.heading}>Conte sobre a sua viagem</h2>
          <p>
            Escolha os passeios que chamaram sua atenção e envie direto para o WhatsApp do Adriano.
            Ele responde com disponibilidade e valores.
          </p>

          <ul className={styles.channels}>
            <li>
              <Icon name="whatsapp" size={20} />
              <a href={whatsAppLink()} target="_blank" rel="noreferrer">
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
              {contactInfo.payment}
            </li>
          </ul>
        </aside>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor={`${id}-name`}>Seu nome</label>
              <input
                id={`${id}-name`}
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="given-name"
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor={`${id}-people`}>Pessoas</label>
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
            <label htmlFor={`${id}-dates`}>Quando você vai estar na ilha?</label>
            <input
              id={`${id}-dates`}
              value={dates}
              onChange={(event) => setDates(event.target.value)}
              placeholder="Ex.: de 10 a 15 de março"
            />
          </div>

          <fieldset className={styles.field}>
            <legend>Passeios de interesse</legend>
            <div className={styles.chips}>
              {tours.map((tour) => {
                const isSelected = selectedTours.includes(tour.title)

                return (
                  <button
                    key={tour.id}
                    type="button"
                    aria-pressed={isSelected}
                    className={`${styles.chip} ${isSelected ? styles.chipActive : ''}`}
                    onClick={() => toggleTour(tour.title)}
                  >
                    {isSelected && <Icon name="check" size={14} />}
                    {tour.title}
                  </button>
                )
              })}
            </div>
          </fieldset>

          <div className={styles.field}>
            <label htmlFor={`${id}-notes`}>Algo que o Adriano precisa saber?</label>
            <textarea
              id={`${id}-notes`}
              rows={3}
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Crianças no grupo, horário do voo, preferências..."
            />
          </div>

          <button type="submit" className={styles.submit}>
            <Icon name="whatsapp" size={20} />
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
