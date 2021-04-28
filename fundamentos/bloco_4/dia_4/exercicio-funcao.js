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

console.log(verificaPalindromo("subinoonibus"));