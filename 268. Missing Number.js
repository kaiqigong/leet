/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var set = new Set();
  for (var num of nums) {
    set.add(num);
  }
  for (var i = 0; i <= nums.length; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
};

console.log(missingNumber([0, 1, 3]));
console.log(missingNumber([]));
console.log(missingNumber([1]));
