/**
 * 
 * @description 
 *  Binary Search Exercise
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch 

@examples
binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
 */

function binarySearch(arr:(number|string)[],val : number | string) : number {
    if(arr.length === 0){
        return -1;
    }
    let left = 0;
    let right = arr.length-1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] === val) {
            return middle;
        } else if (arr[middle] < val) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
}

// Refactored Version
function binarySearch2(arr : (number|string)[], elem : number | string) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    console.log( arr[middle] === elem ? middle : -1);
    return arr[middle] === elem ? middle : -1;
}

binarySearch2([2,5,6,9,13,15,28,30], 28)