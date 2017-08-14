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
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  var queue = [];
  var level = 0;
  queue.push(root);
  while (queue.length) {
    level++;
    var length = queue.length;
    for (var i = 0; i < length; i++) {
      var node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return level;
};

console.log(maxDepth({left: {left: {}, right: {right: {}}}, right: {}}))
