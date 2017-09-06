/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) {
    return [];
  }
  var queue = [];
  var result = [];
  queue.push(root);
  while(queue.length) {
    var max = Number.MIN_SAFE_INTEGER;
    var newQueue = [];
    while(queue.length) {
      var node = queue.pop();
      if (node.left) newQueue.push(node.left);
      if (node.right) newQueue.push(node.right);
      max = Math.max(max, node.val);
      console.log(max);
    }
    result.push(max);
    queue = newQueue;
  }
  return result;
};

console.log(largestValues({val: 1, left: {val: 3, left: {val: 5}, right: {val: 3}}, right: {val: 2, right: {val: 9}}}));
console.log(largestValues({val: 0, left: {val: -1}}));
