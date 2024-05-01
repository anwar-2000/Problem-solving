function pivotHelper(arr : number[],start=0,end=arr.length){
    const pivot = arr[start]
    let swapIdx = start;
    let indexCount = 0;
    for(let i = start + 1 ; i < end ; i++){
        if(arr[i] < arr[i+1]){
            indexCount++;
        }
    }
}

pivotHelper([4,2,3,8,5,7,1])