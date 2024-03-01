const Queue = require("./queue");

const reverseStringWithQueue = (str) => {
  const queue = new Queue();

  for (let i = str.length - 1; i >= 0; i--) {
    queue.enqueue(str[i]);
  }

  let reversedStr = "";
  while (!queue.isEmpty()) {
    reversedStr += queue.dequeue();
  }

  return reversedStr;
};

module.exports = reverseStringWithQueue;
