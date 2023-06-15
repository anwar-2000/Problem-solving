function productOfArray(arr: number[]): number {
    if(arr.length === 0) {
        return 1;
    }
    if(arr.length>0){
        return arr[0] * productOfArray(arr.slice(1));
    }
    return 0;
}

console.log(productOfArray([1,2,6])) // 12