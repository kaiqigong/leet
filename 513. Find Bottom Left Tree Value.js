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
var findBottomLeftValue = function(root) {
  var queue = [];
  queue.push(root);
  var leftmost;
  while (queue.length) {
    leftmost = queue[0].val;
    var newqueue = [];
    while (queue.length) {
      var node = queue.shift();
      if (node.left) {
        newqueue.push(node.left);
      }
      if (node.right) {
        newqueue.push(node.right);
      }
    }
    queue = newqueue;
  }
  return leftmost;
};

console.log(findBottomLeftValue({val: 1, left: {val: 2, left: {val: 4}}, right: {val: 3, left: {val: 5,left: {val: 7}}, right: {val: 6}}}))
