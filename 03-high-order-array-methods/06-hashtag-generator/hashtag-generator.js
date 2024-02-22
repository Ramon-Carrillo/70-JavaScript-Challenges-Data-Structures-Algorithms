function generateHashtag(str) {
  const result = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  return result.length > 140 || result === "" ? false : `#${result}`;
}

module.exports = generateHashtag;
