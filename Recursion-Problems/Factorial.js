//Challenge: Factorial 
// Write a function that returns the factorial of a number.
// EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.
function factorial(num, count = 1) {
    if(num === 1) return count;
    return factorial(num - 1, count * num)
}
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720