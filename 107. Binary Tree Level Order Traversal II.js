/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  var result = [];
  var queue = [];
  if (!root) {
    return [];
  }
  queue.push(root);
  while (queue.length) {
    result.unshift(queue.map(x => x.val));
    var newQueue = [];
    queue.forEach(x => {
      if (x.left) {
        newQueue.push(x.left);
      }
      if (x.right) {
        newQueue.push(x.right);
      }
    });
    queue = newQueue;
  }
  return result;
};

console.log(levelOrderBottom({val: 3, left: {val: 9}, right: {val: 20, left: {val: 15}, right: {val: 7}}}));
console.log(levelOrderBottom({val: 3}));
console.log(levelOrderBottom());

