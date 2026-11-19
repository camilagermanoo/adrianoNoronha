import { whatsAppLink } from '../../data/navigation'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { HeroIllustration } from './HeroIllustration'
import styles from './Hero.module.css'

const highlights = [
  { value: '+2.000', label: 'viajantes guiados' },
  { value: '12 anos', label: 'de experiência na ilha' },
  { value: '4,9/5', label: 'avaliação média' },
]

export function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <HeroIllustration />

      <div className={`container ${styles.content}`}>
        <span className={styles.eyebrow}>
          <Icon name="star" size={14} className={styles.star} />
          Guia credenciado pelo ICMBio
        </span>
        <h1 className={styles.title}>
          Descubra o paraíso com quem <em>vive</em> a ilha
        </h1>
        <p className={styles.subtitle}>
          Roteiros personalizados por praias, trilhas e mirantes do arquipélago, com segurança,
          histórias locais e respeito à natureza.
        </p>
        <div className={styles.actions}>
          <Button href={whatsAppLink()} target="_blank" rel="noreferrer" variant="whatsapp">
            <Icon name="whatsapp" size={20} />
            Falar no WhatsApp
          </Button>
          <Button href="#passeios" variant="ghost">
            Ver passeios
          </Button>
        </div>

        <dl className={styles.highlights}>
          {highlights.map((item) => (
            <div key={item.label} className={styles.highlight}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
