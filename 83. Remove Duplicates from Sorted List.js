/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  var cur = head;
  while (cur) {
    if (cur.next && cur.next.val === cur.val) {
      if (cur.next.next) {
        cur.next = cur.next.next;
      } else {
        delete cur.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return head;
};

console.log(deleteDuplicates({val: 1}));
console.log(deleteDuplicates({val: 1, next: {val: 1}}));
console.log(deleteDuplicates({val: 1, next: {val: 1, next: {val: 2}}}));
console.log(deleteDuplicates({val: 1, next: {val: 1, next: {val: 1}}}));
