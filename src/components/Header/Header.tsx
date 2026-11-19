import { useEffect, useState } from 'react'
import { navItems } from '../../data/navigation'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrolled } from '../../hooks/useScrolled'
import { useLanguage } from '../../i18n/context'
import { cx } from '../../utils/classNames'
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
  const activeSection = useActiveSection(observedSections)

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
                <a
                  href={`#${id}`}
                  className={cx(styles.link, activeSection === id && styles.active)}
                  aria-current={activeSection === id ? 'location' : undefined}
                  onClick={closeMenu}
                >
                  {t.nav.items[id]}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
          <Button href="#contato" size="sm" onClick={closeMenu}>
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
