let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const array = input.map(Number).sort((a, b) => a - b);

let [start, end] = [0, 0];
let answer = Number.MAX_SAFE_INTEGER;

while (end < N) {
  let tempAnswer = array[end] - array[start];

  if (tempAnswer >= M) {
    answer = Math.min(answer, tempAnswer);
    start++;
  } else {
    end++;
  }
}

console.log(answer);
