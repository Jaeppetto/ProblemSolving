let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const NM = input.shift().split(' ');
const N = +NM[0];
const M = +NM[1];

let arrA = input.slice(0, N).map((el) => el.split(''));
let arrB = input.slice(N).map((el) => el.split(''));
let count = 0;

function checkEqual() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arrA[i][j] !== arrB[i][j]) {
        return false;
      }
    }
  }
  return true;
}

function transformArray(row, col) {
  for (let i = row; i < row + 3; i++) {
    for (let j = col; j < col + 3; j++) {
      arrA[i][j] = arrA[i][j] === '1' ? '0' : '1';
    }
  }
}

if (N < 3 || M < 3) {
  console.log(checkEqual() ? 0 : -1);
} else {
  for (let i = 0; i <= N - 3; i++) {
    for (let j = 0; j <= M - 3; j++) {
      if (arrA[i][j] !== arrB[i][j]) {
        transformArray(i, j);
        count++;
      }
    }
  }

  console.log(checkEqual() ? count : -1);
}
