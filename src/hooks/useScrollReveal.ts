import { useEffect } from 'react'

const REVEAL_SELECTOR = '[data-reveal]'
const READY_CLASS = 'reveal-ready'
const REVEALED_CLASS = 'is-revealed'

export function useScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || !('IntersectionObserver' in window)) return

    const root = document.documentElement
    root.classList.add(READY_CLASS)

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add(REVEALED_CLASS)
          intersectionObserver.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    )

    const observe = (element: Element) => {
      if (!element.classList.contains(REVEALED_CLASS)) intersectionObserver.observe(element)
    }

    document.querySelectorAll(REVEAL_SELECTOR).forEach(observe)

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return
          if (node.matches(REVEAL_SELECTOR)) observe(node)
          node.querySelectorAll(REVEAL_SELECTOR).forEach(observe)
        })
      })
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      intersectionObserver.disconnect()
      mutationObserver.disconnect()
      root.classList.remove(READY_CLASS)
    }
  }, [])
}
