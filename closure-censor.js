// Create a function censor that accepts no arguments. censor will return a function that will accept either 
// two strings, or one string. 
// When two strings are given, the returned function will hold onto the two strings as a pair, for future use. 
// When one string is given, the returned function will return the same string, except all instances of a first 
// string (of a saved pair) will be replaced with the second string (of a saved pair).
function censor() {
    let myObj = {};
    let myFunc = (...args) => {
        if(args.length > 1){
            myObj[args[0]] = args[1];
        }
        else{
            for(let key in myObj){ 
                args[0] = args[0].replace(key, myObj[key]);
            }
        }
        return args[0];
    };
    return myFunc;
}
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
censor('dogs', 'cats')
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'