let n = 5;
let asterisk = "";
let numberOfSpace = n -1;

for(let index = 0; index < n; index += 1){
    for(let indexSpace = 0; indexSpace < n; indexSpace += 1){
        asterisk += "*";
    }

    console.log(asterisk);
    numberOfSpace -= 1;
}