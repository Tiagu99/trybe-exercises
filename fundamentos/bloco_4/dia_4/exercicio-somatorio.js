function somatorio(numero){
  let resultado = 0;
  for(let indice = 0; indice <= numero; indice += 1){
    resultado += indice;
  };
  return resultado;
};

console.log(`Resultado do somatório: ${somatorio(5)}`);