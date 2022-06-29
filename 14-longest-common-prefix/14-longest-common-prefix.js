/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if  (strs.length==0){
        return "";
    }
    let longest=strs[0];
    
    for(i=1;i<strs.length;i++){
        while (strs[i].indexOf(longest) != 0){
            longest=longest.substring(0,longest.length-1);
        }
    }
    return longest;
};