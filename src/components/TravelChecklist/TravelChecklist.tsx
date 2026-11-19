import { checklist } from '../../data/checklist'
import { Icon } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './TravelChecklist.module.css'

export function TravelChecklist() {
  return (
    <section id="antes-de-viajar" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <SectionHeader
            eyebrow="Antes de viajar"
            title="Cinco passos para chegar na ilha sem imprevistos"
            description="Noronha tem regras próprias para proteger o arquipélago. Com essa lista você chega pronto para aproveitar."
            align="left"
          />
        </div>

        <ol className={styles.list}>
          {checklist.map((item, index) => (
            <li key={item.title} className={styles.item}>
              <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                {item.link && (
                  <a href={item.link.href} target="_blank" rel="noreferrer" className={styles.link}>
                    {item.link.label}
                    <Icon name="arrowRight" size={16} />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
