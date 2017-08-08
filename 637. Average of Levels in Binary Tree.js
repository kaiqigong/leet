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
var averageOfLevels = function(root) {
  var results = [];
  var counts = [];
  var sums = [];
  var build = function(node, level) {
    if (!node) {
      return;
    }
    sums[level] = sums[level] ? sums[level] + node.val : node.val;
    counts[level] = counts[level] ? counts[level] + 1 : 1;
    build(node.left, level + 1);
    build(node.right, level + 1);
  }
  build(root, 0);
  for (var i = 0; i < sums.length; i++) {
    results[i] = sums[i] / counts[i];
  }
  return results;
};

var test = {val: 3};
test.left = {val: 9};
test.right = {val: 20};
test.right.left = {val: 15};
test.right.right = {val: 7};

console.log(averageOfLevels(test))
