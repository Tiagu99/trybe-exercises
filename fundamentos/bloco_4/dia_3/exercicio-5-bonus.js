let n = 7;

let numberOfSpace = Math.floor(n/2);

let numberOfAsterisk = 1;

let numberOfInsideSpace = 0;



for(let index = 0; index < Math.ceil(n/2); index += 1){
    let asterisk = "";
    for(let indexSpace = 0; indexSpace < numberOfSpace; indexSpace += 1){
       asterisk += " ";
    };
    for(let indexAsterisk = 0; indexAsterisk < numberOfAsterisk; indexAsterisk += 1){
       if(indexAsterisk === 0){
           asterisk += "*";
       }
       else if(numberOfInsideSpace == (n -2)){
           asterisk += "*";
       }
       else if(indexAsterisk <= numberOfInsideSpace ){
           asterisk += " ";
       }
       else{
           asterisk += "*";
       };
    };
    
    console.log(asterisk);
    numberOfSpace -= 1;
    numberOfAsterisk += 2;
    if(numberOfInsideSpace == 0){
        numberOfInsideSpace = 1;
    }
    else{
        numberOfInsideSpace += 2;
    }
    
};
