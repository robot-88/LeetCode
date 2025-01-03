/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0; // To store the integer value
  let prevValue = 0; // To keep track of the previous numeral value
  for (let i = s.length - 1; i >= 0; i--) {
    let currentVal = romanMap[s[i]];
    if (currentVal < prevValue) {
      total -= currentVal;
    } else {
      // Otherwise, add it
      total += currentVal;    }

    // Update the previous value
    prevValue = currentVal;
  }
  return total;
};


console.log('roman' ,romanToInt('MCMXCIV') );