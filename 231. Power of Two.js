/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  var count = 0;
  while (n) {
    if (n & 1 === 1) {
      count++;
    }
    if (count > 1) {
      return false;
    }
    n >>= 1;
  }
  return count === 1;
};

console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(6));
