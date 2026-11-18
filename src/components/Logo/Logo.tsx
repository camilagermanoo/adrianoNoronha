import styles from './Logo.module.css'

interface LogoProps {
  variant?: 'light' | 'dark'
}

export function Logo({ variant = 'dark' }: LogoProps) {
  return (
    <a
      href="#inicio"
      className={`${styles.logo} ${styles[variant]}`}
      aria-label="Ilha Viva, início"
    >
      <svg viewBox="0 0 64 64" className={styles.mark} aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="currentColor" />
        <path d="M8 40c6-5 12-5 18 0s12 5 18 0 10-4 12-2v18H8z" fill="#1fb5a8" />
        <path d="M24 38 34 14l8 24z" fill="#f4ead5" />
        <circle cx="46" cy="18" r="6" fill="#f2795b" />
      </svg>
      <span className={styles.text}>
        Ilha Viva
        <small>Fernando de Noronha</small>
      </span>
    </a>
  )
}
