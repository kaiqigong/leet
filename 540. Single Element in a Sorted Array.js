/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  var n = nums.length, lo = 0, hi = (n - 1) / 2;
  while (lo < hi) {
    var m = Math.floor((lo + hi) / 2);
    if (nums[2*m] != nums[2*m+1]) hi = m;
    else lo = m+1;
  }
  return nums[2*lo];
};

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))
// lo 0 hi 4 m 2 3,4
// lo 0 hi 2 m 1 2,3
// lo 0 hi 1 m 0 1,1
// lo 1 hi 1
console.log(singleNonDuplicate([1,2,2,3,3,4,4,8,8]))
console.log(singleNonDuplicate([3,3,7,7,10,11,11]))
