import logo from '../../assets/logo.webp'
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
  { value: '12 anos', label: 'guiando na ilha' },
  { value: '+2.000', label: 'viajantes' },
  { value: '4,9', label: 'nota média' },
]

export function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.visual}>
          <img src={logo} alt="" className={styles.logo} width={512} height={512} />
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
            description="Sou guia de turismo credenciado e moro em Fernando de Noronha. Meu trabalho é fazer você sair da ilha com a sensação de que conheceu Noronha de verdade, e não só tirou fotos dela."
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
