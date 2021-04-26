let n = 4;

let numberOfSpace = n -1;

for(let index = 0; index < n; index += 1){
    let asterisk = "";
    for(let indexSpace = 0; indexSpace < n; indexSpace += 1){
        if(indexSpace < numberOfSpace){
            asterisk += " ";
        }
        else{
            asterisk += "*";
        };
    };

    console.log(asterisk);
    numberOfSpace -= 1;
};