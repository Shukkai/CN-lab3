// test/math.spec.ts
import { describe, expect, it } from 'vitest'
import { myCustomAdd } from '../src/utils/math'

describe('add()', () => {
  it('adds numbers', () => {
    expect(myCustomAdd(1, 2)).toBe(3)
  })
})