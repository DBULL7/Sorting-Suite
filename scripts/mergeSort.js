
export const mergeSort = (array) => {
  if (array.length == 1) {
    return array
  }
  let center  = array.length / 2
  let left    = array.slice(0, center)
  let right   = array.slice(center, array.length)

  return mergeAdd(mergeSort(left), mergeSort(right))
}


export const mergeAdd = (left, right) => {
  let finalArray = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      finalArray.push(left.shift())
    } else {
      finalArray.push(right.shift())
    }
  }

  while (left.length) {
    finalArray.push(left.shift())
  }

  while (right.length) {
    finalArray.push(right.shift())
  }
  return finalArray
}
