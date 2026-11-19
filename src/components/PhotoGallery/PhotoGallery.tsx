import { useState } from 'react'
import type { Picture } from 'vite-imagetools'
import { cx } from '../../utils/classNames'
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage'
import styles from './PhotoGallery.module.css'

interface PhotoGalleryProps {
  photos: Picture[]
  alt: (index: number) => string
  thumbnailLabel: (index: number) => string
}

export function PhotoGallery({ photos, alt, thumbnailLabel }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = photos[activeIndex] ?? photos[0]

  if (!active) return null

  return (
    <div className={styles.gallery}>
      <ResponsiveImage
        key={active.img.src}
        picture={active}
        sizes="(max-width: 900px) 100vw, 600px"
        alt={alt(activeIndex + 1)}
        loading="lazy"
        className={styles.main}
      />

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
