import { useId, useState, type FormEvent } from 'react'
import { whatsAppLink } from '../../data/navigation'
import { Icon } from '../Icon/Icon'
import styles from './TripPlanner.module.css'

const interests = [
  'Ilha Tour',
  'Passeios de barco',
  'Mergulho',
  'Trilhas e piscinas naturais',
  'Aluguel de buggy, moto ou GoPro',
  'Ainda não sei',
]

const groupSizes = ['1 pessoa', '2 pessoas', '3 a 4 pessoas', '5 ou mais']

function formatDate(value: string) {
  if (!value) return 'data a definir'
  const [year, month, day] = value.split('-')
  return `${day}/${month}/${year}`
}

export function TripPlanner() {
  const id = useId()
  const [interest, setInterest] = useState(interests[0])
  const [arrival, setArrival] = useState('')
  const [group, setGroup] = useState(groupSizes[1])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = `Olá, Adriano! Quero planejar meus passeios em Noronha.\n• Interesse: ${interest}\n• Chegada: ${formatDate(arrival)}\n• Grupo: ${group}`
    window.open(whatsAppLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <form className={styles.planner} onSubmit={handleSubmit} aria-label="Planejador de passeios">
      <div className={styles.field}>
        <label htmlFor={`${id}-interest`}>
          <Icon name="compass" size={16} />O que você quer viver?
        </label>
        <select
          id={`${id}-interest`}
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
        >
          {interests.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor={`${id}-arrival`}>
          <Icon name="sun" size={16} />
          Chegada na ilha
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
          Quantas pessoas?
        </label>
        <select id={`${id}-group`} value={group} onChange={(event) => setGroup(event.target.value)}>
          {groupSizes.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <button type="submit" className={styles.submit}>
        <Icon name="whatsapp" size={20} />
        Receber sugestões
      </button>
    </form>
  )
}
