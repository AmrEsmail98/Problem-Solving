/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let total=0;
    let result=[]
    for(let i=0; i <nums.length; i++){
        total=total+ nums[i]
        result.push(total)
    }
    return result
};