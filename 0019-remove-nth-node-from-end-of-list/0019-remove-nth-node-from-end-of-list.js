/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode();
    dummy.next =head;
    let front =dummy, back=dummy;
    for(let i=0 ;i<n;i++){
        front = front.next
    }
    while(front.next !== null){
        front =front.next;
        back=back.next;
    }
    back.next=back.next.next;
    return dummy.next;
        
    
};