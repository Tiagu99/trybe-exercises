const promise = new Promise((resolve, reject) => {
  const numbers = [];
  for (let index = 0; index < 10; index += 1) {
    const number = Math.ceil(Math.random() * 50);
    numbers.push(number * number);
  }
  const sum = numbers.reduce((acc, res) => {
    return acc + res;
  });
  if (sum < 8000) {
    const array = [];
    array.push(sum / 2);
    array.push(sum / 3);
    array.push(sum / 5);
    array.push(sum / 10);

    return resolve(array);
  }
  reject('É mias de oito mil!!! Essa promise deve estar quebrada!');
})
.then(numbers => numbers.reduce((acc, res) => acc + res))
.then(number => console.log(number))
.catch(msg => console.log(msg))