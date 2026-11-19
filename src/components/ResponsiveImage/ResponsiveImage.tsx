import type { ImgHTMLAttributes } from 'react'
import type { Picture } from 'vite-imagetools'

interface ResponsiveImageProps extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'srcSet' | 'width' | 'height'
> {
  picture: Picture
  sizes: string
}

export function ResponsiveImage({ picture, sizes, alt = '', ...props }: ResponsiveImageProps) {
  return (
    <img
      src={picture.img.src}
      srcSet={picture.sources.webp}
      sizes={sizes}
      width={picture.img.w}
      height={picture.img.h}
      alt={alt}
      decoding="async"
      {...props}
    />
  )
}
