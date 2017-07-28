/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums.length) {
    return 0;
  }
  let count = 0;
  let pre = nums[0] - 1;
  let twice = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== pre) {
      count++;
      twice = false;
      pre = nums[i];
    } else if (!twice) {
      count++;
      twice = true;
    } else {
      // avoid splice
      nums.splice(i, 1);
      i--;
    }
  }
  return count;
};
