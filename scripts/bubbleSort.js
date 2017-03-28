let bubbleSort = (array) => {
  var count = 0

  while (count == 0) {
    for (let i = 0; i < array.length - 1; i++) {
      count = 0

      if (array[i] > array[i + 1]) {
        debugger
        let temp = array[i]

        array[i] = array[i + 1]
        array[i + 1] = temp
        count ++
      }
    }
    if (count != 0) {
      count = 0
    } else {
      return array
    }
  }
}

bubbleSort([45, 22, 10, 12, 1])



module.exports = bubbleSort
