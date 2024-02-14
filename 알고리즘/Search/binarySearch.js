function binarySearch(arr, value) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (arr[middle] !== value) {
    console.log(start, mid, end);

    if (value < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);

    if (end < start) return -1;
  }
  console.log(start, mid, end);
  return middle;
}
