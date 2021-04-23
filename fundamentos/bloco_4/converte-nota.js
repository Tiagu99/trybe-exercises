let nota = 99;

if(nota >= 90 && nota <= 100){
    nota = "A";
    console.log(nota);
}

else if(nota >= 80 && nota < 90){
    nota = "B";
    console.log(nota);
}

else if(nota >= 70 && nota < 80){
    nota = "C";
    console.log(nota);
}

else if(nota >= 60 && nota < 70){
    nota = "D";
    console.log(nota);
}

else if(nota >= 50 && nota < 60){
    nota = "E";
    console.log(nota);
}

else if(nota < 50){
    nota = "F";
    console.log(nota);
}
else if(nota < 0 || nota > 100){
    console.log("Nota inválida");

}