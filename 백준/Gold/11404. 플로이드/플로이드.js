const fs = require('fs');
let [n, m, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
n = +n;
m = +m;
arr = arr.map(a => a.split(' ').map(Number));

const INF = 100000 * 100 + 1;
const cost = Array.from(Array(n), () => Array(n).fill(INF));

for (let i = 0; i < n; i++) {
  cost[i][i] = 0;
}

arr.forEach(([a, b, c]) => {
  cost[a - 1][b - 1] = Math.min(cost[a - 1][b - 1], c);
});

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      cost[i][j] = Math.min(cost[i][j], cost[i][k] + cost[k][j]);
    }
  }
}

let answer = '';
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (cost[i][j] === INF) cost[i][j] = 0;
    answer += cost[i][j] + ' ';
  }
  answer += '\n';
}

console.log(answer.trim());
