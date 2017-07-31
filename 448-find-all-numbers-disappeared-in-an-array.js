/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  var result = [0];
  for (let i = 0; i < nums.length; i++) {
    if (result.indexOf(i + 1) < 0) {
      result.push(i + 1);
    }
    var index = result.indexOf(nums[i]);
    if (index > result.indexOf(0)) {
      result.splice(index, 1);
    } else if (index > -1) {
      // do nothing
    } else {
      result.splice(0, 0, nums[i]);
    }
  }
  result.splice(0, result.indexOf(0) + 1);
  return result;
};

// TLE
