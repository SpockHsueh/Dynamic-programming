// runtime: O(n)
// memory: O(n)

/*
Iterate over the entire input array, and in every iteration pick the maximum of these two values:
1. Max Sum of the last iteration.
2. Max Sum of second last iteration + current iteration index.
*/

let myFunction = function(data) {
  if (data.length < 1) {
    return 0
  } else if (data.length === 1) {
    return data[0]
  }

  const lenghtData = data.length
  let result = []
  result.push(data[0])

  for(let i = 1; i < lenghtData; i ++) {
    result.push(Math.max(data[i], result[i-1]))
    if(i - 2 >= 0) {
      result[i] = Math.max(result[i], data[i] + result[i - 2])
    }
  }
  
  return result[lenghtData - 1]
}
const v = [1, -1, 6, -4, 2, 2]
const sum = myFunction(v);
console.log("Max sum of nonadjacent subsequence: " + sum);
