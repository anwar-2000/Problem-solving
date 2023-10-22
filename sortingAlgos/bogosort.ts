function isSorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
  
  function shuffle(arr: number[]): void {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  function bogosort(arr: number[]): number[] {
    let count = 0;
    while (!isSorted(arr)) {
        count ++;
      shuffle(arr);
    }
    console.log("TIMES OF LOSS : ",count)
    return arr;
  }
  
  // Example usage:
  const array = [5, 2, 9, 1, 3,75];
  console.log("Before sorting:", array);
  console.log("After sorting:", bogosort(array));
  