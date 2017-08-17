/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums.sort((x, y) => x - y);
  var results = [];
  let positives = nums.filter(x => x > 0);
  let positivesLen = positives.length;
  let negatives = nums.filter(x => x < 0);
  let negativesLen = negatives.length;
  if (positivesLen >= 3) {
    results.push(positives[positivesLen - 1] * positives[positivesLen - 2] * positives[positivesLen - 3]);
  }
  if (negativesLen >= 2 && positivesLen >= 1) {
    results.push(negatives[0] * negatives[1] * positives[positivesLen - 1]);
  }
  if (nums.length > positivesLen + negativesLen) {
    results.push(0);
  }
  if (nums.length === 3) {
    results.push(nums[0] * nums[1] * nums[2]);
  }
  return results.sort((x, y) => y - x)[0];
};

console.log(maximumProduct([2,3,4,5]))
console.log(maximumProduct([2,3,4,5, -6, -5]))
console.log(maximumProduct([2,3,4,5, -2, -3]))
console.log(maximumProduct([2, 0, -3]))
console.log(maximumProduct([1, 2, 0, -3]))
console.log(maximumProduct([1, 2, -3]))
