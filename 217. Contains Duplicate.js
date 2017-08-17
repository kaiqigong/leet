/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) return true;
//     }
//   }
//   return false;
// };

var containsDuplicate = function(nums) {
  var map = {}
  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return true;
    } else {
      map[nums[i]] = 1;
    }
  }
  return false;
};

// var containsDuplicate = function(nums) {
//   let s = new Set()
//   for (let n of nums) {
//     if (s.has(n)) {
//       return true
//     }
//     s.add(n)
//   }
//   return false
// };

console.log(containsDuplicate([]));
console.log(containsDuplicate([1,2,3]));
console.log(containsDuplicate([1,2,2]));
console.log(containsDuplicate([1]));
console.log(containsDuplicate([1,3,2,4,1]));
