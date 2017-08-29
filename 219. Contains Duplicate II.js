/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = i + 1;
    } else {
      if (i + 1 - map[nums[i]] <= k) {
        return true;
      } else {
        map[nums[i]] = i + 1;
      }
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1,2,3,4,3,5,6,7,8,9,10], 3))
console.log(containsNearbyDuplicate([1,2,3,4,5,3,6,7,8,9,10], 3))
console.log(containsNearbyDuplicate([1,2,3,4,5,6,3,7,8,9,10], 3))
console.log(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,10,10], 3))
