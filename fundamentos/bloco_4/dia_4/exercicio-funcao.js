function verificaPalindromo(palindromo){
  let paliArray = palindromo.split("");
  let invertArray = [];
  let count = 0;
  for(let index = (paliArray.length-1); index >= 0; index -= 1){
    invertArray.push(paliArray[index]);
  };
  for(let index in paliArray){
    if(paliArray[index] === invertArray[index]){
      count += 1;
    };
  };
  if(count === paliArray.length){
    return true;
  }
  else{
    return false;
  };
};

console.log(verificaPalindromo(subinoonibus));

function maiorValor(numeros){
  let maiorNum = numeros[0];
  for(let numero of numeros){
    if(maiorNum < numero){
      maiorNum = numero;
    };
  };
  return maiorNum;
}
let numerosTest = [2, 4, 10, 9, -1, 4];
console.log(`O maior valor é: ${maiorValor(numerosTest)}`);

