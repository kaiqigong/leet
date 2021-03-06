/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  return n == 0 ? 0 : n / 5 + trailingZeroes(n / 5);
};

console.log(trailingZeroes(5));
console.log(trailingZeroes(1808548329));
