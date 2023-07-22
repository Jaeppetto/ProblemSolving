// 1. Skeleton
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = ths.head;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  shift() {
    if (!this.head) return undefined;
    var temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;

      this.length--;
      return temp;
    }
  }

  unshift(val) {
    var newNode = new Node(val);

    if (length === 0) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (index < 0 || index === this.length) return null;

    if (index <= this.length / 2) {
      var count = 0;
      var current = this.head;

      while (count != idx) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      var count = this.length - 1;
      var current = this.tail;

      while (count != idx) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  set(idx, val) {
    var foundNode = this.get(idx);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (index < 0 || index >= this.length) return false;
    // if (index === 0) {
    //   this.unshift(val);
    // } else if (index === length) {
    //   this.push(val);
    // } else {
    //   var foundNode = this.get(idx - 1);
    //   var newNode = new Node(val);

    //   newNode.next = foundNode;
    //   newNode.prev = foundNode.prev;

    //   foundNode.prev.next = newNode;
    //   foundNode.prev = newNode;
    // }
    // length++;
    // return true;

    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(idx - 1);
    var afterNode = beforeNode.next;

    beforeNode.next = newNode;
    afterNode.prev = newNode;

    newNode.prev = beforeNode;
    newNode.next = afterNode;

    this.length++;
    return true;
  }

  remove(idx) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift(val);
    if (index === this.length) return this.pop(val);

    var foundNode = this.get(idx);
    var beforeNode = foundNode.prev;
    var afterNode = foundNode.next;

    foundNode.next = null;
    foundNode.prev = null;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    this.length--;
    return foundNode;
  }
}
