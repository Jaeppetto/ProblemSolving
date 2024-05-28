const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [M, N] = input.shift().split(' ').map(Number);
const map = input.map((line) => line.split('').map(Number));

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

      if (this.heap[parentIndex].breakCount <= lastInsertedNode.breakCount)
        break;

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
        this.heap[rightChildIndex].breakCount <
          this.heap[leftChildIndex].breakCount
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smallerChildIndex].breakCount >= rootNode.breakCount) break;

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

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const visited = Array.from({ length: N }, () => Array(M).fill(false));
const pq = new MinHeap();
pq.enqueue({ row: 0, col: 0, breakCount: 0 });

while (!pq.isEmpty()) {
  const { row, col, breakCount } = pq.dequeue();

  if (visited[row][col]) continue;
  visited[row][col] = true;

  // 도착 시
  if (row === N - 1 && col === M - 1) {
    console.log(breakCount);
    return;
  }

  for (let i = 0; i < 4; i++) {
    const nextRow = row + dx[i];
    const nextCol = col + dy[i];

    if (
      nextRow >= 0 &&
      nextRow < N &&
      nextCol >= 0 &&
      nextCol < M &&
      !visited[nextRow][nextCol]
    ) {
      if (map[nextRow][nextCol] === 1) {
        pq.enqueue({ row: nextRow, col: nextCol, breakCount: breakCount + 1 });
      } else {
        pq.enqueue({ row: nextRow, col: nextCol, breakCount });
      }
    }
  }
}
