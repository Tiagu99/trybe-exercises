const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionaProp = (obj, chave, valor) => obj[chave] = valor;

adicionaProp(lesson2, 'turno', 'tarde');

const listaChaves = (obj) => Object.keys(obj);

const mostraTamanho = (obj) => Object.entries(obj);

const listaValor = (obj) => Object.values(obj);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const totalEstudantes = (obj) => obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes;

const mostraValorNaPosicao = (obj, posicao) => Object.values(obj)[posicao];

const verificaPar = (obj, chave, valor) => {
  const pares = Object.entries(obj);
  for (let par of pares) {
    if (par[0] === chave && par[1] === valor) {
      return true;
    }
  }
  return false;
}
console.log(verificaPar(lesson3, 'turno', 'noite'));  

console.log(verificaPar(lesson3, 'materia', 'Maria Clara'));  
