import { useId, useState, type FormEvent } from 'react'
import { whatsAppLink } from '../../data/navigation'
import { useLanguage } from '../../i18n/context'
import { htmlLang } from '../../i18n/locales'
import { Icon } from '../Icon/Icon'
import styles from './TripPlanner.module.css'

export function TripPlanner() {
  const { t, locale } = useLanguage()
  const id = useId()
  const [interestIndex, setInterestIndex] = useState(0)
  const [arrival, setArrival] = useState('')
  const [groupIndex, setGroupIndex] = useState(1)

  const formatArrival = (value: string) => {
    if (!value) return t.planner.dateToBeDefined
    return new Date(`${value}T12:00:00`).toLocaleDateString(htmlLang[locale])
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = t.planner.message({
      interest: t.planner.interests[interestIndex],
      arrival: formatArrival(arrival),
      group: t.planner.groups[groupIndex],
    })
    window.open(whatsAppLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <form
      data-reveal
      className={styles.planner}
      onSubmit={handleSubmit}
      aria-label={t.planner.aria}
    >
      <div className={styles.field}>
        <label htmlFor={`${id}-interest`}>
          <Icon name="compass" size={16} />
          {t.planner.interestLabel}
        </label>
        <select
          id={`${id}-interest`}
          value={interestIndex}
          onChange={(event) => setInterestIndex(Number(event.target.value))}
        >
          {t.planner.interests.map((option, index) => (
            <option key={option} value={index}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor={`${id}-arrival`}>
          <Icon name="sun" size={16} />
          {t.planner.arrivalLabel}
        </label>
        <input
          id={`${id}-arrival`}
          type="date"
          value={arrival}
          onChange={(event) => setArrival(event.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor={`${id}-group`}>
          <Icon name="users" size={16} />
          {t.planner.groupLabel}
        </label>
        <select
          id={`${id}-group`}
          value={groupIndex}
          onChange={(event) => setGroupIndex(Number(event.target.value))}
        >
          {t.planner.groups.map((option, index) => (
            <option key={option} value={index}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className={styles.submit}>
        <Icon name="whatsapp" size={20} />
        {t.planner.submit}
      </button>
    </form>
  )
}
