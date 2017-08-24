/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) {
    return [];
  }
  if (!root.left && !root.right) {
    return [root.val + ''];
  }
  var leftPaths = binaryTreePaths(root.left);
  var rightPaths = binaryTreePaths(root.right);
  var paths = leftPaths.concat(rightPaths);
  paths = paths.map(x => {
    return root.val + '->' + x;
  });
  return paths;
};


console.log(binaryTreePaths({val: 1, left: {val: 2, right: {val: 5}}, right: {val: 3}}));

