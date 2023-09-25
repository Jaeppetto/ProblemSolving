class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqeue(newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      // 현재 큐가 비어있는 상황이라면
      // Head와 Tail 모두 해당 노드로
      this.head = this.tail = newNode;
    } else {
      // 이미 큐에 값이 들어있었다면
      // 마지막 노드의 다음을 새 노드로 지정
      // 새 노드를 마지막 노드로 지정
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const shift = this.head.value;
    this.head.next = this.head;
    this.size--;
    return shift;
  }

  peek() {
    return this.head.value;
  }
}
