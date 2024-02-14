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

  // 0. 계층순회
  levelOrder() {
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

  // 1. 전위순회 (A>B>D>E>C>F)
  // Root에서 시작하여, Left노드를 전부 순회한 후 Right노드 순회
  preOrder(node = this.root) {
    let result = [];

    if (node !== null) {
      result.push(node.value);
      console.log(result);
      result = result.concat(this.preOrder(node.left));
      console.log('--');
      result = result.concat(this.preOrder(node.right));
    }
    return result;
  }

  // 2. 중위순회 (D>B>E>A>F>C)
  // Left Leaf에서 시작하여 기준 좌측노드들을 전부 순회, 이후 Root 찍고 우측노드들을 순회
  inOrder(node = this.root) {
    let result = [];

    if (node !== null) {
      result = result.concat(this.inOrder(node.left));
      result.push(node.value);
      result = result.concat(this.inOrder(node.right));
    }
    return result;
  }

  // 3. 후위순회 (D>E>B>F>C>A)
  // 하위노드를 우선적으로 순회하고, Root를 향해 역으로 올라오며 손회
  postOreder(node = this.root) {
    let result = [];

    if (node !== null) {
      result = result.concat(this.postOreder(node.left));
      result = result.concat(this.postOreder(node.right));
      result.push(node.value);
    }
    return result;
  }
}

const tree = new Tree(new Node('A'));
tree.root.left = new Node('B');
tree.root.right = new Node('C');

tree.root.left.left = new Node('D');
tree.root.left.right = new Node('E');
tree.root.right.left = new Node('F');

// console.log(tree.levelOrder());
// console.log(tree.preOrder());
// console.log(tree.inOrder());
console.log(tree.postOreder());
