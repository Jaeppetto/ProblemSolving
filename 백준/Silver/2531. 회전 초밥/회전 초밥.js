let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, d, k, c] = input.shift().split(' ').map(Number);
const sushiArray = input.map(Number).concat(input.slice(0, k - 1).map(Number));

let count = 0;
let maxCount = 0;
const sushiMap = new Map();

for (let i = 0; i < k; i++) {
  if (!sushiMap.has(sushiArray[i])) {
    count++;
    sushiMap.set(sushiArray[i], 1);
  } else {
    sushiMap.set(sushiArray[i], sushiMap.get(sushiArray[i]) + 1);
  }
}

if (!sushiMap.has(c)) {
  maxCount = count + 1;
} else {
  maxCount = count;
}


for (let i = 1; i < N; i++) {
  let leftSushi = sushiArray[i - 1];
  sushiMap.set(leftSushi, sushiMap.get(leftSushi) - 1);
  if (sushiMap.get(leftSushi) === 0) {
    count--;
    sushiMap.delete(leftSushi);
  }

  let rightSushi = sushiArray[i + k - 1];
  if (!sushiMap.has(rightSushi)) {
    count++;
    sushiMap.set(rightSushi, 1);
  } else {
    sushiMap.set(rightSushi, sushiMap.get(rightSushi) + 1);
  }

  let currentMax = sushiMap.has(c) ? count : count + 1;
  maxCount = Math.max(maxCount, currentMax);
}

console.log(maxCount);
