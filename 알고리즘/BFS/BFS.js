class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (val === current.val) return undefined;

        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;

    // 원하는 값을 찾지 못했거나, 끝단에 도달하여
    // current가 Null이 되기 전까지 루프
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        // found = true;
        return true;
      }
    }
    // if (!found) return undefined;
    return false;
  }

  BFS() {
    var queue = [];
    var node = this.root;
    var result = [];

    // 1. 루트 노드를 큐에 넣는다.
    queue.push(node);

    // 2. queue에 무언가가 들어있다면, 루프를 반복한다.
    while (queue.length) {
      node = queue.shift();
      result.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }
}

var tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

tree.BFS();
