/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var charCodeOfA = 'A'.charCodeAt(0);
  var result = 0;
  for (var i = 0, len = s.length; i < len; i++) {
    result += (s[i].charCodeAt(0) - charCodeOfA + 1) * Math.pow(26, len - i - 1);
  }
  return result;
};


console.log(titleToNumber('A'));
console.log(titleToNumber('Z'));
console.log(titleToNumber('AA'));
