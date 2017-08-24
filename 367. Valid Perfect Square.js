/**
 * @param {number} num
 * @return {boolean}
 */

var log10 = function(num) {
  return Math.log(num) / Math.log(10);
}
var isPerfectSquare = function(num) {
  var len = Math.ceil(log10(num) / 2);
  var max = Math.pow(10, len);
  var min = Math.floor(Math.pow(10, len - 1));
  for (var i = min; i <= max; i++) {
    if (num === i * i) {
      return true;
    }
  }
  return false;
};



console.log(isPerfectSquare(4));
console.log(isPerfectSquare(1));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(8));
console.log(isPerfectSquare(2565562434));
