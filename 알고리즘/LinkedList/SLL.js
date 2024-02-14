class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 입력 Value와 일치하는 노드 반환, O(N)
  find(value) {
    const currNode = this.head;
    while (currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode;
  }

  // 제일 마지막에 새로운 노드 추가
  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // 특정 노드(node) 다음에 새로운 노드 추가
  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  // 특정 노드 제거
  remove(value) {
    const prevNode = this.find(value);

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  // 구조화 후 출력
  display() {
    let currNode = this.head;
    let displayString = '[';

    while (currNode !== null) {
      displayString += `${currNode.value}`;
      currNode = currNode.next;
    }

    displayString = displayString.substr(0, displayString.legth - 2);

    displayString += ']';
    console.log(displayString);
  }

  size() {
    if (this.head === null) return 0;
    // head부터 시작해서 tail까지 순회, 카운트 ++
    let size = 0;
    let currNode = this.head;

    while (currNode.next !== this.tail) {
      currNode = currNode.next;
      size++;
    }

    return size + 1;
  }
}
