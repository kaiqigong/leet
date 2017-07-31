/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  nums = nums.sort((x, y) => x - y);
  var result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] > 1) {
      var n = nums[i + 1] - nums[i];
      for (var j = 1; j < n; j++) {
        result.push(nums[i] + j);
      }
    }
  }
  var last = nums.pop();
  var n = nums.length + 1 - last;
  for (var j = 1; j <= n; j++) {
    result.push(last + j);
  }
  var first = nums.shift();
  for (var j = 1; j < first; j++) {
    result.splice(0, 0, j);
  }
  return result;
};

console.log(findDisappearedNumbers([10,2,5,10,9,1,1,4,3,7]));
