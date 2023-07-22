function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // 빈도수를 측정할 빈 객체 생성
  let arr1_frequency = {};
  let arr2_frequency = {};

  // 배열1,2의 빈도수를 측정하여 객체에 저장
  for (let val of arr1) {
    arr1_frequency[val] = (arr1_frequency[val] || 0) + 1;
  }

  for (let val of arr2) {
    arr2_frequency[val] = (arr2_frequency[val] || 0) + 1;
  }

  // 객체 Key 비교
  for (let key in arr1_frequency) {
    // 배열1 Key의 제곱의 빈도수와 배열2 Key 빈도수가 불일치할 경우, false
    if (!(key ** 2 in arr2_frequency)) {
      return false;
    }
    // Key는 동일하지만 빈도수가 다른 경우, false
    if (arr2_frequency[key ** 2] !== arr1_frequency[key]) {
      return false;
    }
  }
  return true;
}
