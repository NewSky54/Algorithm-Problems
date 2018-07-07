// Given an array arr of distinct integers and a nonnegative integer k, write a function findPairsWithGivenDifference 
// that returns an array of all pairs [x,y] in arr, such that x - y = k. If no such pairs exist, return an empty array.
function findPairsWithGivenDifference(arr, k) {
  const output = [];
  const hashtable = {};

  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];
    const y = x - k;
    hashtable[y] = x;
  }

  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];
    if (hashtable[x] !== undefined) {
      output.push([hashtable[x], x]);
    }
  }
  return output;
}
console.log(findPairsWithGivenDifference([1, 5, 11, 7], 6));
// output: [[1, 0], [0, -1], [-1, -2], [2, 1]]
