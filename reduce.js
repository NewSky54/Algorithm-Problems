// The function reduce takes an array and reduces the elements to a single value. 
// For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
// The function has an "accumulator value" which starts as the initialValue and accumulates the output of each loop. 
// The array is iterated over, passing the accumulator and the next array element as arguments to the callback. 
// The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. 
function reduce(array, callback, initialValue) {
    let acc;
    (!initialValue) ? acc = array[0] : acc = initialValue;
    for (let i = 1; i < array.length; i+=1) {
        acc = callback(acc, array[i])
    }
    return acc;
}
let nums = [8, 1, 3];
let add = (a, b) =>  a - b;
console.log(reduce(nums, add, 0));