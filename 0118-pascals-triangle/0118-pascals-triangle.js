/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  
    let pascal = new Array(numRows);
    for(let i=0 ;i<numRows ;i++){
        let row = new Array(i+1);
        row[0]=1;
        row[row.length-1] =1;
        for (let j=1 ; j< row.length -1 ; j++){
            let rowabove = pascal[i-1];
            row[j] = rowabove[j]+rowabove[j-1];
        }
        pascal[i]=row;
    }
    return pascal;
};