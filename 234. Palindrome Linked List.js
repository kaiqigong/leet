/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  var fast = head
  var rev;
  var slow = head;
  var tmp;
  while (fast && fast.next) {
    fast = fast.next.next;
    tmp = rev;
    rev = slow;
    slow = slow.next;
    rev.next = tmp;
  }
  if (fast) {
    slow = slow.next;
  }
  while (rev) {
    if (slow.val !== rev.val) {
      return false;
    } else {
      slow = slow.next;
      rev = rev.next;
    }
  }
  return true;
};


console.log(isPalindrome({val: 1, next: {val: 2, next: {val: 3, next: {val: 2, next: {val: 1}}}}}));
console.log(isPalindrome({val: 1, next: {val: 2, next: {val: 3, next: {val: 2, next: {val: 2}}}}}));
console.log(isPalindrome({val: 1, next: {val: 2, next: {val: 3, next: {val: 3, next: {val: 2, next: {val: 1}}}}}}));
