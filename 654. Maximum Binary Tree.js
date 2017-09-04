/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var findMax = function(nums) {
  var max = nums[0];
  var index = 0;
  for (var i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i];
      index = i;
    }
  }
  return index;
}
var constructMaximumBinaryTree = function(nums) {
  if (!nums.length) {
    return null;
  }
  var maxIndex = findMax(nums);
  var treeNode = new TreeNode(nums[maxIndex]);
  treeNode.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  treeNode.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
  return treeNode;
};

