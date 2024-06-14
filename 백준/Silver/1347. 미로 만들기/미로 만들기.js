const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const length = parseInt(input[0]);
const moves = input[1];

const directions = ['N', 'E', 'S', 'W']; // 북동남서
const movesMap = {
  N: [-1, 0],
  E: [0, 1],
  S: [1, 0],
  W: [0, -1],
};

let [x, y] = [0, 0];
let [minX, maxX] = [0, 0];
let [minY, maxY] = [0, 0];
let dirIdx = 2;

for (let move of moves) {
  if (move === 'F') {
    x += movesMap[directions[dirIdx]][0];
    y += movesMap[directions[dirIdx]][1];
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  } else if (move === 'L') {
    dirIdx = (dirIdx + 3) % 4;
  } else if (move === 'R') {
    dirIdx = (dirIdx + 1) % 4;
  }
}

const height = maxX - minX + 1;
const width = maxY - minY + 1;

const map = Array(height)
  .fill(0)
  .map((e) => Array(width).fill('#'));

x = -minX;
y = -minY;
dirIdx = 2;
map[x][y] = '.';

for (let move of moves) {
  if (move === 'F') {
    x += movesMap[directions[dirIdx]][0];
    y += movesMap[directions[dirIdx]][1];
    map[x][y] = '.';
  } else if (move === 'L') {
    dirIdx = (dirIdx + 3) % 4;
  } else if (move === 'R') {
    dirIdx = (dirIdx + 1) % 4;
  }
}

for (let row of map) {
  console.log(row.join(''));
}
