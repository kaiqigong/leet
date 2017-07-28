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

// var test = new TreeNode(1);
// test.left = new TreeNode(2);
// test.right = new TreeNode(3);
// test.left.left = new TreeNode(4);
// test.left.right = new TreeNode(5);

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  return JSON.stringify(root);
};


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  var raw = JSON.parse(data);
  if (!raw) {
    return null;
  }
  const parseData = function(node) {
    let result = new TreeNode(node.val);
    if (node.left) {
      result.left = parseData(node.left);
    }
    if (node.right) {
      result.right = parseData(node.right);
    }
    return result;
  }
  return parseData(raw);
};

// serialize(deserialize(serialize(test)));
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
