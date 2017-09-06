/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  if (!timeSeries.length) return 0;
  var result = duration;
  for (var i = 0; i < timeSeries.length - 1; i++) {
    var diff = timeSeries[i + 1] - timeSeries[i];
    result += Math.min(diff, duration);
  }
  return result;
};

console.log(findPoisonedDuration([1, 4], 2))
console.log(findPoisonedDuration([1, 2], 2))
