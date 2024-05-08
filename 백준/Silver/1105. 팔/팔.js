let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const L = input[0];
const R = input[1];

function solution() {
  const lString = L.toString();
  const rString = R.toString();
  let result = 0;
  if (lString.length !== rString.length) return 0;

  for (let i = 0; i < lString.length; i++) {
    if (lString[i] !== rString[i]) return result;

    if (lString[i] === '8') result++;
  }
  return result;
}

console.log(solution());
