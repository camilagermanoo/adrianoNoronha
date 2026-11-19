import { contactInfo, navItems, whatsAppLink } from '../../data/navigation'
import { Link } from 'react-router'
import { useLanguage } from '../../i18n/context'
import { sectionPath } from '../../utils/routes'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { Logo } from '../Logo/Logo'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

export function Footer() {
  const { t } = useLanguage()
  const defaultLink = whatsAppLink(t.common.whatsappDefault)

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo variant="light" size="lg" />
          <p>{t.footer.text}</p>
          <Button href={defaultLink} target="_blank" rel="noreferrer" variant="whatsapp" size="sm">
            <Icon name="whatsapp" size={18} />
            {t.footer.whatsappCta}
          </Button>
        </div>

        <nav aria-label={t.nav.footerAria}>
          <h3 className={styles.title}>{t.footer.navigation}</h3>
          <ul className={styles.list}>
            {navItems.map((id) => (
              <li key={id}>
                <Link to={sectionPath(id)}>{t.nav.items[id]}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className={styles.title}>{t.footer.contact}</h3>
          <ul className={styles.list}>
            <li>
              <Icon name="phone" size={16} />
              <a href={defaultLink} target="_blank" rel="noreferrer">
                {contactInfo.whatsappDisplay}
              </a>
            </li>
            <li>
              <Icon name="instagram" size={16} />
              <a href={contactInfo.instagramUrl} target="_blank" rel="noreferrer">
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
          <h3 className={styles.title}>{t.footer.payment}</h3>
          <ul className={styles.list}>
            <li>
              <Icon name="check" size={16} />
              {t.footer.paymentMethods}
            </li>
            <li>
              <Icon name="shield" size={16} />
              {t.footer.credential}
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>{t.footer.rights(currentYear)}</p>
      </div>
    </footer>
  )
}
