/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  var count = 0;
  var helper = function(node) {
    if (!node) {
      return [];
    }
    var leftPathes = helper(node.left);
    var rightPathes = helper(node.right);
    var pathes = [];
    pathes.push(node.val);
    if (node.val === sum) count++;
    leftPathes.forEach((x) => {
      pathes.push(x + node.val);
      if (x + node.val === sum) count++;
    });
    rightPathes.forEach((x) => {
      pathes.push(x + node.val);
      if (x + node.val === sum) count++;
    });

    return pathes;
  }
  helper(root);
  return count;
};

console.log(pathSum({val: 10, left: {val: 5, left: {val: 3, left: {val: 3}, right: {val: -2}}, right: {val: 2, right: {val: 1}}}, right: {val: -3, right: {val: 11}}}, 8));
console.log(pathSum({val: 1}, 1));

