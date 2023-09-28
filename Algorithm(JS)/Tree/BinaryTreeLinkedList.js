class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    // Level Order
    const queue = new Queue();
    queue.enqueue(this.root);

    while (queue.size) {
      const currentNode = queue.dequeue();
      console.log(currentNode, value);

      if (currentNode.left) queue.enqueue(currentNode, left);
      if (currentNode.right) queue.enqueue(currentNode, right);
    }
  }
}

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  // 큐에 요소 추가
  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  // 큐에 요소 제거
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;

    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}
