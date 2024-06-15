const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const commands = input.slice(1);

class Deque {
  constructor() {
    this.items = [];
  }

  push_front(x) {
    this.items.unshift(x);
  }

  push_back(x) {
    this.items.push(x);
  }

  pop_front() {
    return this.items.length ? this.items.shift() : -1;
  }

  pop_back() {
    return this.items.length ? this.items.pop() : -1;
  }

  size() {
    return this.items.length;
  }

  empty() {
    return this.items.length ? 0 : 1;
  }

  front() {
    return this.items.length ? this.items[0] : -1;
  }

  back() {
    return this.items.length ? this.items[this.items.length - 1] : -1;
  }
}

const deque = new Deque();
const results = [];

for (let command of commands) {
  const [operation, value] = command.split(' ');

  switch (operation) {
    case 'push_front':
      deque.push_front(parseInt(value));
      break;
    case 'push_back':
      deque.push_back(parseInt(value));
      break;
    case 'pop_front':
      results.push(deque.pop_front());
      break;
    case 'pop_back':
      results.push(deque.pop_back());
      break;
    case 'size':
      results.push(deque.size());
      break;
    case 'empty':
      results.push(deque.empty());
      break;
    case 'front':
      results.push(deque.front());
      break;
    case 'back':
      results.push(deque.back());
      break;
  }
}

console.log(results.join('\n'));
