let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input.shift();
const array = input[0].split(' ').map(Number);
let solution = '';
let resultSum = Number.MAX_SAFE_INTEGER;

let [start, end] = [0, N - 1];

while (start < end) {
  let sum = array[start] + array[end];
  if (Math.abs(sum) < resultSum) {
    resultSum = Math.abs(sum);
    solution = `${array[start]} ${array[end]}`;
  }
  if (sum === 0) {
    break;
  } else if (sum < 0) {
    ++start;
  } else {
    --end;
  }
}

console.log(solution);
