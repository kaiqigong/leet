/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var map = {};
  var maxCount = 0;
  var maxEl = nums[0];
  for (var i = 0; i < nums.length; i++) {
    map[nums[i]] = ~~map[nums[i]] + 1;
    if (map[nums[i]] > maxCount) {
      maxCount = map[nums[i]];
      maxEl = nums[i];
    }
  }
  return maxEl;
};


console.log(majorityElement([2,3,4,5,2,3,2,2,2,2]))
