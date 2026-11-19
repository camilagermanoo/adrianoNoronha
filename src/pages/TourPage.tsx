import { Link, Navigate, useParams } from 'react-router'
import { whatsAppLink } from '../data/navigation'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { tours } from '../data/tours'
import { useLanguage } from '../i18n/context'
import { htmlLang } from '../i18n/locales'
import type { Tour, TourOption } from '../types'
import { cx } from '../utils/classNames'
import { formatCurrency } from '../utils/format'
import { sectionPath } from '../utils/routes'
import { Button } from '../components/Button/Button'
import { Icon } from '../components/Icon/Icon'
import { PhotoGallery } from '../components/PhotoGallery/PhotoGallery'
import { ResponsiveImage } from '../components/ResponsiveImage/ResponsiveImage'
import { TourCard } from '../components/Tours/TourCard'
import styles from './TourPage.module.css'

const RELATED_LIMIT = 3

function relatedTours(tour: Tour) {
  const sameCategory = tours.filter(
    (item) => item.id !== tour.id && item.category === tour.category,
  )
  const others = tours.filter((item) => item.id !== tour.id && item.category !== tour.category)
  return [...sameCategory, ...others].slice(0, RELATED_LIMIT)
}

function TourOptionRow({
  tour,
  option,
  reversed,
}: {
  tour: Tour
  option: TourOption
  reversed: boolean
}) {
  const { t, l, locale } = useLanguage()
  const tourTitle = l(tour.title)
  const optionTitle = l(option.title)
  const fullTitle = `${tourTitle} ${optionTitle}`
  const unit = option.priceUnit === 'perPerson' ? t.tourPage.perPerson : t.tourPage.total

  return (
    <article className={cx(styles.option, reversed && styles.optionReversed)} data-reveal>
      <PhotoGallery
        photos={option.photos}
        alt={(index) => t.tourPage.photoAlt(fullTitle, index)}
        thumbnailLabel={(index) => t.tourPage.showPhoto(index)}
      />

      <div className={styles.optionBody}>
        <h3 className={styles.optionTitle}>{fullTitle}</h3>
        <p className={styles.optionSummary}>{l(option.summary)}</p>

        <dl className={styles.facts}>
          <div>
            <dt>
              <Icon name="clock" size={16} />
              {t.tourPage.schedule}
            </dt>
            <dd>{l(option.schedule)}</dd>
          </div>
          <div>
            <dt>
              <Icon name="mapPin" size={16} />
              {t.tourPage.vehicle}
            </dt>
            <dd>{l(option.vehicle)}</dd>
          </div>
        </dl>

        <ul className={styles.includes}>
          {l(option.includes).map((item) => (
            <li key={item}>
              <Icon name="check" size={16} />
              {item}
            </li>
          ))}
        </ul>

        <table className={styles.prices}>
          <tbody>
            {option.prices.map((price) => (
              <tr key={l(price.label)}>
                <th scope="row">{l(price.label)}</th>
                <td>
                  <strong>{formatCurrency(price.amount, htmlLang[locale])}</strong> {unit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {option.priceNote && <p className={styles.priceNote}>{l(option.priceNote)}</p>}

        <Button
          href={whatsAppLink(t.tourPage.optionMessage(tourTitle, optionTitle))}
          target="_blank"
          rel="noreferrer"
          variant="whatsapp"
          className={styles.optionCta}
        >
          <Icon name="whatsapp" size={20} />
          {t.tourPage.bookOption(optionTitle)}
        </Button>
      </div>
    </article>
  )
}

export function TourPage() {
  const { tourId } = useParams()
  const { t, l } = useLanguage()
  const tour = tours.find((item) => item.id === tourId)
  const title = tour ? l(tour.title) : ''

  useDocumentTitle(tour ? t.tourPage.pageTitle(title) : t.meta.title)

  if (!tour) return <Navigate to={sectionPath('passeios')} replace />

  const bookLink = whatsAppLink(t.tours.bookMessage(title))
  const photos = tour.gallery ?? []

  return (
    <article className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <nav aria-label={t.tourPage.breadcrumbAria}>
              <ol className={styles.breadcrumb}>
                <li>
                  <Link to="/">{t.tourPage.home}</Link>
                </li>
                <li>
                  <Link to={sectionPath('passeios')}>{t.tourPage.tours}</Link>
                </li>
                <li aria-current="page">{title}</li>
              </ol>
            </nav>

            <span className={styles.category}>{t.tours.categories[tour.category]}</span>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.summary}>{l(tour.summary)}</p>

            <ul className={styles.details}>
              {l(tour.details).map((detail) => (
                <li key={detail}>
                  <Icon name="check" size={14} />
                  {detail}
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              {tour.options ? (
                <Button to={{ hash: 'modalidades' }}>{t.tourPage.seeOptions}</Button>
              ) : (
                <Button href={bookLink} target="_blank" rel="noreferrer" variant="whatsapp">
                  <Icon name="whatsapp" size={20} />
                  {t.tourPage.bookTour}
                </Button>
              )}
              <Button to={sectionPath('passeios')} variant="outline">
                {t.tourPage.backToTours}
              </Button>
            </div>
          </div>

          <ResponsiveImage
            picture={tour.heroImage ?? tour.image}
            sizes="(max-width: 900px) 100vw, 560px"
            alt={title}
            fetchPriority="high"
            className={styles.heroImage}
            style={{ objectPosition: tour.heroImagePosition }}
          />
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <h2 className={styles.heading}>{t.tourPage.about}</h2>
        <p className={styles.description}>{l(tour.description)}</p>

        <div className={styles.notes}>
          {tour.requiresParkCard && (
            <p className={styles.notice}>
              <Icon name="shield" size={18} />
              {t.tours.parkCardFull}
            </p>
          )}
          {tour.payment && (
            <p className={styles.payment}>
              <Icon name="check" size={18} />
              <span>
                <strong>{t.tourPage.payment}:</strong> {l(tour.payment)}
              </span>
            </p>
          )}
        </div>
      </section>

      {tour.highlights && (
        <section className={`container ${styles.section}`}>
          <h2 className={styles.heading}>{t.tourPage.highlights}</h2>
          <ul className={styles.highlights}>
            {tour.highlights.map((highlight) => (
              <li key={l(highlight.title)} className={styles.highlight} data-reveal>
                <span className={styles.highlightIcon}>
                  <Icon name={highlight.icon} size={26} />
                </span>
                <h3>{l(highlight.title)}</h3>
                <p>{l(highlight.text)}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {tour.options && (
        <section id="modalidades" className={`container ${styles.section}`}>
          <h2 className={styles.heading}>{t.tourPage.options}</h2>
          <div className={styles.options}>
            {tour.options.map((option, index) => (
              <TourOptionRow
                key={option.id}
                tour={tour}
                option={option}
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </section>
      )}

      {photos.length > 0 && (
        <section className={`container ${styles.section}`}>
          <h2 className={styles.heading}>{t.tourPage.gallery}</h2>
          <ul className={styles.gallery}>
            {photos.map((photo, index) => (
              <li key={photo.img.src} data-reveal>
                <ResponsiveImage
                  picture={photo}
                  sizes="(max-width: 760px) 50vw, 400px"
                  alt={t.tourPage.photoAlt(title, index + 1)}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="container">
        <div className={styles.cta} data-reveal>
          <div>
            <h2>{t.tourPage.ctaTitle}</h2>
            <p>{t.tourPage.ctaText}</p>
          </div>
          <Button href={bookLink} target="_blank" rel="noreferrer" variant="whatsapp">
            <Icon name="whatsapp" size={20} />
            {t.tourPage.bookTour}
          </Button>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <h2 className={styles.heading}>{t.tourPage.related}</h2>
        <div className={styles.related}>
          {relatedTours(tour).map((item, index) => (
            <TourCard key={item.id} tour={item} index={index} />
          ))}
        </div>
      </section>
    </article>
  )
}
