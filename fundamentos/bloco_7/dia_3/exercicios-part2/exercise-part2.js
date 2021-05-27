const assert = require('assert');
// escreva a função addOne aqui
const addOne = (arrayParam) => {
  let newArray = [];
  for (let index = 0; index < arrayParam.length; index += 1) {
    newArray.push(arrayParam[index] + 1);
  }
  return newArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);