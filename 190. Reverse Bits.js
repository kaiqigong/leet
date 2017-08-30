/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  var plusOne = 0;
  if (n >= 2147483648) {
    plusOne = 1;
  };
  var count = 31;
  var result = 0;
  while (count) {
    if (n & 1 === 1) {
      result += 1;
    }
    result <<= 1;
    count--;
    n >>= 1;
  }
  if (plusOne) {
    result += 1;
  }
  return result >>> 0;
};

console.log(reverseBits(43261596))
console.log(reverseBits(1))
console.log(reverseBits(2147483648))
console.log(reverseBits(4294967295))
