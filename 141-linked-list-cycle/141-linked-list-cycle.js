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
var hasCycle = function(head) {
    
    let firstpointer=head;
    let secondpointer=head;
    while(firstpointer!==null && firstpointer.next !==null){
        firstpointer=firstpointer.next.next;
        secondpointer=secondpointer.next;
    
    if(firstpointer === secondpointer){
        return true;
    }
}
    return false;
};