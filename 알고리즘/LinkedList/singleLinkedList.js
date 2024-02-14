// 1. 연결 리스트는 노드들의 집합이다.
// 2. 노드는 단일 데이터 항목을 저장하며, 호출될 다음 노드들에 대한 참조 정보인 Next를 저장한다.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("How");
// first.next.next.next = new Node("Are You?");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // push(val) {
  //   if (this.length === 0) {
  //     this.head = val;
  //   }
  //   this.tail.next = val;
  //   this.tail = val;
  //   this.length += 1;
  // }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      // 리스트가 비어 있는 경우
      this.head = newNode;
      this.tail = this.head;
    } else {
      // 리스트가 비어 있지 않은 경우
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // 빈 리스트일 경우 처리
    if (!this.head) return undefined;

    // Previous = newTail
    // newTail은 current 직전 노드를 가리킨다.
    var current = this.head;
    var previous = current;

    // current 다음 노드가 존재하는 한 루프가 계속 실행된다.
    while (current.next) {
      previous = current;
      current = current.next;
    }
    // 루프가 완료된 시점에서, tail에는 제거될 끝단 노드가, previous에는 끝단 직전의 노드가 저장되어 있음
    this.tail = previous;
    this.tail.next = null;
    this.length -= 1;

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    var currentHead = this.head;
    this.head = currentHead.next;

    this.length -= 1;
    return currentHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    var currentHead = this.head;

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head = newNode;
      this.head.next = currentHead;
    }

    this.length += 1;
    return this;
  }

  get(idx) {
    var counter = 0;
    var current = this.head;
    if (idx < 0 || idx >= this.length) return null;

    while (counter !== index) {
      current = current.next;
      counter += 1;
    }
    return current;
  }

  set(idx, value) {
    var foundNode = this.get(idx);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(idx, value) {
    if (idx < 0 || idx > thisl.length) return false;
    if (idx === this.length - 1) return !!this.push(value);
    if (idx === 0) return !!this.unshift(value);

    var newNode = new Node(val);
    var prev = this.get(idx - 1);
    var temp = prev.next;
    // newNode와 prev 연결
    prev.next = newNode;
    newNode.next = temp;
    this.length += 1;

    return true;
  }

  remove(idx) {
    if (idx < 0 || idx > thisl.length) return false;
    if (idx === this.length - 1) return !!this.pop(value);
    if (idx === 0) return !!this.shift(value);

    var prev = this.get(idx - 1);
    var removed = prev.next;

    prev.next = removed.next;
    this.length -= 1;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var next;
    var prev = null;

    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      node = next;
    }
    return this;
  }
}

var list = new SinglyLinkedList();
list.push("hello?");
list.push("goodbye");
