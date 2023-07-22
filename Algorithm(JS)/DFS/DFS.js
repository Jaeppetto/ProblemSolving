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

  DFSPreOrder() {
    var current = this.root;
    var result = [];

    function traverse(node) {
      result.push(node.val);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return result;
  }

  DFSPostOrder() {
    var current = this.root;
    var result = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      result.push(node.val);
    }
    traverse(current);
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

tree.DFS();
