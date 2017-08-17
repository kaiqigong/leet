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
var reverseList = function(head) {
  if (!head) {
    return head;
  }
  var prev;
  while (head.next) {
    var next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  head.next = prev;
  return head;
};


console.log(reverseList({val: 1, next: {val: 2, next: {val: 3, next: {val: 4}}}}));
console.log(reverseList({val: 1}));
