import { useEffect, useState } from 'react'
import { navItems, whatsAppLink } from '../../data/navigation'
import { useScrolled } from '../../hooks/useScrolled'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { Logo } from '../Logo/Logo'
import styles from './Header.module.css'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = useScrolled(40)

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
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Logo />

        <nav
          id="main-navigation"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
          aria-label="Navegação principal"
        >
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.link} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href={whatsAppLink()}
            target="_blank"
            rel="noreferrer"
            variant="whatsapp"
            size="sm"
            onClick={closeMenu}
          >
            <Icon name="whatsapp" size={18} />
            Fale no WhatsApp
          </Button>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ''}`} />
        </button>
      </div>
    </header>
  )
}
