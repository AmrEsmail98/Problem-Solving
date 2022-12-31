/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.replace(/[^a-z0-9]/gi,"")
    let leftindex=0;
    let rightindex=s.length-1;
    while(leftindex<rightindex){
        if(s[leftindex].toLowerCase() !== s[rightindex].toLowerCase()) return false;
        leftindex++;
        rightindex--;
    }
    
    return true;
};