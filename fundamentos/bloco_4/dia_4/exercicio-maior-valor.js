function maiorValor(numeros){
  let maiorNum = numeros[0];
  for(let numero of numeros){
    if(maiorNum < numero){
      maiorNum = numero;
    };
  };
  return maiorNum;
};
let numerosTest = [2, 4, 10, 9, -1, 4];
console.log(`O maior valor é: ${maiorValor(numerosTest)}`);