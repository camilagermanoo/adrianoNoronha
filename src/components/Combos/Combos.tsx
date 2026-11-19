import { combos } from '../../data/combos'
import { whatsAppLink } from '../../data/navigation'
import { tours } from '../../data/tours'
import { formatCurrency } from '../../utils/format'
import { Icon } from '../Icon/Icon'
import { Scene } from '../Scene/Scene'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Combos.module.css'

const tourTitles = new Map(tours.map((tour) => [tour.id, tour.title]))

export function Combos() {
  return (
    <section id="combos" className={styles.section}>
      <div className="container">
        <SectionHeader
          eyebrow="Combos"
          title="Combos com preço fechado para economizar"
          description="Roteiros que combinam os melhores passeios em um só pacote, com desconto no Pix e atendimento direto pelo WhatsApp."
          align="left"
        />

        <div className={styles.grid}>
          {combos.map((combo) => {
            const includedTours = combo.tourIds.map((id) => tourTitles.get(id) ?? id)

            return (
              <article key={combo.id} className={styles.card}>
                <Scene
                  gradient={combo.gradient}
                  image={combo.image}
                  alt={combo.title}
                  className={styles.scene}
                >
                  <div className={styles.overlay}>
                    <span className={styles.label}>Combo</span>
                    <h3 className={styles.title}>{combo.title}</h3>
                  </div>
                </Scene>

                <div className={styles.body}>
                  <ul className={styles.tours} aria-label="Passeios incluídos">
                    {includedTours.map((title) => (
                      <li key={title}>
                        <Icon name="check" size={16} />
                        {title}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.pricing}>
                    {combo.originalPrice && (
                      <s className={styles.original}>de {formatCurrency(combo.originalPrice)}</s>
                    )}
                    <p className={styles.cardPrice}>
                      <strong>{formatCurrency(combo.cardPrice)}</strong>/pessoa no cartão
                    </p>
                    <p className={styles.pix}>
                      ou <strong>{formatCurrency(combo.pixPrice)}</strong>/pessoa no Pix
                    </p>
                  </div>

                  <a
                    href={whatsAppLink(`Olá! Tenho interesse no combo "${combo.title}".`)}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.cta}
                  >
                    Quero este combo
                    <Icon name="arrowRight" size={16} />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
