/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right) {
    return root.val === sum;
  } else if (root.left && root.right) {
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
  } else if (root.left) {
    return hasPathSum(root.left, sum - root.val);
  } else {
    return hasPathSum(root.right, sum - root.val);
  }
};

console.log(hasPathSum({val: 5, left: {val: 4, left: {val: 11, left: {val: 7}, right: {val: 2}}, right: {val: 8, left: {val: 13}, right: {val: 4, right: {val: 1}}}}}, 22))
console.log(hasPathSum({val: 5, left: {val: 4, left: {val: 11, left: {val: 7}, right: {val: 2}}, right: {val: 8, left: {val: 13}, right: {val: 4, right: {val: 1}}}}}, 21))
console.log(hasPathSum(null, 0))
