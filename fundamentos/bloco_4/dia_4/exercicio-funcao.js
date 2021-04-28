function verificaPalindromo(palindromo){
  let paliArray = palindromo.split("");
  let invertArray = [];
  let contador = 0;
  for(let indice = (paliArray.length-1); indice >= 0; indice -= 1){
    invertArray.push(paliArray[indice]);
  };
  for(let indice in paliArray){
    if(paliArray[indice] === invertArray[indice]){
      contador += 1;
    };
  };
  if(contador === paliArray.length){
    return true;
  }
  else{
    return false;
  };
};

console.log(verificaPalindromo("subinoonibus"));

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

function maiorNome (nomes){
  let tamanho = nomes[0];
  for(let nome of nomes){
    if(tamanho.length < nome.length){
      tamanho = nome;
    };
  };
  return tamanho;
};

let arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(`O maior nome é: ${maiorNome(arrayNomes)}`);