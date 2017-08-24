/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  var sum = 0;
  for (var i = 0; i < k; i++) {
    sum += nums[i];
  }
  var result = sum;
  for (var i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    result = Math.max(result, sum);
  }
  return result / k;
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
