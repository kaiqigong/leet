/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var result = nums[0];
  var tmp = nums[0];
  for (var i = 1; i < nums.length; i++) {
    if (tmp < 0 ) {
      tmp = nums[i];
    } else {
      tmp += nums[i];
    }
    result = result > tmp ? result : tmp;
  }
  return result;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([-2, 1]));
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
