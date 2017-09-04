/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  if (!root) return null;
  while (root.val < L || root.val > R) {
    if (root.val < L) {
      root = root.right;
    } else if (root.val > R) {
      root = root.left;
    }
    if (!root) return null;
  }
  if (root.left) {
    root.left = trimBST(root.left, L, R)
  }
  if (root.right) {
    root.right = trimBST(root.right, L, R)
  }
  return root;
};

console.log(trimBST({val: 1, left: {val: 0}, right: {val: 2}}, 1, 2));
console.log(trimBST({val: 3, left: {val: 1, right: {val: 2}}, right: {val: 4}}, 3, 4));
