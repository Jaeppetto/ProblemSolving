// 문자열로 된 배열이 주어졌을 때, 각 원소의 첫 알파벳을 대문자로 변환하는 재귀함수
let result = [];
let arr = ["car", "taco", "banana"];

function capitalizeFirst(arr) {
  if (arr.length === 0) return result;
  result.push(arr[0][0].toUpperCase() + arr[0].slice(1, arr[0].length));
  return capitalizeFirst(arr.slice(1));
}

capitalizeFirst(arr);
