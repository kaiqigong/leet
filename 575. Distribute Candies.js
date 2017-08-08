/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  var candyMap = {};
  var count = 0;
  for (var i = 0; i < candies.length; i++) {
    if (!candyMap[candies[i]]) {
      candyMap[candies[i]] = 1;
      count++;
    }
  }
  return Math.min(count, candies.length / 2);
};

console.log(distributeCandies([1,1,2,3]));
