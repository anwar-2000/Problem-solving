/**
 * 
 * @description : insertion sort algorithm implimentation
 * 
 * 
 */

function insertionSort(arr : Array<number>) : Array<number> {
        for( var i = 1 ; i < arr.length ; i++){
            let currentVal = arr[i];
            console.log("currentval"+" "+currentVal)
            for(var j = i-1 ; j >= 0 && arr[j] > currentVal; j--){
                console.log(arr[j],arr[j+1])
                arr[j+1] = arr[j]
                console.log("after"+arr[j],arr[j+1])

            }
            arr[j+1] = currentVal
            console.log(arr)
        }

        return arr
}

console.log(insertionSort([2,1,76,4]))