const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제1.txt';

let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

const NM = input.shift().map(Number);
const array = input.shift().map(BigInt);
const N = NM[0];
const M = NM[1];

class MinHeap {
  constructor() {
    this.array = [BigInt(0)];
  }

  push(value) {
    this.array.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.isEmpty()) return null;

    const returnValue = this.array[1];
    const lastNode = this.array.pop();

    if (!this.isEmpty()) {
      this.array[1] = lastNode;
      this.sinkDown();
    }

    return returnValue;
  }

  isEmpty() {
    return this.array.length === 1;
  }

  bubbleUp() {
    let index = this.array.length - 1;

    while (index > 1) {
      const parentIndex = Math.floor(index / 2);
      if (this.array[parentIndex] <= this.array[index]) break;

      [this.array[parentIndex], this.array[index]] = [
        this.array[index],
        this.array[parentIndex],
      ];
      index = parentIndex;
    }
  }

  sinkDown() {
    let index = 1;
    const length = this.array.length;

    while (true) {
      let minIndex = index;
      const leftChildIndex = 2 * index;
      const rightChildIndex = 2 * index + 1;

      if (
        leftChildIndex < length &&
        this.array[leftChildIndex] < this.array[minIndex]
      ) {
        minIndex = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.array[rightChildIndex] < this.array[minIndex]
      ) {
        minIndex = rightChildIndex;
      }

      if (minIndex === index) break;

      [this.array[index], this.array[minIndex]] = [
        this.array[minIndex],
        this.array[index],
      ];
      index = minIndex;
    }
  }
}

let heap = new MinHeap();

for (let i = 0; i < array.length; i++) {
  heap.push(array[i]);
}

for (let i = 0; i < M; i++) {
  let min1 = heap.pop();
  let min2 = heap.pop();
  let sum = min1 + min2;
  heap.push(sum);
  heap.push(sum);
}

const answer = heap.array.reduce((a, b) => a + b, BigInt(0)).toString();

console.log(answer);
