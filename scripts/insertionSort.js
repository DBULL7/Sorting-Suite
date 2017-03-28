let sortedArray = []
let insertionSort = (array) => {
  if (!array.length) {
    return sortedArray;
  }
  let firstElement = array.shift()

  if (sortedArray.length) {
    for (let i = 0; i < sortedArray.length; i++) {
      if (firstElement < sortedArray[i]) {
        sortedArray.splice(i, 0, firstElement)
        console.log(sortedArray)
        insertionSort(array)
        return;
      }
    }
  }
  sortedArray.push(firstElement)
  insertionSort(array)
  return sortedArray
}


module.exports = insertionSort




// for (let i = 0; i < sortedArray.length; i++) {
//   if (array[i] > !sortedArray[i]) {
//     sortedArray.push(array[i])
//   } else if (array[i] == !sortedArray[i]) {
//
//     sortedArray.splice(i, 0, array[i])
//   }
//
// }



// } else if (array[j] == !sortedArray[i]) {
//   sortedArray.splice(i, 0, array[j])
//   j++
