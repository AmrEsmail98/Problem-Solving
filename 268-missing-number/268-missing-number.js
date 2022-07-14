/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum =0;
    for(let i=0 ; i<= nums.length;i++){
        sum+=i;
        if(i<nums.length){
            sum -= nums[i];
        }
    }
    return sum;
};