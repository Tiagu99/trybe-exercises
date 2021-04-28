function converteRomano(algarismo){
  /* A função não trata a ordem nos algarismo.
     Então sertifique-se que de fato esteja correto
       o número romano que deseja converter*/
  
  let numerosRomanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  algarismo = algarismo.toUpperCase();
  let arrayAlgarismo = algarismo.split("");
  

  let resultado = 0;
  for(let indice = 0;indice < arrayAlgarismo.length; indice += 1){
    if(valorRomano(arrayAlgarismo[indice], numerosRomanos) >= valorRomano(arrayAlgarismo[indice + 1], numerosRomanos)){
      resultado += valorRomano(arrayAlgarismo[indice], numerosRomanos);
    }
    else{
      resultado -= valorRomano(arrayAlgarismo[indice], numerosRomanos);
    }
  };
  return resultado;
};

function valorRomano(letra, numerosRomanos){
  for(let key in numerosRomanos){
    if(letra == key){
      return numerosRomanos[key];
    };
  };
  return false;
};


console.log(converteRomano("CCXLIX"));
