/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  if (!root) {
    return false;
  }
  var sortedArr = [];
  var build = function(node) {
    if (node.left) {
      build(node.left);
    }
    sortedArr.unshift(node.val);
    if (node.right) {
      build(node.right);
    }
  }
  build(root);
  var len = sortedArr.length;
  var result = false;
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if (sortedArr[i] + sortedArr[j] === k) {
        result = true;
        break;
      }
    }
    if (result) {
      break;
    }
  }
  return result;
};


console.log(findTarget({val: 5, left: {val: 3, left: {val: 2}, right: {val: 4}}, right: {val: 6, right: {val: 7}}}, 9));
