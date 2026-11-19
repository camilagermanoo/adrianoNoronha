import { whatsAppLink } from '../../data/navigation'
import { Icon } from '../Icon/Icon'
import styles from './WhatsAppFloat.module.css'

export function WhatsAppFloat() {
  return (
    <a
      href={whatsAppLink()}
      target="_blank"
      rel="noreferrer"
      className={styles.float}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <Icon name="whatsapp" size={30} />
    </a>
  )
}
