import { useEffect, useId, useRef, useState, type FormEvent, type MouseEvent } from 'react'
import { whatsAppLink } from '../../data/navigation'
import { useLanguage } from '../../i18n/context'
import { ActionButton } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import styles from './FeedbackDialog.module.css'

interface FeedbackDialogProps {
  open: boolean
  onClose: () => void
}

const emptyForm = { name: '', country: '', instagram: '', message: '' }

function instagramHandle(value: string) {
  const handle = value.trim().replace(/^@+/, '')
  return handle ? `@${handle}` : ''
}

export function FeedbackDialog({ open, onClose }: FeedbackDialogProps) {
  const { t } = useLanguage()
  const id = useId()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [form, setForm] = useState(emptyForm)
  const copy = t.testimonials.feedback

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const update = (field: keyof typeof emptyForm) => (value: string) =>
    setForm((current) => ({ ...current, [field]: value }))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = copy.message({
      name: form.name.trim(),
      country: form.country.trim(),
      instagram: instagramHandle(form.instagram),
      message: form.message.trim(),
    })
    window.open(whatsAppLink(message), '_blank', 'noopener,noreferrer')
    setForm(emptyForm)
    onClose()
  }

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={`${id}-title`}
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.header}>
          <h2 id={`${id}-title`} className={styles.title}>
            {copy.title}
          </h2>
          <button type="button" className={styles.close} aria-label={copy.close} onClick={onClose}>
            <Icon name="close" size={20} />
          </button>
        </div>
        <p className={styles.text}>{copy.text}</p>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor={`${id}-name`}>{copy.nameLabel}</label>
            <input
              id={`${id}-name`}
              value={form.name}
              onChange={(event) => update('name')(event.target.value)}
              autoComplete="name"
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor={`${id}-country`}>{copy.countryLabel}</label>
            <input
              id={`${id}-country`}
              value={form.country}
              onChange={(event) => update('country')(event.target.value)}
              placeholder={copy.countryPlaceholder}
              autoComplete="country-name"
              required
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor={`${id}-instagram`}>{copy.instagramLabel}</label>
          <input
            id={`${id}-instagram`}
            value={form.instagram}
            onChange={(event) => update('instagram')(event.target.value)}
            placeholder={copy.instagramPlaceholder}
            autoCapitalize="none"
            autoCorrect="off"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor={`${id}-message`}>{copy.messageLabel}</label>
          <textarea
            id={`${id}-message`}
            rows={4}
            value={form.message}
            onChange={(event) => update('message')(event.target.value)}
            placeholder={copy.messagePlaceholder}
            required
          />
        </div>

        <ActionButton type="submit" variant="whatsapp" className={styles.submit}>
          <Icon name="whatsapp" size={20} />
          {copy.submit}
        </ActionButton>
      </form>
    </dialog>
  )
}
