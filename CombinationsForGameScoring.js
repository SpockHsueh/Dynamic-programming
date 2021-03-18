// solution 1: memoization
// runtime: O(n)
// memory: O(n)

const scoringOptionsRec = function(n, result) {

  if(n < 0){
    return 0
  }

  if(result[n] > 0){
    return result[n]
  }

  // momoize
  result[n] = scoringOptionsRec(n-1, result) + scoringOptionsRec(n-2, result) + scoringOptionsRec(n-4, result)  
  return result[n]
}

let scoringOptions = function(n) {
  if(n<=0) {
    return 0
  }
  let result = Array(n).fill(-1);
  result[0] = 1
  scoringOptionsRec(n, result)
  return result[n]
}

console.log(scoringOptions(2));
