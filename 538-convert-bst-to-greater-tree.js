/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// var test = new TreeNode(2);
// test.left = new TreeNode(0);
// test.right = new TreeNode(3);
// test.left.left = new TreeNode(-4);
// test.left.right = new TreeNode(1);

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  // 右 中 左
  if (!root) {
    return root;
  }
  const arr = [];
  const buildArr = function(node) {
    if (node.left) {
      buildArr(node.left);
    }
    arr.push(node);
    if (node.right) {
      buildArr(node.right);
    }
  };
  buildArr(root);
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    arr[len - 2 - i].val += arr[len - 1 - i].val;
  }
  return root;
};

// console.log(convertBST(test));
