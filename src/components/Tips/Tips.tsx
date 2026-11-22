import { nightPlaces, sunsetPlaces, timeZoneTip, type TipPlace } from '../../data/tips'
import { useLanguage } from '../../i18n/context'
import { Icon } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Tips.module.css'

function PlaceList({ places }: { places: TipPlace[] }) {
  return (
    <ul className={styles.places}>
      {places.map((place) => (
        <li key={place.name}>
          <a href={place.href} target="_blank" rel="noreferrer" className={styles.place}>
            <span className={styles.placeName}>{place.name}</span>
            <span className={styles.placeHandle}>
              <Icon name="instagram" size={14} />
              {place.instagram}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export function Tips() {
  const { t, l } = useLanguage()

  return (
    <section id="dicas" className={styles.section}>
      <div className="container">
        <SectionHeader
          eyebrow={t.tips.eyebrow}
          title={t.tips.title}
          description={t.tips.description}
        />

        <div className={styles.timeZone} role="note" data-reveal>
          <Icon name="clock" size={28} />
          <div>
            <strong>{l(timeZoneTip.title)}</strong>
            <p>{l(timeZoneTip.text)}</p>
          </div>
        </div>

        <div className={styles.grid}>
          <article className={styles.card} data-reveal>
            <h3 className={styles.cardTitle}>
              <Icon name="sun" size={22} />
              {t.tips.sunsetTitle}
            </h3>
            <p className={styles.cardText}>{t.tips.sunsetText}</p>
            <PlaceList places={sunsetPlaces} />
          </article>

          <article className={styles.card} data-reveal>
            <h3 className={styles.cardTitle}>
              <Icon name="star" size={22} />
              {t.tips.nightTitle}
            </h3>
            <PlaceList places={nightPlaces} />
            <p className={styles.cardText}>{t.tips.nightMore}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
