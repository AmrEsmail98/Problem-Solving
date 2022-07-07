/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let numbers=new Set();
    for(let num of nums){
        if(!numbers.has(num)){
            numbers.add(num);
        }
        else{
            return true;
        }
    }
    return false;
};