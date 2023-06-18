
let noSwpas = true; //reducing looping for nothing by adding if we swapped or we didnt 
function BubbleSort(arr : Array<number>) : Array<number> {

    for(let i = arr.length ; i> 0 ;i--){
       
        for(let j=0 ; j < i - 1 ; j++){
            console.log(arr,arr[j],arr[j+1],noSwpas)
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1)
            }
            
        }
        if(noSwpas) break;
    }
    return arr;
}
function swap(arr : number[],ind1:number,ind2:number){
      let  temp = arr[ind1];
        arr[ind1] = arr[ind2];
        arr[ind2] = temp;
        noSwpas = false;
}

console.log(BubbleSort([10,5,15,21,6])) // [ 5, 6, 10, 15, 21 ]