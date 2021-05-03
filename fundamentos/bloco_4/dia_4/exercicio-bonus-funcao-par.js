let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];


function arrayOfNumbers (vector){
  let arrayPair = [];
  for (let array of vector) {
    for (let number of array) {
      if (number % 2 === 0) {
        arrayPair.push(number);
      }
    }
  }
  return arrayPair;
}

console.log(arrayOfNumbers(vector));
