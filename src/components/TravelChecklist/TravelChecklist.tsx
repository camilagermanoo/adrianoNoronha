import type { CSSProperties } from 'react'
import { checklist } from '../../data/checklist'
import { useLanguage } from '../../i18n/context'
import { Icon } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './TravelChecklist.module.css'

export function TravelChecklist() {
  const { t, l } = useLanguage()

  return (
    <section id="antes-de-viajar" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <SectionHeader
            eyebrow={t.checklist.eyebrow}
            title={t.checklist.title}
            description={t.checklist.description}
            align="left"
          />
        </div>

        <ol className={styles.list}>
          {checklist.map((item, index) => (
            <li
              key={item.id}
              className={styles.item}
              data-reveal
              style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}
            >
              <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className={styles.title}>{l(item.title)}</h3>
                <p className={styles.description}>{l(item.description)}</p>
                {item.link && (
                  <a href={item.link.href} target="_blank" rel="noreferrer" className={styles.link}>
                    {l(item.link.label)}
                    <Icon name="arrowRight" size={16} />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
