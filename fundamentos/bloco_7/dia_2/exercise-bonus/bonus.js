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

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});