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
var findSecondMinimumValue = function(root) {
  var min = Number.MAX_VALUE;
  var second = Number.MAX_VALUE;
  var dfs = function(node) {
    if (!node) return;
    if (node.val < min) {
      second = min;
      min = node.val;
    } else if (node.val < second && node.val > min) {
      second = node.val;
    }
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  if (second === Number.MAX_VALUE) {
    second = -1;
  }
  return second;
};

console.log(findSecondMinimumValue({val: 2, left: {val: 2}, right: {val: 5, left: {val: 5}, right: {val: 7}}}))
console.log(findSecondMinimumValue({val: 2, left: {val: 2}, right: {val: 2}}))
