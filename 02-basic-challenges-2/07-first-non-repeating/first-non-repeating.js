function findFirstNonRepeatingCharacter(str) {
  const charMap = {};
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  for (let char of str) {
    if (charMap[char] === 1) {
      return char;
    }
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
