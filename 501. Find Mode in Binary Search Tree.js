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
var findMode = function(root) {
  var result = [];
  var max = 0;
  var map = {};
  if (!root) {
    return [];
  }
  var build = function(node) {
    if (!node) {
      return;
    }
    map[node.val] = (map[node.val] | 0) + 1;
    build(node.left);
    build(node.right);
    if (max === map[node.val]) {
      if (result.indexOf(node.val) < 0) {
        result.push(node.val);
      }
    } else if (max < map[node.val]) {
      max = map[node.val];
      result = [node.val];
    }
  }
  build(root);
  return result;
};

console.log(findMode({val: 1, right: {val: 2, left: {val: 2}}}));
