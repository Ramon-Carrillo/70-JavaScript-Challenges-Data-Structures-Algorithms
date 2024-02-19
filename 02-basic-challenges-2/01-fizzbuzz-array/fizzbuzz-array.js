function fizzBuzzArray(num) {
  const arr = [];
  arrayOfNum = Array.from({ length: num }, (_, i) => i + 1);
  arrayOfNum.forEach((num) => {
    if (num % 15 === 0) {
      arr.push("FizzBuzz");
    } else if (num % 3 === 0) {
      arr.push("Fizz");
    } else if (num % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(num);
    }
  });
  return arr;
}

module.exports = fizzBuzzArray;
