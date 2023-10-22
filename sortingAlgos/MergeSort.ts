function merge(arr1 : number[],arr2 : number[])  : number[]{
    let results : number[] = []
    let i = 0;
    let j = 0;
    while(i<arr1.length && j < arr2.length){
        console.log("arrays in action :",arr1[i],arr2[j])
        if(arr1[i] < arr2[j]){
            results.push(arr1[i])
            i++
        }else{
            results.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length){
        results.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        results.push(arr2[j])
        j++
    }
    return results;
    
}

function mergeSort (arr1 : number[])  {
    if(arr1.length <=1) return arr1;
    const middle = Math.floor(arr1.length / 2)
    let left : number[] = mergeSort(arr1.slice(0,middle))
    let right : number[] = mergeSort(arr1.slice(middle))
    return merge(right,left)
}
console.log(mergeSort([1,5,10,55,2,6]))