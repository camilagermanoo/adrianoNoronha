import { tripProfiles } from '../../data/tripProfiles'
import { whatsAppLink } from '../../data/navigation'
import { Icon } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './TripProfiles.module.css'

export function TripProfiles() {
  return (
    <section className={styles.section} aria-labelledby="trip-profiles-title">
      <div className="container">
        <SectionHeader
          id="trip-profiles-title"
          eyebrow="Não sabe por onde começar?"
          title="Conte como é a sua viagem e indicamos o passeio certo"
          align="left"
        />

        <ul className={styles.grid}>
          {tripProfiles.map((profile) => (
            <li key={profile.id} className={styles.card}>
              <span className={styles.icon}>
                <Icon name={profile.icon} size={26} />
              </span>
              <h3 className={styles.title}>{profile.title}</h3>
              <p className={styles.description}>{profile.description}</p>
              <a
                href={whatsAppLink(profile.message)}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <Icon name="whatsapp" size={18} />
                Falar no WhatsApp
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.footnote}>
          Prefere ver tudo com calma? <a href="#passeios">Veja todos os passeios</a>
        </p>
      </div>
    </section>
  )
}
