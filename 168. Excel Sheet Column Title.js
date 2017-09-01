/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  return n === 0 ? '' : convertToTitle(~~(--n / 26)) + String.fromCharCode('A'.charCodeAt() + (n % 26));
};

console.log(convertToTitle(1))
console.log(convertToTitle(3))
console.log(convertToTitle(26))
console.log(convertToTitle(28))
console.log(convertToTitle(27))
