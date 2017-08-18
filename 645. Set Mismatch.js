/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  var set = new Set();
  var sum = 0;
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      result[0] = nums[i];
    } else {
      set.add(nums[i]);
    }
    sum += nums[i];
  }
  var correctSum = nums.length * (nums.length + 1) / 2;
  result[1] = correctSum - sum + result[0];
  return result;
};

console.log(findErrorNums([1,2,2,4]));
console.log(findErrorNums([1,2,2,3]));
