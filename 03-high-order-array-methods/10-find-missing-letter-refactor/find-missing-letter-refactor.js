function findMissingLetter(arr) {
  let missingLetter = "";
  arr.forEach((letter, index) => {
    if (index < arr.length - 1) {
      if (letter.charCodeAt() + 1 !== arr[index + 1].charCodeAt()) {
        missingLetter = String.fromCharCode(letter.charCodeAt() + 1);
      }
    }
  });
  return missingLetter;
}

module.exports = findMissingLetter;
