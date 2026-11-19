import type { To } from 'react-router'

export function sectionPath(sectionId: string): To {
  return { pathname: '/', hash: sectionId }
}

export function tourPath(tourId: string) {
  return `/passeios/${tourId}`
}
