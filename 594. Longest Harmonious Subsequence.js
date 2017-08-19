/**
 * @param {number[]} nums
 * @return {number}
 */
// var findLHS = function(nums) {
//   var result = 0;
//   var map = {};
//   for (var i = 0; i < nums.length; i++) {
//     if (map[nums[i]]) {
//       continue;
//     } else {
//       map[nums[i]] = 1;
//     }
//     var count = 0;
//     var h = false;
//     for (var j = 0; j < nums.length; j++) {
//       if (nums[j] - nums[i] === 1) {
//         h = true;
//         count++;
//       }
//       if (nums[j] === nums[i]) {
//         count++;
//       }
//     }
//     if (h) {
//       result = Math.max(result, count);
//     }
//   }
//   return result;
// };

var findLHS = function(nums) {
  var result = 0;
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] | 0) + 1;
    if (map[nums[i] + 1] | 0) {
      result = Math.max(result, map[nums[i]] + (map[nums[i] + 1] | 0))
    }
  }
  for (var key in map) {
    if (map[key] && map[~~key + 1]) {
      result = Math.max(result, map[key] + map[~~key + 1]);
    }
  }
  return result;
};

console.log(findLHS([1,3,2,2,5,2,3,7]));
console.log(findLHS([]));
console.log(findLHS([1]));
console.log(findLHS([1, 2]));
console.log(findLHS([1, 1]));
