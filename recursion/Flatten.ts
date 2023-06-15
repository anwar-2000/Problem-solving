/**
 * 
 * @description : flatten
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.


@examples : 
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
 */

function flatten(arr: any[]): number[] {
    let result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]] as any[])) // [1,2,3]