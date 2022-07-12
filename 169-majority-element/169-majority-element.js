/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const value={};
    for(const num of nums){
        value[num]=value[num]+1 || 1;
    }
    for(const i in value){
        if(value[i] > Math.floor(nums.length/2)){
        return i;
    }
    }
};