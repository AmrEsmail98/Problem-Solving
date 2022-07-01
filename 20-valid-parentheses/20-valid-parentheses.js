/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const hasmap={"(":")","{":"}","[":"]"}
    const stack=[]
    for(let ch of s){
        if (hasmap[ch]){
            stack.push(hasmap[ch])
        }
        else if (stack.length>0 && stack[stack.length-1]===ch)
        { 
            stack.pop() 
        }
        else {
            return false;
        }
    }
    return stack.length===0
};