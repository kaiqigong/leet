/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var p1;
  var offset = 0;
  for (p1 = 1, p2 = 1; p1 + offset < nums.length;) {
    nums[p1] = nums[p1 + offset];
    if (nums[p1] === nums[p1 - 1]) {
      offset++;
    } else {
      p1++;
    }
  }
  return nums.length - offset;
};

console.log(removeDuplicates([1,2]))
console.log(removeDuplicates([1,2,2]))
console.log(removeDuplicates([1,2,2,3]))
console.log(removeDuplicates([1,2,2,3,4]))
