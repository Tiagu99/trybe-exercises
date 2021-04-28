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
  console.log(arrayAlgarismo);

  let resultado = 0;
  for(let indice = 0;indice < algarismo.length; indice += 1){
    if(valorRomano(arrayAlgarismo[indice], numerosRomanos) != false){
      resultado = valorRomano(arrayAlgarismo[indice], numerosRomanos);
    };
  };
  return resultado;
};

function valorRomano(letra, numerosRomanos){
  for(let key in numerosRomanos){
    if(letra == key){
      return numerosRomanos[key];
    }
    else{
      return false;
    };
  };
};
console.log(converteRomano("XV"));
