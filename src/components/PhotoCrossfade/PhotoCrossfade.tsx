import { useEffect, useState } from 'react'
import type { Picture } from 'vite-imagetools'
import { cx } from '../../utils/classNames'
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage'
import styles from './PhotoCrossfade.module.css'

interface PhotoCrossfadeProps {
  photos: Picture[]
  alts: string[]
  sizes: string
  interval?: number
  className?: string
}

export function PhotoCrossfade({
  photos,
  alts,
  sizes,
  interval = 4500,
  className,
}: PhotoCrossfadeProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (photos.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(
      () => setActiveIndex((index) => (index + 1) % photos.length),
      interval,
    )

    return () => window.clearInterval(timer)
  }, [photos.length, interval])

  return (
    <div className={cx(styles.frame, className)}>
      {photos.map((photo, index) => (
        <ResponsiveImage
          key={photo.img.src}
          picture={photo}
          sizes={sizes}
          alt={alts[index] ?? ''}
          aria-hidden={index !== activeIndex}
          loading={index === 0 ? undefined : 'lazy'}
          className={cx(styles.photo, index === activeIndex && styles.active)}
        />
      ))}
    </div>
  )
}
