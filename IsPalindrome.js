/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (typeof x === '') {
    let cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const data2 = cleaned.split("").reverse().join("");
    if (data2 != x) {
      return false;
    } else {
      return true;
    }
  } else {
    const data = x.toString();
    const data2 = data.split("").reverse().join("");
    if (data2 != x) {
      return false;
    } else {
      return true;
    }
  }
};

console.log("IsPalindrome", isPalindrome(131));
console.log("IsPalindrome1", isPalindrome("madam"));
