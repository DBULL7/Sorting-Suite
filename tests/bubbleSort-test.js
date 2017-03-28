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
    assert.deepEqual(bubbleSort([2, 1, 4, 7, 0, 3]), [0, 1, 2, 3, 4, 7])
  })

  it('should organize letters', () => {
    assert.deepEqual(bubbleSort(['w', 'd', 'a', 'e', 'b', 'h']), ['a', 'b', 'd', 'e', 'h', 'w'])
  })

  // it('should organize letters and numbers', () => {
  //   assert.deepEqual(['z', 'a', 'd', 13, 11, 20], ['a', 'd', 'z', 11, 13, 20])
  // })
})
