import type { Picture } from 'vite-imagetools'
import { useAutoAdvance } from '../../hooks/useAutoAdvance'
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
  const [activeIndex] = useAutoAdvance(photos.length, interval)

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
