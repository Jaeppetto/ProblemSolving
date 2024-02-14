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

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue());
