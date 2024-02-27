function anagramGrouping(arr) {
  const anagrams = new Map();
  arr.forEach((word) => {
    const sortedWord = word.split("").sort().join("");
    if (anagrams.has(sortedWord)) {
      anagrams.get(sortedWord).push(word);
    } else {
      anagrams.set(sortedWord, [word]);
    }
  });
  return Array.from(anagrams.values());
}

module.exports = anagramGrouping;
