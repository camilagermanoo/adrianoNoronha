import type { CSSProperties } from 'react'
import { cx } from '../../utils/classNames'
import { contactInfo } from '../../data/navigation'
import { moments } from '../../data/moments'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Moments.module.css'

export function Moments() {
  return (
    <section id="momentos" className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <SectionHeader
            eyebrow="Momentos"
            title="Quem passeia com o Adriano volta com histórias"
            description="Registros reais dos passeios pela ilha. Acompanhe as saídas do dia no Instagram."
            align="left"
          />
          <Button
            href={`https://instagram.com/${contactInfo.instagram}`}
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
              key={moment.caption}
              className={cx(styles.item, moment.tall && styles.tall)}
              data-reveal
              style={{ '--reveal-delay': `${(index % 3) * 100}ms` } as CSSProperties}
            >
              <figure>
                <img src={moment.image} alt={moment.caption} loading="lazy" />
                <figcaption>{moment.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
