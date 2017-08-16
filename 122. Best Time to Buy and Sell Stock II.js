/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var result = 0;
  for (var i = 0; i < prices.length - 1; i++) {
    var diff = prices[i + 1] - prices[i];
    if (diff > 0) {
      result += diff;
    }
  }
  return result;
};


console.log(maxProfit([1,3,2,4]));
// 4
console.log(maxProfit([3,1,4,6,2]));
// 5
console.log(maxProfit([3,2,1,1,8]));
// 7
