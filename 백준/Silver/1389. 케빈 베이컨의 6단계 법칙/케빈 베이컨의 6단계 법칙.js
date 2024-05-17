const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제1.txt';

let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [N, _] = input.shift();
const list = input.slice();
const adjObj = {};

for (const [a, b] of list) {
  if (!adjObj[a]) adjObj[a] = [];
  if (!adjObj[b]) adjObj[b] = [];
  adjObj[a].push(b);
  adjObj[b].push(a);
}

const scores = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  const visited = new Array(N + 1).fill(false);
  const queue = [[i, 0]]; 
  visited[i] = true;

  while (queue.length > 0) {
    const [current, depth] = queue.shift();
    scores[i] += depth;

    for (const next of adjObj[current]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, depth + 1]);
      }
    }
  }
}

const minScore = Math.min(...scores.slice(1)); 
const answer = scores.findIndex((score) => score === minScore);
console.log(answer);
