// Construct a function intersection that compares input arrays and returns a new array with elements found in all 
// of the inputs. BONUS: Use reduce!
function intersection(...arrays) {
    return arrays.reduce((acc, val, arr) => acc.filter(ele => val.includes(ele)));
}
console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]