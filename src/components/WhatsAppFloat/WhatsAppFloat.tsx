import { whatsAppLink } from '../../data/navigation'
import { useLanguage } from '../../i18n/context'
import { Icon } from '../Icon/Icon'
import styles from './WhatsAppFloat.module.css'

export function WhatsAppFloat() {
  const { t } = useLanguage()

  return (
    <a
      href={whatsAppLink(t.common.whatsappDefault)}
      target="_blank"
      rel="noreferrer"
      className={styles.float}
      aria-label={t.common.whatsappAria}
    >
      <Icon name="whatsapp" size={30} />
    </a>
  )
}
