let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = 0;
let arithmeticAverage = 0;
let highValue = 0;
let lowerValue = numbers[1];
let countOdd = 0;

for(let number of numbers){
    result += number;
    if(highValue < number){
        highValue = number;
    };
    if((number % 2) != 0){
        countOdd += 1 ;
    };
    if(lowerValue > number){
        lowerValue = number;
    };
    
};

arithmeticAverage = result / 10;

console.log(`Maior valor do array é: ${highValue}`);
console.log(`Menor valor do array é: ${lowerValue}`);


if(arithmeticAverage > 20){
    console.log("Valor maior que 20");
}
else{
    console.log("Valor menor que 20");
};

if(countOdd > 0 ){
    console.log(`Valores ímpares no array: ${countOdd}`);
}
else{
    console.log("Nenhum valor impar encontrado");
}