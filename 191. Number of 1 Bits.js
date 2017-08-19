/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  var count = 0;
  while (n) {
    if (n & 1 === 1) count++;
    n = (n - (n & 1)) / 2;
  }
  return count;
};

console.log(hammingWeight(11));
console.log(hammingWeight(2147483648));
