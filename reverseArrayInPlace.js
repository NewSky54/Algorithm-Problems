// Reverse the passed in array in place. Without creating a new array.

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    const num = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = num;
  }
  return arr;
}
console.log('Result:', reverseArrayInPlace([1, 2, 3, 4])); // -> [4, 3, 2, 1]