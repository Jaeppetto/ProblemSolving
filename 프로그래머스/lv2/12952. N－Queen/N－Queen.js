function check(queen, row) {
  for (let i = 0; i < row; i += 1) {
      if (queen[i] === queen[row] || Math.abs(queen[i] - queen[row]) === row - i) {
          return false;
      }
  }

  return true;
}

function search(queen, row) {
  const n = queen.length;
  let count = 0;

  if (n === row) {
      return 1;
  }

  for (let col = 0; col < n; col += 1) {
      queen[row] = col;
      if (check(queen, row)) {
          count += search(queen, row + 1);
      }
  }

  return count;
}

function solution(n) {
  return search(Array.from({ length: n }, () => 0), 0);
}

// 퀸을 둔 행과 열, 대각선 가지치기
// 최대한 적은 비용으로 가지치기를 하기 위하여 1차원 배열을 활용
// 대각선 예외처리 - 두 퀸의 열에 대한 차이값과 행에 대한 차이값이 같을 경우, 대각선에 위치해있는 것