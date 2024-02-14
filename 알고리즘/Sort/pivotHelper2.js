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
