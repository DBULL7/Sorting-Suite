import { assert } from 'chai';
import insertionSort from '../scripts/insertionSort'

describe('Insertion Sort Tests', () => {
  let randomArr = Array.from({length: 15000}, () => Math.floor(Math.random() * 15000))

  it('should be a function', () => {
    assert.isFunction(insertionSort)
  })

  it('should return an array', () => {
    assert.deepEqual(insertionSort([ 1, 2 ]), [ 1, 2 ])
  })

  it('should sort by size', () => {
    assert.deepEqual(insertionSort([9, 4, 2, 5, 3, 8, 10]), [2, 3, 4, 5, 8, 9, 10])
  })

  it('should organize letters', () => {
    assert.deepEqual(insertionSort(['w', 'd', 'a', 'e', 'b', 'h']), ['a', 'b', 'd', 'e', 'h', 'w'])
  })

  it('should be fast through 15k random numbers', () => {
    insertionSort(randomArr)
  })
})
