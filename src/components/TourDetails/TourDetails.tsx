import { useEffect, useRef, type MouseEvent } from 'react'
import { whatsAppLink } from '../../data/navigation'
import type { Tour } from '../../types'
import { Icon } from '../Icon/Icon'
import styles from './TourDetails.module.css'

interface TourDetailsProps {
  tour: Tour | null
  onClose: () => void
}

export function TourDetails({ tour, onClose }: TourDetailsProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (tour && !dialog.open) {
      dialog.showModal()
      dialog.querySelector('article')?.scrollTo(0, 0)
    }
    if (!tour && dialog.open) dialog.close()
  }, [tour])

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      onClose={onClose}
      onClick={handleBackdropClick}
      aria-labelledby="tour-details-title"
    >
      {tour && (
        <article className={styles.content}>
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Fechar"
            autoFocus
          >
            <Icon name="close" size={22} />
          </button>
          <div className={styles.media}>
            <img src={tour.image} alt={tour.title} />
            <span className={styles.category}>{tour.category}</span>
          </div>

          <div className={styles.body}>
            <h2 id="tour-details-title" className={styles.title}>
              {tour.title}
            </h2>
            <p className={styles.description}>{tour.description}</p>

            <h3 className={styles.subtitle}>Detalhes</h3>
            <ul className={styles.details}>
              {tour.details.map((detail) => (
                <li key={detail}>
                  <Icon name="check" size={16} />
                  {detail}
                </li>
              ))}
            </ul>

            {tour.requiresParkCard && (
              <p className={styles.notice}>
                <Icon name="shield" size={18} />
                Uso obrigatório do cartão do Parque Nacional de Fernando de Noronha.
              </p>
            )}

            <a
              href={whatsAppLink(
                `Olá, Adriano! Quero saber valores e datas do passeio "${tour.title}".`,
              )}
              target="_blank"
              rel="noreferrer"
              className={styles.book}
            >
              <Icon name="whatsapp" size={20} />
              Consultar valores no WhatsApp
            </a>
          </div>
        </article>
      )}
    </dialog>
  )
}
