function isAnagram(str,str2) {
  //inputs are my str1 , str2
  
  //output will be a boolean , true if they have same letters , false if they don't
  
  // will it accept numbers ? , other non alpha characters
   // lets say its already true whats above this cmnt
  
  //if string does't have same lengths then no need to compare
    if(str.length !== str2.length){
      return false;
    }
  //setting the frerquencies to each string
  var frequency = {}

  for(var i =0 ; i<str.length ; i++){
      let letter = str[i];
      //if letter exists add +1 else initialize to 1
    frequency[letter] ? frequency[letter] +=1 : frequency[letter] = 1;
  }
    console.log(frequency)
  
  for( var j=1 ; i<str2.length ; j++){
      let letter = str2[j]
      if(!frequency[letter]){
          return false;
      }else {
          frequency[letter] -=1;
      }
  }
              console.log(frequency) 
    return true;
}

isAnagram("hello" , "olleh");