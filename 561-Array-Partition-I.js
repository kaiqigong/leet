/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  var arr = nums.sort((x, y) => x - y);
  var result = 0;
  for (var i = 0; i < nums.length / 2; i++) {
    result += nums[2 * i];
  }
  return result;
};


console.log(arrayPairSum([1,4,3,2,5,8,12,20,13,15]));
