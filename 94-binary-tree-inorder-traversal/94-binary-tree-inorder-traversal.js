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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let node =root;
    let solution =[];
    while (node !== null){
        let pred =node.left;
        if(node.left!== null){
            while(pred.right !== null && pred.right !== node){
                pred= pred.right;
            }
            if(pred.right === null){
              pred.right= node;
                node=node.left;
            }
            else{
                pred.right = null;
                solution.push(node.val);
                node=node.right;
            }
            }
        else{
            solution.push(node.val);
            node=node.right;
        }
        }
    return solution;
    
};