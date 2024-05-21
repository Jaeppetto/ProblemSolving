const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제1.txt';

let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [N, M] = input.shift();

// 1. 지름길이 아니거나, 도달할 수 없는 노드 제거
const filteredArray = input.filter((el) => {
  const [start, end, distance] = el;
  if (end - start > distance && end <= M) return el;
});

class PQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    this.queue.push({ element, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.queue.shift().element;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

// 2. 우선순위 큐를 이용한 다익스트라
const dist = Array(M + 1).fill(Infinity);
dist[0] = 0;

const pq = new PQueue();
pq.enqueue(0, 0);

while (!pq.isEmpty()) {
  const current = pq.dequeue();

  if (current + 1 <= M && dist[current + 1] > dist[current] + 1) {
    dist[current + 1] = dist[current] + 1;
    pq.enqueue(current + 1, dist[current + 1]);
  }

  for (const [start, end, length] of filteredArray) {
    if (start === current && end <= M && dist[end] > dist[current] + length) {
      dist[end] = dist[current] + length;
      pq.enqueue(end, dist[end]);
    }
  }
}

console.log(dist[M]);
