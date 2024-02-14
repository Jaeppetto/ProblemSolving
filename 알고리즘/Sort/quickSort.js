function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    // left
    quidkSort(arr, left, pivotIdx - 1);
    // right
    quidkSort(arr, pivotIdx + 1, right);
  }
  console.log(arr);
  return arr;
}

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}
