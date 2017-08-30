/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this._arr = nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  var result = 0;
  if (i < 0) i = 0;
  if (j >= this._arr.length - 1) j = this._arr.length - 1;
  for (; i <= j; i++) {
    result += this._arr[i] | 0;
  }
  return result;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */

var obj = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(obj.sumRange(0, 2))
console.log(obj.sumRange(2, 5))
console.log(obj.sumRange(0, 5))
