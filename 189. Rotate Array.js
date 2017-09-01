/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  var len = nums.length;
  var tail = nums.slice(len - (k % len), len);
  for (var i = len - 1; i >= k % len; i--) {
    nums[i] = nums[i - k % len];
  }
  for (var i = 0; i < tail.length; i++) {
    nums[i] = tail[i];
  }
};


var nums = [1,2];
rotate(nums, 3);
console.log(nums);
