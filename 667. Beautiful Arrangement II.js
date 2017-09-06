/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
  var results = [];
  for (var i = 0, l = 1, r = n; l <= r; i++)
    results[i] = k > 1 ? (k-- % 2 != 0 ? l++ : r--) : (k % 2 != 0 ? l++ : r--);
  return results;
};

// 1 2 3 4 5 ...
//  9 8 7 6
// 1 9 2 8 3 7 4 6 5
// 8 7 6 5 4 3 2 1
// 1 9 2 8 3 4 5 6 7
// 8 7 6 5 1 1 1 1
