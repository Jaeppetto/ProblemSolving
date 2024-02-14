class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    // Level Order
    const queue = new Queue();
    queue.enqueue(this.root);

    // 큐 안에 값이 들어있으면,
    while (queue.size()) {
      // 하나 빼
      const currentNode = queue.dequeue();
      // 뺀 값을 출력
      console.log(currentNode.value);

      // 타고 들어가
      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
    }
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);

tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);

tree.display();
