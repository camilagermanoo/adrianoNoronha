import { useEffect, useState } from 'react'
import { navItems } from '../../data/navigation'
import { useScrolled } from '../../hooks/useScrolled'
import { Logo } from '../Logo/Logo'
import styles from './Header.module.css'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = useScrolled()

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
        <Logo variant={isScrolled ? 'dark' : 'light'} />

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
          <a href="#contato" className={styles.cta} onClick={closeMenu}>
            Reservar passeio
          </a>
        </nav>
      </div>
    </header>
  )
}
