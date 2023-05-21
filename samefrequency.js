function sameFrequency(n1,n2){
  // good luck. Add any arguments you deem necessary.
  
  /** 
  * my redaction : the two numbres must have same numbers
  * 
  * inputs are two integers ...
  * must have same length else return false
  * 
  * to get the lengths and do logic on em , we should convert them to Strings
  * 
  */
  const number1 = n1.toString();
  const number2 = n2.toString();
  
  if(number1.length !== number2.length) {return false;}
  
  var frequency ={}
  
  for(var i=0 ; i<number1.length;i++){
      frequency[i]=number1[i]
  }
  
  for(var j=0;j<number1.length;j++){
      if(!frequency.hasOwnProperty(number2[j])){ return false;}
  }
  
  return true;
  
  }