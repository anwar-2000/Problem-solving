

function BubbleSort(arr : Array<number>) : Array<number> {

    for(let i = arr.length ; i> 0 ;i--){
        for(let j=0 ; j < i ; j++){
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
    return arr;
}
function swap(arr : number[],ind1:number,ind2:number){
      let  temp = arr[ind1];
        arr[ind1] = arr[ind2];
        arr[ind2] = temp;
}

console.log(BubbleSort([10,5,15,21,6])) // [ 5, 6, 10, 15, 21 ]