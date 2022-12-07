/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let firstnumber = new Set();

    for(let num of nums1){
        firstnumber.add(num);
    }

    let intersectionSet = new Set();
    for(let num of nums2){
        if(firstnumber.has(num)){
        intersectionSet.add(num);
    }
    }
    return Array.from(intersectionSet);

};