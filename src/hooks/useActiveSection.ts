import { useEffect, useState } from 'react'

interface ActiveSection {
  scopeKey: string
  id: string
}

export function useActiveSection(sectionIds: string[], scopeKey = '') {
  const [active, setActive] = useState<ActiveSection | null>(null)

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) setActive({ scopeKey, id: visible[0].target.id })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionIds, scopeKey])

  return active?.scopeKey === scopeKey ? active.id : null
}
