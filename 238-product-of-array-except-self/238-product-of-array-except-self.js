/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = new Array(nums.length).fill(nums[0]);
    let cachvar = nums[nums.length-1];
    
    for (let i=1; i<nums.length;i++ )
       {
        output[i]= output[i-1]*nums[i];
        }
       output[nums.length-1] = output[output.length-2]; 
    
       for(let j=nums.length-2 ; j>0 ; j--)
           {
            output[j]= output[j-1 ] * cachvar;
               cachvar = cachvar*nums[j];
           }
    output[0]= cachvar;
    return output;
};