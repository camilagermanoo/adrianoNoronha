import { useState } from 'react'
import type { Picture } from 'vite-imagetools'
import { useAutoAdvance } from '../../hooks/useAutoAdvance'
import { cx } from '../../utils/classNames'
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage'
import styles from './PhotoGallery.module.css'

interface PhotoGalleryProps {
  photos: Picture[]
  alt: (index: number) => string
  thumbnailLabel: (index: number) => string
  interval?: number
}

export function PhotoGallery({ photos, alt, thumbnailLabel, interval = 4500 }: PhotoGalleryProps) {
  const [isPaused, setIsPaused] = useState(false)
  const [activeIndex, setActiveIndex] = useAutoAdvance(photos.length, interval, isPaused)

  if (photos.length === 0) return null

  return (
    <div
      className={styles.gallery}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className={styles.stage}>
        {photos.map((photo, index) => (
          <ResponsiveImage
            key={photo.img.src}
            picture={photo}
            sizes="(max-width: 900px) 100vw, 600px"
            alt={alt(index + 1)}
            aria-hidden={index !== activeIndex}
            loading="lazy"
            className={cx(styles.main, index === activeIndex && styles.mainActive)}
          />
        ))}
      </div>

      {photos.length > 1 && (
        <ul className={styles.thumbnails}>
          {photos.map((photo, index) => (
            <li key={photo.img.src}>
              <button
                type="button"
                className={cx(styles.thumbnail, index === activeIndex && styles.active)}
                aria-label={thumbnailLabel(index + 1)}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              >
                <ResponsiveImage picture={photo} sizes="120px" loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
