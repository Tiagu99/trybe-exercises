let salario = 1500.30;
let aliquotaINSS;
let impostoRenda;


if(salario <= 1556.94){
    aliquotaINSS = salario * 0.08;
}
else if(salario > 1556.94 && salario <= 2594.92){
    aliquotaINSS = salario * 0.09;
}
else if(salrio > 2594.92 && salario <= 5189.82){
    aliquotaINSS = salario * 0.11;
}
else if(salrio > 5189.82){
    aliquotaINSS = 570.88
}

salario = salario - aliquotaINSS;

if(salario > 1903.98 && salario <= 2826.65){
    impostoRenda = (salario * 0.075) - 142.80;
}
else if(salario > 2826.65 && salario <= 3751.05){
    impostoRenda = (salario *0.15) - 354.80;
}
else if(salario > 3751.05 && salario <= 4664.68){
    impostoRenda = (salario * 0.225) - 636.13;
}
else if(salario > 4664.68){
    impostoRenda = (salario * 0.275) - 869.36;
}

salario = salario - impostoRenda;

console.log("Salário liquido: " + salario);