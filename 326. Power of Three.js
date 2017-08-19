/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  var index = 0;
  while (Math.pow(3, index) <= n) {
    if (Math.pow(3, index) === n) {
      return true;
    }
    index++;
  }
  return false;
};

console.log(isPowerOfThree(9));
console.log(isPowerOfThree(8));
