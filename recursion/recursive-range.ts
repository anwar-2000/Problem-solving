// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num:number) : number {
    if(num > 0){
            return num + recursiveRange(num-1)
    }
         return 0;
}

console.log(recursiveRange(5))//15
