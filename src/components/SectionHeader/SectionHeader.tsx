import { cx } from '../../utils/classNames'
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
    <header
      className={cx(
        styles.header,
        align === 'center' && styles.center,
        tone === 'light' && styles.light,
      )}
    >
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  )
}
