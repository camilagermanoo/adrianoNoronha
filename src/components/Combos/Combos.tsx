import type { CSSProperties } from 'react'
import { Link } from 'react-router'
import { combos } from '../../data/combos'
import { whatsAppLink } from '../../data/navigation'
import { tours } from '../../data/tours'
import { useLanguage } from '../../i18n/context'
import { sectionPath, tourPath } from '../../utils/routes'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Combos.module.css'

const toursById = new Map(tours.map((tour) => [tour.id, tour]))

export function Combos() {
  const { t, l } = useLanguage()

  return (
    <section id="combos" className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <SectionHeader
            eyebrow={t.combos.eyebrow}
            title={t.combos.title}
            description={t.combos.description}
            align="left"
          />
          <Button to={sectionPath('contato')} variant="outline">
            {t.combos.custom}
          </Button>
        </div>

        <div className={styles.list}>
          {combos.map((combo, index) => {
            const comboTours = combo.tourIds.flatMap((id) => {
              const tour = toursById.get(id)
              return tour ? [tour] : []
            })
            const name = comboTours.map((tour) => l(tour.title)).join(' + ')

            return (
              <article
                key={combo.id}
                className={styles.card}
                data-reveal
                style={{ '--reveal-delay': `${index * 120}ms` } as CSSProperties}
              >
                <div className={styles.photos} data-count={combo.photos.length}>
                  {combo.photos.map((photo) => (
                    <ResponsiveImage
                      key={photo.img.src}
                      picture={photo}
                      sizes="(max-width: 860px) 50vw, 300px"
                      loading="lazy"
                    />
                  ))}
                </div>

                <div className={styles.body}>
                  <h3 className={styles.title}>{name}</h3>
                  <p className={styles.description}>{l(combo.description)}</p>

                  <ul className={styles.tours} aria-label={t.combos.includedAria}>
                    {comboTours.map((tour) => (
                      <li key={tour.id}>
                        <Link to={tourPath(tour.id)}>
                          <Icon name="check" size={14} />
                          {l(tour.title)}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={whatsAppLink(t.combos.message(name))}
                    target="_blank"
                    rel="noreferrer"
                    variant="whatsapp"
                    className={styles.cta}
                  >
                    <Icon name="whatsapp" size={20} />
                    {t.combos.cta}
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
