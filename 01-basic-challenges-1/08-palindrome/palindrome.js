function isPalindrome(str) {
  let cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

module.exports = isPalindrome;
