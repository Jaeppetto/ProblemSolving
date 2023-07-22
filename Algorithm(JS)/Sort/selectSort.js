function selectSort(arr) {
  for (var i = 0; i <= arr.length; i++) {
    var minIdx = i;
    for (var j = i; j <= arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    if (arr[i] > arr[minIdx]) {
      let tmp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = tmp;
    }
  }
  return arr;
}

const arr = [4, 24, 52, 34, 34, 54, 63, 24, 543, 3432, 52];
