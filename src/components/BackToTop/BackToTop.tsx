import { useScrolled } from '../../hooks/useScrolled'
import { useLanguage } from '../../i18n/context'
import { cx } from '../../utils/classNames'
import { Icon } from '../Icon/Icon'
import styles from './BackToTop.module.css'

export function BackToTop() {
  const { t } = useLanguage()
  const isVisible = useScrolled(900)

  return (
    <button
      type="button"
      className={cx(styles.button, isVisible && styles.visible)}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t.common.backToTop}
      tabIndex={isVisible ? 0 : -1}
    >
      <Icon name="arrowUp" size={22} />
    </button>
  )
}
