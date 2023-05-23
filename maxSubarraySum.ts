function maxSubarraySum(arr: number[], number: number): number | null {
    /**
     * My redaction: We check a moving window of length 'number' to return the maximum sum in the array.
     * 
     * Inputs: an array of numbers and a number.
     * 
     * Assumptions:
     * - Is the array sorted?
     * 
     * Outputs: the maximum sum we can find within the window.
     * 
     * Edge cases: if the window length is greater than the length of the passed array.
     */
  
    let maxSum: number = 0;
  
    if (number > arr.length) {
      return null;
    }
  
    for (let i: number = 0; i < number; i++) {
      maxSum += arr[i];
    }
  
    let currentTotal: number = maxSum;
  
    for (let i: number = number; i < arr.length; i++) {
      maxSum = maxSum - arr[i - number] + arr[i];
      currentTotal = Math.max(maxSum, currentTotal);
    }
  
    return currentTotal;
  }
  
  console.log(maxSubarraySum([1, 2, 3, 4], 2));