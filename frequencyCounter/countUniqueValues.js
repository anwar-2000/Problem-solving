function countUniqueValues(arr){
    //input is an array

    //output is number of unique numbers

    var left = 0 ;
    var right = 1 ;
   //at least there is a unique number
    var UniqueNumbersCount = 0;

    while(right <= arr.length){
        // if the next number isn't the same then there is two uniques numbers
        if(arr[left] == arr[right]){
            right ++;
        }else{
            UniqueNumbersCount ++;
            left = arr[right]
            right++;
        }
        
    }
    return UniqueNumbersCount;
}

console.log(countUniqueValues([5,4,1,1,1]))