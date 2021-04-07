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
console.log('first', getFibonacci(5));

// Memorized
// runtime: O(n).
// memory: O(n)
let getFibonacciUseMemorized = function(n, result = []) {
  if (n ===0 || n === 1) {
    return n
  }
  if (result[n] > 0) {
    return result[n]
  }
  result[n] = getFibonacciUseMemorized(n - 1, result) + getFibonacciUseMemorized(n - 2, result)
  return result[n]  
}
console.log('second', getFibonacciUseMemorized(100));

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

console.log('third',getFibonacci2(100))