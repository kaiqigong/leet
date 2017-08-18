/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums.length) {
    return null;
  }
  var mid = nums.length / 2 | 0;
  var root = new TreeNode(nums[mid]);
  var left = nums.slice(0, mid);
  var right = nums.slice(mid + 1, nums.length);
  root.left = sortedArrayToBST(left);
  root.right = sortedArrayToBST(right);
  return root;
};

console.log(sortedArrayToBST([1,2,3,4,5,6,7]));
console.log(sortedArrayToBST([1,2]));
console.log(sortedArrayToBST([1]));
console.log(sortedArrayToBST([]));
console.log(sortedArrayToBST([1,2,3,4,5,6,7,8]));
