/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = { I:1 ,V:5 ,X:10,L:50,C:100,D:500,M:1000};
    
    let res=0;
    
   for (let i=0 ; i<s.length;i++){
       
       let currentint= map[s.charAt(i)];
       let nextint=    map[s.charAt(i+1)];
       if(nextint){
           if(currentint>=nextint){
               res+=currentint;
           }
           else{
               res+= (nextint-currentint);
               i++;
           }
       }
       else {
           res+=currentint;
   }
   }
    return res;
}