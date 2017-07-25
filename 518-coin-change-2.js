/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  var dp = [1];
  for (var coin of coins) {
    for (var j = coin; j <= amount; j++) {
      dp[j] = (dp[j-coin] ? dp[j-coin] : 0) + (dp[j] ? dp[j] : 0);
    }
  }
  return dp[amount] || 0;
};
