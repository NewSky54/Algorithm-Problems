// Given an array arr of unique nonnegative integers, implement a function getDifferentNumber that
// finds the smallest nonnegative integer that is NOT in the array.

// Brute Force
// Duplicating the array is O(N),
// sorting it is O(N⋅log(N)), and then traversing the array is another O(N).
// Total time complexity: O(N⋅log(N))
function getDifferentNumber(arr) {
 const sortArr = arr.sort();
 for (let i = 0; i < arr.length + 1; i+=1) {
    if (i !== arr[i]) {
      return i;
    }
  }
}

// Efficient Solution:
// the Set object lets me store unique values of any type, whether primitive values or object references.
// Has a lookup time of O(1). Or constant time.
// Total time complexity: O(N). Linear.
function getDifferentNumber(arr) {
  const set = new Set();
  for (let i = 0; i < arr.length; i += 1) {
    const currentNum = arr[i];
    set.add(currentNum);
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (!set.has(i)) {
      return i;
    }
  }
}
console.log(getDifferentNumber([4, 5, 9, 1, 0])); // => 2
