/**
 * 
 * simple linear search algo
 * 
 */
function linearSearch(arr:[],value : number | string) : number{
    if(arr.length === 0 ){
        return -1;
    }
    for(let i = 0 ; i <arr.length; i++){
        if(arr[i]===value){
            return i;
        }
    }
    return -1;
}

