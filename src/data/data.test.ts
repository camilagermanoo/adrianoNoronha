import { describe, expect, it } from 'vitest'
import { locales, type Localized } from '../i18n/locales'
import { checklist } from './checklist'
import { combos } from './combos'
import { destinations } from './destinations'
import { faqItems } from './faq'
import { itineraries } from './itineraries'
import { moments } from './moments'
import { testimonials } from './testimonials'
import { tours } from './tours'

const tourIds = new Set(tours.map((tour) => tour.id))

function expectFullyTranslated(value: Localized<string | string[]>) {
  for (const locale of locales) {
    const text = value[locale]
    expect(text, `missing ${locale} translation`).toBeTruthy()
    if (Array.isArray(text)) {
      expect(text.length).toBe(value.pt.length)
      text.forEach((item) => expect(item.trim()).not.toBe(''))
    } else {
      expect(text.trim()).not.toBe('')
    }
  }
}

function expectUniqueIds(items: { id: string }[]) {
  const ids = items.map((item) => item.id)
  expect(new Set(ids).size).toBe(ids.length)
}

describe('content data', () => {
  it('has unique ids in every collection', () => {
    ;[tours, destinations, itineraries, checklist, faqItems, moments, testimonials].forEach(
      expectUniqueIds,
    )
  })

  it('translates every tour into all locales', () => {
    tours.forEach((tour) => {
      expectFullyTranslated(tour.title)
      expectFullyTranslated(tour.summary)
      expectFullyTranslated(tour.description)
      expectFullyTranslated(tour.details)
    })
  })

  it('translates destinations, checklist, FAQ, moments and testimonials', () => {
    destinations.forEach(({ name, description, tip }) =>
      [name, description, tip].forEach(expectFullyTranslated),
    )
    checklist.forEach(({ title, description, link }) => {
      ;[title, description].forEach(expectFullyTranslated)
      if (link) expectFullyTranslated(link.label)
    })
    faqItems.forEach(({ question, answer }) => [question, answer].forEach(expectFullyTranslated))
    moments.forEach(({ caption }) => expectFullyTranslated(caption))
    testimonials.forEach(({ quote }) => expectFullyTranslated(quote))
  })

  it('only references existing tours in itineraries', () => {
    itineraries.forEach((itinerary) => {
      expect(itinerary.plan).toHaveLength(itinerary.days)
      itinerary.plan.forEach((step) => {
        expectFullyTranslated(step.note)
        step.tourIds.forEach((id) => expect(tourIds.has(id), `unknown tour ${id}`).toBe(true))
      })
    })
  })

  it('only references existing tours in combos', () => {
    combos.forEach((combo) => {
      expectFullyTranslated(combo.description)
      combo.tourIds.forEach((id) => expect(tourIds.has(id), `unknown tour ${id}`).toBe(true))
    })
  })

  it('only references existing tours in testimonials', () => {
    testimonials
      .filter((testimonial) => testimonial.tourId)
      .forEach((testimonial) => expect(tourIds.has(testimonial.tourId!)).toBe(true))
  })
})
