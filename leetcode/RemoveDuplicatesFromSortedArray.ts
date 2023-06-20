/**
 * 
 * @description : Given an integer array nums sorted in non-decreasing order, 
 * remove the duplicates in-place such that each unique element appears only once.
 *  The relative order of the elements should be kept the same.
 *  Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, 
you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. 
The remaining elements of nums are not important as well as the size of nums.
Return k.


    @explanation : i used frequency counter algorithm to solve this , i was looking if the element already exists in the object frequency ,
     if not then this is unique value and increment k;
 */

function removeDuplicates(nums: number[]): number {
    let k = 0;
    let frequency = {}
    for(let i = 0; i < nums.length ; i++){
        if(!frequency[nums[i]]){
            frequency[nums[i]] = "exist"
            nums[k] = nums[i]
            k++;
        }
    }
        
     
    return k;
};