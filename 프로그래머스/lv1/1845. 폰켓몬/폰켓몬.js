function solution(nums) {
  var answer = 0;
  const map = new Map();

  // nums 배열 원소 갯수에 따라 Map 구조에 담기
  nums.forEach((item) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });

  const getMon = Math.floor(nums.length / 2);

  if (getMon < map.size) return getMon;
  else return map.size;
}

solution([3, 3, 3, 2, 2, 4]);
