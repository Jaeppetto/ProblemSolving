const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제1.txt';

let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  enqueue(node) {
    this.heap.push(node);
    this.bubbleUp();
  }

  dequeue() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown();
    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex].distance <= lastInsertedNode.distance) break;

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  sinkDown() {
    let index = 0;
    const length = this.heap.length;
    const rootNode = this.heap[0];

    while (this.getLeftChildIndex(index) < length) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      const smallerChildIndex =
        rightChildIndex < length &&
        this.heap[rightChildIndex].distance < this.heap[leftChildIndex].distance
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smallerChildIndex].distance >= rootNode.distance) break;

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const [N, M] = input.shift();
const [startNode] = input.shift();

const graph = Array.from({ length: N }, () => []);
input.forEach(([start, end, distance]) => {
  graph[start - 1].push({ node: end, distance });
});

const dist = Array(N).fill(Infinity);
const visited = Array(N).fill(false);

const pq = new MinHeap();
pq.enqueue({ node: startNode, distance: 0 });
dist[startNode - 1] = 0;

while (!pq.isEmpty()) {
  const { node: currentNode, distance: currentDist } = pq.dequeue();

  if (visited[currentNode - 1]) continue;
  visited[currentNode - 1] = true;

  graph[currentNode - 1].forEach(({ node: nextNode, distance: nextDist }) => {
    const newDist = currentDist + nextDist;
    if (newDist < dist[nextNode - 1]) {
      dist[nextNode - 1] = newDist;
      pq.enqueue({ node: nextNode, distance: newDist });
    }
  });
}

dist.forEach((el) => {
  console.log(el === Infinity ? 'INF' : el);
});
