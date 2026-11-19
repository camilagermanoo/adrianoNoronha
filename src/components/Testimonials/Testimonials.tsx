import type { CSSProperties } from 'react'
import { contactInfo } from '../../data/navigation'
import { testimonials } from '../../data/testimonials'
import { tours } from '../../data/tours'
import { useLanguage } from '../../i18n/context'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Testimonials.module.css'

const tourTitles = new Map(tours.map((tour) => [tour.id, tour.title]))

export function Testimonials() {
  const { t, l, locale } = useLanguage()

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

        <ul className={styles.grid}>
          {testimonials.map((testimonial, index) => {
            const tourTitle = testimonial.tourId ? tourTitles.get(testimonial.tourId) : undefined
            const isTranslated = testimonial.originalLocale !== locale

            return (
              <li
                key={testimonial.id}
                data-reveal
                style={{ '--reveal-delay': `${index * 100}ms` } as CSSProperties}
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
                      <small>
                        {t.testimonials.sourceLabel(testimonial.source)}
                        {tourTitle && ` · ${l(tourTitle)}`}
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
