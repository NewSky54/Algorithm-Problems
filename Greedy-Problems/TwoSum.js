// Returns every pair of numbers from 'numArray' that adds up to the 'sum'
// Result should be an array of arrays, and any num in the 'numArray' can be used multiple times.

function twoSum(numArray, sum) {
  const pairs = [];
  // Using a hashtable, in this case an array, to push every number we iterate through into it
  const hashtable = [];
  // Looping through numArray to get access to each number
  for(let i = 0; i < numArray.length; i+=1){
    const currentNum = numArray[i];
    // Counterpart plus the currentNum equals the sum
    const counterpart = sum - currentNum;
    // Checking if the counterpart is present in the hashtable
    if(hashtable.indexOf(counterpart) !== -1) { 
      // If couterpart exists push pair to pairs array
      pairs.push([currentNum, counterpart]); 
    }
    // Add each number to hashtable
    hashtable.push(currentNum); 
  }
  return pairs;
}

// Using an object for hashtable
function twoSum(numArray, sum) {
  const pairs = [];
  const hashtable = {}
  for (let i = 0; i < numArray.length; i += 1) {
    const currentNum = numArray[i];
    if (hashtable[currentNum] !== undefined) {
      pairs.push([hashtable[currentNum], currentNum])
    }
    hashtable[sum - currentNum] = currentNum;
  }
  return pairs;
}
console.log(twoSum([7, 0, -4, 5, 2, 3], 5))