/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  var head = headA;
  var lengthA = 0;
  while (head) {
    lengthA++;
    head = head.next;
  }
  head = headB;
  var lengthB = 0;
  while (head) {
    lengthB++;
    head = head.next;
  }
  var offset = lengthA - lengthB;
  if (offset > 0) {
    while (offset) {
      headA = headA.next;
    }
  }
  if (offset < 0) {
    offset = -offset;
    while (offset) {
      headB = headB.next;
    }
  }
  while (headA && headB && headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }
  return headA;
};

