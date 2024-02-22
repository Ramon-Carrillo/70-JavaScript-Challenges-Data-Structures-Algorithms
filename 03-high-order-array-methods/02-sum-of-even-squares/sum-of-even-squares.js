function sumOfEvenSquares(num) {
  return num
    .filter((n) => n % 2 === 0)
    .map((n) => n * n)
    .reduce((acc, n) => acc + n, 0);
}

module.exports = sumOfEvenSquares;
