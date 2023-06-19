/**
 * 
 * @description : selection sort pseudoCode
 * 
 * how selection sort algorithm work is that it looks for the smallesr item and then stroing it at the begening of the array 
 * and continues untill there is no more smallest item unsorted , 
 * unlike buble sort that swaps two adjacent values untill they reach the end of the array 
 * 
 * 
 */

function SelectionSort(arr : number[]) : number[] {
       
        for(let i = 1 ; i < arr.length ; i++){
            let min = i; //storing the first value as the min value
            for(let j=i+1 ; j<arr.length ;j++ ) {
                if(arr[min] > arr[j]) min = j;
            }
            /**
             * swapping the lowest item with the first element which is 0 then 1 untill its all sorted and no need to swap
             */
            if(i!==min){
                //to avoid non sense swapping when the lowest does not change
                let temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
    
    return arr;
}

console.log([0,1,5,7,10,8]) // [ 0, 1, 5, 7, 10, 8 ]