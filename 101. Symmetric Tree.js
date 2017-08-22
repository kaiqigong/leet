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
var isSymmetric = function(root) {
  var symmetric = function(left, right) {
    if (!left && !right) {
      return true;
    } else if ((!left && right) || (left && !right)) {
      return false;
    } else {
      return left.val === right.val && symmetric(left.left, right.right) && symmetric(left.right, right.left);
    }
  }
  return symmetric(root, root);
};


console.log(isSymmetric({val: 1, left: {val: 2, left: {val: 3}, right: {val: 4}}, right: {val: 2, left: {val: 4}, right: {val: 3}}}));
