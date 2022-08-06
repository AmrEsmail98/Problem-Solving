/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
    let object={}
    for(let i of nums){
        if(!object[i]){
            object[i]=1
        }
        else{
            return(i)
        }
    }
    
};