function permutations(str) {
  if (str.length === 0) return [""];
  if (str.length === 1) return [str];
  const result = [];

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const remainingPermutations = permutations(remainingChars);
    for (let j = 0; j < remainingPermutations.length; j++) {
      result.push(currentChar + remainingPermutations[j]);
    }
  }
  return result;
}

module.exports = permutations;
