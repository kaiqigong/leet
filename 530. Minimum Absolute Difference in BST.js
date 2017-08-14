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
var getMinimumDifference = function(root) {
  var result = Number.MAX_SAFE_INTEGER;
  var sortedArr = [];
  var build = function(node) {
    if (node.left) {
      build(node.left);
    }
    sortedArr.push(node.val);
    if (node.right) {
      build(node.right);
    }
  }
  build(root);
  var len = sortedArr.length;
  for (var i = 0; i < len; i++) {
    result = result > sortedArr[i + 1] - sortedArr[i] ? sortedArr[i + 1] - sortedArr[i] : result;
  }
  return result;
};

console.log(getMinimumDifference({val:1, right: {val:4, left: {val: 2}}}));
