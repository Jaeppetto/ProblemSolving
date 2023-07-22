function linearSearch(arr, value) {
  // add whatever parameters you deem necessary - good luck!
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] == value) return i;
  }
  return -1;
}
