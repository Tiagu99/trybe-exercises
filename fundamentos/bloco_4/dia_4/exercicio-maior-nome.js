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