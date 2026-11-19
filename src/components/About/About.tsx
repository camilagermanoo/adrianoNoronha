import buggySnorkel from '../../assets/adriano/buggy-snorkel.webp?responsive'
import doisIrmaos from '../../assets/adriano/dois-irmaos.webp?responsive'
import mergulho from '../../assets/adriano/mergulho.webp?responsive'
import { useLanguage } from '../../i18n/context'
import { Icon, type IconName } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { PhotoCrossfade } from '../PhotoCrossfade/PhotoCrossfade'
import styles from './About.module.css'

const adrianoPhotos = [doisIrmaos, buggySnorkel, mergulho]

const pillarIcons: IconName[] = ['heart', 'users', 'compass']

export function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div data-reveal className={styles.visual}>
          <PhotoCrossfade
            photos={adrianoPhotos}
            alts={t.about.photoAlts}
            sizes="(max-width: 900px) 320px, 440px"
            className={styles.photo}
          />
          <dl className={styles.stats}>
            {t.about.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <SectionHeader
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            description={t.about.description}
            align="left"
          />

          <ul data-reveal className={styles.pillars}>
            {t.about.pillars.map((pillar, index) => (
              <li key={pillar.title}>
                <span className={styles.icon}>
                  <Icon name={pillarIcons[index]} size={22} />
                </span>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
