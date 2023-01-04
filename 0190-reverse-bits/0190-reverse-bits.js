/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    
    let solution =0;
    for(let i=0 ; i<32 ; i++){
        solution=solution * 2 + n % 2
        n >>>= 1
    }
    return solution
};