/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      count++;
    } else {
      nums[i - count] = nums[i];
    }
  }
  nums.splice(nums.length - count, count);
  return nums.length;
};

console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([2], 3));
