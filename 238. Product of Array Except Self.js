/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var results = [1];
  for (var i = 1; i < nums.length; i++) {
    results[i] = results[i - 1] * nums[i - 1];
  }
  var right = 1;
  for (var i = nums.length - 1; i >= 0; i--) {
    results[i] = right * results[i];
    right *= nums[i];
  }
  return results;
};

console.log(productExceptSelf([1,2,3,4]))
