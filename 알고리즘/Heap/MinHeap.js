class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    // 1. 배열 맨 끝 노드에 값을 추가
    this.heap.push(value);

    // 2. 추가한 배열의 인덱스와 부모 노드 인덱스 추출
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    // 3. 부모 노드 우선순위가 더 높을 때까지 추가된 노드를 올림 (부모와 교환)
    while (parentIndex !== 0 && this.heap[parentIndex] > value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    // 1. 루트 요소 반환을 위해 임시로 상수에 저장
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    // 2. 노드 인덱스 초기 설정
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    // 3. 하위 노드들의 우선순위가 더 낮을 경우 반복문 종료
    while (this.heap[currentIndex] > this.heap[leftIndex] || this.heap[currentIndex] > this.heap[rightIndex]) {
      // 4. 자식 노드 우선순위를 비교, 더 낮은 것과 현재 노드를 바꿔줌
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnValue;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

const heap = new MinHeap();
heap.push(45);
heap.push(15);
heap.push(25);
heap.push(65);
heap.push(8);
heap.pop()
heap.push(81);
console.log(heap.heap);
