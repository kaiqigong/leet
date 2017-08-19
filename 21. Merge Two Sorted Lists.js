/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var l1p = l1;
  var l2p = l2;
  var result = {};
  var resultP = result;
  while (l1p || l2p) {
    if (!l1p) {
      resultP.next = l2p;
      break;
    }
    if (!l2p) {
      resultP.next = l1p;
      break;
    }
    if (l1p.val < l2p.val) {
      resultP.next = l1p;
      l1p = l1p.next;
      resultP = resultP.next;
    } else {
      resultP.next = l2p;
      l2p = l2p.next;
      resultP = resultP.next;
    }
  }
  return result.next || null;
};

console.log(mergeTwoLists({val: 1, next: {val: 2}}, {val: 2, next: {val:3}}));
console.log(mergeTwoLists({val: 1, next: {val: 2}}, null));
console.log(mergeTwoLists(null, null));

