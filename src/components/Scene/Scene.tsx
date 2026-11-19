import type { CSSProperties, ReactNode } from 'react'
import styles from './Scene.module.css'

interface SceneProps {
  gradient: [string, string]
  image?: string
  alt?: string
  className?: string
  children?: ReactNode
}

export function Scene({ gradient, image, alt = '', className = '', children }: SceneProps) {
  const style = {
    '--scene-from': gradient[0],
    '--scene-to': gradient[1],
  } as CSSProperties

  return (
    <div className={`${styles.scene} ${className}`} style={style}>
      {image ? (
        <img src={image} alt={alt} loading="lazy" className={styles.media} />
      ) : (
        <svg
          viewBox="0 0 400 240"
          preserveAspectRatio="xMidYMax slice"
          className={styles.media}
          aria-hidden="true"
        >
          <path
            className={styles.waveBack}
            d="M0 170 C 80 140 160 200 240 170 S 360 140 400 160 V240 H0 Z"
          />
          <path
            className={styles.waveFront}
            d="M0 200 C 90 180 170 225 260 200 S 360 185 400 195 V240 H0 Z"
          />
        </svg>
      )}
      {children}
    </div>
  )
}
