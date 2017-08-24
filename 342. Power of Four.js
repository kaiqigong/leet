/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  var result = 0;
  while (num) {
    result += num & 1;
    if (num >> 1 & 1) {
      return false;
    }
    if (result > 1) {
      return false;
    }
    num >>= 2;
  }
  return result === 1;
};

console.log(isPowerOfFour(4));
console.log(isPowerOfFour(2));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(16));
console.log(isPowerOfFour(0));
console.log(isPowerOfFour(3));
