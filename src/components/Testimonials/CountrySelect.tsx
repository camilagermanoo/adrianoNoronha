import { forwardRef, useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import {
  countryList,
  filterCountries,
  flagEmoji,
  flagUrl,
  type Country,
} from '../../data/countries'
import { useLanguage } from '../../i18n/context'
import { cx } from '../../utils/classNames'
import { Icon } from '../Icon/Icon'
import styles from './CountrySelect.module.css'

interface CountrySelectProps {
  id: string
  value: string
  invalid?: boolean
  describedBy?: string
  onChange: (code: string) => void
}

export function Flag({ code, className }: { code: string; className?: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span className={cx(styles.emoji, className)} aria-hidden="true">
        {flagEmoji(code)}
      </span>
    )
  }

  return (
    <img
      className={cx(styles.flag, className)}
      src={flagUrl(code)}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export const CountrySelect = forwardRef<HTMLButtonElement, CountrySelectProps>(
  function CountrySelect({ id, value, invalid, describedBy, onChange }, buttonRef) {
    const { t, locale } = useLanguage()
    const copy = t.testimonials.feedback
    const listId = useId()
    const wrapperRef = useRef<HTMLDivElement>(null)
    const searchRef = useRef<HTMLInputElement>(null)
    const listRef = useRef<HTMLUListElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [activeIndex, setActiveIndex] = useState(0)

    const countries = useMemo(() => countryList(locale), [locale])
    const results = useMemo(() => filterCountries(countries, query), [countries, query])
    const selected = countries.find((country) => country.code === value)

    useEffect(() => {
      if (!isOpen) return
      searchRef.current?.focus()
      const handlePointerDown = (event: PointerEvent) => {
        if (!wrapperRef.current?.contains(event.target as Node)) setIsOpen(false)
      }
      document.addEventListener('pointerdown', handlePointerDown)
      return () => document.removeEventListener('pointerdown', handlePointerDown)
    }, [isOpen])

    useEffect(() => {
      const option = listRef.current?.children[activeIndex] as HTMLElement | undefined
      option?.scrollIntoView?.({ block: 'nearest' })
    }, [activeIndex])

    const open = () => {
      setQuery('')
      const selectedIndex = countries.findIndex((country) => country.code === value)
      setActiveIndex(Math.max(selectedIndex, 0))
      setIsOpen(true)
    }

    const choose = (country: Country) => {
      onChange(country.code)
      setIsOpen(false)
      if (typeof buttonRef === 'object') buttonRef?.current?.focus()
    }

    const handleSearchKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setActiveIndex((index) => Math.min(index + 1, results.length - 1))
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        setActiveIndex((index) => Math.max(index - 1, 0))
      } else if (event.key === 'Enter') {
        event.preventDefault()
        const country = results[activeIndex]
        if (country) choose(country)
      } else if (event.key === 'Escape') {
        event.preventDefault()
        event.stopPropagation()
        setIsOpen(false)
        if (typeof buttonRef === 'object') buttonRef?.current?.focus()
      }
    }

    return (
      <div ref={wrapperRef} className={styles.wrapper}>
        <button
          ref={buttonRef}
          id={id}
          type="button"
          className={cx(styles.trigger, invalid && styles.invalid)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          onClick={() => (isOpen ? setIsOpen(false) : open())}
        >
          {selected ? (
            <span className={styles.value}>
              <Flag code={selected.code} />
              {selected.name}
            </span>
          ) : (
            <span className={styles.placeholder}>{copy.countryPlaceholder}</span>
          )}
          <Icon name="chevronDown" size={18} className={cx(styles.chevron, isOpen && styles.up)} />
        </button>

        {isOpen && (
          <div className={styles.panel}>
            <input
              ref={searchRef}
              className={styles.search}
              type="text"
              role="combobox"
              aria-label={copy.countrySearch}
              aria-expanded="true"
              aria-controls={listId}
              aria-autocomplete="list"
              aria-activedescendant={
                results[activeIndex] ? `${listId}-${results[activeIndex].code}` : undefined
              }
              placeholder={copy.countrySearch}
              value={query}
              onChange={(event) => {
                setQuery(event.target.value)
                setActiveIndex(0)
              }}
              onKeyDown={handleSearchKeyDown}
              autoComplete="off"
            />
            <ul ref={listRef} id={listId} role="listbox" className={styles.list}>
              {results.map((country, index) => (
                <li
                  key={country.code}
                  id={`${listId}-${country.code}`}
                  role="option"
                  aria-selected={country.code === value}
                  className={cx(
                    styles.option,
                    index === activeIndex && styles.active,
                    country.code === value && styles.selected,
                  )}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => choose(country)}
                >
                  <Flag code={country.code} />
                  {country.name}
                  {country.code === value && (
                    <Icon name="check" size={16} className={styles.check} />
                  )}
                </li>
              ))}
              {results.length === 0 && <li className={styles.empty}>{copy.countryEmpty}</li>}
            </ul>
          </div>
        )}
      </div>
    )
  },
)
