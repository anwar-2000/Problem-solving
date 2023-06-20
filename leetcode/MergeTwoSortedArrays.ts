/**
 * @description : You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
 * and two integers m and n,representing the number of elements in nums1 and nums2 respectively.
 * 
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.

 The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
 To accommodate this, nums1 has a length of m + n,
  where the first m elements denote the elements that should be merged,
   and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

function Merge(nums1 : number[],m : number,nums2 : number[],n:number) : number[] {
        let i = m-1 // m is length of nums1
        let j = n-1; // n is // of nums2

        let k =( m + n ) - 1;//k is lentgh of the merged sorted array 

        while(i>=0 && j>=0){
            if(nums1[i] < nums2[j]){
                console.log("NUMS1 , NUMS2",nums1[i],nums2[i])
                console.log("BEFORE SWAP",nums1)
                nums1[k--] = nums2[j--]
                console.log("AFTER SWAP ",nums1)
            }else{
                console.log("*****ELSE******")
                console.log("NUMS1 , NUMS2",nums1[i],nums2[i])
                console.log("BEFORE SWAP",nums1)
                nums1[k--] = nums1[i--]
                console.log("AFTER SWAP ",nums1)
            }
        }
        while (j >=0){
            nums1[k--] = nums2[j--]
        }
        return nums1;
}

console.log(Merge([1,2,3,0,0,0],3,[2,5,6],3));