import { contactInfo, navItems, whatsAppLink } from '../../data/navigation'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { Logo } from '../Logo/Logo'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo variant="light" size="lg" />
          <p>
            Passeios guiados em Fernando de Noronha com guia credenciado, em grupo ou só para a sua
            família.
          </p>
          <Button
            href={whatsAppLink()}
            target="_blank"
            rel="noreferrer"
            variant="whatsapp"
            size="sm"
          >
            <Icon name="whatsapp" size={18} />
            Chamar no WhatsApp
          </Button>
        </div>

        <nav aria-label="Links do rodapé">
          <h3 className={styles.title}>Navegação</h3>
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className={styles.title}>Contato</h3>
          <ul className={styles.list}>
            <li>
              <Icon name="phone" size={16} />
              <a href={whatsAppLink()} target="_blank" rel="noreferrer">
                {contactInfo.whatsappDisplay}
              </a>
            </li>
            <li>
              <Icon name="instagram" size={16} />
              <a
                href={`https://instagram.com/${contactInfo.instagram}`}
                target="_blank"
                rel="noreferrer"
              >
                @{contactInfo.instagram}
              </a>
            </li>
            <li>
              <Icon name="mapPin" size={16} />
              {contactInfo.location}
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.title}>Pagamento</h3>
          <ul className={styles.list}>
            <li>
              <Icon name="check" size={16} />
              {contactInfo.payment}
            </li>
            <li>
              <Icon name="shield" size={16} />
              Guia credenciado Cadastur
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {currentYear} Adriano Noronha Passeios. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
