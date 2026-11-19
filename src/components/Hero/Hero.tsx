import photo from '../../assets/hero.webp'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { TripPlanner } from '../TripPlanner/TripPlanner'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <p className={styles.kicker}>
            <Icon name="sun" size={18} />
            Fernando de Noronha, Pernambuco
          </p>
          <h1 className={styles.title}>
            A ilha contada por quem <span>vive</span> nela
          </h1>
          <p className={styles.subtitle}>
            Passeios guiados por mar e por terra, no ritmo da maré e com o olhar de quem conhece
            cada enseada, trilha e mirante do arquipélago.
          </p>
          <div className={styles.actions}>
            <Button href="#passeios">Conhecer passeios</Button>
            <Button href="#sobre" variant="outline">
              Quem é o Adriano
            </Button>
          </div>
        </div>

        <figure className={styles.media}>
          <img
            src={photo}
            alt="Morro Dois Irmãos visto do mar em Fernando de Noronha"
            className={styles.photo}
            width={1400}
            height={1050}
          />
          <figcaption className={`${styles.chip} ${styles.chipRating}`}>
            <Icon name="shield" size={18} />
            <span>
              Guia credenciado <strong>Cadastur</strong>
            </span>
          </figcaption>
          <span className={`${styles.chip} ${styles.chipTravelers}`} aria-hidden="true">
            <Icon name="users" size={18} />
            <span>
              Coletivo ou <strong>privativo</strong>
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
