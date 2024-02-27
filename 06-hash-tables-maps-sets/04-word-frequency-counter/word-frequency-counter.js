function wordFrequencyCounter(str) {
  const words = str.toLowerCase().split(/\W+/);
  const frequencyCounter = new Map();

  words.forEach((word) => {
    if (word === "") return;
    if (frequencyCounter.has(word)) {
      frequencyCounter.set(word, frequencyCounter.get(word) + 1);
    } else {
      frequencyCounter.set(word, 1);
    }
  });

  return frequencyCounter;
}

module.exports = wordFrequencyCounter;
