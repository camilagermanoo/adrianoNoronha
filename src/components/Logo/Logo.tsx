import logo from '../../assets/logo.webp'
import { cx } from '../../utils/classNames'
import styles from './Logo.module.css'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'md' | 'lg'
}

export function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  return (
    <a
      href="#inicio"
      className={cx(styles.logo, styles[variant], size === 'lg' && styles.lg)}
      aria-label="Adriano Noronha, início"
    >
      <img src={logo} alt="" className={styles.mark} width={512} height={512} />
      <span className={styles.text}>
        Adriano Noronha
        <small>Passeios na ilha</small>
      </span>
    </a>
  )
}
