/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prevnode=null;
    while(head !== null){
        let nexthead= head.next;
        head.next=prevnode;
        prevnode=head;
        head=nexthead;
    }
    return prevnode;
};