import { contactInfo, navItems } from '../../data/navigation'
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
            Guia credenciado pelo ICMBio, apresentando o arquipélago com respeito à natureza e à
            comunidade local.
          </p>
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
              <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer">
                WhatsApp {contactInfo.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${contactInfo.instagram}`}
                target="_blank"
                rel="noreferrer"
              >
                @{contactInfo.instagram}
              </a>
            </li>
            <li>{contactInfo.address}</li>
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
