const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
let [r, c, d] = input.shift().split(' ').map(Number);
let map = input.map((e) => e.split(' ').map(Number));

// 북, 동, 남, 서
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
let count = 0;

while (true) {
  if (map[r][c] === 0) {
    map[r][c] = 2;
    count++;
  }

  let isBack = true;
  for (let i = 0; i < 4; i++) {
    let nd = (d + 3) % 4;
    let nr = r + dr[nd];
    let nc = c + dc[nd];

    if (0 <= nr < N && 0 <= nc < M && map[nr][nc] === 0) {
      r = nr;
      c = nc;
      d = nd;
      isBack = false;
      break;
    } else {
      d = nd;
    }
  }

  if (isBack) {
    let nr = r - dr[d];
    let nc = c - dc[d];

    if (0 <= nr < N && 0 <= nc < M && map[nr][nc] !== 1) {
      r = nr;
      c = nc;
    } else {
      break;
    }
  }
}

console.log(count);
