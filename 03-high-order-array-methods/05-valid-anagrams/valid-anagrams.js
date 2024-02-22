function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const frequencyCounter1 = Array.from(str1).reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const frequencyCounter2 = Array.from(str2).reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(frequencyCounter1).every((key) => {
    return frequencyCounter1[key] === frequencyCounter2[key];
  });
}

module.exports = validAnagrams;
