function isSubsequence(str1 , str2) {
    /**
     *  
     * 
     * my redaction : if the strings passed to a function has same order of letters and same letters ofc return true else false
     * 
     * examples : isSubsequence('abc','abdc') -> true / isSubsequence('abc','acb') -> false
     * 
     * 
     * cases : the second string is smaller then the first string , there is no str1
     * 
     * 
     * 
     * algo used : two pointers algorithm (i , j)
     * 
     * 
     *  */

    var i = 0;
    var j = 0;
    if(str1.length > str2.length) {return false;}
    if(!str1) {return false;}

    while(j < str2.length){
          if(str1[i] === str2[j]){
                i++;
                j++;
          }
          if(i === str1.length) {
            return true;
          }
          j++;

          return false;
    }
  }