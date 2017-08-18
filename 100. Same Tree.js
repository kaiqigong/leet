/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q) {
    return true;
  }
  if (!p || !q ) {
    return false;
  }
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree({val: 1, left: {val: 2, right: {val: 3}}, right: {val: 4}}, {val: 1, left: {val: 2, right: {val: 3}}, right: {val: 4}}));
console.log(isSameTree({val: 2, left: {val: 2, right: {val: 3}}, right: {val: 4}}, {val: 1, left: {val: 2, right: {val: 3}}, right: {val: 4}}));
console.log(isSameTree({val: 1, left: {val: 2, right: {val: 3}}, right: {val: 4}}, {val: 1, right: {val: 2, right: {val: 3}}, left: {val: 4}}));
console.log(isSameTree(null, null));
console.log(isSameTree(null, {val: 2}));
