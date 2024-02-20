function areAllCharactersUnique(str) {
  const charMap = {};
  for (let char of str) {
    if (charMap[char]) {
      return false;
    }
    charMap[char] = 1;
  }
  return true;
}

module.exports = areAllCharactersUnique;
