function indiceMaiorValor(numeros){
  let maiorNum = numeros[0];
  let indiceNum = 0;
  for(let numero in numeros){
    if(maiorNum < numeros[numero]){
      maiorNum = numeros[numero];
      indiceNum = numero;
    };
  };
  return indiceNum;
};

let arrayTest = [2, 4, 6, 7, 10, 0, -3];
console.log(`O indice do maior valor é: ${indiceMaiorValor(arrayTest)}`);