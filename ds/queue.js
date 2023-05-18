class Queue {
  constructor() {
    this.queue = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.queue[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    const item = this.queue[this.head];
    delete this.queue[this.head];
    this.head++;
    return item;
  }

  peek() {
    return this.queue[this.head];
  }
  size() {
    return this.tail - this.head;
  }
}