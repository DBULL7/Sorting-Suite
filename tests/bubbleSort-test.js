import { assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort'

describe('Bubble Sort Tests', () => {
  it('should be a a function', () => {
    assert.isFunction(bubbleSort)
  })

  it('should return a sorted array', () => {
    // bubbleSort([1, 2])
    assert.equal(bubbleSort([1, 2]), 3)
  })
})
