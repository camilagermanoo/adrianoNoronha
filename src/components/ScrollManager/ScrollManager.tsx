import { useEffect } from 'react'
import { useLocation } from 'react-router'

const SETTLE_DELAY_MS = 400

export function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }

    const scrollToSection = () =>
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()

    const frame = requestAnimationFrame(scrollToSection)
    const settle = window.setTimeout(scrollToSection, SETTLE_DELAY_MS)

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(settle)
    }
  }, [pathname, hash, key])

  return null
}
