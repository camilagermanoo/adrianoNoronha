import { useCallback, useEffect, useRef, useState } from 'react'
import { contactInfo } from '../../data/navigation'
import { testimonials } from '../../data/testimonials'
import { tours } from '../../data/tours'
import { useLanguage } from '../../i18n/context'
import { ActionButton, Button } from '../Button/Button'
import { Flag } from '../Flag/Flag'
import { Icon } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Testimonials.module.css'

const tourTitles = new Map(tours.map((tour) => [tour.id, tour.title]))

function countryName(code: string, locale: string) {
  return new Intl.DisplayNames([locale], { type: 'region' }).of(code) ?? code
}

export function Testimonials() {
  const { t, l, locale } = useLanguage()
  const trackRef = useRef<HTMLUListElement>(null)
  const [canScroll, setCanScroll] = useState({ previous: false, next: false })
  const [isCopied, setIsCopied] = useState(false)

  const updateArrows = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const maxScroll = track.scrollWidth - track.clientWidth
    setCanScroll({ previous: track.scrollLeft > 4, next: track.scrollLeft < maxScroll - 4 })
  }, [])

  useEffect(() => {
    updateArrows()
    window.addEventListener('resize', updateArrows)
    return () => window.removeEventListener('resize', updateArrows)
  }, [updateArrows])

  useEffect(() => {
    if (!isCopied) return
    const timer = window.setTimeout(() => setIsCopied(false), 8000)
    return () => window.clearTimeout(timer)
  }, [isCopied])

  const sendFeedback = () => {
    navigator.clipboard
      ?.writeText(t.testimonials.feedback.message)
      .then(() => setIsCopied(true))
      .catch(() => undefined)
    window.open(contactInfo.instagramDmUrl, '_blank', 'noopener,noreferrer')
  }

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    const card = track?.firstElementChild as HTMLElement | null
    if (!track || !card) return
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' })
  }

  return (
    <section id="depoimentos" className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <SectionHeader
            eyebrow={t.testimonials.eyebrow}
            title={t.testimonials.title}
            description={t.testimonials.description}
            align="left"
          />
          <div className={styles.actions}>
            <ActionButton onClick={sendFeedback}>
              <Icon name="instagram" size={20} />
              {t.testimonials.feedback.open}
            </ActionButton>
            <Button
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              variant="outline"
            >
              <Icon name="instagram" size={20} />
              {t.testimonials.seeMore}
            </Button>
            <p className={styles.copied} role="status">
              {isCopied && (
                <>
                  <Icon name="check" size={16} />
                  {t.testimonials.feedback.copied}
                </>
              )}
            </p>
          </div>
        </div>

        <ul ref={trackRef} className={styles.track} onScroll={updateArrows} data-reveal>
          {testimonials.map((testimonial) => {
            const tourTitle = testimonial.tourId ? tourTitles.get(testimonial.tourId) : undefined
            const isTranslated = testimonial.originalLocale !== locale
            const details = [
              testimonial.countryCode && countryName(testimonial.countryCode, locale),
              t.testimonials.sourceLabel(testimonial.source),
              tourTitle && l(tourTitle),
            ].filter(Boolean)

            return (
              <li key={testimonial.id} className={styles.slide}>
                <figure className={styles.card}>
                  <span className={styles.mark} aria-hidden="true">
                    “
                  </span>
                  <blockquote
                    className={styles.quote}
                    lang={isTranslated ? undefined : testimonial.originalLocale}
                  >
                    {l(testimonial.quote)}
                  </blockquote>
                  {isTranslated && (
                    <p className={styles.translated}>
                      {t.testimonials.translatedFrom[testimonial.originalLocale]}
                    </p>
                  )}
                  <figcaption className={styles.author}>
                    <span className={styles.avatar} aria-hidden="true">
                      <Icon
                        name={testimonial.source === 'WhatsApp' ? 'whatsapp' : 'instagram'}
                        size={20}
                      />
                    </span>
                    <span>
                      <strong>{testimonial.author ?? t.testimonials.internationalTraveler}</strong>
                      {testimonial.instagram && (
                        <a
                          className={styles.handle}
                          href={`https://www.instagram.com/${testimonial.instagram}/`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          @{testimonial.instagram}
                        </a>
                      )}
                      <small className={styles.details}>
                        {testimonial.countryCode && (
                          <Flag code={testimonial.countryCode} className={styles.flag} />
                        )}
                        {details.join(' · ')}
                      </small>
                    </span>
                  </figcaption>
                </figure>
              </li>
            )
          })}
        </ul>

        {(canScroll.previous || canScroll.next) && (
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrow}
              aria-label={t.testimonials.previous}
              disabled={!canScroll.previous}
              onClick={() => scrollByCard(-1)}
            >
              <Icon name="arrowRight" size={20} className={styles.arrowBack} />
            </button>
            <button
              type="button"
              className={styles.arrow}
              aria-label={t.testimonials.next}
              disabled={!canScroll.next}
              onClick={() => scrollByCard(1)}
            >
              <Icon name="arrowRight" size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
