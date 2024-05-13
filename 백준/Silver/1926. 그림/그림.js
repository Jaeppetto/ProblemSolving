const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제1.txt';

let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

const [N, M] = input.shift().map(Number);
const map = input.map((el) => el.map(Number));

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function dfs(x, y) {
  if (x < 0 || x >= N || y < 0 || y >= M || map[x][y] === 0) return 0;

  map[x][y] = 0;
  let count = 1;

  for (let [dx, dy] of directions) {
    count += dfs(x + dx, y + dy);
  }

  return count;
}

let paintCount = 0;
let maxPaintValue = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1) {
      paintCount++;
      maxPaintValue = Math.max(maxPaintValue, dfs(i, j));
    }
  }
}

console.log(paintCount);
console.log(maxPaintValue);
