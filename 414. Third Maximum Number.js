/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  var max1 = null;
  var max2 = null;
  var max3 = null;
  for (var n of nums) {
    if (n === max1 || n === max2 || n === max3) continue;
    if (max1 === null || n > max1) {
      max3 = max2;
      max2 = max1;
      max1 = n;
    } else if (max2 === null || n > max2) {
      max3 = max2;
      max2 = n;
    } else if (max3 === null || n > max3) {
      max3 = n;
    }
  }
  return max3 == null ? max1 : max3;
};

console.log(thirdMax([2, 2, 3, 1]))
