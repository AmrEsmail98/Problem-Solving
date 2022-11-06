/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    let map= {};
    for (let char of s){
        if(map[char]=== undefined ){
            map[char] =1;
            
        } else {
            map[char]++;
        }
    }
    
    for (let char of t){
        if(map[char] !== undefined && map[char]>0 ){
            map[char]--;
        } else{
            return char;
        }
            
    }
};