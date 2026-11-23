import { useRef } from 'react'
import { contactInfo } from '../../data/navigation'
import { testimonials } from '../../data/testimonials'
import { tours } from '../../data/tours'
import { useAutoScroll } from '../../hooks/useAutoScroll'
import { useLanguage } from '../../i18n/context'
import { ActionButton, Button } from '../Button/Button'
import { Flag } from '../Flag/Flag'
import { Icon } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Testimonials.module.css'

const tourTitles = new Map(tours.map((tour) => [tour.id, tour.title]))
const loopedTestimonials = [...testimonials, ...testimonials]

function isMobileDevice() {
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)
}

function countryName(code: string, locale: string) {
  return new Intl.DisplayNames([locale], { type: 'region' }).of(code) ?? code
}

export function Testimonials() {
  const { t, l, locale } = useLanguage()
  const trackRef = useRef<HTMLUListElement>(null)
  const { pause, resume, pauseTemporarily } = useAutoScroll(trackRef, { speed: 35 })

  const sendFeedback = () => {
    navigator.clipboard?.writeText(t.testimonials.feedback.message).catch(() => undefined)
    const url = isMobileDevice() ? contactInfo.instagramDmUrl : contactInfo.instagramUrl
    window.open(url, '_blank', 'noopener,noreferrer')
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
              <Icon name="message" size={20} />
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
          </div>
        </div>

        <ul
          ref={trackRef}
          className={styles.track}
          data-reveal
          onMouseEnter={pause}
          onMouseLeave={() => resume()}
          onFocus={pause}
          onBlur={() => resume()}
          onTouchStart={pause}
          onTouchEnd={() => resume(4000)}
          onWheel={pauseTemporarily}
        >
          {loopedTestimonials.map((testimonial, index) => {
            const isClone = index >= testimonials.length
            const tourTitle = testimonial.tourId ? tourTitles.get(testimonial.tourId) : undefined
            const isTranslated = testimonial.originalLocale !== locale
            const details = [
              testimonial.countryCode && countryName(testimonial.countryCode, locale),
              t.testimonials.sourceLabel(testimonial.source),
              tourTitle && l(tourTitle),
            ].filter(Boolean)

            return (
              <li
                key={`${testimonial.id}-${index}`}
                className={styles.slide}
                aria-hidden={isClone || undefined}
                inert={isClone || undefined}
              >
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
      </div>
    </section>
  )
}
