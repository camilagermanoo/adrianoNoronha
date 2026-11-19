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
          <Logo variant="light" />
          <p>
            Guia credenciado em Fernando de Noronha, apresentando o arquipélago com respeito à
            natureza e à comunidade local.
          </p>
          <Button
            href={whatsAppLink()}
            target="_blank"
            rel="noreferrer"
            variant="whatsapp"
            size="sm"
          >
            <Icon name="whatsapp" size={18} />
            Fale no WhatsApp
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
              <Icon name="message" size={16} />
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
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
              {contactInfo.address}
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.title}>Selos</h3>
          <ul className={styles.list}>
            <li>
              <Icon name="award" size={16} />
              Guia credenciado ICMBio
            </li>
            <li>
              <Icon name="shield" size={16} />
              Cadastur ativo
            </li>
            <li>
              <Icon name="star" size={16} />
              Nota 4,9 dos viajantes
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {currentYear} Ilha Viva. Todos os direitos reservados.</p>
        <p>CADASTUR 00.000000.00-0</p>
      </div>
    </footer>
  )
}
