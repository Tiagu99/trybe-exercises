function repeteNumero (numeros){
  let maisRepete = 0;
  for(let numero of numeros){
    contador = 0
    for(let compara of numeros){
      if(numero === compara){
        contador += 1;
      };
    };
    if(maisRepete < contador){
      maisRepete = numero;
    };
  };
  return maisRepete;
};

let numeroRepetido = [2, 3, 2, 5, 8, 2, 3, 5, 5, 5, 5];
console.log(`O numero que mais se repete é: ${repeteNumero(numeroRepetido)}`);