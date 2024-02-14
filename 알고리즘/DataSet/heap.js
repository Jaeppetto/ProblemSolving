class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      // 이진 최대 힙 조건 만족 시, 루프 탈출 : 삽입된 노드가 부모 노드보다 작은 경우
      if (element <= parent) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    const root = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      his.values[0] = end;
      this.sinkDown();
    }
    t;
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

        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.valus[swap];
      this.values[swap] = element;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
