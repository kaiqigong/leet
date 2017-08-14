/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  if (!t) {
    return '';
  }
  var result = '';
  result += t.val;
  if (t.left && t.right) {
    result = result + `(${tree2str(t.left)})(${tree2str(t.right)})`
  } else if (t.left) {
    result = result + `(${tree2str(t.left)})`
  } else if (t.right) {
    result = result + `()(${tree2str(t.right)})`
  } else {
    // do nothing
  }
  return result;
};

console.log(tree2str({val: 5, left: {val: 3, left: {val: 2}, right: {val: 4}}, right: {val: 6, right: {val: 7}}}));
