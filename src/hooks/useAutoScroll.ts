import { useCallback, useEffect, useRef, type RefObject } from 'react'

interface AutoScrollOptions {
  speed?: number
  resumeDelay?: number
}

export function useAutoScroll(
  trackRef: RefObject<HTMLElement | null>,
  { speed = 30, resumeDelay = 4000 }: AutoScrollOptions = {},
) {
  const pausedRef = useRef(false)
  const resumeTimerRef = useRef<number | undefined>(undefined)
  const positionRef = useRef(0)

  const pause = useCallback(() => {
    pausedRef.current = true
    window.clearTimeout(resumeTimerRef.current)
  }, [])

  const resume = useCallback(
    (delay = 0) => {
      window.clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = window.setTimeout(() => {
        if (trackRef.current) positionRef.current = trackRef.current.scrollLeft
        pausedRef.current = false
      }, delay)
    },
    [trackRef],
  )

  const pauseTemporarily = useCallback(() => {
    pause()
    resume(resumeDelay)
  }, [pause, resume, resumeDelay])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let lastTime = performance.now()
    positionRef.current = track.scrollLeft

    const step = (time: number) => {
      const elapsed = Math.min(time - lastTime, 100)
      lastTime = time

      if (!pausedRef.current && !reducedMotion.matches) {
        const loopWidth = track.scrollWidth / 2
        positionRef.current += (speed * elapsed) / 1000
        if (positionRef.current >= loopWidth) positionRef.current -= loopWidth
        track.scrollLeft = positionRef.current
      }

      frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(resumeTimerRef.current)
    }
  }, [trackRef, speed])

  return { pause, resume, pauseTemporarily }
}
