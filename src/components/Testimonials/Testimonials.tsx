import { testimonials } from '../../data/testimonials'
import { Icon } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Testimonials.module.css'

export function Testimonials() {
  return (
    <section id="avaliacoes" className={styles.section}>
      <div className="container">
        <SectionHeader eyebrow="Avaliações" title="O que dizem os viajantes" align="left" />

        <ul className={styles.grid}>
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <figure className={styles.card}>
                <div
                  className={styles.stars}
                  role="img"
                  aria-label={`${testimonial.rating} de 5 estrelas`}
                >
                  {Array.from({ length: testimonial.rating }, (_, index) => (
                    <Icon key={index} name="star" size={18} />
                  ))}
                </div>
                <blockquote className={styles.quote}>“{testimonial.message}”</blockquote>
                <figcaption className={styles.author}>
                  <span className={styles.avatar} aria-hidden="true">
                    {testimonial.name.charAt(0)}
                  </span>
                  <span>
                    <strong>{testimonial.name}</strong>
                    <small>
                      {testimonial.origin} · {testimonial.date}
                    </small>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
