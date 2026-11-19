import photo from '../../assets/hero.webp?responsive'
import { useLanguage } from '../../i18n/context'
import { sectionPath } from '../../utils/routes'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { TripPlanner } from '../TripPlanner/TripPlanner'
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage'
import styles from './Hero.module.css'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <p className={styles.kicker}>
            <Icon name="sun" size={18} />
            {t.hero.kicker}
          </p>
          <h1 className={styles.title}>
            {t.hero.titleStart} <span>{t.hero.titleHighlight}</span> {t.hero.titleEnd}
          </h1>
          <p className={styles.subtitle}>{t.hero.subtitle}</p>
          <div className={styles.actions}>
            <Button to={sectionPath('passeios')}>{t.hero.ctaTours}</Button>
            <Button to={sectionPath('sobre')} variant="outline">
              {t.hero.ctaAbout}
            </Button>
          </div>
        </div>

        <figure className={styles.media}>
          <ResponsiveImage
            picture={photo}
            sizes="(max-width: 900px) 360px, 480px"
            alt={t.hero.photoAlt}
            fetchPriority="high"
            className={styles.photo}
          />
          <figcaption className={`${styles.chip} ${styles.chipRating}`}>
            <Icon name="shield" size={18} />
            <span>
              {t.hero.chipCredentialPrefix} <strong>Cadastur</strong>
            </span>
          </figcaption>
          <span className={`${styles.chip} ${styles.chipTravelers}`} aria-hidden="true">
            <Icon name="users" size={18} />
            <span>
              {t.hero.chipTypePrefix} <strong>{t.hero.chipTypeHighlight}</strong>
            </span>
          </span>
        </figure>
      </div>

      <div className="container">
        <TripPlanner />
      </div>
    </section>
  )
}
