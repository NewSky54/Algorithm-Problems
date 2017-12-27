//Extension Challenge: POW
// Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. 
// For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.
function pow(base, exponent) {
    let constant = base;
    while(exponent !== 1){
        exponent--
        base = base * constant;
        pow(base, exponent);
    }
    return base;
}
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243