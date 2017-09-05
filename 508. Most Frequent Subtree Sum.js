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
var findFrequentTreeSum = function(root) {
  var map = {};
  var maxCount = 0;
  var results = [];
  var sum = function(node) {
    if (!node) return 0;
    var val = sum(node.left) + node.val + sum(node.right);
    map[val] = ~~map[val] + 1;
    if (map[val] === maxCount) {
      results.push(val);
    } else if (map[val] > maxCount) {
      results = [val];
      maxCount = map[val];
    }
    return val;
  }
  sum(root);
  return results;
};


console.log(findFrequentTreeSum({val: 5, left: {val: 2}, right: {val: -3}}));
console.log(findFrequentTreeSum({val: 5, left: {val: 2}, right: {val: -5}}));




