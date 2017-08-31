/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) {
    return 0;
  }
  var map = {};
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    map[nums[i]] = ~~map[nums[i]] + 1;
  }
  for (var key in map) {
    if (k === 0) {
      count += map[key] > 1 ? 1 : 0;
    } else {
      count += map[parseInt(key) + k] ? 1 : 0;
    }
  }
  return count;
};

console.log(findPairs([1, 2, 3, 4, 5], 1))
console.log(findPairs([1, 3, 1, 5, 4], 0))
console.log(findPairs([3,1,4,1,5], 2))
