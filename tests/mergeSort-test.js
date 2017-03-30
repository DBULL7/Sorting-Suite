import { assert } from 'chai'
import mergeSort from '../scripts/mergeSort'

describe('Merge Sort tests', () => {

  it('should be a function', () => {
    assert.isFunction(mergeSort)
  })

  // it('should split an array down to single elements', () => {
  //   assert.deepEqual(mergeSort([5, 3, 1]), [5] [3] [1])
  // })

  it('should return an array', () => {
    assert.deepEqual(mergeSort([1, 2]), [1, 2])
  })

  it('should sort elements into order', () => {
    assert.deepEqual(mergeSort([8, 7, 6, 5, 4, 3, 2, 1]), [1, 2, 3, 4, 5, 6, 7, 8])
  })
})
