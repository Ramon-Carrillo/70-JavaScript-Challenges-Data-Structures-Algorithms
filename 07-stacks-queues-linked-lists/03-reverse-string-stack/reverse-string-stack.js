const Stack = require("./stack");

function reverseStringStack(str) {
  const stack = new Stack();
  let reversedString = "";
  Array.from(str).forEach((char) => {
    stack.push(char);
  });
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }
  return reversedString;
}

module.exports = reverseStringStack;
