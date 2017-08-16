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
var findTilt = function(root) {
  var sum = function(node) {
    if (!node) {
      return 0;
    }
    // from cache
    if (node.sum) {
      return node.sum;
    }
    var result = sum(node.left) + sum(node.right) + node.val;
    // cache
    node.sum = result;
    return result;
  }
  var tilt = function(node) {
    var sumOfLeft = sum(node.left);
    var sumOfRight = sum(node.right);
    return sumOfLeft > sumOfRight ? (sumOfLeft - sumOfRight) : (sumOfRight - sumOfLeft);
  }
  var result = 0;
  var build = function(node) {
    if (!node) {
      return;
    }
    result += tilt(node);
    build(node.left);
    build(node.right);
  }
  build(root);
  return result;
};

console.log(findTilt({val: 1, left: {val: 2}, right: {val: 3}}));
