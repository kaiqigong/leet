/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var depth = function(root) {
  if (!root) return 0;
  return Math.max(depth(root.left), depth(root.right)) + 1;
}
var isBalanced = function(root) {
  if (!root) return true;
  var leftDepth = depth(root.left);
  var rightDepth = depth(root.right);
  return Math.abs(leftDepth - rightDepth) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};
