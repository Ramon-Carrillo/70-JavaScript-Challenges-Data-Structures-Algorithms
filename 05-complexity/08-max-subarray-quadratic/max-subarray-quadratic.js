function maxSubarraySum(arr, k) {
  let maxSum = -Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let tempSum = 0;
    for (let j = i; j < i + k; j++) {
      tempSum += arr[j];
    }
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

module.exports = maxSubarraySum;
