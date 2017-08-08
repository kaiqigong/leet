/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  var oldR = nums.length;
  if (!oldR) {
    return nums;
  }
  var oldC = nums[0].length;
  if (oldC * oldR !== r * c) {
    return nums;
  }
  var tmp = [];
  for (var i = 0; i < oldR; i++) {
    tmp = tmp.concat(nums[i]);
  }
  var results = [];
  while (tmp.length) {
    results.push(tmp.splice(0, c));
  }
  return results;
};

console.log(matrixReshape([[1,2], [3,4]], 3, 2));
