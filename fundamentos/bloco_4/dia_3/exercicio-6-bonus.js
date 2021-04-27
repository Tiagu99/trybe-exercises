let n = 15;

let count = 0;

for(let index = 1; index <= n; index += 1){
    if((n % index) == 0){
        count += 1;
    };
};

if(n === 1 || count > 2){
    console.log("Não é primo");
}
else{
    console.log("É primo");
}