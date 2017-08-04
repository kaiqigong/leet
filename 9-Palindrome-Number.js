/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if ((x >> 0) != x) {
    return false;
  }
  if (x < 0) {
    return false;
  }
  var tmp = x;
  var y = 0;
  while (tmp) {
    y = y * 10 + tmp % 10;
    tmp = (tmp - tmp % 10) / 10;
  }
  return x === y;
};

console.log(isPalindrome(12321));
