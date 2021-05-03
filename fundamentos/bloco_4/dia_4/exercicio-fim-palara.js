function verificaFimPalavra(palavra, final){
  let arrayPalavra = palavra.split("");
  let arrayFinal = final.split("");
  let erroContador = 0;
  let diferenca = (palavra.length - final.length);
  for(let index = 0; index < arrayPalavra.length; index += 1){
    if(arrayPalavra[index + diferenca] != arrayFinal[index]){
      erroContador += 1;
    };
  };
  if(erroContador === 0){
    return true;
  }
  else
  {
    return false;
  };
};

console.log(verificaFimPalavra("fernando","nando"));