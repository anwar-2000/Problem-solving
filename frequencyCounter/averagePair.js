function averagePair(arr,num){
    
    /**
     * the inputs are an array , then a target average
     * 
     * my redaction : iterate the array by two pointers , one at the end of the array
     * 
      the other at the beginging ,  if an avrg of a pain is the targeted one , return true ; else do logic
     * 
     * two pointer Algo
     */

        let start = 0
        let end = arr.length-1;
        while(start < end){
          let avg = (arr[start]+arr[end]) / 2 
          if(avg === num) return true;
          else if(avg < num) start++
          else end--
        }
        return false;
      }

  console.log(averagePair([1,3,3,5,6,7,10,12,19],8))