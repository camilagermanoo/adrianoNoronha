import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { navItems } from '../../data/navigation'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrolled } from '../../hooks/useScrolled'
import { useLanguage } from '../../i18n/context'
import { cx } from '../../utils/classNames'
import { sectionPath } from '../../utils/routes'
import { Button } from '../Button/Button'
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher'
import { Logo } from '../Logo/Logo'
import styles from './Header.module.css'

const observedSections = [
  'inicio',
  ...navItems,
  'momentos',
  'depoimentos',
  'antes-de-viajar',
  'contato',
]

export function Header() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = useScrolled(24)
  const { pathname } = useLocation()
  const activeSection = useActiveSection(observedSections, pathname)
  const currentSection = pathname.startsWith('/passeios/') ? 'passeios' : activeSection

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={cx(styles.header, isScrolled && styles.scrolled)}>
      <div className={`container ${styles.inner}`}>
        <Logo />

        <nav
          id="main-navigation"
          className={cx(styles.nav, isMenuOpen && styles.navOpen)}
          aria-label={t.nav.aria}
        >
          <ul className={styles.list}>
            {navItems.map((id) => (
              <li key={id}>
                <Link
                  to={sectionPath(id)}
                  className={cx(styles.link, currentSection === id && styles.active)}
                  aria-current={currentSection === id ? 'location' : undefined}
                  onClick={closeMenu}
                >
                  {t.nav.items[id]}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
          <Button to={sectionPath('contato')} size="sm" onClick={closeMenu}>
            {t.nav.planTrip}
          </Button>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={cx(styles.burger, isMenuOpen && styles.burgerOpen)} />
        </button>
      </div>
    </header>
  )
}
