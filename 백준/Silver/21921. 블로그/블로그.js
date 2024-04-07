let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));

const [N, X] = input[0];
const array = input[1];

let [start, end] = [0, X];
let sum = array.slice(0, X).reduce((a, b) => a + b, 0);
let maxSum = sum;
let count = 1;

let isAllZero = sum === 0;

while (end < N) {
  const tempSum = sum - array[start++] + array[end++];

  if (tempSum > maxSum) {
    maxSum = tempSum;
    count = 1;
    isAllZero = false;
  } else if (tempSum === maxSum) {
    count++;
  }

  sum = tempSum;
}

if (isAllZero) {
  console.log('SAD');
} else {
  console.log(maxSum);
  console.log(count);
}
