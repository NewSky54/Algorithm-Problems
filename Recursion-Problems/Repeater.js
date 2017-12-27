// Write a function that takes an input character and returns that character repeated 5 times using recursion. 
// For example, if the input is 'g', then the output should be 'ggggg'.
// Challenge: Repeater 
let str = '';
function repeater(char) {
    if(str.length === 5) return str;//My "Base Case". This stops my Recursive solution. 
    str += char;
    return repeater(char);
}
console.log(repeater('g')); //-> ggggg
// console.log(repeater('j')); //-> jjjjj
