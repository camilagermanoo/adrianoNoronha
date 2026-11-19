import logo from '../../assets/logo.webp'
import { useLanguage } from '../../i18n/context'
import { cx } from '../../utils/classNames'
import styles from './Logo.module.css'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'md' | 'lg'
}

export function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const { t } = useLanguage()

  return (
    <a
      href="#inicio"
      className={cx(styles.logo, styles[variant], size === 'lg' && styles.lg)}
      aria-label={t.logo.homeAria}
    >
      <img src={logo} alt="" className={styles.mark} width={512} height={512} />
      <span className={styles.text}>
        Adriano Noronha
        <small>{t.logo.subtitle}</small>
      </span>
    </a>
  )
}
