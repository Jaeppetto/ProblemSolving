let input = [
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
];

const N = 5;
const M = 5;

function dfs(x, y) {
  // 예외처리 : 배열 범위 벗어나면 바로 탈출
  if (x <= -1 || x >= N || y <= -1 || y >= M) return false;

  if (input[x][y] === 1) {
    input[x][y] = 0;

    // 깊이우선탐색
    dfs(x - 1, y);
    dfs(x, y - 1);

    dfs(x + 1, y);
    dfs(x, y + 1);

    return true;
  }
  return false;
}

function solution(arr) {
  let result = 0;
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= M; j++) {
      if (dfs(i, j) === true) result += 1;
    }
  }
  return console.log(result);
}

solution(input);
