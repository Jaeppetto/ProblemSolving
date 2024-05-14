const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제1.txt';

let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => {
    const splitedEl = el.split(' ');
    return splitedEl.map(Number);
  });

const [n] = input[0];
const nodeList = input[1];
const [deletedNode] = input[2];

// 노드:
// 1. 본인의 인덱스를 갖고 있다.
// 2. 본인의 자식 노드 인덱스를 갖고 있다.

class Node {
  constructor(index) {
    this.index = index;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }

  removeChild(node) {
    this.children = this.children.filter((n) => n.index !== node.index);
  }
}

// 트리:
// 1. 루트 노드, 노드 리스트를 갖고 있다.
// 2. 노드를 삽입할 수 있다.
// 3. 노드를 제거할 수 있다. 하위 노드들도 전부 제거된다.
// 4. 입력받은 인덱스로 특정 노드를 찾을 수 있다.
// 5. 리프 노드 갯수를 구할 수 있다.

class Tree {
  constructor() {
    this.root = null;
  }

  buildTree(parents, removeNodeIndex) {
    const nodes = parents.map((_, index) => new Node(index));

    parents.forEach((parent, index) => {
      if (parent === -1) {
        this.root = nodes[index];
      } else {
        nodes[parent].addChild(nodes[index]);
      }
    });

    if (removeNodeIndex !== undefined) {
      const parentNodeIndex = parents[removeNodeIndex];
      if (parentNodeIndex !== -1) {
        this.removeNode(nodes[removeNodeIndex], nodes[parentNodeIndex]);
      } else {
        this.root = null;
      }
    }
  }

  removeNode(removeNode, parentNode = null) {
    if (parentNode) {
      parentNode.removeChild(removeNode);
    } else {
      this.root = null;
    }

    removeNode.children.forEach((c) => this.removeNode(c, removeNode));
  }

  countLeafNodes(node = this.root) {
    if (!node) return 0;
    if (node.children.length === 0) return 1;

    return node.children.reduce(
      (sum, child) => sum + this.countLeafNodes(child),
      0
    );
  }
}

const tree = new Tree();
tree.buildTree(nodeList, deletedNode);
if (deletedNode === nodeList.findIndex((parent) => parent === -1)) {
  console.log(0);
} else {
  console.log(tree.countLeafNodes());
}
