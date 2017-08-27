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
var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  var min = Number.MAX_VALUE;
  var build = function(node, depth) {
    if (!node.left && !node.right) {
      min = Math.min(min, depth);
    }
    if (node.left) {
      build(node.left, depth + 1);
    }
    if (node.right) {
      build(node.right, depth + 1);
    }
  }
  build(root, 1);
  return min;
};

console.log(minDepth({val: 3}));
console.log(minDepth({val: 3, left: {val: 2}, right: {val: 3, left: {val: 4}}}));
