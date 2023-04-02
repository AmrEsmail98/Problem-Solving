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
var swapPairs = function(head) {
   
    let dummy = new ListNode(-1);
    dummy.next=head;
    let prev = dummy;
    
    while (head && head.next){
        let p1 = head;
        let p2 = head.next;
        prev.next=p2;
        p1.next=p2.next;
        p2.next=p1;
        prev = p1;
        head = p1.next;
    }
    return dummy.next;
};