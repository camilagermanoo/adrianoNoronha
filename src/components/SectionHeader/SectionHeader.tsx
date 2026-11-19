import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  id?: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
}: SectionHeaderProps) {
  return (
    <header className={`${styles.header} ${styles[align]} ${styles[tone]}`}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  )
}
