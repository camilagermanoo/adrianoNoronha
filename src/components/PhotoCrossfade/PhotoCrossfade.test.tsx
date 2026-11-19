import { act, render, screen } from '@testing-library/react'
import type { Picture } from 'vite-imagetools'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { PhotoCrossfade } from './PhotoCrossfade'

function picture(name: string): Picture {
  return { sources: { webp: `${name}.webp 400w` }, img: { src: `${name}.webp`, w: 400, h: 500 } }
}

const photos = [picture('a'), picture('b'), picture('c')]
const alts = ['Foto A', 'Foto B', 'Foto C']

describe('PhotoCrossfade', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('shows one photo at a time and cycles through all of them', () => {
    render(<PhotoCrossfade photos={photos} alts={alts} sizes="400px" interval={1000} />)

    expect(screen.getByRole('img', { name: 'Foto A' })).toBeInTheDocument()
    expect(screen.queryByRole('img', { name: 'Foto B' })).not.toBeInTheDocument()

    act(() => vi.advanceTimersByTime(1000))
    expect(screen.getByRole('img', { name: 'Foto B' })).toBeInTheDocument()
    expect(screen.queryByRole('img', { name: 'Foto A' })).not.toBeInTheDocument()

    act(() => vi.advanceTimersByTime(1000))
    expect(screen.getByRole('img', { name: 'Foto C' })).toBeInTheDocument()

    act(() => vi.advanceTimersByTime(1000))
    expect(screen.getByRole('img', { name: 'Foto A' })).toBeInTheDocument()
  })

  it('stays on the first photo when the user prefers reduced motion', () => {
    vi.mocked(window.matchMedia).mockImplementation(
      (query: string) => ({ matches: true, media: query }) as MediaQueryList,
    )
    render(<PhotoCrossfade photos={photos} alts={alts} sizes="400px" interval={1000} />)

    act(() => vi.advanceTimersByTime(5000))
    expect(screen.getByRole('img', { name: 'Foto A' })).toBeInTheDocument()
  })
})
