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
var diameterOfBinaryTree = function(root) {
  if (!root) {
    return 0;
  }
  var deep = function(node) {
    if (!node) {
      return 0;
    }
    return 1 + Math.max(deep(node.left), deep(node.right));
  }
  var result = 0;
  var queue = [];
  queue.push(root);
  while (queue.length) {
    var node = queue.pop();
    var path = deep(node.left) + deep(node.right);
    result = result < path ? path : result;
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return result;
};

console.log(diameterOfBinaryTree({val: 1, left: {val: 2, left:{val: 4}, right: {val: 5}}, right: {val: 3}}));
