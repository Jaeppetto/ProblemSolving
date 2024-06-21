const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [N, M, R] = input[0].split(' ').map(Number);
const array = input.slice(1).map((line) => line.split(' ').map(Number));

function rotateLayer(array, layer, rotations) {
  const top = layer;
  const bottom = N - layer - 1;
  const left = layer;
  const right = M - layer - 1;

  const tempArray = [];

  for (let i = left; i <= right; i++) tempArray.push(array[top][i]);
  for (let i = top + 1; i <= bottom; i++) tempArray.push(array[i][right]);
  for (let i = right - 1; i >= left; i--) tempArray.push(array[bottom][i]);
  for (let i = bottom - 1; i > top; i--) tempArray.push(array[i][left]);

  const len = tempArray.length;
  const rotateCount = rotations % len;
  const rotated = tempArray
    .slice(rotateCount)
    .concat(tempArray.slice(0, rotateCount));

  let index = 0;
  for (let i = left; i <= right; i++) array[top][i] = rotated[index++];
  for (let i = top + 1; i <= bottom; i++) array[i][right] = rotated[index++];
  for (let i = right - 1; i >= left; i--) array[bottom][i] = rotated[index++];
  for (let i = bottom - 1; i > top; i--) array[i][left] = rotated[index++];
}

for (let layer = 0; layer < Math.min(N, M) / 2; layer++) {
  rotateLayer(array, layer, R);
}

array.forEach((line) => console.log(line.join(' ')));
