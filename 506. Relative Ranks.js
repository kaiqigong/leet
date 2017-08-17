/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  var sorted = nums.slice().sort((x, y) => y - x);
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    var index = sorted.indexOf(nums[i]);
    if (index === 0) {
      result.push('Gold Medal');
    } else if (index === 1) {
      result.push('Silver Medal');
    } else if (index === 2) {
      result.push('Bronze Medal');
    } else {
      result.push(index + 1 + '');
    }
  }
  return result;
};


console.log(findRelativeRanks([5, 4, 3, 2, 1]));
console.log(findRelativeRanks([10,3,8,9,4]));
