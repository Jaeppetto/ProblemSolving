function countUniqueValues(arr) {
  let left = 0;
  let right = left + 1;

  if (arr.length === 0) {
    return 0;
  }

  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left++;
      arr[left] = arr[right];
      right++;
    }
  }
  return left;
}

countUniqueValues([1, 2, 2, 2, 3, 4, 5, 5, 5, 6, 13, 13, 14, 15]);
