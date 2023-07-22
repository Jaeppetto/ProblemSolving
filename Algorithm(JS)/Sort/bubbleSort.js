function bubbleSort(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    for (var j = 0; j <= arr.length; j++) {
      console.log(arr[j], arr[j + 1]);

      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

const arr = [4, 24, 52, 34, 34, 54, 63, 24, 543, 3432, 52];

bubbleSort(arr);
