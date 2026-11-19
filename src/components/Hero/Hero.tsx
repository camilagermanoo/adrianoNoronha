import photo from '../../assets/hero.webp'
import { useLanguage } from '../../i18n/context'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { TripPlanner } from '../TripPlanner/TripPlanner'
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
            <Button href="#passeios">{t.hero.ctaTours}</Button>
            <Button href="#sobre" variant="outline">
              {t.hero.ctaAbout}
            </Button>
          </div>
        </div>

        <figure className={styles.media}>
          <img
            src={photo}
            alt={t.hero.photoAlt}
            className={styles.photo}
            width={1400}
            height={1050}
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
