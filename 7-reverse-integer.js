/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if ((x >> 0) != x) {
    return 0;
  }
  var arr = [];

  while (x) {
    arr.push(x % 10);
    x /= 10;
    x = ~~x;
  }
  while (arr.length) {
    x = x * 10 + arr.shift();
  }
  if ((x >> 0) != x) {
    return 0;
  }
  return x;
};

console.log(reverse(0))

