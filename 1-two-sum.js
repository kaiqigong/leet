/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let idx1 = 0;
  let idx2 = 1;
  while(true) {
    if (nums[idx1] + nums[idx2] !== target) {
      if (idx2 < nums.length - 1) {
        idx2++;
      } else {
        idx1++;
        idx2 = idx1 + 1;
      }
    } else {
      break;
    }
  }
  return [idx1, idx2];
};

