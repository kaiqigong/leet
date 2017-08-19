/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if (!s && !t) {
    return true;
  }
  if ((s && !t) || (!s && t)) {
    return false;
  }
  var isSame = function(a, b) {
    if (!a && !b) {
      return true;
    }
    if ((a && !b) || (!a && b)) {
      return false;
    }
    return a.val === b.val && isSame(a.left, b.left) && isSame(a.right, b.right);
  }
  return isSame(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

console.log(isSubtree({val: 3, left: {val: 4,left: {val: 1}, right: {val: 2}}, right: {val: 5}}, {val: 4, left: {val: 1}, right: {val: 2}}));
console.log(isSubtree({val: 3, left: {val: 4,left: {val: 1}, right: {val: 2, left: {val: 0}}}, right: {val: 5}}, {val: 4, left: {val: 1}, right: {val: 2}}));
