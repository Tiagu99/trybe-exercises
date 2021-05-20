const fatorial = (numero) => (numero > 1) ? numero *= fatorial(numero - 1) : numero;

console.log(fatorial(5));