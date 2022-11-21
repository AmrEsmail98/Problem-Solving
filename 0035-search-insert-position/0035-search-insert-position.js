/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {
//     let left = 0;
//     let right = nums.length;

//     while (left < right) {
//         const middle = Math.floor((left + right) / 2);

//         if (nums[middle] < target) {
//             left = middle + 1;
//         } else {
//             right = middle;
//         }
//     }

//     return left;
// };
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};