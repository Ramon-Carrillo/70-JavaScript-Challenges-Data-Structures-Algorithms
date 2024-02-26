function numberRange(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }
  return [startNum, ...numberRange(startNum + 1, endNum)];
}

module.exports = numberRange;
