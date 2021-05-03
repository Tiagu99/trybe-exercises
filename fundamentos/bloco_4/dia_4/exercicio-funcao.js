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

