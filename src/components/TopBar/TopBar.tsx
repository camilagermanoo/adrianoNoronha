import { Icon } from '../Icon/Icon'
import styles from './TopBar.module.css'

export function TopBar() {
  return (
    <div className={styles.bar}>
      <p className="container">
        <Icon name="star" size={14} className={styles.star} />
        Nota 4,9 entre os viajantes de Fernando de Noronha
      </p>
    </div>
  )
}
