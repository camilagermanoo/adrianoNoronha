import photo from '../../assets/about.webp'
import { Icon, type IconName } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './About.module.css'

const pillars: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'heart',
    title: 'Respeito à ilha',
    text: 'Seguimos as regras do Parque Nacional Marinho e ensinamos a visitar sem deixar rastro.',
  },
  {
    icon: 'users',
    title: 'Grupos pequenos',
    text: 'Menos gente por passeio significa mais tempo em cada lugar e atenção para todo mundo.',
  },
  {
    icon: 'compass',
    title: 'Olhar local',
    text: 'Histórias, horários de maré e cantinhos que só quem vive em Noronha conhece.',
  },
]

const stats = [
  { value: 'Cadastur', label: 'guia credenciado' },
  { value: 'Coletivo', label: 'ou privativo' },
  { value: '4x4', label: 'carro confortável' },
]

export function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.visual}>
          <img
            src={photo}
            alt="Grupo de viajantes em um mirante de Fernando de Noronha durante passeio"
            className={styles.photo}
            width={800}
            height={600}
          />
          <dl className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <SectionHeader
            eyebrow="Sobre"
            title="Prazer, Adriano"
            description="Sou guia credenciado pelo Cadastur e apresento Fernando de Noronha com as histórias e os fatos do arquipélago. Atendo grupos e famílias, em passeios coletivos ou privativos, sempre em carro seguro e confortável."
            align="left"
          />

          <ul className={styles.pillars}>
            {pillars.map((pillar) => (
              <li key={pillar.title}>
                <span className={styles.icon}>
                  <Icon name={pillar.icon} size={22} />
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
