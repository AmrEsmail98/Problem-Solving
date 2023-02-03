/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
   
    if(root ===  null){
        return true;
    }
    
    return getHight(root) !== -1;
};

    let getHight= function(node){
        
        if(node=== null){
            return 0;
        }
        let left =getHight(node.left);
        let right= getHight(node.right);
        if(left === -1 || right === -1 || Math.abs(left - right) > 1){
            return -1;
        }
        return Math.max(left,right)+1;
};