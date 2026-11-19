import { whatsAppLink } from '../../data/navigation'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import styles from './ContactCta.module.css'

export function ContactCta() {
  return (
    <section id="contato" className={styles.section}>
      <div className={`container ${styles.card}`}>
        <div>
          <span className={styles.eyebrow}>Roteiro personalizado</span>
          <h2 className={styles.title}>Pronto para viver Noronha?</h2>
          <p className={styles.text}>
            Conte as datas da sua viagem e quem vai com você. Em poucos minutos enviamos um roteiro
            com os passeios ideais e os valores, sem compromisso.
          </p>
        </div>

        <div className={styles.actions}>
          <Button
            href={whatsAppLink('Olá! Quero montar um roteiro personalizado em Noronha.')}
            target="_blank"
            rel="noreferrer"
            variant="whatsapp"
          >
            <Icon name="whatsapp" size={20} />
            Montar meu roteiro
          </Button>
          <Button href="#passeios" variant="ghost">
            Ver passeios
          </Button>
        </div>
      </div>
    </section>
  )
}
