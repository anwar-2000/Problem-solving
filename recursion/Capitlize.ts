/**
 * @description : capitalizeFirst
Write a recursive function called capitalizeFirst.
 Given an array of strings, capitalize the first letter of each string in the array.


  capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
 */

  function capitalizeFirst(arr: string[]): string[] {
    if (arr.length === 0) return [];
    let firstWord = arr[0];
    firstWord = firstWord[0].toUpperCase() + firstWord.slice(1);
    return [firstWord].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['hi','no way','khaled'])) //[ 'Hi', 'No way', 'Khaled' ]