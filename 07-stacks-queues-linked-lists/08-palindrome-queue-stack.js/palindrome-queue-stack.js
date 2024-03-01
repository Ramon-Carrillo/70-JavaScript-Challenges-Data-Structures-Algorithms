const Queue = require("./queue");
const Stack = require("./stack");

function isPalindromeQueueStack(str) {
  const formattedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const queue = new Queue();
  const stack = new Stack();

  for (let i = 0; i < formattedStr.length; i++) {
    const char = formattedStr.charAt(i);
    queue.enqueue(char);
    stack.push(char);
  }

  while (!queue.isEmpty()) {
    if (queue.dequeue() !== stack.pop()) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindromeQueueStack;
