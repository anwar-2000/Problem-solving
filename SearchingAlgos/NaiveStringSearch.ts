function NaiveStringSearch(longString : string , shortString : string ) : number {
    let count = 0 ;
    for(let i=0;i<longString.length;i++){
        for(let j=0;j<shortString.length;j++){

            //console.log([shortString[j]],longString[j+i]);

            if(longString[j+i]!=shortString[j]){
                break;
            }
            if(j === shortString.length -1){
                count ++;
            }
        }
    }
    return count;
}

console.log(NaiveStringSearch("lokjh lol lol","lol"))//2