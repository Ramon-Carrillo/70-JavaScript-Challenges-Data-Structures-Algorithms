const Queue = require("./queue");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function breadthFirstTraversal(root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    result.push(node.data);

    if (node.left) {
      queue.enqueue(node.left);
    }

    if (node.right) {
      queue.enqueue(node.right);
    }
  }

  return result;
}

module.exports = {
  Node,
  breadthFirstTraversal,
};
