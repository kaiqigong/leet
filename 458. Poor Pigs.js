/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  var times = Math.floor(minutesToTest / minutesToDie);
  var pigs = 0;
  while (Math.pow(times + 1, pigs) < buckets) {
    pigs++;
  }
  return pigs;
};

console.log(poorPigs(1000, 15, 60));
console.log(poorPigs(1, 1, 1));
console.log(poorPigs(1000, 12, 60));
