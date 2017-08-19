/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var result = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return result;
    }
    result++;
  }
  return result;
};

console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))
console.log(searchInsert([1,3,5,6], 0))
console.log(searchInsert([1], 0))
