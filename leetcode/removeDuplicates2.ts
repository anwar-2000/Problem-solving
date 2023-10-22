/**
 * 
 * @description : Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice.
 *  The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages,
 you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates,
  then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 */

    function removeDuplicates2(nums: number[]): number {
        let k = 0;
        for (let i = 0; i < nums.length; i++) {
            if (k < 2 || nums[i] !== nums[k - 2]) {
                nums[k++] = nums[i];
            }
        }
        console.log(nums)
        return k;
    }
console.log(removeDuplicates2([1,1,1,2,2])) //[ 1, 1, 2, 2, 2 ] --> 4 --> [1,1,2,2]


/**
 * @optimized : 
 * 
 * function removeDuplicates(nums: number[]): number {
  if (nums.length < 3)
    return nums.length
  
  for (let i = 2; i < nums.length;){
    if (nums[i-2] === nums[i-1] && nums[i-1] === nums[i]){
      nums.splice(i, 1)
    }
    else {
      i++
    }
  }
  
  return nums.length
};
 */