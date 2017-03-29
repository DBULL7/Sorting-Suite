let insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let element = array[i]

    for (let j = i - 1; array[j] >= element; j--) {
      if (element < array[j]) {
        let temp = array[j]

        array[j] = element
        array[j + 1] = temp
      }
    }
  }
  return array
}



module.exports = insertionSort
