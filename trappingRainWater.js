// Given n non-negative representing an elevation map where the width of each bar is 1,
// compute how much water it is able to trap after raining.

const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; // -> 6
// const arr = [3, 0, 0, 2, 0, 4]; // -> 10

function trappedRainWater(arr) {
  // left[i] contains height of tallest bar to the left
  let left = [];
  // left[i] contains height of tallest bar to the right
  let right = [];
  // Initialize of result
  let waterTrapped = 0;

  // Fill left array
  left[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    // setting current index of left array to the higher num of 
    // the previous num in the left array, or the current element in arr. 
    left[i] = Math.max(left[i - 1], arr[i]);
  }
  // Fill right array
  right[arr.length - 1] = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], arr[i]);
  }

  // Find the accumulated water. 
  for (let i = 0; i < arr.length; i++) {
    waterTrapped += Math.min(left[i], right[i]) - arr[i];
  }
  return waterTrapped;
}
console.log(trappedRainWater(arr));
