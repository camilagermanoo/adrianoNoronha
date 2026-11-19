import { contactInfo } from '../../data/navigation'
import { Icon, type IconName } from '../Icon/Icon'
import styles from './TrustBar.module.css'

const badges: { icon: IconName; label: string }[] = [
  { icon: 'award', label: 'Guia credenciado ICMBio' },
  { icon: 'shield', label: 'Cadastur ativo' },
  { icon: 'users', label: 'Grupos reduzidos' },
  { icon: 'instagram', label: `@${contactInfo.instagram}` },
]

export function TrustBar() {
  return (
    <section className={styles.section} aria-label="Avaliações e credenciais">
      <div className="container">
        <a href="#avaliacoes" className={styles.rating}>
          <strong className={styles.score}>
            4,9<small>/5</small>
          </strong>
          <span className={styles.details}>
            <span className={styles.stars} aria-label="5 estrelas">
              {Array.from({ length: 5 }, (_, index) => (
                <Icon key={index} name="star" size={18} />
              ))}
            </span>
            <span>
              <b>+480 avaliações</b> de viajantes
            </span>
            <small>Ver depoimentos</small>
          </span>
        </a>

        <ul className={styles.badges}>
          {badges.map((badge) => (
            <li key={badge.label}>
              <Icon name={badge.icon} size={18} />
              {badge.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
