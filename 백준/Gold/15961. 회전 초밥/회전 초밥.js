let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, d, k, c] = input.shift().split(' ').map(Number);
const sushiArray = input.map(Number);

let sushiMap = new Map();
let maxSushiType = 0;

// 슬라이딩 윈도우 초기 설정
for (let i = 0; i < k; i++) {
  sushiMap.set(sushiArray[i], (sushiMap.get(sushiArray[i]) || 0) + 1);
}
// 쿠폰 초밥 추가
sushiMap.set(c, (sushiMap.get(c) || 0) + 1);

maxSushiType = sushiMap.size;

// 슬라이딩 윈도우 이동
for (let i = 1; i < N; i++) {
  // 맨 앞의 초밥 제거
  let firstSushi = sushiArray[i - 1];
  if (sushiMap.get(firstSushi) === 1) {
    sushiMap.delete(firstSushi);
  } else {
    sushiMap.set(firstSushi, sushiMap.get(firstSushi) - 1);
  }
  
  // 새로운 초밥 추가
  let newSushi = sushiArray[(i + k - 1) % N];
  sushiMap.set(newSushi, (sushiMap.get(newSushi) || 0) + 1);

  // 최대 초밥 종류 수 갱신
  maxSushiType = Math.max(maxSushiType, sushiMap.size);
}

console.log(maxSushiType);
