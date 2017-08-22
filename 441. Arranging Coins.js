/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  if (!n) {
    return 0;
  }
  var rows = Math.ceil(Math.sqrt(n * 2));
  while (true) {
    if (rows * (rows + 1) > 2 * n && rows * (rows - 1) <= 2 * n) {
      return rows - 1;
    } else {
      rows--;
    }
  }
};

console.log(arrangeCoins(5))
console.log(arrangeCoins(8))
console.log(arrangeCoins(6))
console.log(arrangeCoins(1))
console.log(arrangeCoins(0))
