import { assert } from 'chai'
import {mergeSort, mergeAdd} from '../scripts/mergeSort.js'

describe('Merge Sort tests', () => {
  let randomArr = Array.from({length: 100000}, () => Math.floor(Math.random() * 100000))

  it('should be a function', () => {
    assert.isFunction(mergeSort)
  })

  it('should return an array', () => {
    assert.deepEqual(mergeSort([1, 2]), [1, 2])
  })

  it('should sort elements into order', () => {
    assert.deepEqual(mergeSort([8, 7, 6, 5, 4, 3, 2, 1]), [1, 2, 3, 4, 5, 6, 7, 8])
  })

  it('should organize letters', () => {
    assert.deepEqual(mergeSort(['w', 'd', 'a', 'e', 'b', 'h']), ['a', 'b', 'd', 'e', 'h', 'w'])
  })

  it('should be hella fast through 100k random numbers', () => {
    mergeSort(randomArr)
  })
})

describe('Merge Add tests', () => {
  it('should be a function', () => {
    assert.isFunction(mergeAdd)
  })

  it('should return an array', () => {
    assert.deepEqual(mergeAdd([], []), [])
  })

  it('should sort an arrays of 2 elements', () => {
    assert.deepEqual(mergeAdd([5], [3]), [3, 5] )
  })

  it('should sort an empty array and another array', () => {
    assert.deepEqual(mergeAdd([], [3]), [3])
  })
})
