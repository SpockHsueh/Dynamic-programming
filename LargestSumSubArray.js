// Given an array, find the contiguous subarray with the largest sum.
// Kadane’s algorithm

// runtime: O(n)
// memory: O(1)
const findMaxSumSubArray = function(data) {
  if (data.lenght < 1) {
    return 0
  }
  
  let currMax = data[0]
  let globalMax = data[0]

  for (let index = 0; index < data.length; index++) {
    const element = data[index];

    if (currMax < 0) {
      currMax = element
    } else {
      currMax += element
    }

    if (globalMax < currMax) {
      globalMax = currMax
    }
  }
  return globalMax
}

const data = [-4, 2, -5, 1, 2, 3, 6, -5, 1];
console.log(findMaxSumSubArray(data));
