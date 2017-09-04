/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[Math.abs(nums[i]) - 1] < 0) {
      result.push(Math.abs(nums[i]));
    } else {
      nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1]
    }
  }
  return result;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]))
