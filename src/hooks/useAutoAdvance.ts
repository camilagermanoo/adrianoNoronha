import { useEffect, useState } from 'react'

export function useAutoAdvance(count: number, interval: number, paused = false) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (count < 2 || paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setTimeout(() => setActiveIndex((index) => (index + 1) % count), interval)

    return () => window.clearTimeout(timer)
  }, [activeIndex, count, interval, paused])

  return [activeIndex, setActiveIndex] as const
}
