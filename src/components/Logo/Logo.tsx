import logo from '../../assets/logo.webp?icon'
import { useLanguage } from '../../i18n/context'
import { cx } from '../../utils/classNames'
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage'
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
      <ResponsiveImage
        picture={logo}
        sizes={size === 'lg' ? '88px' : '56px'}
        className={styles.mark}
      />
      <span className={styles.text}>
        Adriano Noronha
        <small>{t.logo.subtitle}</small>
      </span>
    </a>
  )
}
