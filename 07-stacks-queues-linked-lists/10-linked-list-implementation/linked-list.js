class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }

  get(index) {
    let current = this.head;
    let count = 0;

    while (current !== null) {
      if (count === index) {
        return current.data;
      }

      count++;
      current = current.next;
    }

    return null;
  }

  printAll() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  insertAt(index, data) {
    const node = new Node(data);
    let current = this.head;
    let count = 0;
    let previous = null;

    if (index === 0) {
      node.next = current;
      this.head = node;
      return;
    }

    while (current !== null) {
      if (count === index) {
        node.next = current;
        previous.next = node;
        return;
      }

      count++;
      previous = current;
      current = current.next;
    }

    this.add(data);
  }

  removeFrom(index) {
    let current = this.head;
    let count = 0;
    let previous = null;

    if (index === 0) {
      this.head = current.next;
      return;
    }

    while (current !== null) {
      if (count === index) {
        previous.next = current.next;
        return;
      }

      count++;
      previous = current;
      current = current.next;
    }
  }
}

module.exports = { Node, LinkedList };
