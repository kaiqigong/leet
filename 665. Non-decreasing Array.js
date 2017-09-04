/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  var len = nums.length;
  if (len < 2) {
    return true;
  }
  var count = 0;
  var max = Math.min(nums[0], nums[1]);
  for (var i = 0; i < len; i++) {
    if (nums[i + 1] < nums[i]) {
      count++;
      if (nums[i + 1] < max) {
        nums[i + 1] = nums[i];
        console.log(nums[i + 1])
      } else {
        nums[i] = max;
      }
    }
    if (count > 1) return false;
    max = nums[i];
  }
  return true;
};

// console.log(checkPossibility([4,2,3]))
// console.log(checkPossibility([4,2,1]))
// console.log(checkPossibility([4,2,4,3]))
// console.log(checkPossibility([4,2,4,5]))
// console.log(checkPossibility([4,2,4,4]))
// console.log(checkPossibility([1,4,2,4,4]))
// console.log(checkPossibility([5,4,2,4,4]))
console.log(checkPossibility([1,3,5,2,4]))
