import { assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort'

describe('Bubble Sort Tests', () => {
  it('should be a a function', () => {
    assert.isFunction(bubbleSort)
  })

  it('should return a array', () => {
    assert.deepEqual(bubbleSort([ 1, 2 ]), [ 1, 2 ])
  })

  // it('should check which value is larger', () => {
  //   assert.equal(bubbleSort([2, 1]), 2)
  // })

  it('should organize the elements by value', () => {
    assert.deepEqual(bubbleSort([2, 1, 4]), [1, 2, 4])
  })
})
