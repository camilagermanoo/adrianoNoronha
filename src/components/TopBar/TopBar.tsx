import { Icon } from '../Icon/Icon'
import styles from './TopBar.module.css'

export function TopBar() {
  return (
    <div className={styles.bar}>
      <p className="container">
        <Icon name="star" size={14} className={styles.star} />
        Guia credenciado com nota 4,9 entre os viajantes em Fernando de Noronha
      </p>
    </div>
  )
}
