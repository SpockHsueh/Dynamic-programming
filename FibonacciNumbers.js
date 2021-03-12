// Write a code to find the n^{th} Fibonacci number in the Fibonacci sequence.

// Recursion
// runtime: O(2​^n).
// memory: O(n)
let getFibonacci = function(n) {
  if (n ===0 || n === 1) {
    return n
  }
  return getFibonacci(n - 1) + getFibonacci(n - 2)
}
console.log(getFibonacci(4));

// Interative
// runtime: O(n)
// memory: O(1)
let getFibonacci2 = function(n) {
  if (n ===0 || n === 1) {
    return n
  }

  let n1 = 1
  let n2 = 0
  let res = 0
  let i = 2
  while(i <=n) {
    res = n1 + n2
    n2 = n1
    n1 = res
    i ++
  }
  return res
}

console.log('getFibonacci2',getFibonacci2(4) )