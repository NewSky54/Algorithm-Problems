const arr = [
  [1487799425, 14, 1],
  [1487799425, 4, 0],
  [1487799425, 2, 0],
  [1487800378, 10, 1],
  [1487801478, 18, 0],
  [1487801478, 18, 1],
  [1487901013, 1, 0],
  [1487901211, 7, 1],
  [1487901211, 7, 0]
];

function findBusiestPeriod(arr) {
  let currentlyIn = 0;
  let biggestSoFar = 0;
  let result;

  for (let i = 0; i < arr.length; i++) {
    let currentPos = arr[i][2];
    let people = arr[i][1];
    currentPos === 1 ? (currentlyIn += people) : (currentlyIn -= people);

    if (biggestSoFar < currentlyIn && (!arr[i + 1] || arr[i][0] !== arr[i + 1][0])) {
      biggestSoFar = currentlyIn;
      result = arr[i][0];
    }
  }
  return result;
}
console.log(findBusiestPeriod(arr));
