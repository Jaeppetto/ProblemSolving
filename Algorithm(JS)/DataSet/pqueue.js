class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      // 이진 최대 힙 조건 만족 시, 루프 탈출 : 삽입된 노드가 부모 노드보다 작은 경우
      if (element.priority <= parent.priority) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const root = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return root;
  }

  sinkDown() {
    let idx = 0;
    const element = this.values[0];
    const length = this.values.length;

    while (true) {
      let leftChildIndex = 2 * idx + 1;
      let rightChildIndex = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      // 자식 노드가 존재하는지 확인 필요
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];

        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        if ((swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority > leftChild.priority)) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.valus[swap];
      this.values[swap] = element;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let heap = new PriorityQueue();
heap.enqueue(55);
