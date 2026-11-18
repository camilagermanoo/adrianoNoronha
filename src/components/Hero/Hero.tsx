import { Button } from '../Button/Button'
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
        <span className={styles.eyebrow}>Guia credenciado em Fernando de Noronha</span>
        <h1 className={styles.title}>
          Descubra o paraíso com quem <em>vive</em> a ilha
        </h1>
        <p className={styles.subtitle}>
          Roteiros personalizados por praias, trilhas e mirantes do arquipélago, com segurança,
          histórias locais e respeito à natureza.
        </p>
        <div className={styles.actions}>
          <Button href="#passeios">Ver passeios</Button>
          <Button href="#destinos" variant="ghost">
            Explorar destinos
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
