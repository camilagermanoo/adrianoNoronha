import { act, fireEvent, render, screen } from '@testing-library/react'
import type { Picture } from 'vite-imagetools'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { PhotoGallery } from './PhotoGallery'

function picture(name: string): Picture {
  return { sources: { webp: `${name}.webp 400w` }, img: { src: `${name}.webp`, w: 400, h: 500 } }
}

const photos = [picture('a'), picture('b'), picture('c')]

function renderGallery() {
  return render(
    <PhotoGallery
      photos={photos}
      alt={(index) => `Foto ${index}`}
      thumbnailLabel={(index) => `Ver foto ${index}`}
      interval={1000}
    />,
  )
}

function visiblePhoto() {
  return screen.getAllByRole('img').find((image) => image.getAttribute('alt')?.startsWith('Foto'))
}

describe('PhotoGallery', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('advances to the next photo automatically', () => {
    renderGallery()
    expect(visiblePhoto()).toHaveAccessibleName('Foto 1')

    act(() => vi.advanceTimersByTime(1000))
    expect(visiblePhoto()).toHaveAccessibleName('Foto 2')
    expect(screen.getByRole('button', { name: 'Ver foto 2' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })

  it('jumps to a photo when its thumbnail is clicked', () => {
    renderGallery()

    fireEvent.click(screen.getByRole('button', { name: 'Ver foto 3' }))

    expect(visiblePhoto()).toHaveAccessibleName('Foto 3')
  })

  it('pauses while the visitor hovers the gallery', () => {
    const { container } = renderGallery()

    fireEvent.mouseEnter(container.firstElementChild!)
    act(() => vi.advanceTimersByTime(3000))
    expect(visiblePhoto()).toHaveAccessibleName('Foto 1')

    fireEvent.mouseLeave(container.firstElementChild!)
    act(() => vi.advanceTimersByTime(1000))
    expect(visiblePhoto()).toHaveAccessibleName('Foto 2')
  })
})
