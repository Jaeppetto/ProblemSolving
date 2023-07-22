function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  // 엇갈림 방지 조건을 걸어준 무한 루프
  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
