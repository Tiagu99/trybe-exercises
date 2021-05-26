const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let volwelsSub = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] !== 'a' &&
      characters[index] !== 'o' &&
      characters[index] !== 'i' &&
      characters[index] !== 'e' &&
      characters[index] !== 'u'
    ) {
      results.push(characters[index]);
    } else {
      volwelsSub += 1;
      results.push(volwelsSub);
    }
  }
  return results.toString().replace(/,/g, '');
};


const parameter = 'Dayane';
const result = 'D1y2n3';
assert.strictEqual(typeof (removeVowels(parameter)), 'string');
assert.strictEqual(removeVowels(parameter), result);