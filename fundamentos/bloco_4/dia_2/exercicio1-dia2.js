let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = 0;
let arithmeticAverage = 0;
for(let number of numbers){
    result += number;
};

arithmeticAverage = result / 10;

if(arithmeticAverage > 20){
    console.log("Valor maior que 20");
}
else{
    console.log("Valor menor que 20");

};
