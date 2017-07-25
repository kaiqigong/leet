/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  var cur, pre;
  var result = {next: head};
  pre = result;
  cur = head;
  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next;
      cur = pre.next;
    } else {
      pre = cur;
      cur = cur.next;
    }
  }
  return result.next;
};
