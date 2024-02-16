function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Can't divide by 0!";
      }
      return num1 / num2;
    default:
      return alert("Invalid operator");
  }
}

module.exports = calculator;
