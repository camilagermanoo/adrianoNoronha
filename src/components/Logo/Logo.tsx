import styles from './Logo.module.css'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'md' | 'lg'
}

export function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  return (
    <a
      href="#inicio"
      className={`${styles.logo} ${styles[variant]} ${styles[size]}`}
      aria-label="Adriano Noronha, início"
    >
      <img src="/images/logo.webp" alt="" className={styles.mark} width={512} height={512} />
      <span className={styles.text}>
        Adriano Noronha
        <small>Passeios na ilha</small>
      </span>
    </a>
  )
}
