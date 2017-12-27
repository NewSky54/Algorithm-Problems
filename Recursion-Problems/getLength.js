//Challenge: Get Length
//Get the length of an array using recursion without accessing its length property.
let count = 0; 
function getLength(array) {
    if(array[count] !== undefined){
        count+=1;
        getLength(array);
    }else{
        return count;
    }
    return count;
}
//Refactored  
function getLength(array) {
    return (array[count] !== undefined) ? getLength(array, count++) : count;
}
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5