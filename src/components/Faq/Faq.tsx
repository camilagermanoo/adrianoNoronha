import { faqItems } from '../../data/faq'
import { useLanguage } from '../../i18n/context'
import { Icon } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Faq.module.css'

export function Faq() {
  const { t, l } = useLanguage()

  return (
    <section id="duvidas" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} align="left" />

        <div data-reveal className={styles.list}>
          {faqItems.map((item) => (
            <details key={item.id} className={styles.item} name="faq">
              <summary className={styles.question}>
                {l(item.question)}
                <Icon name="chevronDown" size={20} className={styles.chevron} />
              </summary>
              <p className={styles.answer}>{l(item.answer)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
