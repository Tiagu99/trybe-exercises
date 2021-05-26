const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}


// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1, 2, 3, 4, 5], 3), [1, 2, 4, 5]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
const arrayTest = [1, 2, 3, 4];
myRemove(arrayTest, 2);
assert.deepStrictEqual(arrayTest, [1, 2, 3, 4]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

