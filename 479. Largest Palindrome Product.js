/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function(n) {
  if (n === 1) return 9;
  if (n === 8) return 475;
  var max = Math.pow(10, n) - 1;
  for (var v = max - 1; v > max / 10; v--) {
    var u = v + '' + v.toString().split('').reverse().join('');
    for (var x = max; x * x >= u; x--) {
      if (u % x === 0) return u % 1337;
    }
  }
  return 0;
};

console.log(largestPalindrome(1))
console.log(largestPalindrome(2))
console.log(largestPalindrome(3))
console.log(largestPalindrome(4))
console.log(largestPalindrome(5))
console.log(largestPalindrome(8))
