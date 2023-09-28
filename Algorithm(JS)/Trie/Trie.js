class Node {
  constructor(value = '') {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  // 문자열 추가, Root부터 시작
  insert(string) {
    let currentNode = this.root;

    // 문자열을 앞에서부터 잘라가며 순회
    // 현재 노드에서 자른 문자열이 간선에 없다면, 새롭게 노드를 추가
    // 다음 노드로 이동
    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }
      currentNode = currentNode.children.get(char);
    }
  }

  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return true;
  }

  autocomplete(prefix) {
    let currentNode = this.root;

    for (const char of prefix) {
      // 해당 접두사가 Trie에 없으면 빈 배열 반환
      if (!currentNode.children.has(char)) {
        return [];
      }
      currentNode = currentNode.children.get(char);
    }

    // console.log(currentNode);
    const stack = [currentNode];
    const words = [];

    while (stack.length > 0) {
      const node = stack.pop();

      if (node.children.size === 0) {
        // 더 이상 하위 노드가 없으면, 완성된 단어이므로 words 배열에 추가
        words.push(node.value);
      } else {
        for (const child of node.children.values()) {
          stack.push(child);
        }
      }
    }
    return words;
  }
}

const trie = new Trie();
trie.insert('cat');
trie.insert('cad');
trie.insert('cah');
trie.insert('dog');
console.log(trie.has('cat'));
console.log(trie.has('can'));
console.log(trie.has('cap'));

console.log(trie.autocomplete('ca'));
