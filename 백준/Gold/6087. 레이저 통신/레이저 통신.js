const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [W, H] = input.shift().split(' ').map(Number);
const map = input.map((line) => line.split(''));

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

      if (this.heap[parentIndex].mirrorCount <= lastInsertedNode.mirrorCount)
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
        this.heap[rightChildIndex].mirrorCount <
          this.heap[leftChildIndex].mirrorCount
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smallerChildIndex].mirrorCount >= rootNode.mirrorCount)
        break;

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

const getCPosition = (map, width, height) => {
  const dst = [];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (map[i][j] === 'C') {
        dst.push([i, j]);
      }
    }
  }

  return dst;
};

const reflectDirection = (currentDirection, mirror) => {
  switch (currentDirection) {
    case 'N':
      return mirror === '/' ? 'E' : 'W';
    case 'E':
      return mirror === '/' ? 'N' : 'S';
    case 'S':
      return mirror === '/' ? 'W' : 'E';
    case 'W':
      return mirror === '/' ? 'S' : 'N';
    default:
      return currentDirection;
  }
};

const dijkstra = (startRow, startCol, endRow, endCol) => {
  const pq = new MinHeap();
  const visited = Array.from({ length: H }, () =>
    Array.from({ length: W }, () => ({
      N: false,
      E: false,
      S: false,
      W: false,
    }))
  );

  pq.enqueue({ row: startRow, col: startCol, mirrorCount: 0, direction: 'N' });
  pq.enqueue({ row: startRow, col: startCol, mirrorCount: 0, direction: 'E' });
  pq.enqueue({ row: startRow, col: startCol, mirrorCount: 0, direction: 'S' });
  pq.enqueue({ row: startRow, col: startCol, mirrorCount: 0, direction: 'W' });

  while (!pq.isEmpty()) {
    const { row, col, mirrorCount, direction } = pq.dequeue();

    if (row === endRow && col === endCol) {
      return mirrorCount;
    }

    if (visited[row][col][direction]) continue;
    visited[row][col][direction] = true;

    let nextRow = row;
    let nextCol = col;

    switch (direction) {
      case 'N':
        nextRow = row - 1;
        nextCol = col;
        break;
      case 'E':
        nextRow = row;
        nextCol = col + 1;
        break;
      case 'S':
        nextRow = row + 1;
        nextCol = col;
        break;
      case 'W':
        nextRow = row;
        nextCol = col - 1;
        break;

      default:
        break;
    }

    if (
      nextRow >= 0 &&
      nextRow < H &&
      nextCol >= 0 &&
      nextCol < W &&
      map[nextRow][nextCol] !== '*'
    ) {
      pq.enqueue({
        row: nextRow,
        col: nextCol,
        mirrorCount: mirrorCount,
        direction,
      });
      pq.enqueue({
        row: nextRow,
        col: nextCol,
        mirrorCount: mirrorCount + 1,
        direction: reflectDirection(direction, '/'),
      });
      pq.enqueue({
        row: nextRow,
        col: nextCol,
        mirrorCount: mirrorCount + 1,
        direction: reflectDirection(direction, '\\'),
      });
    }
  }

  return -1;
};

const [C1, C2] = getCPosition(map, W, H);

const answer = Math.min(
  dijkstra(C1[0], C1[1], C2[0], C2[1]),
  dijkstra(C2[0], C2[1], C1[0], C1[1])
);

console.log(answer);
