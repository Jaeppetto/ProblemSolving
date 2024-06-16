const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [M, N] = input.shift().split(' ');
const blocks = input[0].split(' ').map(Number);

const [H, W] = [+M, +N];

const map = Array(H)
  .fill(0)
  .map((e) => Array(W).fill(0));

// 지도 그리기
blocks.forEach((e, index) => {
  for (let i = 0; i < e; i++) {
    map[i][index] = 1;
  }
});

let result = 0;

// 줄마다, 줄의 칸마다 양쪽에 막아주는 벽이 있는지 판별
map.forEach((line) => {
  line.forEach((e, index) => {
    if (e === 0) {
      let [leftIndex, rightIndex] = [index, index];
      let [isLeftBlocked, isRightBlocked] = [false, false];

      while (leftIndex > 0) {
        leftIndex--;

        if (line[leftIndex] === 1) {
          isLeftBlocked = true;
          break;
        }
      }

      while (rightIndex < W - 1) {
        rightIndex++;

        if (line[rightIndex] === 1) {
          isRightBlocked = true;
          break;
        }
      }

      if (isLeftBlocked && isRightBlocked) result++;
    }
  });
});

console.log(result);
