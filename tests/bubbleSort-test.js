import { assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort'

describe('Bubble Sort Tests', () => {
  let randomArr = Array.from({length: 10000}, () => Math.floor(Math.random() * 10000))

  it('should be a a function', () => {
    assert.isFunction(bubbleSort)
  })

  it('should return a array', () => {
    assert.deepEqual(bubbleSort([]), [])
  })

  it('should organize the elements by value', () => {
    assert.deepEqual(bubbleSort([2, 1, 4, 7, 0, 3]), [0, 1, 2, 3, 4, 7])
  })

  it('should organize letters', () => {
    assert.deepEqual(bubbleSort(['w', 'd', 'a', 'e', 'b', 'h']), ['a', 'b', 'd', 'e', 'h', 'w'])
  })

  it('should be miserably slow through 10k random numbers', () => {
    bubbleSort(randomArr)
  })
})
