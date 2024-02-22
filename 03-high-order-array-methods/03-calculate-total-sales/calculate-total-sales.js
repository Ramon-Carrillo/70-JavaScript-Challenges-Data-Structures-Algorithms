function calculateTotalSalesWithTax(arr, tax) {
  let total = 0;
  arr.forEach((item) => {
    let { price, quantity } = item;
    total += price * quantity;
  });
  return total * (1 + tax / 100);
}

module.exports = calculateTotalSalesWithTax;
