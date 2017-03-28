import { assert } from 'chai';
import insertionSort from '../scripts/insertionSort'
require('locus')

describe('Insertion Sort Tests', () => {
  it('should be a function', () => {
    assert.isFunction(insertionSort)
  })

  it('should return an array', () => {
    assert.deepEqual(insertionSort([ 1, 2 ]), [ 1, 2 ])
  })

  it('should sort by size', () => {
    assert.deepEqual(insertionSort([4, 2, 10]), [2, 4, 10])
  })
})
