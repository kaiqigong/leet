/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (!root) {
    return 0;
  }
  if (root.left && !root.left.left && !root.left.right) {
    return root.left.val + sumOfLeftLeaves(root.right);
  }
  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};

console.log(sumOfLeftLeaves({val: 3, left: {val: 9}, right: {val: 20, left: {val: 15}, right: {val: 7}}}));
console.log(sumOfLeftLeaves({val: 1, left: {val: 2, left: {val: 4}, right: {val: 5}}, right: {val: 3}}));
