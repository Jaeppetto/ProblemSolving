let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));

const N = input[0][0];
const S = input[0][1];
const array = input[1];
let [start, end] = [0, 0];
let tempSum = 0;
let resultLength = Number.MAX_SAFE_INTEGER;

while (true) {
  if (tempSum >= S) {
    resultLength = Math.min(resultLength, end - start);
    tempSum -= array[start++];
  } else if (end == N) break;
  else tempSum += array[end++];
}

console.log(resultLength === Number.MAX_SAFE_INTEGER ? 0 : resultLength);
