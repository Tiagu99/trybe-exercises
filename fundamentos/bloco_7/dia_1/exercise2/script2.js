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

let skills = ['HTML', 'CSS', 'JS', 'Git', 'GitHub'];

const funcao1 = (nome) => {
  let frase = 'Tryber x aqui!';
  return frase.replace('x', nome);
}

const funcao2 = (frase) => {
  let novaFrase = `${frase} Minhas cinco principais habilidades são:`;
  for (let index = 0; index < skills.length; index += 1) {
    novaFrase += `
    ${skills[index]};`;
  }
  return novaFrase += ' #goTrybe';
}

console.log(funcao2(funcao1('Tiago')));