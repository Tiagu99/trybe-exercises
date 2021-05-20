const fatorial = (numero) => (numero > 1) ? numero *= fatorial(numero - 1) : numero;

console.log(fatorial(5));

const maiorPalavra = (frase) => {
  const divideFrase = frase.split(' ');
  console.log(divideFrase);
  let maiorPalavra = divideFrase[0];
  for (let index = 0; index < divideFrase.length; index += 1) {
    if (maiorPalavra.length < divideFrase[index].length) {
      maiorPalavra = divideFrase[index];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra('Oi eu Tiago Moreira'));

const funcao1 = (nome) => {
  let frase = 'Tryber x aqui!';
  return frase.replace('x', nome);
}

console.log(funcao1('Tiago'));