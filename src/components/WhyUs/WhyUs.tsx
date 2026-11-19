import { Icon, type IconName } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './WhyUs.module.css'

const reasons: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'compass',
    title: 'Roteiro sob medida',
    description:
      'Montamos o roteiro ideal para o seu perfil, considerando maré, clima e dias na ilha.',
  },
  {
    icon: 'shield',
    title: 'Agendamentos sem stress',
    description:
      'Orientamos sobre trilhas e atrativos controlados pelo ICMBio antes da sua chegada.',
  },
  {
    icon: 'camera',
    title: 'Registros da viagem',
    description: 'Fotos durante os passeios e indicação de ensaios para guardar cada momento.',
  },
  {
    icon: 'message',
    title: 'Atendimento direto',
    description: 'Sem intermediários: você fala com quem organiza a sua viagem, pelo WhatsApp.',
  },
]

export function WhyUs() {
  return (
    <section className={styles.section} aria-labelledby="why-us-title">
      <div className="container">
        <SectionHeader
          id="why-us-title"
          eyebrow="Por que a Ilha Viva"
          title="Cuidamos de cada detalhe para você só aproveitar"
          align="left"
          tone="light"
        />

        <ul className={styles.grid}>
          {reasons.map((reason) => (
            <li key={reason.title} className={styles.card}>
              <Icon name={reason.icon} size={28} className={styles.icon} />
              <h3 className={styles.title}>{reason.title}</h3>
              <p>{reason.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
