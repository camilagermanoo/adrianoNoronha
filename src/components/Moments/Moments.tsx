import type { CSSProperties } from 'react'
import { cx } from '../../utils/classNames'
import { contactInfo } from '../../data/navigation'
import { moments } from '../../data/moments'
import { useLanguage } from '../../i18n/context'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Moments.module.css'

export function Moments() {
  const { t, l } = useLanguage()

  return (
    <section id="momentos" className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <SectionHeader
            eyebrow={t.moments.eyebrow}
            title={t.moments.title}
            description={t.moments.description}
            align="left"
          />
          <Button
            href={contactInfo.instagramUrl}
            target="_blank"
            rel="noreferrer"
            variant="outline"
          >
            <Icon name="instagram" size={20} />@{contactInfo.instagram}
          </Button>
        </div>

        <ul className={styles.grid}>
          {moments.map((moment, index) => (
            <li
              key={moment.id}
              className={cx(styles.item, moment.tall && styles.tall)}
              data-reveal
              style={{ '--reveal-delay': `${(index % 3) * 100}ms` } as CSSProperties}
            >
              <figure>
                <img src={moment.image} alt={l(moment.caption)} loading="lazy" />
                <figcaption>{l(moment.caption)}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
