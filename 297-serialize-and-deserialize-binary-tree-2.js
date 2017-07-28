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
  const genStr = function(node) {
    if (!node) {
      return '|';
    }
    var str = node.val + '|';
    if (node.left) {
      str += genStr(node.left);
    } else {
      str += '|';
    }
    if (node.right) {
      str += genStr(node.right);
    } else {
      str += '|';
    }
    return str;
  }
  let result = genStr(root);
  // console.log(result)
  return result.substr(0, result.length - 1);
};


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data) {
    return null;
  }
  var arr = data.split('|');
  var parent = new TreeNode(0);
  var left = true;
  var stack = [];
  for (let val of arr) {
    if (val !== '') {
      const node = new TreeNode(parseInt(val));
      if (left) {
        parent.left = node;
      } else {
        parent.right = node;
      }
      left = true;
      stack.push(parent);
      parent = node;
    } else {
      if (left) {
        left = false;
      } else {
        parent = stack.pop();
        while (parent.right) {
          parent = stack.pop();
        }
      }
    }
  }
  const result = stack[0] ? stack[0].left : parent.left;
  return result;
};

// serialize(deserialize(serialize(test)));
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
