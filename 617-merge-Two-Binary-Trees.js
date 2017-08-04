/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var test1 = new TreeNode(1);
test1.left = new TreeNode(3);
test1.right = new TreeNode(2);
test1.left.left = new TreeNode(5);

var test2 = new TreeNode(2);
test2.left = new TreeNode(1);
test2.right = new TreeNode(3);
test2.left.right = new TreeNode(4);
test2.right.right = new TreeNode(7);


/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1 && !t2) {
    return t1;
  }
  if (!t1) {
    t1 = new TreeNode(0);
  }
  if (!t2) {
    t2 = new TreeNode(0);
  }
  const merge = function(n1, n2) {
    n1.val += n2.val;
    if (n1.left || n2.left) {
      if (!n1.left) {
        n1.left = new TreeNode(0);
      }
      if (!n2.left) {
        n2.left = new TreeNode(0);
      }
      merge(n1.left, n2.left);
    }
    if (n1.right || n2.right) {
      if (!n1.right) {
        n1.right = new TreeNode(0);
      }
      if (!n2.right) {
        n2.right = new TreeNode(0);
      }
      merge(n1.right, n2.right);
    }
  }
  merge(t1, t2);
  return t1;
};

console.log(mergeTrees(test1, test2));
