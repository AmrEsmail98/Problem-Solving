/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    const solution=[];
    const generateCombo = (leftCount,rightCount,partial) =>{
        if(leftCount >rightCount) return ;
   if (! leftCount && ! rightCount ) solution.push(partial);
        if (leftCount >0 ) generateCombo (leftCount -1 ,rightCount,partial + '(');
        if (rightCount > 0) generateCombo(leftCount , rightCount -1 ,partial + ')');
    }
    generateCombo(n,n,'');
    return solution;
};