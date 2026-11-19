import { faqItems } from '../../data/faq'
import { Icon } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Faq.module.css'

export function Faq() {
  return (
    <section id="duvidas" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <SectionHeader
          eyebrow="Dúvidas"
          title="Antes de reservar, tire suas dúvidas"
          align="left"
        />

        <div className={styles.list}>
          {faqItems.map((item) => (
            <details key={item.question} className={styles.item} name="faq">
              <summary className={styles.question}>
                {item.question}
                <Icon name="chevronDown" size={20} className={styles.chevron} />
              </summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
