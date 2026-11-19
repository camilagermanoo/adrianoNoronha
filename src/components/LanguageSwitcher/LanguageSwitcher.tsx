import { useLanguage } from '../../i18n/context'
import { localeNames, locales } from '../../i18n/locales'
import { cx } from '../../utils/classNames'
import styles from './LanguageSwitcher.module.css'

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div className={styles.switcher} role="group" aria-label={t.common.language}>
      {locales.map((option) => (
        <button
          key={option}
          type="button"
          lang={option}
          className={cx(styles.option, option === locale && styles.active)}
          aria-pressed={option === locale}
          aria-label={localeNames[option]}
          onClick={() => setLocale(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
