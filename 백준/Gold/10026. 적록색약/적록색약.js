let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input.shift();
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function dfs(x, y, color, visited, isColorWeakness) {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
      if (!isColorWeakness && input[nx][ny] === color) {
        dfs(nx, ny, color, visited, false);
      }

      if (
        isColorWeakness &&
        ((color === 'B' && input[nx][ny] === 'B') ||
          (color !== 'B' && input[nx][ny] !== 'B'))
      ) {
        dfs(nx, ny, color, visited, true);
      }
    }
  }
}

function countGroup(isColorWeakness) {
  const visited = Array.from(Array(N), () => Array(N).fill(false));
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        dfs(i, j, input[i][j], visited, isColorWeakness);
        count++;
      }
    }
  }

  return count;
}

console.log(`${countGroup(false)} ${countGroup(true)}`);
