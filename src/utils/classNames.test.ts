import { describe, expect, it } from 'vitest'
import { cx } from './classNames'

describe('cx', () => {
  it('joins only truthy class names', () => {
    expect(cx('card', false, undefined, null, 'active', '')).toBe('card active')
  })

  it('returns an empty string when nothing is truthy', () => {
    expect(cx(false, undefined)).toBe('')
  })
})
