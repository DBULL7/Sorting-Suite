
let mergeSort = (array) => {
  if (array.length == 1) {
    return array //kicks it out of recursive loop. Without this if statement at the top it will slice again.
  }
  let center  = array.length / 2
  let left    = array.slice(0, center)
  let right   = array.slice(center, array.length)

  console.log(left)
  console.log(right)
  return mergeAdd(mergeSort(left), mergeSort(right))
}

let mergeAdd = (left, right) => {
  let finalArray = []
  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      finalArray.push(left.shift())
      // finalArray.push(right.shift())
    } else {
      finalArray.push(right.shift())
      // finalArray.push(left.shift())
    }
  }

  while(left.length) {
    finalArray.push(left.shift())
  }

  while(right.length) {
    finalArray.push(right.shift())
  }
  return finalArray
}

// mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1])


// let mergeSort = (array) => {
//   let center  = array.length / 2
//   let left    = array.slice(0, center)
//   let right   = array.slice(center, array.length)
//
//   console.log(left)
//   console.log(right)
//   if (left.length == 1 && right.length == 1) {
//     array = left + right
//     console.log('made it to one')
//   } else if (left.length > 1 || right.length > 1) {
//     mergeSort(left)
//     mergeSort(right)
//   }
//   return array
// }

module.exports = mergeSort;


// let mergeSort = (array) => {
//   let center  = array.length / 2
//   let left    = array.slice(0, center)
//   let right   = array.slice(center, array.length)
//
//   // console.log(left)
//   // console.log(right)
//   if (array.length <= 2) {
//     if(left > right) {
//       let temp = left
//
//       left = right
//       right = temp
//       array[0] = left
//       array[1] = right
//       // return array
//     }
//     console.log(left)
//     console.log(right)
//     console.log(array)
//     return right, left
//   }
//
//   mergeSort(left)
//   mergeSort(right)
//   return array
// }
