const corrigeProva = (gabarito, respostasEstudante, callback) => callback(gabarito, respostasEstudante);

const geraPontuação = (gabarito, respostasEstudante) => {
  let nota = 0;
  for (let resposta in gabarito) {
    if (respostasEstudante[resposta] !== 'N.A') {
      (respostasEstudante[resposta] === gabarito[resposta]) ? nota += 1 : nota -= 0.5;
    }
  }
  return nota;
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(corrigeProva(rightAnswers, studentAnswers, geraPontuação));