function areThereDuplicates(...params) {
    // my redaction : as much as there is params , if they are any duplicates then return true else false
    /**
     * arguments are numbers only , letters only , or it can be mixed  ?
     */

    //using frequency counter algo

    const frequency = {}

    params.forEach((arg,index)=>{

        frequency[arg] ? frequency[arg] +=1 : frequency[arg] = 1;

    })
    for (const val of Object.values(frequency)){
        if(val === 2 ){
            return true;
        }
     }
     return false;
}
    
console.log(areThereDuplicates(1, 2, 3));