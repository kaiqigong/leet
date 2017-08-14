/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  nums = nums.sort((x, y) => x - y);
  var result = 0;
  for (var i = 1; i < nums.length; i++) {
    result += (nums[i] - nums[0]);
  }
  return result;
};


console.log(minMoves([1,2,3]));
